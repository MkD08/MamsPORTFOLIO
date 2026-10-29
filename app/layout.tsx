import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL ?? "localhost:3000"}`,
  ),
  title: {
    default: "Mamadou Dia — Développeur web et mobile",
    template: "%s | Mamadou Dia",
  },
  description:
    "Portfolio de Mamadou Dia, développeur web et mobile basé à Nouakchott, Mauritanie. Découvrez ses projets, compétences et réalisations.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio de Mamadou Dia",
    title: "Mamadou Dia — Développeur web et mobile",
    description:
      "Découvrez les projets et compétences de Mamadou Dia, développeur web et mobile à Nouakchott.",
  },
  twitter: {
    card: "summary",
    title: "Mamadou Dia — Développeur web et mobile",
    description:
      "Découvrez les projets et compétences de Mamadou Dia, développeur web et mobile à Nouakchott.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
