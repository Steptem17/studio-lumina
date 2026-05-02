"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/lib/projects";
import { use } from "react";

export default function ProjectDetailPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const heroRef = useScrollReveal({ y: 30, opacity: 0 });

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-12">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
                >
                  <span className="transition-transform group-hover:-translate-x-1">←</span>
                  Back to all work
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="text-xs uppercase tracking-widest text-text-muted mb-4 block">
                {project.category}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] text-balance">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
                {project.overview}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-text-muted uppercase tracking-wider">
                <span>Client: {project.client}</span>
                <span>Year: {project.year}</span>
                <span>Role: {project.role}</span>
              </div>
            </Reveal>
          </div>

          {/* Large visual - parallax effect via GSAP (subtle) */}
          <div
            ref={heroRef}
            className="mt-8 relative w-full aspect-[21/9] bg-surface overflow-hidden rounded-sm"
          >
            <Image 
              src={project.heroImage}
              alt={`${project.title} Hero`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      {/* The Case Study */}
      <Container className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sticky sidebar navigation (simple) */}
          <aside className="md:col-span-3">
            <div className="sticky top-28 space-y-4 text-sm">
              <p className="font-medium text-text-primary">Project Breakdown</p>
              <ul className="space-y-2 text-text-muted">
                <li>
                  <a href="#problem" className="hover:text-text-primary transition-colors">
                    Problem
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-text-primary transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#solution" className="hover:text-text-primary transition-colors">
                    Solution
                  </a>
                </li>
                <li>
                  <a href="#outcome" className="hover:text-text-primary transition-colors">
                    Outcome
                  </a>
                </li>
              </ul>
              <p className="pt-6 font-medium text-text-primary">Technologies</p>
              <ul className="space-y-1">
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-text-muted">{tech}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <article className="md:col-span-9 space-y-16">
            <Section id="problem" {...project.sections.problem} />
            <Section id="approach" {...project.sections.approach} />
            <Section id="solution" {...project.sections.solution} />
            <Section id="outcome" {...project.sections.outcome} />

            {/* Additional visuals */}
            <div className="space-y-8">
              {project.images.map((img, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative aspect-[16/9] bg-surface overflow-hidden">
                    <Image 
                      src={img}
                      alt={`${project.title} Detail ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}

// Internal section component
function Section({
  id,
  heading,
  content,
}: {
  id: string;
  heading: string;
  content: string;
}) {
  return (
    <section id={id}>
      <Reveal>
        <h2 className="text-2xl font-semibold text-text-primary mb-3">{heading}</h2>
        <p className="text-base text-text-secondary leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </Reveal>
    </section>
  );
}