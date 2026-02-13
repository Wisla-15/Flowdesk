import Hero from "../components/LandingPage/Hero"
import SocialProof from "../components/LandingPage/SocialProof"
import Features from "../components/LandingPage/Features"
import HowItWorks from "../components/LandingPage/HowItWorks"
import Pricing from "../components/LandingPage/Pricing"
import FinalCTA from "../components/LandingPage/FinalCTA"
import Navbar from "../components/LandingPage/Navbar"
import Footer from "../components/LandingPage/Footer"

const Landing = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default Landing