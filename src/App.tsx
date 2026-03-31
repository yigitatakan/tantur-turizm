import Hero from './components/Hero'
import Services from './components/Services'
import Tours from './components/Tours'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Tours />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
