const education = [
    {
        year: "2026 — En cours",
        type: "FORMATION",
        title: "MASTER EN INFORMATIQUE APPLIQUÉE À LA GESTION",
        organization: "ISCAE — Nouakchott",
      },
    {
      year: "2023 — 2026",
      type: "FORMATION",
      title: "LICENCE EN DÉVELOPPEMENT INFORMATIQUE",
      organization: "ISCAE — Nouakchott",
    },
    {
      year: "2019 — 2023",
      type: "FORMATION",
      title: "BACCALAURÉAT SCIENTIFIQUE — SÉRIE D",
      organization: "Lycée d'Excellence, Sélibaby",
    },
  ];
  
  const certifications = [
    {
      status: "EN COURS",
      title: "CYBERSÉCURITÉ & RÉSILIENCE",
      description:
        "Formation autour des principes de cybersécurité et de résilience.",
    },
  ];
  
  export default function Certifications() {
    return (
      <section
        id="certifications"
        className="bg-slate-50 px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
              {"//"} Parcours
            </p>
  
            <h2 className="mt-3 font-[var(--font-manrope)] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Certifications
              <br />
              & formation.
            </h2>
  
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Mon parcours académique et les domaines dans lesquels je continue
              à développer mes compétences.
            </p>
          </div>
  
          {/* Content */}
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Formation */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    academic.history
                  </p>
  
                  <h3 className="mt-2 font-[var(--font-manrope)] text-xl font-extrabold text-slate-950">
                    Formation
                  </h3>
                </div>
  
                <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-slate-950 font-mono text-xs text-emerald-400 sm:flex">
                  01
                </div>
              </div>
  
              <div className="mt-8">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {/* Timeline */}
                    <div className="flex w-4 shrink-0 flex-col items-center">
                      <span
                        className={`mt-1 h-3 w-3 rounded-full border-2 ${
                          index === 0
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-slate-300 bg-white"
                        }`}
                      />
  
                      {index < education.length - 1 && (
                        <span className="mt-1 h-full w-px bg-slate-200" />
                      )}
                    </div>
  
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] font-medium text-emerald-500">
                        {item.year}
                      </p>
  
                      <h4 className="mt-2 font-[var(--font-manrope)] text-sm font-extrabold leading-5 text-slate-950 sm:text-base">
                        {item.title}
                      </h4>
  
                      <p className="mt-1 text-xs text-slate-500">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Certifications */}
            <div className="rounded-xl bg-slate-950 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    continuous.learning
                  </p>
  
                  <h3 className="mt-2 font-[var(--font-manrope)] text-xl font-extrabold text-white">
                    Certifications
                  </h3>
                </div>
  
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 font-mono text-xs text-emerald-400">
                  02
                </div>
              </div>
  
              <div className="mt-8 space-y-4">
                {certifications.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
  
                      <span className="font-mono text-[9px] font-semibold tracking-[0.15em] text-emerald-400">
                        {item.status}
                      </span>
                    </div>
  
                    <h4 className="mt-4 font-[var(--font-manrope)] text-base font-extrabold leading-6 text-white">
                      {item.title}
                    </h4>
  
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
  
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-mono text-[10px] leading-5 text-slate-600">
                  {"//"} Learning is part of the build process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
