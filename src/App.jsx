import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AcademicJourney from './components/AcademicJourney'
import TechnicalArsenal from './components/TechnicalArsenal'

function App() {
  return (
    <div className="min-h-screen bg-midnight relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AcademicJourney />
        <TechnicalArsenal />
      </main>
    </div>
  )
}

export default App
