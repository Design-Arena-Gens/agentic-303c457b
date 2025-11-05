import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ExperienceSection from "@/components/ExperienceSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <ExperienceSection />
        <Testimonials />
        <Pricing />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
