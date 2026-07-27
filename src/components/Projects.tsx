import { useState } from 'react'
import { FaGithub, FaUpRightFromSquare, FaStar, FaMagnifyingGlass } from 'react-icons/fa6'

interface Project {
  title: string
  desc: string
  stack: string[]
  type: 'AI / ML' | 'Full Stack' | 'Computer Vision' | 'Mobile' | 'Frontend'
  github: string
  githubBack?: string
  live?: string
  featured?: boolean
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const projectsList: Project[] = [
    {
      title: 'AI Document Fraud Detection',
      desc: 'Hybrid CNN + Digital Forensics pipeline detecting forged documents using a ResNet18 backbone, Error Level Analysis, Grad-CAM heatmaps, ORB clone detection, and OCR metadata scoring. Evaluated on 24K+ images.',
      stack: ['PyTorch', 'FastAPI', 'React', 'OpenCV', 'ResNet18', 'Grad-CAM', 'ELA'],
      type: 'AI / ML',
      github: 'https://github.com/Gatik8205/Document_Fraud_Detection',
      live: 'https://document-fraud-detection.vercel.app',
      featured: true,
    },
    {
      title: 'Digital Literacy Chatbot',
      desc: 'AI chatbot integrating Gemini, OpenRouter, and Groq APIs to educate users on digital literacy with intelligent multi-LLM response routing and real-time streaming.',
      stack: ['Node.js', 'Express.js', 'Gemini API', 'OpenRouter', 'Groq'],
      type: 'AI / ML',
      github: 'https://github.com/Gatik8205/DLC_Chat_Bot_frontend',
      githubBack: 'https://github.com/Gatik8205/DLC_Chat_Bot_backend',
      live: 'https://dlc-chat-bot-frontend.vercel.app/',
      featured: true,
    },

    {
      title: 'CV Surveillance System',
      desc: 'Real-time computer vision surveillance using OpenCV and Dlib for multi-face detection, motion tracking, and automated anomaly alerting.',
      stack: ['Python', 'OpenCV', 'Dlib', 'CNN'],
      type: 'Computer Vision',
      github: 'https://github.com/Gatik8205/smart_surveillance_system',
    },
    {
      title: 'Android Healthcare App',
      desc: 'Native Android mobile application for health record management, doctor appointment booking, and user profile administration.',
      stack: ['Java', 'Android Studio', 'XML', 'SQLite'],
      type: 'Mobile',
      github: 'https://github.com/Gatik8205/HealthCareApp',
    },
    {
      title: 'Virtual Photo Gallery',
      desc: 'Interactive React web gallery with dynamic grid layouts, category filtering, smooth lightbox preview transitions, and responsive design.',
      stack: ['React', 'JavaScript', 'CSS3'],
      type: 'Frontend',
      github: 'https://github.com/Gatik8205/Virtual-Gallery-App',
      live: 'https://virtual-gallery-app.vercel.app/login.html',
    },
  ]

  const categories = ['All', 'AI / ML', 'Full Stack', 'Computer Vision', 'Mobile', 'Frontend']

  const filteredProjects = projectsList.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.type === selectedCategory
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="projects" className="relative py-24 bg-[#070a14]/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-mono mb-3">
              <span>03 / FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight">
              Projects & Engineering Work
            </h2>
          </div>

          {/* Controls: Search and Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 lg:mt-0">
            {/* Search Input */}
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Filter by tech or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-[#0d1222]/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff]/60 w-full sm:w-56 backdrop-blur-md"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 bg-[#0d1222]/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#00e5ff] text-[#05070f] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0d1222]/90 border border-white/10 backdrop-blur-xl hover:border-[#00e5ff]/40 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div>
                {/* Header Row (Type Badge + Featured Star) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20">
                    {project.type}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <FaStar className="w-3 h-3 text-amber-400" />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#00e5ff] transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans line-clamp-4">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Details (Tech stack + Links) */}
              <div className="pt-4 border-t border-white/10">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Link Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-[#00e5ff] transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>{project.githubBack ? 'Frontend' : 'Code'}</span>
                  </a>

                  {project.githubBack && (
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-[#00e5ff] transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Backend</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00e5ff] hover:text-[#38bdf8] ml-auto transition-colors"
                    >
                      <span>Live Demo</span>
                      <FaUpRightFromSquare className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#0d1222]/40 rounded-2xl border border-dashed border-white/10">
            <p className="text-gray-400 font-mono text-sm">No projects matched your filter query.</p>
          </div>
        )}

      </div>
    </section>
  )
}
