import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const services = [
  {
    title: "Design",
    subtitle: "Identity · UI/UX · Design Systems",
    description:
      "We craft visual identities that communicate without noise. From brand strategy to component libraries, every design decision is rooted in function. We deliver Figma toolkits, design tokens, and interactive prototypes that your engineering team will love to implement.",
  },
  {
    title: "Motion",
    subtitle: "Animation · Micro‑interactions · Scroll Choreography",
    description:
      "Motion isn't decoration — it's guidance. We design subtle, refined animations that enhance usability and delight without overwhelming. Using Framer Motion and GSAP, we create custom animation libraries and scroll‑driven narratives that feel alive and intentional.",
  },
  {
    title: "Engineering",
    subtitle: "Frontend · Performance · Accessibility",
    description:
      "We write production‑grade frontend code that’s fast, accessible, and maintainable. Using React, Next.js, TypeScript, and Tailwind CSS, we build scalable architectures that handle complex interactions with ease. Every project ships with near‑perfect Lighthouse scores and a clean, documented codebase.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-8 tracking-tight">
            What we offer
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl text-text-secondary max-w-2xl text-balance leading-relaxed font-light">
            We select a limited number of engagements each year, dedicating our full attention to
            each partner. Our services are best suited for ambitious teams who value craft over
            shortcuts.
          </p>
        </Reveal>

        <div className="mt-24 space-y-16">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-border/40 pt-12 first:border-t-0 first:pt-0">
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-medium text-text-primary">
                    {service.title}
                  </h2>
                  <p className="text-sm text-text-muted mt-2 tracking-wide">{service.subtitle}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-text-secondary leading-relaxed font-light max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-32 pt-16 border-t border-border/40 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-text-primary text-background text-sm font-medium hover:bg-text-primary/90 transition-colors"
            >
              Start a project
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}