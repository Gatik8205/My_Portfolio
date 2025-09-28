import { useEffect, useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="fixed top-0 z-50 w-full shadow backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
      <nav className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <a href="#home" className="text-xl font-bold text-brand">Gatik Yadav</a>
        <ul className="hidden space-x-6 font-medium md:flex">
          {['about','projects','contact'].map(item=>(
            <li key={item}>
              <a href={`#${item}`} className="capitalize hover:text-brand">{item}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}
