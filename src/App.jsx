import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HookSection from './components/HookSection/HookSection'
import ConditionsGrid from './components/ConditionsGrid/ConditionsGrid'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FinalCTA from './components/FinalCTA/FinalCTA'
import TheSystem from './components/TheSystem/TheSystem'
import System from './pages/System/System'

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
        <HookSection />
        <ConditionsGrid />
        <HowItWorks />
        <FinalCTA />
      </section>
      <TheSystem />
    </>
  )
}

export default App
