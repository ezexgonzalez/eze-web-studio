import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ProblemSection from './components/sections/ProblemSection'
import SolutionSection from './components/sections/SolutionSection'
import IncludesSection from './components/sections/IncludesSection'
import AboutSection from './components/sections/AboutSection'
import PacksSection from './components/sections/PacksSection'
import ProcessSection from './components/sections/ProcessSection'
import FaqSection from './components/sections/FaqSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IncludesSection />
        <AboutSection />
        <PacksSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
