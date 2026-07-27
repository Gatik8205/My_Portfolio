import { FaShieldHalved, FaEye, FaGithub, FaUpRightFromSquare, FaDiagramProject } from 'react-icons/fa6'

export default function FraudDetectionSpotlight() {
  const pipelineSteps = [
    { name: 'ResNet18 Deep Backbone', desc: 'Feature extraction for deep synthetic forgery detection.' },
    { name: 'Error Level Analysis (ELA)', desc: 'Detects compression rate anomalies across JPEG metadata.' },
    { name: 'Grad-CAM Visual Heatmaps', desc: 'Highlights explicit forgery regions visually for human reviewers.' },
    { name: 'ORB Feature Clone Detection', desc: 'Identifies copy-paste manipulation & mirrored document elements.' },
    { name: 'OCR Metadata Scoring', desc: 'Cross-verifies font alignments & text structure consistency.' },
  ]

  return (
    <section id="spotlight" className="relative py-24 bg-gradient-to-b from-[#05070f] via-[#090e1f] to-[#05070f] border-y border-[#00e5ff]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00e5ff]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono w-fit mb-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <FaShieldHalved className="w-3.5 h-3.5" />
          <span>FLAGSHIP AI PROJECT SPOTLIGHT</span>
        </div>

        {/* Main Spotlight Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight leading-tight">
              AI Document Fraud Detection & <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
                Digital Forensics Pipeline
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-center gap-3 lg:justify-end">
            <a
              href="https://document-fraud-detection.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-[#05070f] bg-[#00e5ff] hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <span>Live Application</span>
              <FaUpRightFromSquare className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/Gatik8205/Document_Fraud_Detection"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaGithub className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Pipeline Details Card */}
          <div className="lg:col-span-7 bg-[#0d1222]/90 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <p className="text-gray-300 text-base leading-relaxed font-sans">
              A hybrid machine learning and computer vision pipeline designed to combat forged identities and tampered official documentation. Evaluated over a <strong className="text-white">24,000+ image dataset</strong> achieving <strong className="text-[#00e5ff]">~71% validation accuracy</strong> across synthetic forgeries.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div>
                <div className="text-2xl font-extrabold font-sans text-[#00e5ff]">~71%</div>
                <div className="text-[11px] font-mono text-gray-400 mt-0.5">Model Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-sans text-indigo-400">24K+</div>
                <div className="text-[11px] font-mono text-gray-400 mt-0.5">Dataset Samples</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-sans text-emerald-400">5-Layer</div>
                <div className="text-[11px] font-mono text-gray-400 mt-0.5">Forensics Pipeline</div>
              </div>
            </div>

            {/* Architecture Steps Breakdown */}
            <div>
              <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaDiagramProject className="w-3.5 h-3.5 text-[#00e5ff]" />
                Forensics Multi-Stage Pipeline
              </h4>

              <div className="space-y-2.5">
                {pipelineSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00e5ff]/30 transition-all">
                    <span className="w-5 h-5 rounded-md bg-[#00e5ff]/10 text-[#00e5ff] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">{step.name}</div>
                      <div className="text-[11px] font-mono text-gray-400">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Heatmap & Forensics Visual Demo Card */}
          <div className="lg:col-span-5 bg-[#0a0e1c] border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
            {/* Header Mock */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <FaEye className="w-4 h-4 text-[#00e5ff]" />
                <span className="text-xs font-mono text-white font-bold">Grad-CAM & ELA Heatmap View</span>
              </div>
              <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 animate-pulse">
                FORGERY DETECTED
              </span>
            </div>

            {/* Mock Visual Inspector Box */}
            <div className="relative rounded-2xl bg-[#05070f] border border-white/10 p-5 space-y-4 font-mono text-xs text-gray-300">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-400">Target Image:</span>
                <span className="text-emerald-400 font-semibold">id_document_sample_09.jpg</span>
              </div>

              {/* Synthetic Heatmap Visualizer Box */}
              <div className="h-44 rounded-xl bg-gradient-to-br from-[#0c192e] via-[#1a0f2e] to-[#2e0c19] border border-dashed border-[#00e5ff]/40 p-4 relative flex flex-col justify-between overflow-hidden group">
                {/* Heatmap overlay simulation */}
                <div className="absolute top-8 right-10 w-24 h-24 rounded-full bg-red-500/40 blur-xl animate-pulse" />
                <div className="absolute bottom-6 left-12 w-20 h-20 rounded-full bg-yellow-500/40 blur-lg" />

                <div className="relative z-10 text-[10px] text-gray-300 bg-black/60 px-2.5 py-1 rounded-md w-fit backdrop-blur-md border border-white/10">
                  SCAN STATUS: <span className="text-[#00e5ff]">TAMPERED METADATA</span>
                </div>

                <div className="relative z-10 text-right">
                  <div className="text-lg font-bold font-sans text-red-400">89.4% Forgery Conf.</div>
                  <div className="text-[10px] text-gray-400">Grad-CAM Alert @ Region [X:140, Y:82]</div>
                </div>
              </div>

              {/* Real-time score Breakdown */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-400">ELA Compression Noise:</span>
                  <span className="text-red-400 font-bold">High Anomaly (0.84)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                </div>

                <div className="flex justify-between text-[11px] pt-1">
                  <span className="text-gray-400">ORB Clone Matching:</span>
                  <span className="text-amber-400 font-bold">Suspicious Duplicates</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>

            {/* Bottom Tech pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['PyTorch', 'FastAPI', 'React', 'OpenCV', 'ResNet18', 'Grad-CAM', 'ELA'].map(t => (
                <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
