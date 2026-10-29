"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import ProjectCard from "@/components/ui/ProjectCard";

const filters: ProjectCategory[] = [
  "Tous",
  ...new Set(projects.map((project) => project.category)),
];

export default function ProjectsCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Tous");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "Tous"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
            {"//"} Tous mes projets
          </p>
          <h1 className="mt-3 font-[var(--font-manrope)] text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Des projets concrets,
            <br />
            de vraies réalisations.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Découvrez l&apos;ensemble de mes projets, professionnels,
            académiques et personnels, à travers différentes technologies et
            domaines de développement.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" aria-label="Filtrer les projets">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-md border px-4 py-2.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between border-b border-slate-200 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400" aria-live="polite">
            {filteredProjects.length} {filteredProjects.length > 1 ? "projets" : "projet"}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
            <p className="font-mono text-sm text-slate-500">
              Aucun projet dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
