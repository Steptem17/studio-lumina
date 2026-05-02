import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2 font-medium text-lg tracking-wider text-text-primary mb-6">
              <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
              STUDIO LUMINA
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              An independent creative practice specializing in refined digital experiences, fluid motion, and production-grade engineering.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-8 space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-6">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/work" className="text-text-secondary hover:text-text-primary transition-colors">Work</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-text-primary transition-colors">Services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted mb-6">Social</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors" aria-label="Twitter / X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Studio Lumina. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}