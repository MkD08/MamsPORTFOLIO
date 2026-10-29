import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 10_000;
const ALLOWED_PROJECT_TYPES = new Set([
  "web",
  "mobile",
  "backend",
  "ecommerce",
  "other",
]);
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
]);

function jsonError(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function safeFileName(fileName: string) {
  return fileName
    .replace(/[\r\n\\/]/g, "_")
    .replace(/[^\p{L}\p{N}._ -]/gu, "_")
    .slice(0, 120);
}

async function hasValidFileSignature(file: File) {
  const header = new Uint8Array(await file.slice(0, 8).arrayBuffer());

  if (file.type === "application/pdf") {
    return new TextDecoder().decode(header.slice(0, 5)) === "%PDF-";
  }

  if (file.type === "image/png") {
    return (
      header.length >= 8 &&
      header[0] === 0x89 &&
      header[1] === 0x50 &&
      header[2] === 0x4e &&
      header[3] === 0x47 &&
      header[4] === 0x0d &&
      header[5] === 0x0a &&
      header[6] === 0x1a &&
      header[7] === 0x0a
    );
  }

  if (file.type === "image/jpeg") {
    return header.length >= 3 && header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
  }

  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM;

  if (!apiKey || !recipient || !sender) {
    console.error("Configuration du formulaire de contact incomplète.");
    return jsonError("Le formulaire de contact n’est pas encore configuré.", 503);
  }

  try {
    const formData = await request.formData();
    const nameEntry = formData.get("name");
    const emailEntry = formData.get("email");
    const subjectEntry = formData.get("subject");
    const projectTypeEntry = formData.get("projectType");
    const messageEntry = formData.get("message");
    const honeypot = formData.get("website");
    const fileEntry = formData.get("projectFile");

    // Les robots remplissent souvent ce champ invisible. On accepte la requête sans envoyer d’e-mail.
    if (typeof honeypot === "string" && honeypot.trim()) {
      return NextResponse.json({ message: "Votre demande a bien été envoyée." });
    }

    if (
      typeof nameEntry !== "string" ||
      typeof emailEntry !== "string" ||
      typeof subjectEntry !== "string" ||
      typeof projectTypeEntry !== "string" ||
      typeof messageEntry !== "string"
    ) {
      return jsonError("Données invalides. Vérifiez les champs du formulaire.", 400);
    }

    const name = nameEntry.trim();
    const email = emailEntry.trim();
    const subject = subjectEntry.trim();
    const projectType = projectTypeEntry.trim();
    const message = messageEntry.trim();

    if (!name || !email || !subject || !projectType || !message) {
      return jsonError("Veuillez remplir tous les champs obligatoires.", 400);
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      subject.length > MAX_SUBJECT_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH ||
      !isValidEmail(email)
    ) {
      return jsonError("Certaines informations sont invalides ou trop longues.", 400);
    }

    if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
      return jsonError("Le type de projet sélectionné est invalide.", 400);
    }

    let attachment: { filename: string; content: string } | undefined;

    if (fileEntry instanceof File && fileEntry.size > 0) {
      if (!ALLOWED_FILE_TYPES.has(fileEntry.type)) {
        return jsonError("Type de fichier non autorisé. Utilisez un PDF, PNG ou JPG.", 400);
      }

      if (fileEntry.size > MAX_FILE_SIZE) {
        return jsonError("Le fichier est trop volumineux. Taille maximale : 5 Mo.", 400);
      }

      if (!(await hasValidFileSignature(fileEntry))) {
        return jsonError("Le contenu du fichier ne correspond pas à son format annoncé.", 400);
      }

      attachment = {
        filename: safeFileName(fileEntry.name) || "document",
        content: Buffer.from(await fileEntry.arrayBuffer()).toString("base64"),
      };
    } else if (fileEntry && !(fileEntry instanceof File)) {
      return jsonError("La pièce jointe est invalide.", 400);
    }

    const emailBody = [
      `<p><strong>Nom :</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>E-mail :</strong> ${escapeHtml(email)}</p>`,
      `<p><strong>Type de projet :</strong> ${escapeHtml(projectType)}</p>`,
      `<p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>`,
      `<p><strong>Message :</strong></p>`,
      `<p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>`,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio — ${subject}`,
        html: emailBody,
        ...(attachment ? { attachments: [attachment] } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!resendResponse.ok) {
      const providerMessage = await resendResponse.text();
      console.error("Échec de l’envoi via Resend :", resendResponse.status, providerMessage);
      return jsonError("L’envoi a échoué. Veuillez réessayer dans quelques instants.", 502);
    }

    return NextResponse.json({ message: "Votre demande a bien été envoyée." });
  } catch (error) {
    console.error("Erreur API contact :", error);
    return jsonError("Une erreur est survenue. Veuillez réessayer.", 500);
  }
}
