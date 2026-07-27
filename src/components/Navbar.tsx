import { useState, useEffect, useRef } from 'react'
import { FaDownload as DownloadIcon, FaBars as BarsIcon, FaXmark as CloseIcon, FaChevronDown, FaCode, FaBrain, FaFilePdf } from 'react-icons/fa6'

interface NavbarProps {
  onOpenResumeModal?: () => void
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
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
        <a href="#home" className="group flex items-center gap-2 text-xl font-bold font-sans text-white tracking-tight">
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

        {/* Right CTA - Desktop Dropdown */}
        <div className="hidden md:flex items-center gap-3 relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-[#05070f] bg-[#00e5ff] hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] active:scale-95 cursor-pointer"
          >
            <DownloadIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
            <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Quick Resume Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-[#0b0f19] border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl p-2 z-50 animate-fade-in">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-gray-400 border-b border-white/10 mb-1 flex items-center gap-1.5">
                <FaFilePdf className="w-3 h-3 text-[#00e5ff]" />
                Select Role Resume
              </div>

              <a
                href="/Gatik_Yadav_Resume_SDE.pdf"
                download="Gatik_Yadav_Resume_SDE.pdf"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 text-left transition-colors group"
              >
                <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <FaCode className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#00e5ff]">SDE Resume</div>
                  <div className="text-[10px] font-mono text-gray-400">Software & Full-Stack</div>
                </div>
              </a>

              <a
                href="/Gatik_Yadav_Resume_ML.pdf"
                download="Gatik_Yadav_Resume_ML.pdf"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 text-left transition-colors group"
              >
                <div className="p-2 rounded-md bg-purple-500/10 text-purple-300 group-hover:bg-purple-500 group-hover:text-black transition-colors">
                  <FaBrain className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300">ML / AI Resume</div>
                  <div className="text-[10px] font-mono text-gray-400">Computer Vision & AI</div>
                </div>
              </a>

              {onOpenResumeModal && (
                <button
                  onClick={() => {
                    setDropdownOpen(false)
                    onOpenResumeModal()
                  }}
                  className="w-full mt-1 pt-2 border-t border-white/10 text-[11px] font-mono text-[#00e5ff] hover:underline text-center block py-1"
                >
                  View Details & Compare →
                </button>
              )}
            </div>
          )}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#070a14]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl transition-all duration-200">
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
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <span className="text-[11px] font-mono text-gray-400">Download Resume:</span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/Gatik_Yadav_Resume_SDE.pdf"
                download="Gatik_Yadav_Resume_SDE.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-cyan-500/20 border border-cyan-500/30 active:scale-95"
              >
                <FaCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>SDE PDF</span>
              </a>
              <a
                href="/Gatik_Yadav_Resume_ML.pdf"
                download="Gatik_Yadav_Resume_ML.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-purple-500/20 border border-purple-500/30 active:scale-95"
              >
                <FaBrain className="w-3.5 h-3.5 text-purple-400" />
                <span>ML PDF</span>
              </a>
            </div>
            {onOpenResumeModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenResumeModal()
                }}
                className="w-full text-center py-2 text-xs font-mono text-[#00e5ff] hover:underline"
              >
                Compare Both Resumes →
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

