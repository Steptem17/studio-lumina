"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Refined subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-8">
              <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
              Studio Lumina
            </span>
          </Reveal>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-[1.05] tracking-tight text-balance">
            <Reveal direction="up" delay={0.2}>
              We design and build
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              digital experiences for
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              ambitious brands.
            </Reveal>
          </h1>

          {/* Subheadline */}
          <Reveal delay={0.6}>
            <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl text-balance leading-relaxed font-light">
              A specialized creative practice operating at the intersection of 
              refined design, fluid motion, and production-grade engineering.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/work"
                className="inline-flex items-center px-8 py-4 bg-text-primary text-background text-sm font-medium hover:bg-text-primary/90 transition-colors"
              >
                View Selected Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors group py-4"
              >
                Start a conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>

          {/* Trust bar (subtle) */}
          <Reveal delay={1.0}>
            <div className="mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row md:items-center gap-y-4 gap-x-12 text-sm text-text-muted">
              <span className="uppercase tracking-wider text-xs">Trusted by forward-thinking teams</span>
              <div className="flex flex-wrap gap-8">
                <span className="font-medium text-text-primary/60">Aether</span>
                <span className="font-medium text-text-primary/60">Mono</span>
                <span className="font-medium text-text-primary/60">Form</span>
                <span className="font-medium text-text-primary/60">Studio K</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}