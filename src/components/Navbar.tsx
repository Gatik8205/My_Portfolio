import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 z-50 w-full shadow backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
      <nav className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        {/* Left – site title */}
        <a href="#home" className="text-xl font-bold text-brand">
          Gatik Yadav
        </a>

        {/* Center – internal links */}
        <ul className="hidden space-x-6 font-medium md:flex">
          {["about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-800 capitalize hover:text-brand dark:text-gray-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right – external links + dark-mode toggle */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Gatik8205"
            target="_blank"
            rel="noopener noreferrer"
            // remove default link styles for plain-text look
            style={{
              textDecoration:"none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <FaGithub className="text-2xl text-[#6e5494]" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gatik-yadav-449915259"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration:"none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <FaLinkedin className="text-2xl text-[#0A66C2]" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              LinkedIn
            </span>
          </a>

          {/* Dark-mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
