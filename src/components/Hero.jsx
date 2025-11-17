export default function Hero() {
  return (
    <section className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0A1A2F] via-[#0F2A45] to-[#123456] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-400">Hamid Khan</span>
        </h2>

        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Front-End Developer • React JS Specialist • WordPress Expert
        </p>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I build modern, clean and performance-optimized websites using
          React JS, Tailwind CSS, WordPress and Bootstrap.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
