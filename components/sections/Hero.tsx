"use client";

import { useEffect, useState } from "react";

const roles = [
  "FRONTEND",
  "BACKEND",
  "FRONTEND + BACKEND",
  "DEVELOPER",
];

const stats = [
  {
    value: "MVP",
    label: "LifeLink",
  },
  {
    value: "WEB",
    label: "Applications",
  },
  {
    value: "API",
    label: "Solutions backend",
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-20">
          {/* LEFT — INTRODUCTION */}
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
                Disponible pour de nouveaux projets
              </span>
            </div>

            <h1 className="font-[var(--font-manrope)] text-[clamp(2.25rem,10vw,5.8rem)] font-extrabold leading-[0.94] tracking-[-0.055em] text-slate-950">
              MAMADOU DIA
            </h1>

            <div className="mt-4 flex min-h-7 items-center font-mono text-sm font-semibold text-emerald-500 sm:text-base">
              <span className="mr-1 text-slate-300">/</span>
              <span>{roles[roleIndex]}</span>
              <span className="ml-1 animate-pulse text-slate-300">_</span>
            </div>

            <h2 className="mt-2 max-w-xl font-[var(--font-manrope)] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-[2.5rem]">
              DÉVELOPPEUR FRONTEND & BACKEND
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Je transforme des idées en applications modernes, utiles,
              performantes et sécurisées.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["API", "Web", "Mobile", "Bases de données", "Sécurité"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[10px] text-slate-500 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
                href="#projets"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <span className="text-white">Voir mes projets</span>
                <span className="ml-2 text-white">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <span className="mr-2">✉</span>
                Me contacter
              </a>
            </div>
          </div>

          {/* RIGHT — DEVELOPER WORKSPACE */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* Decorative line */}
            <div className="absolute -left-6 top-1/2 hidden h-px w-12 bg-slate-200 lg:block" />

            <div className="relative">
              {/* Annotation */}
              <div className="absolute -right-2 -top-12 hidden rotate-[-3deg] sm:block">
                <div className="font-mono text-[11px] leading-4 text-slate-400">
                  Code
                  <br />
                  Solve
                  <br />
                  Build
                  <br />
                  Impact
                </div>

                <div className="ml-5 h-8 w-px rotate-[25deg] bg-slate-300" />
              </div>

              {/* Workspace */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                {/* Window bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <span className="font-mono text-[10px] text-slate-500">
                    mamadou_dia.ts
                  </span>
                </div>

                {/* Code area */}
                <div className="p-5 sm:p-7">
                  <div className="font-mono text-[11px] leading-6 sm:text-xs">
                    <p className="text-slate-600">
                      <span className="text-emerald-500">01</span>
                      <span className="ml-5">const</span>{" "}
                      <span className="text-slate-200">developer</span>{" "}
                      <span className="text-slate-500">=</span>{" "}
                      <span className="text-emerald-400">{"{"}</span>
                    </p>

                    <p className="text-slate-500">
                      <span className="text-emerald-500">02</span>
                      <span className="ml-5 pl-5">
                        name:{" "}
                        <span className="text-slate-300">
                          &quot;Mamadou Dia&quot;
                        </span>
                        ,
                      </span>
                    </p>

                    <p className="text-slate-500">
                      <span className="text-emerald-500">03</span>
                      <span className="ml-5 pl-5">
                        role:{" "}
                        <span className="text-slate-300">
                          &quot;Frontend & Backend&quot;
                        </span>
                        ,
                      </span>
                    </p>

                    <p className="text-slate-500">
                      <span className="text-emerald-500">04</span>
                      <span className="ml-5 pl-5">
                        location:{" "}
                        <span className="text-slate-300">
                          &quot;Nouakchott&quot;
                        </span>
                        ,
                      </span>
                    </p>

                    <p className="text-slate-500">
                      <span className="text-emerald-500">05</span>
                      <span className="ml-5 pl-5">
                        stack:{" "}
                        <span className="text-slate-300">
                          [&quot;Web&quot;, &quot;Mobile&quot;, &quot;API&quot;]
                        </span>
                        ,
                      </span>
                    </p>

                    <p className="text-slate-600">
                      <span className="text-emerald-500">06</span>
                      <span className="ml-5">
                        <span className="text-emerald-400">{"}"}</span>
                        ;
                      </span>
                    </p>
                  </div>

                  {/* Workspace modules */}
                  <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      "frontend",
                      "backend",
                      "mobile",
                      "database",
                      "security",
                      "deploy",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-3"
                      >
                        <div className="mb-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />

                        <span className="font-mono text-[10px] text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Workflow */}
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                      workflow
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[10px] sm:text-xs">
                      <span className="text-slate-300">CODE</span>
                      <span className="text-emerald-500">→</span>
                      <span className="text-slate-300">BUILD</span>
                      <span className="text-emerald-500">→</span>
                      <span className="text-slate-300">SECURE</span>
                      <span className="text-emerald-500">→</span>
                      <span className="text-slate-300">DEPLOY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-7 right-4 hidden max-w-[190px] rounded-lg border border-slate-200 bg-slate-950 px-4 py-3 shadow-xl sm:block">
                <p className="font-mono text-[9px] text-slate-500">
                  &quot;Des idées aujourd&apos;hui,
                </p>

                <p className="font-mono text-[9px] text-slate-300">
                  des solutions pour demain.&quot;
                </p>

                <p className="mt-2 font-mono text-[8px] text-emerald-500">
                  — Mamadou Dia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-y border-slate-200 py-5 sm:py-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 ${
                index !== 0 ? "border-l border-slate-200" : ""
              }`}
            >
              <p className="font-[var(--font-manrope)] text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
