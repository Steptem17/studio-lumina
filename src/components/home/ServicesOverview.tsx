import Reveal from "@/components/motion/Reveal";
import Container from "@/components/layout/Container";

const services = [
  {
    title: "Design",
    description:
      "Brand identity, UI/UX systems, and visual language that communicate with precision.",
  },
  {
    title: "Motion",
    description:
      "Custom animation libraries, scroll choreography, and micro‑interactions that feel alive.",
  },
  {
    title: "Engineering",
    description:
      "Production‑grade frontend, performance optimization, and scalable design systems.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-section border-t border-border/40">
      <Container>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-16 tracking-tight">
            Capabilities
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <div className="group border-t border-border/40 pt-6 hover:border-text-primary/30 transition-colors duration-300">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-4 block group-hover:text-text-secondary transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-medium text-text-primary mb-3 group-hover:text-text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed font-light">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}