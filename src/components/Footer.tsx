import { FaArrowUp, FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa6'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-[#05070f] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3 text-sm text-gray-400 font-mono">
          <span className="w-6 h-6 rounded bg-[#00e5ff]/20 text-[#00e5ff] font-bold text-xs flex items-center justify-center">
            GY
          </span>
          <span>© {new Date().getFullYear()} Gatik Yadav. All rights reserved.</span>
        </div>

        {/* Middle: Stack note */}
        <div className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
          <span>Crafted with</span>
          <FaHeart className="w-3 h-3 text-red-500 inline" />
          <span>using React, TypeScript & Tailwind</span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gatik8205"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#00e5ff] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/gatik-yadav-449915259"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#00e5ff] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all ml-2"
            aria-label="Back to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
