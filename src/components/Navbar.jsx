export default function Navbar() {
  return (
    <nav className="bg-[#0A1A2F] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          CodevianX
        </h1>

        <div className="space-x-6 hidden md:flex font-medium">
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
