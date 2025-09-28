// import React from 'react'

const projects=[
  {
    title: "Digital Literacy ChatBot",
    desc:'Node.js backend with OpenAI GroqAI API to teach digital tools.',
    github:'https://github.com/Gatik8205/DLC_Chat_Bot_frontend',
    live:'https://dlc-chat-bot-frontend.vercel.app/'
  },

  {
    title: "Virtual Gallery Web App",
    desc:'MERN stack with cloudinary image hosting.',
    github:'https://github.com/Gatik8205/Virtual-Gallery-App',
    live:'https://virtual-gallery-app.vercel.app/'
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl px-4 py-24 mx-auto">
      <h2 className="mb-12 text-3xl font-bold text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(p => (
          <div key={p.title}
            className="p-6 transition bg-gray-100 shadow-lg dark:bg-gray-800 rounded-xl hover:scale-105 hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-4">{p.desc}</p>
            <div className="space-x-4">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">GitHub</a>
              <a 
              href={p.live} target="_blank" rel="noopener noreferer" className="text-brand hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}