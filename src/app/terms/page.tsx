import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tight mb-8">
              Terms & Conditions
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="space-y-12 text-base text-text-secondary leading-relaxed font-light">
              <p className="text-sm uppercase tracking-widest text-text-muted">
                Effective Date: January 1, 2024
              </p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">1. Agreement to Terms</h2>
                <p>
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Studio Lumina (“Company,” “we,” “us,” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">2. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">3. Professional Engagements</h2>
                <p>
                  Information provided on this website regarding our creative, design, and engineering services is for general informational purposes. Any actual engagement or partnership will be subject to a separate, formal Statement of Work (SOW) and Master Services Agreement (MSA) signed by both parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">4. User Representations</h2>
                <p>
                  By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; and (4) your use of the Site will not violate any applicable law or regulation.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">5. Limitations of Liability</h2>
                <p>
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">6. Governing Law</h2>
                <p>
                  These Terms shall be governed by and defined following the laws of our operating jurisdiction. Studio Lumina and yourself irrevocably consent that the courts of that jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
