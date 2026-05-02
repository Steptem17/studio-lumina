import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import type { Project } from "@/lib/projects";

export default function ProjectListItem({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <Link
        href={`/work/${project.slug}`}
        className="group block py-12 border-b border-border/60 last:border-b-0 hover:border-text-primary/20 transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-start">
          {/* Left column */}
          <div className="md:col-span-3 pt-1">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-2 block group-hover:text-text-secondary transition-colors">
              {project.category}
            </span>
          </div>

          {/* Main title */}
          <div className="md:col-span-6 relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-text-primary tracking-tight transition-colors">
              {project.title}
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-lg group-hover:text-text-primary transition-colors duration-300">
              {project.overview.slice(0, 140)}…
            </p>
          </div>

          {/* Right meta */}
          <div className="md:col-span-3 text-left md:text-right pt-1 flex flex-col items-start md:items-end">
            <span className="text-sm font-medium text-text-secondary">{project.year}</span>
            <span className="text-sm text-text-muted mt-1">{project.client}</span>
            
            <div className="mt-6 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out bg-surface">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="mt-10 relative aspect-[21/9] bg-surface overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-text-primary/[0.02] group-hover:bg-text-primary/[0.04] transition-colors duration-500 z-10" />
          <Image 
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
      </Link>
    </Reveal>
  );
}