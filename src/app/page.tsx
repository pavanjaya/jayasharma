import About from "@/components/About";
import CTASection from "@/components/CTASection";
import FAQPreview from "@/components/FAQPreview";
import Hero from "@/components/Hero";
import InsightsPreview from "@/components/InsightsPreview";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <InsightsPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
