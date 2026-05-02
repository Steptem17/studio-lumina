import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        {/* Page intro */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-8 tracking-tight">
            About Studio Lumina
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl text-text-secondary max-w-2xl text-balance leading-relaxed font-light">
            We are a compact, senior team of designers, motion experts, and frontend engineers. We
            don’t do trends. We do enduring craft.
          </p>
        </Reveal>

        {/* Philosophy block */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-text-muted mb-4 border-t border-border/40 pt-4">
                Philosophy
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-2xl lg:text-3xl font-light text-text-primary leading-[1.4] text-balance">
                “We believe that good design is quiet. It’s felt in the load time, the scroll, the
                pause before a click. It doesn’t shout for attention — it earns it.”
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-text-secondary leading-relaxed font-light max-w-xl">
                Studio Lumina was founded on a simple observation: most digital work is either
                beautiful but broken, or functional but forgettable. We exist in the space where
                design, motion, and engineering are inseparable. Every project is treated as a
                complete product, not a collection of screens.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Approach block */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-text-muted mb-4 border-t border-border/40 pt-4">
                How we work
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-base text-text-secondary leading-relaxed font-light max-w-xl">
                We operate with a small, dedicated team of senior practitioners. There are no
                account managers, no unnecessary layers, and no cookie-cutter processes. You work
                directly with the people building your product. This keeps decisions fast, quality
                high, and communication crystal clear.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="space-y-4 text-base text-text-secondary font-light max-w-xl list-inside marker:text-text-muted border-l border-border/40 pl-6">
                <li>Intensive discovery & alignment before any pixels</li>
                <li>Rapid prototyping with real code, not just static links</li>
                <li>Motion design integrated from day one, not as an afterthought</li>
                <li>Delivery of a production‑ready system, not just screens</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Team / Credibility */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-text-muted mb-4 border-t border-border/40 pt-4">
                Credentials
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-base text-text-secondary leading-relaxed font-light max-w-xl">
                Our work has been recognized by Awwwards, CSS Design Awards, and The FWA. Our team
                members have previously led design and engineering at top-tier product companies. 
                But we don’t lead with trophies — we lead with results.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm text-text-muted mt-6 font-medium">
                <span>FWA Site of the Day</span>
                <span>Awwwards Developer Award</span>
                <span>CSSDA Website of the Year</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="mt-32 pt-16 border-t border-border/40 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-text-primary text-background text-sm font-medium hover:bg-text-primary/90 transition-colors"
            >
              Let’s work together
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}