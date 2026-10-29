import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Mamadou Dia`,
      description: project.description,
      ...(project.image ? { images: [project.image] } : {}),
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/projets"
          className="inline-flex items-center font-mono text-xs font-semibold text-slate-500 transition-colors hover:text-emerald-600"
        >
          ← Retour aux projets
        </Link>

        {/* Header */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 sm:text-xs">
              {"//"} {project.category}
            </p>

            {project.professional && (
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
                Professionnel
              </span>
            )}

            {project.internship && (
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                Stage
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-[var(--font-manrope)] text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                {project.description}
              </p>
            </div>

            <span className="w-fit shrink-0 rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              {project.status}
            </span>
          </div>
        </div>

        {/* Project visual */}
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
          <div className="relative aspect-[16/8]">
            {project.screenshots?.length ? (
              <div className="absolute inset-0 grid grid-cols-3 items-center gap-3 bg-slate-950 px-4 py-6 sm:gap-6 sm:px-10 sm:py-10">
                {project.screenshots.slice(0, 3).map((screenshot) => (
                  <div
                    key={screenshot.src}
                    className="relative mx-auto h-full max-h-[440px] w-full max-w-[248px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white shadow-2xl"
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 640px) 30vw, 250px"
                      className="object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col justify-between p-6 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-600">
                    PROJECT
                  </span>

                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <div>
                  <p className="font-mono text-sm text-slate-500">
                    {project.title}
                  </p>

                  <div className="mt-3 h-px max-w-md bg-slate-800" />
                  <div className="mt-2 h-px max-w-xs bg-slate-800" />
                </div>
              </div>
            )}
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-10" aria-labelledby="project-screenshots-title">
            <div className="mb-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                {"//"} Captures de l&apos;application
              </p>
              <h2
                id="project-screenshots-title"
                className="mt-2 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
              >
                LifeLink en images
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="mx-auto w-full max-w-[260px]">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border-[5px] border-slate-900 bg-slate-100 shadow-xl">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 260px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-xs font-medium text-slate-600 sm:text-sm">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Project content */}
        <div className="mt-8 space-y-5">
          {/* Context */}
          {project.context && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                {"//"} Contexte
              </p>

              <h2 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-slate-950">
                À propos du projet
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                {project.context}
              </p>
            </section>
          )}

          {/* Objective */}
          {project.objective && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                {"//"} Objectif
              </p>

              <h2 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-slate-950">
                Ce que le projet cherche à résoudre
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                {project.objective}
              </p>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                {"//"} Fonctionnalités
              </p>

              <h2 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-slate-950">
                Fonctionnalités principales
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />

                      <p className="text-sm leading-6 text-slate-600">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stack + role */}
          <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
            {/* Technologies */}
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                {"//"} Stack
              </p>

              <h2 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-slate-950">
                Technologies
              </h2>

              {project.technologies.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[10px] text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-xs leading-5 text-slate-500">
                  Informations techniques détaillées à venir.
                </p>
              )}
            </section>

            {/* Role */}
            {project.role && (
              <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  {"//"} Mon rôle
                </p>

                <h2 className="mt-3 font-[var(--font-manrope)] text-xl font-extrabold tracking-tight text-slate-950">
                  Contribution
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {project.role}
                </p>
              </section>
            )}
          </div>
        </div>

        {/* External links */}
        {(project.github || project.demo) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Voir le projet
                <span className="ml-2">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
              >
                GitHub
                <span className="ml-2">↗</span>
              </a>
            )}
          </div>
        )}

        {/* Bottom navigation */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <Link
            href="/projets"
            className="inline-flex items-center font-mono text-xs font-semibold text-slate-500 transition-colors hover:text-emerald-600"
          >
            ← Voir tous les projets
          </Link>
        </div>
      </div>
    </main>
  );
}
