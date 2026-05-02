import Reveal from "@/components/motion/Reveal";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="py-section bg-surface/50 border-t border-border/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-8 block">
              The Studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-text-primary leading-[1.4] text-balance mb-8">
              “We believe the best digital work comes from a seamless blend of
              thoughtful design, precise motion, and solid engineering — not
              one without the other.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center">
              <p className="text-base text-text-secondary leading-relaxed max-w-lg mb-8">
                Studio Lumina is a compact team of senior designers, motion experts,
                and frontend engineers working with select clients to build
                category‑defining digital products.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
              >
                More about our philosophy
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}