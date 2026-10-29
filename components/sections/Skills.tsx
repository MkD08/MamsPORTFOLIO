const skillGroups = [
    {
      number: "01",
      title: "FRONTEND",
      description: "Interfaces modernes et expériences web.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      number: "02",
      title: "BACKEND",
      description: "APIs, logique métier et architecture serveur.",
      skills: [
        "Node.js",
        "Express.js",
        "Prisma",
        "API REST",
        "JWT",
        "Django",
      ],
    },
    {
      number: "03",
      title: "DATABASE",
      description: "Stockage, modélisation et gestion des données.",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "Modélisation relationnelle",
        "Prisma",
      ],
    },
    {
      number: "04",
      title: "MOBILE",
      description: "Applications mobiles modernes et multiplateformes.",
      skills: [
        "Flutter",
        "React Native",
      ],
    },
    {
      number: "05",
      title: "OUTILS & ENVIRONNEMENT",
      description: "Outils utilisés pour développer et déployer.",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Linux",
        "Windows",
        "Supabase",
        "Firebase",
        "Vercel",
      ],
    },
  ];
  
  export default function Skills() {
    return (
      <section
        id="competences"
        className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
              {"//"} Technologies &amp; outils
            </p>
  
            <h2 className="mt-3 font-[var(--font-manrope)] text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Les outils derrière
              <br />
              mes projets.
            </h2>
  
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Une stack orientée développement web, backend, mobile et
              gestion des données.
            </p>
          </div>
  
          {/* Skills */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className={`group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6 ${
                  group.number === "05" ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-medium text-emerald-500">
                      {group.number}
                    </span>
  
                    <h3 className="mt-2 font-[var(--font-manrope)] text-base font-extrabold tracking-tight text-slate-950 sm:text-lg">
                      {group.title}
                    </h3>
  
                    <p className="mt-2 max-w-md text-xs leading-5 text-slate-500">
                      {group.description}
                    </p>
                  </div>
  
                  <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-slate-950 font-mono text-xs text-emerald-400 sm:flex">
                    {"</>"}
                  </div>
                </div>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[10px] text-slate-600 transition-colors duration-200 group-hover:border-slate-300 group-hover:text-slate-900 sm:text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
  
          {/* Developer signature */}
          <div className="mt-5 overflow-hidden rounded-xl bg-slate-950">
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500">
                  developer.signature
                </p>
  
                <p className="mt-3 font-[var(--font-manrope)] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  Build. Learn. Improve.
                </p>
              </div>
  
              <div className="font-mono text-xs leading-6 text-slate-500 sm:text-sm">
                <p>
                  <span className="text-emerald-500">MAMADOU_DIA</span>
                  <span className="text-slate-700"> {"{"}</span>
                </p>
  
                <p className="pl-5">
                  <span className="text-slate-400">frontend</span>
                  <span className="text-slate-700">: true,</span>
                </p>
  
                <p className="pl-5">
                  <span className="text-slate-400">backend</span>
                  <span className="text-slate-700">: true,</span>
                </p>
  
                <p className="pl-5">
                  <span className="text-slate-400">mobile</span>
                  <span className="text-slate-700">: true,</span>
                </p>
  
                <p className="pl-5">
                  <span className="text-slate-400">security</span>
                  <span className="text-slate-700">: learning,</span>
                </p>
  
                <p>
                  <span className="text-slate-700">{"}"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
