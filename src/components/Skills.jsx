export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React JS",
    "Tailwind CSS", "Bootstrap", "WordPress"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0F2A45] text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12">
        My Skills
      </h2>

      <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#0A1A2F] border border-blue-600 rounded-xl py-6 text-center font-semibold text-white hover:bg-blue-600 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
