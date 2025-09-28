// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
        Hi, I’m <span className="text-brand">Gatik</span> 👋
      </h1>
      <p className="max-w-xl text-lg md:text-xl">
        Engineering Student & aspiring SDE/ML developer building sleek web apps and AI projects.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
  <a
    href="/Gatik_Yadav_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
    style={{textDecoration:"none"}}
  >
    <span className="font-medium text-white select-none">
      View Resume  
    </span>
  </a>
</div>
</div>
  );
}
