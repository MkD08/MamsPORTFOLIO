export default function About() {
    return (
      <section id="a-propos" className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
              {"//"} Mon parcours
            </p>
  
            <h2 className="mt-3 font-[var(--font-manrope)] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Derrière le code
            </h2>
          </div>
  
          {/* Main card */}
          <div className="overflow-hidden rounded-2xl bg-slate-950">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              {/* Text */}
              <div className="p-6 sm:p-8 lg:p-12">
                <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Je suis Mamadou Dia, développeur informatique orienté vers la
                  conception de solutions web et mobiles.
                </p>
  
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Je travaille notamment avec les API REST, les bases de données,
                  les architectures backend, les interfaces modernes et les
                  applications mobiles.
                </p>
  
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Je m&apos;intéresse également à la sécurité informatique, à la
                  résilience et aux technologies modernes.
                </p>
  
                {/* Technical identity */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    developer.profile
                  </p>
  
                  <div className="mt-4 font-mono text-xs leading-7 sm:text-sm">
                    <p>
                      <span className="text-slate-600">01</span>
                      <span className="ml-5 text-emerald-400">const</span>{" "}
                      <span className="text-slate-300">focus</span>{" "}
                      <span className="text-slate-600">=</span>{" "}
                      <span className="text-slate-400">
                        &quot;build&quot;
                      </span>
                    </p>
  
                    <p>
                      <span className="text-slate-600">02</span>
                      <span className="ml-5 text-emerald-400">const</span>{" "}
                      <span className="text-slate-300">approach</span>{" "}
                      <span className="text-slate-600">=</span>{" "}
                      <span className="text-slate-400">
                        &quot;simple & scalable&quot;
                      </span>
                    </p>
  
                    <p>
                      <span className="text-slate-600">03</span>
                      <span className="ml-5 text-emerald-400">const</span>{" "}
                      <span className="text-slate-300">mindset</span>{" "}
                      <span className="text-slate-600">=</span>{" "}
                      <span className="text-slate-400">
                        &quot;learn & improve&quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Visual side */}
              <div className="relative min-h-[300px] border-t border-white/10 bg-slate-900 lg:min-h-full lg:border-l lg:border-t-0">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute left-[18%] top-[18%] h-px w-[60%] bg-emerald-500/40" />
                  <div className="absolute left-[18%] top-[38%] h-px w-[42%] bg-slate-500/40" />
                  <div className="absolute left-[18%] top-[58%] h-px w-[68%] bg-slate-500/40" />
                  <div className="absolute left-[18%] top-[78%] h-px w-[50%] bg-emerald-500/30" />
  
                  <div className="absolute left-[18%] top-[18%] h-[60%] w-px bg-slate-500/30" />
                  <div className="absolute left-[48%] top-[18%] h-[60%] w-px bg-slate-500/30" />
                  <div className="absolute left-[78%] top-[18%] h-[60%] w-px bg-slate-500/30" />
                </div>
  
                <div className="relative flex h-full min-h-[300px] items-center justify-center p-8">
                  <div className="w-full max-w-sm rounded-xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-500">
                        mamadou_dia
                      </span>
  
                      <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        active
                      </span>
                    </div>
  
                    <div className="space-y-3">
                      {[
                        ["frontend", "React / Next.js"],
                        ["backend", "Node.js / Express"],
                        ["database", "PostgreSQL / Prisma"],
                        ["mobile", "Flutter / React Native"],
                      ].map(([category, technologies]) => (
                        <div
                          key={category}
                          className="flex flex-col gap-1 rounded-lg border border-white/5 bg-white/[0.025] p-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="font-mono text-xs text-slate-400">
                            {category}
                          </span>
  
                          <span className="font-mono text-[10px] text-slate-600 sm:text-right">
                            {technologies}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Bottom indicators */}
            <div className="grid border-t border-white/10 sm:grid-cols-3">
              {[
                ["01", "Conception", "Penser la solution"],
                ["02", "Développement", "Construire le produit"],
                ["03", "Évolution", "Améliorer continuellement"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-7"
                >
                  <span className="font-mono text-[10px] text-emerald-500">
                    {number}
                  </span>
  
                  <h3 className="mt-2 text-sm font-bold text-white">
                    {title}
                  </h3>
  
                  <p className="mt-1 text-xs text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
