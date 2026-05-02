import Reveal from "@/components/motion/Reveal";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-section border-t border-border/40 bg-surface/30">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary tracking-tight text-balance max-w-2xl">
              Ready to build something exceptional?
            </h2>
          </Reveal>
          
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-text-primary text-background text-sm font-medium hover:bg-text-primary/90 transition-colors"
              >
                Start a project
              </Link>
              <a
                href="mailto:hello@studiolumina.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-text-primary text-sm font-medium hover:border-text-primary/40 transition-colors bg-background/50"
              >
                hello@studiolumina.com
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}