import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaCode, FaBrain, FaTerminal, FaWandMagicSparkles, FaDownload } from 'react-icons/fa6'

interface HeroProps {
  onOpenResumeModal?: () => void
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const roles = [
    'Full-Stack Developer',
    'AI & Machine Learning Engineer',
    'Computer Vision Developer',
    'B.Tech CSE @ JUET Guna',
  ]

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1))
          if (displayText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Column - Main Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start transition-all duration-700">

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to SDE & ML Internships (2025/2026)</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08] mb-4">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
              Gatik Yadav
            </span>
          </h1>

          {/* Dynamic Typing Role */}
          <div className="h-10 flex items-center gap-2 text-xl sm:text-2xl font-mono text-[#00e5ff] mb-6">
            <span>&gt;</span>
            <span className="font-semibold">{displayText}</span>
            <span className="w-2.5 h-6 bg-[#00e5ff] animate-pulse inline-block"></span>
          </div>

          {/* Tagline Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans">
            Passionate CS undergraduate building intelligent web applications, computer vision systems, and deep learning pipelines. Focused on shipping production-ready projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-[#05070f] bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-[1.02] transition-all duration-200"
            >
              <span>Explore Work</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-md cursor-pointer group"
            >
              <FaDownload className="w-3.5 h-3.5 text-[#00e5ff] group-hover:translate-y-0.5 transition-transform" />
              <span>Resumes (SDE / ML)</span>
            </button>

            <a
              href="#spotlight"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-[#00e5ff] bg-white/[0.03] border border-[#00e5ff]/30 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/60 transition-all duration-200 backdrop-blur-md"
            >
              <FaWandMagicSparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>AI Spotlight</span>
            </a>
          </div>

          {/* Quick Social Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Gatik8205"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gatik-yadav-449915259"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all duration-200"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:gatikyadav8205@gmail.com"
              aria-label="Email"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all duration-200"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            <span className="text-xs font-mono text-gray-500 ml-2">gatikyadav8205@gmail.com</span>
          </div>
        </div>

        {/* Right Column - Visual Code Card Showcase */}
        <div className="lg:col-span-5 relative transition-all duration-700">
          {/* Card Container */}
          <div className="relative rounded-2xl bg-[#0d1222]/90 border border-white/15 p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group">
            {/* Top Code Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                  <FaTerminal className="w-3 h-3 text-[#00e5ff]" />
                  developer.py
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            {/* Code Content snippet */}
            <pre className="font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto">
              <code>
                <div>
                  <span className="text-purple-400">class</span> <span className="text-amber-300">SoftwareEngineer</span>:
                </div>
                <div>
                  {"  "}<span className="text-purple-400">def</span> <span className="text-[#00e5ff]">me</span>():
                </div>
                <div>
                  {"    "}self.name = <span className="text-emerald-300">"Gatik Yadav"</span>
                </div>
                <div>
                  {"    "}self.education = <span className="text-emerald-300">"JUET Guna (2027)"</span>
                </div>
                <div>
                  {"    "}self.focus = [<span className="text-emerald-300">"AI/ML"</span>, <span className="text-emerald-300">"Full-Stack"</span>]
                </div>
                <div>
                  {"    "}self.status = <span className="text-amber-300">"Building & Shipping"</span>
                </div>
                <br />
                <div>
                  {"  "}<span className="text-purple-400">def</span> <span className="text-[#00e5ff]">get_stack</span>():
                </div>
                <div>
                  {"    "}<span className="text-purple-400">return</span> [
                </div>
                <div>
                  {"      "}<span className="text-sky-300">"React"</span>, <span className="text-sky-300">"Python"</span>, <span className="text-sky-300">"PyTorch"</span>,
                </div>
                <div>
                  {"      "}<span className="text-sky-300">"Node.js"</span>, <span className="text-sky-300">"FastAPI"</span>, <span className="text-sky-300">"OpenCV"</span>
                </div>
                <div>
                  {"    "}]
                </div>
              </code>
            </pre>

            {/* Bottom Card Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff]">
                  <FaBrain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI Fraud ML</div>
                  <div className="text-[10px] font-mono text-gray-400">71% ResNet Acc.</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <FaCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Stack</div>
                  <div className="text-[10px] font-mono text-gray-400">MERN & APIs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glowing Accent behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5ff] to-[#6366f1] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
        </div>

      </div>
    </section>
  )
}
