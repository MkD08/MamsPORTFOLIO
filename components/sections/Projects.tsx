import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="projets"
      className="bg-slate-50 px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
              {"//"} Mes réalisations
            </p>

            <h2 className="mt-3 max-w-xl font-[var(--font-manrope)] text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Des projets concrets,
              <br />
              un impact réel.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Une sélection de projets sur lesquels j&apos;ai travaillé,
              avec des problématiques et des technologies différentes.
            </p>
          </div>
        </div>

        {/* Featured projects */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* All projects */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/projets"
            className="font-mono text-xs font-semibold text-slate-600 transition-colors hover:text-emerald-600"
          >
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  );
}
