import HeroSection from "../components/sections/HeroSection";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import IncludesSection from "../components/sections/IncludesSection";
import AboutSection from "../components/sections/AboutSection";
import FaqPreviewSection from "../components/sections/FaqPreviewSection";
import ContactSection from "../components/sections/ContactSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IncludesSection />
      <AboutSection />
      <FaqPreviewSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
