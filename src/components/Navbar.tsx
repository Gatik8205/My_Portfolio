import { useState, useEffect } from 'react'
import { FaDownload as DownloadIcon, FaBars as BarsIcon, FaXmark as CloseIcon } from 'react-icons/fa6'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'projects', 'spotlight', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Spotlight', href: '#spotlight', id: 'spotlight' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070f]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2 text-xl font-bold font-[#font-display] text-white tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00e5ff] to-[#6366f1] text-[#05070f] flex items-center justify-center font-extrabold text-sm shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-105 transition-transform">
            GY
          </span>
          <span className="group-hover:text-[#00e5ff] transition-colors">
            Gatik<span className="text-[#00e5ff]">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#0d1222]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-[#00e5ff]/20 to-[#6366f1]/20 text-[#00e5ff] border border-[#00e5ff]/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Gatik_Yadav_Resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-[#05070f] bg-[#00e5ff] hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] active:scale-95"
          >
            <DownloadIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <BarsIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#070a14]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-mono px-4 py-2.5 rounded-lg border ${
                activeSection === link.id
                  ? 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/30'
                  : 'text-gray-300 border-transparent hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Gatik_Yadav_Resume.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-mono font-semibold text-[#05070f] bg-[#00e5ff] mt-2 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </nav>
  )
}
