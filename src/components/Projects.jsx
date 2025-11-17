export default function Projects() {
  const projects = [
    { title: "Project 1", desc: "Description coming soon..." },
    { title: "Project 2", desc: "Description coming soon..." },
    { title: "Project 3", desc: "Description coming soon..." },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0A1A2F] text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center">
        Projects
      </h2>

      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-[#0F2A45] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
