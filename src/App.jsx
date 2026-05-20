import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HookSection from './components/HookSection/HookSection'
import ConditionsGrid from './components/ConditionsGrid/ConditionsGrid'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FinalCTA from './components/FinalCTA/FinalCTA'
import ClinicalProcess from './components/ClinicalProcess/ClinicalProcess'
import CorePrinciples from './components/CorePrinciples/CorePrinciples'
import TheSystem from './components/TheSystem/TheSystem'

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
      <ClinicalProcess />
      <CorePrinciples />
    </>
  )
}

export default App
