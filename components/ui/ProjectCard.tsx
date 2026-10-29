import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-950">
        {project.screenshots?.length ? (
          <div className="absolute inset-0 grid grid-cols-3 items-center gap-2 bg-slate-100 px-3 py-2">
            {project.screenshots.slice(0, 3).map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative aspect-[9/16] max-h-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(max-width: 640px) 30vw, 120px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-600">
                PROJECT
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>

            <div>
              <p className="font-mono text-xs text-slate-500">
                {project.title}
              </p>

              <div className="mt-2 h-px w-2/3 bg-slate-800" />
              <div className="mt-2 h-px w-1/2 bg-slate-800" />
            </div>
          </div>
        )}

        <span className="absolute right-3 top-3">
          <Badge variant="dark">{project.status}</Badge>
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-500">
              {project.category}
            </p>

            <h3 className="mt-1 font-[var(--font-manrope)] text-lg font-extrabold tracking-tight text-slate-950">
              {project.title}
            </h3>
          </div>

          <Link
            href={`/projets/${project.slug}`}
            aria-label={`Voir le projet ${project.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-950"
          >
            ↗
          </Link>
        </div>

        <p className="mt-3 min-h-[48px] text-xs leading-5 text-slate-500">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}

            {project.technologies.length > 4 && (
              <Badge variant="accent">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        )}

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={`/projets/${project.slug}`}
            className="inline-flex items-center font-mono text-[10px] font-semibold text-slate-700 transition-colors hover:text-emerald-600"
          >
            Voir le projet
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
