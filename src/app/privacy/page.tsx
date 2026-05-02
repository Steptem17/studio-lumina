import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tight mb-8">
              Privacy Policy
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="space-y-12 text-base text-text-secondary leading-relaxed font-light">
              <p className="text-sm uppercase tracking-widest text-text-muted">
                Effective Date: January 1, 2024
              </p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">1. Introduction</h2>
                <p>
                  Studio Lumina ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
                <p>
                  By using this website or our services, you consent to the data practices described in this statement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">2. Data We Collect About You</h2>
                <p>
                  Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-muted">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">3. How We Use Your Personal Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-muted">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">5. Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-medium text-text-primary">6. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:legal@studiolumina.com" className="text-text-primary underline">legal@studiolumina.com</a>.
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
