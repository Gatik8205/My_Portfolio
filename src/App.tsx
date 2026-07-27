import { useState } from 'react'
import './App.css'
import BackgroundEffect from './components/BackgroundEffect'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FraudDetectionSpotlight from './components/FraudDetectionSpotlight'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  const handleOpenResumeModal = () => setIsResumeModalOpen(true)
  const handleCloseResumeModal = () => setIsResumeModalOpen(false)

  return (
    <div className="min-h-screen bg-[#05070f] text-[#c8d3e8] relative selection:bg-[#00e5ff]/20 selection:text-[#00e5ff]">
      <BackgroundEffect />
      <Navbar onOpenResumeModal={handleOpenResumeModal} />
      <main>
        <Hero onOpenResumeModal={handleOpenResumeModal} />
        <About />
        <Skills />
        <FraudDetectionSpotlight />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </div>
  )
}