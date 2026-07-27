import { useEffect, useState } from 'react'

export default function BackgroundEffect() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out opacity-25 blur-[100px]"
        style={{
          width: '500px',
          height: '500px',
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)',
        }}
      />

      {/* Static Background Ambient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  )
}
