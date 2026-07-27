import { useState } from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaPaperPlane, FaLocationDot, FaCircleCheck } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending / triggering email
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Open fallback mailto link as well
      const mailtoUrl = `mailto:gatikyadav8205@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`
      window.location.href = mailtoUrl
    }, 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-mono mb-3">
            <span>04 / CONTACT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-gray-300 text-base leading-relaxed font-sans">
              I am actively seeking <strong className="text-white">Software Development (SDE)</strong> and <strong className="text-white">Machine Learning (ML) Internship</strong> opportunities. Feel free to reach out for collaborations, project inquiries, or just a tech chat!
            </p>

            <div className="space-y-4 pt-2">
              {/* Contact Card 1 */}
              <a
                href="mailto:gatikyadav8205@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0d1222]/80 border border-white/10 backdrop-blur-md hover:border-[#00e5ff]/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Personal Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    gatikyadav8205@gmail.com
                  </div>
                </div>
              </a>

              {/* Contact Card 2 */}
              <a
                href="mailto:231b115@juetguna.in"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0d1222]/80 border border-white/10 backdrop-blur-md hover:border-indigo-400/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Institutional Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                    231b115@juetguna.in
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1222]/80 border border-white/10 backdrop-blur-md">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FaLocationDot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Location</div>
                  <div className="text-sm font-bold text-white">JUET Campus, Guna, MP, India</div>
                </div>
              </div>
            </div>

            {/* Social Buttons Row */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://github.com/Gatik8205"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/gatik-yadav-449915259"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 transition-all"
              >
                <FaLinkedinIn className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0d1222]/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <FaCircleCheck className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-sans text-white">Message Dispatched!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto font-sans">
                  Your mail client has been launched with your message details. I will get back to you within 24 hours!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl font-mono text-xs text-[#00e5ff] bg-white/5 border border-[#00e5ff]/30 hover:bg-[#00e5ff]/10 transition-all mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-sans text-white mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff]/60 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff]/60 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="SDE Internship / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff]/60 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Gatik, I saw your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff]/60 font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-[#05070f] bg-[#00e5ff] hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
