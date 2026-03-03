import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AcademicJourney from './components/AcademicJourney'
import TechnicalArsenal from './components/TechnicalArsenal'
import CodeStats from './components/CodeStats'
import Certifications from './components/Certifications'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-midnight relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AcademicJourney />
        <TechnicalArsenal />
        <CodeStats />
        <Certifications />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
