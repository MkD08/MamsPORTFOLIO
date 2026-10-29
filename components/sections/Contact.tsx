"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusKind, setStatusKind] = useState<"success" | "error" | "">("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusKind("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatusMessage(result.message ?? "L’envoi a échoué. Veuillez réessayer.");
        setStatusKind("error");
        return;
      }

      setStatusMessage(result.message ?? "Votre demande a bien été envoyée.");
      setStatusKind("success");
      form.reset();
      setSelectedFile(null);
    } catch {
      setStatusMessage("Impossible de contacter le serveur. Vérifiez votre connexion puis réessayez.");
      setStatusKind("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
            {"//"} Contact
          </p>

          <h2 className="mt-3 font-[var(--font-manrope)] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Vous avez une idée ?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Vous avez un projet, une idée d&apos;application ou une solution à
            développer ? Décrivez-moi votre besoin.
          </p>
        </div>

        {/* Contact layout */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Informations */}
<div className="rounded-xl bg-slate-950 p-6 sm:p-8 lg:p-10">
  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
      contact.info
    </p>

    <h3 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold text-white">
      Parlons de votre idée.
    </h3>

    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
      Une idée, une question, un besoin professionnel ou un projet à
      développer ? Vous pouvez me contacter directement.
    </p>
  </div>

  <div className="mt-10 space-y-4">
    {/* Email */}
    <a
      href="mailto:doumamas2103@gmail.com"
      className="group block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-emerald-500/40"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
        Email
      </span>

      <span className="mt-1 block break-all text-sm text-slate-300 transition-colors group-hover:text-emerald-400">
        doumamas2103@gmail.com
      </span>
    </a>

    {/* Téléphone */}
    <a
      href="tel:+22237275989"
      className="group block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-emerald-500/40"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
        Téléphone
      </span>

      <span className="mt-1 block text-sm text-slate-300 transition-colors group-hover:text-emerald-400">
        +222 37 27 59 89
      </span>
    </a>

    {/* WhatsApp professionnel */}
    <a
      href="https://wa.me/22228648100"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-emerald-500/40"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
        WhatsApp professionnel
      </span>

      <span className="mt-1 block text-sm text-slate-300 transition-colors group-hover:text-emerald-400">
        +222 28 64 81 00
      </span>
    </a>

    {/* Localisation */}
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
        Localisation
      </span>

      <span className="mt-1 block text-sm text-slate-300">
        Nouakchott, Mauritanie
      </span>
    </div>
  </div>

  {/* Réseaux sociaux */}
<div className="mt-8 border-t border-white/10 pt-6">
  <p className="font-mono text-[10px] text-slate-600">
    {"//"} Retrouvez-moi également sur
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {/* GitHub */}
    <a
      href="https://github.com/MkD08"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub de Mamadou Dia"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
    >
      <span>GitHub</span>
      <span className="text-emerald-500">↗</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/mamadou-dia-7649a1297?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn de Mamadou Dia"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
    >
      <span>LinkedIn</span>
      <span className="text-emerald-500">↗</span>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1C1eQsQei6/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook de Mamadou Dia"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
    >
      <span>Facebook</span>
      <span className="text-emerald-500">↗</span>
    </a>

    {/* Signal */}
    <a
      href="https://signal.me/#p/+22228648100"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Mamadou Dia sur Signal"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
    >
      <span>Signal</span>
      <span className="text-emerald-500">↗</span>
    </a>
  </div>
</div>
</div>

          {/* Formulaire */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="space-y-5"
            >
              <div
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Ne pas remplir ce champ</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Nom
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@email.com"
                    className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Sujet
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Parlez-moi brièvement de votre projet"
                  className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Type de projet
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                  className="min-h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                >
                  <option value="" disabled>
                    Sélectionnez un type
                  </option>
                  <option value="web">Application web</option>
                  <option value="mobile">Application mobile</option>
                  <option value="backend">Backend / API</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              {/* Cahier des charges */}
              <div>
                <label
                  htmlFor="projectFile"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Cahier des charges / document
                </label>

                <label
                  htmlFor="projectFile"
                  className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white px-4 py-5 text-center transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50/30"
                >
                  <span className="text-xl text-slate-400">
                    {selectedFile ? "✓" : "📎"}
                  </span>

                  <span className="mt-2 break-all text-sm font-medium text-slate-600">
                    {selectedFile
                      ? selectedFile.name
                      : "Ajouter un document ou une capture"}
                  </span>

                  <span className="mt-1 font-mono text-[9px] text-slate-400">
                    PDF, PNG, JPG ou JPEG
                  </span>

                  <input
                    id="projectFile"
                    name="projectFile"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Décrivez votre idée ou votre besoin..."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                />
              </div>

              {/* Messages */}
              {statusMessage && (
                <p
                  role={statusKind === "error" ? "alert" : "status"}
                  className={`text-sm leading-6 font-medium ${statusKind === "error" ? "text-red-700" : "text-emerald-700"}`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
                <span className="ml-2 text-emerald-400">→</span>
              </button>
              <p className="text-xs leading-5 text-slate-500">
                Votre demande sera envoyée directement. Le document sélectionné
                sera joint à l’e-mail.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
