import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-8 tracking-tight">
            Our Work
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl text-text-secondary max-w-2xl text-balance mb-16 font-light leading-relaxed">
            Each engagement is a partnership: we blend design, motion, and engineering to create work that endures.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-8">
          {projects.map((project, idx) => (
            <Reveal key={project.slug} delay={(idx % 2) * 0.15}>
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] bg-surface overflow-hidden rounded-sm">
                  {/* Premium overlay effect */}
                  <div className="absolute inset-0 bg-text-primary/[0.02] group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image 
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                
                <div className="mt-6 flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-medium text-text-primary group-hover:text-text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}