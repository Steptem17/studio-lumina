import Hero from "@/components/home/Hero";
import WorkPreview from "@/components/home/WorkPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSnippet from "@/components/home/AboutSnippet";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkPreview />
      <ServicesOverview />
      <AboutSnippet />
      <CTASection />
    </>
  );
}