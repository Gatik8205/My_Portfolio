export default function About() {
  const skills = ['React.js','Node.js','MongoDB','Python','C++','TailwindCSS','Express.js','JavaScript','Html','CSS','Machine Learning','Git/Github','OpenCV'];
  return (
    <div className="max-w-6xl px-4 py-24 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
      <p className="mb-10 text-lg text-center">
        A 3rd-year CSE student passionate about full-stack development, machine learning,
        and building real-world solutions.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {skills.map(skill=>(
          <div key={skill}
            className="p-3 text-center transition bg-gray-100 rounded-lg shadow dark:bg-gray-800 hover:shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
