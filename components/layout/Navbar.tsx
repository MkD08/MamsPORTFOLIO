"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Projets", href: "/#projets" },
  { label: "Compétences", href: "/#competences" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/#accueil"
          onClick={() => setIsOpen(false)}
          className="font-[var(--font-manrope)] text-sm font-extrabold tracking-tight text-slate-950 sm:text-base"
        >
          MAMADOU<span className="text-emerald-500">.</span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}

          {/* <a
            href="#contact"
            className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            Me contacter
          </a> */}
        </div>

        {/* Bouton Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-950 transition-colors hover:bg-slate-50 lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible max-h-[500px] opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}

            {/* <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-bold text-slate-950 transition-colors duration-200 hover:bg-emerald-400"
            >
              Me contacter
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
