import { useState } from 'react'

import {
  SiJavascript as JsIcon,
  SiPython as PythonIcon,
  SiHtml5 as HtmlIcon,
  SiCss3 as CssIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiNodedotjs as NodeIcon,
  SiExpress as ExpressIcon,
  SiFastapi as FastApiIcon,
  SiMongodb as MongoIcon,
  SiPytorch as PyTorchIcon,
  SiOpencv as OpenCvIcon,
  SiGit as GitIcon,
  SiGithub as GithubIcon,
  SiPostman as PostmanIcon,
  SiVercel as VercelIcon,
  SiRender as RenderIcon,
} from 'react-icons/si'
import { FaCode, FaServer, FaBrain, FaDatabase, FaWrench } from 'react-icons/fa6'

interface SkillItem {
  name: string
  icon?: React.ReactNode
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  color: string
  skills: SkillItem[]
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All')

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <FaCode className="w-4 h-4" />,
      color: '#fbbf24',
      skills: [
        { name: 'JavaScript', icon: <JsIcon />, color: '#f7df1e' },
        { name: 'Python', icon: <PythonIcon />, color: '#3776ab' },
        { name: 'HTML5', icon: <HtmlIcon />, color: '#e34f26' },
        { name: 'CSS3', icon: <CssIcon />, color: '#1572b6' },
      ],
    },
    {
      title: 'Frontend',
      icon: <FaCode className="w-4 h-4" />,
      color: '#00e5ff',
      skills: [
        { name: 'React.js', icon: <ReactIcon />, color: '#61dafb' },
        { name: 'Tailwind CSS', icon: <TailwindIcon />, color: '#06b6d4' },
        { name: 'Responsive Design', color: '#00e5ff' },
      ],
    },
    {
      title: 'Backend',
      icon: <FaServer className="w-4 h-4" />,
      color: '#34d399',
      skills: [
        { name: 'Node.js', icon: <NodeIcon />, color: '#339933' },
        { name: 'Express.js', icon: <ExpressIcon />, color: '#ffffff' },
        { name: 'FastAPI', icon: <FastApiIcon />, color: '#009688' },
        { name: 'JWT Auth', color: '#34d399' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <FaDatabase className="w-4 h-4" />,
      color: '#a78bfa',
      skills: [
        { name: 'MongoDB', icon: <MongoIcon />, color: '#47a248' },
        { name: 'Vercel', icon: <VercelIcon />, color: '#ffffff' },
        { name: 'Render', icon: <RenderIcon />, color: '#46e3b7' },
      ],
    },
    {
      title: 'AI / ML & CV',
      icon: <FaBrain className="w-4 h-4" />,
      color: '#f87171',
      skills: [
        { name: 'PyTorch', icon: <PyTorchIcon />, color: '#ee4c2c' },
        { name: 'OpenCV', icon: <OpenCvIcon />, color: '#5c3ee8' },
        { name: 'CNN / ResNet', color: '#f87171' },
        { name: 'Dlib', color: '#f87171' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <FaWrench className="w-4 h-4" />,
      color: '#38bdf8',
      skills: [
        { name: 'Git', icon: <GitIcon />, color: '#f05032' },
        { name: 'GitHub', icon: <GithubIcon />, color: '#ffffff' },
        { name: 'Postman', icon: <PostmanIcon />, color: '#ff6c37' },
        { name: 'VS Code', color: '#007acc' },
      ],
    },
  ]

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeTab)

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-mono mb-3">
              <span>02 / TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight">
              Technologies I Build With
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 bg-[#0d1222]/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {['All', 'Languages', 'Frontend', 'Backend', 'AI / ML & CV'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#00e5ff] text-[#05070f] font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="relative group p-6 rounded-2xl bg-[#0d1222]/80 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="p-2 rounded-xl border flex items-center justify-center"
                    style={{
                      color: category.color,
                      borderColor: `${category.color}40`,
                      backgroundColor: `${category.color}15`,
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold font-sans text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills Cloud */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/10 transition-all duration-200 cursor-default"
                    >
                      {skill.icon && (
                        <span
                          className="text-sm transition-transform group-hover/pill:scale-110"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-xs font-mono text-gray-200 group-hover/pill:text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Shimmer line */}
              <div
                className="w-full h-0.5 mt-6 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(to right, ${category.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
