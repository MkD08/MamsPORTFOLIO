import Link from "next/link";

const footerLinks = [
    { label: "Accueil", href: "/#accueil" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Projets", href: "/#projets" },
    { label: "Compétences", href: "/#competences" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ];
  
  export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Identity */}
            <div className="max-w-sm">
              <Link
                href="/#accueil"
                className="inline-block font-mono text-sm font-bold tracking-tight text-slate-950"
              >
                MAMADOU<span className="text-emerald-500">_</span>DIA
              </Link>
  
              <p className="mt-3 font-[var(--font-manrope)] text-sm font-semibold text-slate-700">
                Développeur Frontend & Backend
              </p>
  
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Je transforme des idées en applications modernes, utiles,
                performantes et sécurisées.
              </p>
            </div>
  
            {/* Navigation */}
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                navigation
              </p>
  
              <nav className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-emerald-500"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
  
            {/* Contact */}
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                contact
              </p>
  
              <div className="mt-4 space-y-3">
                <a
                  href="mailto:doumamas2103@gmail.com"
                  className="block text-sm text-slate-500 transition-colors hover:text-emerald-500"
                >
                  doumamas2103@gmail.com
                </a>
  
                <a
                  href="tel:+22237275989"
                  className="block text-sm text-slate-500 transition-colors hover:text-emerald-500"
                >
                  +222 37 27 59 89
                </a>
  
                <a
                  href="https://github.com/MkD08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-emerald-500"
                >
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] text-slate-400">
              © 2026 MAMADOU DIA. Tous droits réservés.
            </p>
  
            <p className="font-mono text-[10px] text-slate-400">
              BUILT WITH <span className="text-emerald-500">CODE</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
