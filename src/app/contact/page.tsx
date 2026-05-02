"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: intro */}
          <div className="md:col-span-5">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-8 tracking-tight">
                Get in touch
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-text-secondary leading-relaxed mb-10 font-light max-w-md">
                We’re selective with projects, but we’re always open to
                conversations about ambitious work. Tell us about your project,
                and we’ll respond within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-6 text-sm mt-16 pt-10 border-t border-border/40">
                <div>
                  <p className="font-medium text-text-primary mb-1">Email</p>
                  <a
                    href="mailto:hello@studiolumina.com"
                    className="text-text-secondary hover:text-text-primary transition-colors text-base"
                  >
                    hello@studiolumina.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-text-primary mb-1">Office</p>
                  <p className="text-text-secondary text-base leading-relaxed">
                    San Francisco, CA
                    <br />
                    Remote — Worldwide
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="md:col-span-6 md:col-start-7 mt-8 md:mt-0">
            <Reveal delay={0.3}>
              {submitted ? (
                <div className="bg-surface/30 border border-border/40 p-12 text-center rounded-sm">
                  <p className="text-xl text-text-primary font-medium mb-3">
                    Thank you for reaching out.
                  </p>
                  <p className="text-text-secondary font-light">
                    We have received your message and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider text-[11px]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-border/60 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors rounded-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider text-[11px]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-border/60 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors rounded-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider text-[11px]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-border/60 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors resize-none rounded-none"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-text-primary text-background text-sm font-medium hover:bg-text-primary/90 transition-colors w-full sm:w-auto"
                  >
                    Send message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}