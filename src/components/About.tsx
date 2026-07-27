import { FaGraduationCap, FaRocket, FaUserCheck, FaLaptopCode } from 'react-icons/fa6'

export default function About() {
  const stats = [
    {
      icon: <FaRocket className="w-5 h-5 text-[#00e5ff]" />,
      value: '5+',
      label: 'Production Projects',
      sub: 'AI, Web & Mobile',
      glow: 'from-[#00e5ff]/20 to-transparent',
    },
    {
      icon: <FaGraduationCap className="w-5 h-5 text-indigo-400" />,
      value: '2027',
      label: 'B.Tech CSE',
      sub: 'JUET Guna',
      glow: 'from-indigo-500/20 to-transparent',
    },
    {
      icon: <FaLaptopCode className="w-5 h-5 text-emerald-400" />,
      value: '71%',
      label: 'AI Fraud Pipeline',
      sub: '24K+ Image Dataset',
      glow: 'from-emerald-500/20 to-transparent',
    },
    {
      icon: <FaUserCheck className="w-5 h-5 text-amber-400" />,
      value: 'Open',
      label: 'For Internships',
      sub: 'SDE / ML Engineer',
      glow: 'from-amber-500/20 to-transparent',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-[#070a14]/60 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-mono mb-3">
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight">
            Building Systems at the <br />
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#818cf8] bg-clip-text text-transparent">
              Intersection of Code & Intelligence
            </span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-white">Jaypee University of Engineering and Technology (JUET), Guna</strong>. I thrive on translating theoretical concepts into deployable, user-focused software applications.
            </p>
            <p>
              My expertise spans <span className="text-[#00e5ff] font-semibold">Full-Stack Web Development</span>, <span className="text-[#818cf8] font-semibold">Machine Learning Pipelines</span>, and <span className="text-emerald-400 font-semibold">Computer Vision</span>. Rather than focusing solely on isolated code snippets, I build complete end-to-end architectures — from FastAPI/Node.js microservices to intuitive React interfaces.
            </p>
            <p className="text-sm text-gray-400 bg-white/[0.02] p-4 rounded-2xl border border-white/10">
              💡 <strong className="text-gray-200">Current Focus:</strong> Seeking SDE and Machine Learning Internship opportunities where I can solve real-world engineering problems and deliver impactful software.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative group p-5 rounded-2xl bg-[#0d1222]/80 border border-white/10 backdrop-blur-md hover:border-[#00e5ff]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.glow} blur-2xl rounded-full -mr-8 -mt-8 pointer-events-none`} />
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold font-sans text-white group-hover:text-[#00e5ff] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gray-200 mt-1">{stat.label}</div>
                <div className="text-[11px] font-mono text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
