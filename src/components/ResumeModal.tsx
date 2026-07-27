import { useEffect } from 'react'
import { FaCode, FaBrain, FaDownload, FaEye, FaXmark, FaFilePdf } from 'react-icons/fa6'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const resumes = [
    {
      id: 'sde',
      title: 'Software Development Engineer',
      subtitle: 'SDE & Full-Stack Engineering',
      icon: FaCode,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      bgGlow: 'from-[#00e5ff]/10 to-blue-600/10',
      fileUrl: '/Gatik_Yadav_Resume_SDE.pdf',
      fileName: 'Gatik_Yadav_Resume_SDE.pdf',
      description: 'Focuses on Full-Stack Web Development, Data Structures & Algorithms, Frontend/Backend Architecture, and Web Performance.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'System Architecture'],
    },
    {
      id: 'ml',
      title: 'Machine Learning & AI Engineer',
      subtitle: 'AI, ML & Computer Vision',
      icon: FaBrain,
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      bgGlow: 'from-purple-500/10 to-indigo-600/10',
      fileUrl: '/Gatik_Yadav_Resume_ML.pdf',
      fileName: 'Gatik_Yadav_Resume_ML.pdf',
      description: 'Focuses on Computer Vision, Deep Learning Pipelines, PyTorch Model Training, Neural Networks, and Image Fraud Detection.',
      tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'ResNet', 'Python', 'Machine Learning'],
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#05070f]/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#00e5ff]/20 to-[#6366f1]/20 border border-[#00e5ff]/30 text-[#00e5ff]">
              <FaFilePdf className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-sans">Select Resume Version</h2>
              <p className="text-xs font-mono text-gray-400">Choose the resume tailored for your role of interest</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <FaXmark className="w-5 h-5" />
          </button>
        </div>

        {/* Content Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumes.map((resume) => {
            const Icon = resume.icon
            return (
              <div
                key={resume.id}
                className={`relative flex flex-col justify-between p-6 rounded-xl bg-white/[0.03] border ${resume.borderColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] group`}
              >
                {/* Accent Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${resume.color} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${resume.badgeColor}`}>
                      {resume.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-sans mb-2 group-hover:text-[#00e5ff] transition-colors">
                    {resume.title}
                  </h3>

                  <p className="text-xs font-sans text-gray-300 leading-relaxed mb-4">
                    {resume.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {resume.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={resume.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-mono font-semibold text-gray-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <FaEye className="w-3.5 h-3.5 text-[#00e5ff]" />
                    <span>View PDF</span>
                  </a>

                  <a
                    href={resume.fileUrl}
                    download={resume.fileName}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-mono font-bold text-[#05070f] bg-gradient-to-r ${resume.color} shadow-md hover:brightness-110 active:scale-[0.98] transition-all`}
                  >
                    <FaDownload className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>Both resumes updated for 2025/2026 roles</span>
          <span>PDF Format</span>
        </div>
      </div>
    </div>
  )
}
