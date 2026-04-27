import './App.css'

// ── Data ─────────────────────────────────────────────────

const skillGroups: { cat: string; color: string; items: string[] }[] = [
  { cat: 'Languages',  color: '#fbbf24', items: ['JavaScript', 'Python', 'HTML5', 'CSS3'] },
  { cat: 'Frontend',   color: '#60a5fa', items: ['React.js', 'Tailwind CSS', 'Responsive Design'] },
  { cat: 'Backend',    color: '#34d399', items: ['Node.js', 'Express.js', 'FastAPI', 'JWT Auth'] },
  { cat: 'Database',   color: '#a78bfa', items: ['MongoDB'] },
  { cat: 'AI / ML',    color: '#f87171', items: ['CNN', 'OpenCV', 'Dlib'] },
  { cat: 'Tools',      color: '#00e5ff', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel'] },
]

interface Project {
  title: string
  desc: string
  stack: string[]
  type: string
  github: string
  githubBack?: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'AI Document Fraud Detection',
    desc: 'Hybrid CNN + Digital Forensics pipeline detecting forged documents using a ResNet18 backbone, Error Level Analysis, Grad-CAM heatmaps, ORB clone detection, and OCR metadata scoring. ~71% accuracy on 24K+ image dataset.',
    stack: ['PyTorch', 'FastAPI', 'React', 'OpenCV', 'ResNet18', 'Grad-CAM', 'ELA'],
    type: 'AI / ML',
    github: 'https://github.com/Gatik8205/Document_Fraud_Detection',
    featured: true,
  },
  // {
  //   title: 'MERN Job Application Tracker',
  //   desc: 'Full-stack application tracker with status pipeline management, filters, analytics dashboard, and JWT-secured user accounts deployed on Render.',
  //   stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Render'],
  //   type: 'Full Stack',
  //   github: 'https://github.com/Gatik8205',
  //   featured: true,
  // },
  {
    title: 'Digital Literacy Chatbot',
    desc: 'AI chatbot integrating Gemini, OpenRouter, and Groq APIs to educate users on digital literacy topics with intelligent multi-LLM response routing.',
    stack: ['Node.js', 'Express.js', 'Gemini API', 'OpenRouter', 'Groq'],
    type: 'AI / Chat',
    github: 'https://github.com/Gatik8205/DLC_Chat_Bot_frontend',
    githubBack: 'https://github.com/Gatik8205/DLC_Chat_Bot_backend',
    live: 'https://dlc-chat-bot-frontend.vercel.app/',
    featured: true,
  },
  {
    title: 'CV Surveillance System',
    desc: 'Real-time computer vision surveillance using OpenCV and Dlib for face detection, motion tracking, and anomaly alerting.',
    stack: ['Python', 'OpenCV', 'Dlib', 'CNN'],
    type: 'Computer Vision',
    github: 'https://github.com/Gatik8205/smart_surveillance_system',
  },
  {
    title: 'Android Healthcare App',
    desc: 'Android mobile application for health record management, appointment booking, and user profiles built with Java and Android Studio.',
    stack: ['Java', 'Android Studio', 'XML', 'SQLite'],
    type: 'Mobile',
    github: 'https://github.com/Gatik8205/HealthCareApp',
  },
  {
    title: 'Virtual Photo Gallery',
    desc: 'Interactive React gallery with dynamic grid rendering, category filtering, smooth lightbox transitions, and fully responsive layout.',
    stack: ['React', 'JavaScript', 'CSS3'],
    type: 'Frontend',
    github: 'https://github.com/Gatik8205/Virtual-Gallery-App',
    live: 'https://virtual-gallery-app.vercel.app/login.html',
  },
]

// ── SVG Icons ─────────────────────────────────────────────

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const DownloadIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

// ── Component ─────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="brand">GY<span>.dev</span></a>
          <div className="nav-links">
            {['about', 'skills', 'projects', 'contact'].map(s => (
              <a key={s} href={`#${s}`} className="nav-link">
                {s}
              </a>
            ))}
            <a href="/Gatik_Yadav_Resume.pdf" download className="btn-primary btn-sm">
              <DownloadIcon /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero dot-grid">
        <div className="hero-inner">

          <p className="hero-pre fu fu-0">
            &gt;&nbsp;Hello, world. I'm
            <span className="cursor" />
          </p>

          <h1 className="hero-name fu fu-1">
            Gatik<br />
            <span className="outline">Yadav</span>
          </h1>

          <p className="hero-sub fu fu-2">
            B.Tech CSE · JUET Guna · Class of 2027
          </p>

          <p className="hero-tagline fu fu-3">
            Building intelligent systems at the intersection of{' '}
            <span className="hi">web development</span> and{' '}
            <span className="hi">machine learning</span>.
          </p>

          <div className="hero-actions fu fu-4">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowIcon />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials fu fu-5">
            <a
              href="https://linkedin.com/in/gatik-yadav-449915259"
              target="_blank" rel="noreferrer"
              className="social-btn"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/Gatik8205"
              target="_blank" rel="noreferrer"
              className="social-btn"
            >
              <GithubIcon /> GitHub
            </a>
            <a href="mailto:gatikyadav8205@gmail.com" className="social-btn">
              <MailIcon /> gatikyadav8205@gmail.com
            </a>
          </div>
        </div>

        {/* Decorative orb */}
        <div className="hero-orb" />
      </section>

      {/* ── About ── */}
      <section
        id="about"
        style={{ background: 'var(--surface)', padding: '0' }}
      >
        <div className="section-wrap">
          <p className="section-label">Who I Am</p>
          <div className="about-grid">
            <div>
              <p className="about-body">
                I'm a Computer Science student at{' '}
                <span className="hi">JUET Guna</span>, passionate about turning
                ideas into real, deployable systems. My work spans full-stack
                web applications, Android apps, and ML-powered pipelines.
              </p>
              <p className="about-muted">
                From fraud detection AI with Grad-CAM visualization to MERN
                trackers and chatbots with multi-LLM APIs — I focus on shipping
                production-grade projects, not just notebook experiments. Currently
                seeking{' '}
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>
                  SDE and ML internship
                </span>{' '}
                opportunities.
              </p>
              <a href="#projects" className="about-cta">
                See my projects <ArrowIcon />
              </a>
            </div>

            <div className="stats-grid">
              {[
                { val: '6.8',  sub: '/ 10.0',    label: 'CGPA' },
                { val: '7+',   sub: 'Shipped',    label: 'Projects' },
                { val: '2027', sub: 'B.Tech CSE', label: 'Graduating' },
                { val: 'Open', sub: 'SDE · ML',   label: 'For Internship' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.val}</div>
                  <div className="stat-sub">{s.sub}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills">
        <div className="section-wrap">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <div className="skills-grid">
            {skillGroups.map(({ cat, color, items }) => (
              <div
                key={cat}
                className="skill-card"
                style={{ borderColor: `${color}20` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}55`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}20`
                }}
              >
                <div className="skill-cat" style={{ color }}>
                  {cat}
                </div>
                <div className="skill-tags">
                  {items.map(item => (
                    <span
                      key={item}
                      className="skill-pill"
                      style={{
                        color,
                        backgroundColor: `${color}10`,
                        borderColor: `${color}28`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ background: 'var(--surface)' }}>
        <div className="section-wrap">
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects I've Built</h2>
          <div className="projects-grid">
            {projects.map(p => (
              <div key={p.title} className="project-card">
                {p.featured && (
                  <span className="featured-badge">FEATURED</span>
                )}
                <div className="type-badge">{p.type}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="tech-stack">
                  {p.stack.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    <GithubIcon /> {p.githubBack ? 'Frontend' : 'Code'}
                  </a>
                  {p.githubBack && (
                    <a
                      href={p.githubBack}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <GithubIcon /> Backend
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact">
        <div className="section-wrap" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="contact-wrap">
            <p className="section-label" style={{ justifyContent: 'center' }}>
              Available for Opportunities
            </p>
            <h2 className="contact-title">
              Let's Build<br />
              <span className="hi">Something Great</span>
            </h2>
            <p className="contact-desc">
              Open to SDE and ML internship opportunities. Drop me an email or
              connect on LinkedIn — I'd love to chat.
            </p>
            <div className="contact-actions">
              <a href="mailto:231b115@juetguna.in" className="btn-primary">
                <MailIcon /> Send Email
              </a>
              <a
                href="https://linkedin.com/in/gatik-yadav-449915259"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-text">© 2025 Gatik Yadav</span>
          <span className="footer-text">Built with React · TypeScript · Vite · Tailwind</span>
        </div>
      </footer>

    </div>
  )
}