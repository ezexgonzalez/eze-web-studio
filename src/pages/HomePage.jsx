import HeroSection from "../components/sections/HeroSection";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import AboutSection from "../components/sections/AboutSection";
import FaqPreviewSection from "../components/sections/FaqPreviewSection";
import ContactSection from "../components/sections/ContactSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AboutSection />
      <FaqPreviewSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
