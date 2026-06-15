import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HookSection from './components/HookSection/HookSection'
import ConditionsGrid from './components/ConditionsGrid/ConditionsGrid'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FinalCTA from './components/FinalCTA/FinalCTA'
import ClinicalProcess from './components/ClinicalProcess/ClinicalProcess'
import CorePrinciples from './components/CorePrinciples/CorePrinciples'
import TheSystem from './components/TheSystem/TheSystem'
import Programs from './components/Programs/Programs'
import WhoItsFor from './components/WhoItsFor/WhoItsFor'
import HealthCheck from './components/HealthCheck/HealthCheck'
import EvidenceBase from './components/EvidenceBase/EvidenceBase'
import About from './components/About/About'
import Courses from './components/Courses/Courses'

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
      <Programs />
      <WhoItsFor />
      <HealthCheck />
      <EvidenceBase />
      <About />
      <Courses />
    </>
  )
}

export default App
