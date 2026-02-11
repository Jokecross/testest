import Navbar from './Navbar'
import Hero from './Hero'
import Problem from './Problem'
import Solution from './Solution'
import Features from './Features'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
