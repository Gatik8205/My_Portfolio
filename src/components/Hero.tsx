export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
        Hi, I’m <span className="text-brand">Gatik</span> 👋
      </h1>
      <p className="max-w-xl text-lg md:text-xl">
        Engineering Student & aspiring SDE/ML developer building sleek web apps and AI projects.
      </p>
      <a href="#projects"
        className="inline-block px-6 py-3 mt-8 text-white transition rounded-lg shadow bg-brand hover:bg-brand-dark">
        View My Work
      </a>
    </div>
  );
}
