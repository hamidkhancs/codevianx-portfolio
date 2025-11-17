
import hamidImage from "../images/img.jpeg";


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#0A1A2F] text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Image / Illustration */}
        <div className="flex justify-center">
          <img
            src={hamidImage}
            alt="Hamid Khan"
            className="rounded-2xl shadow-xl w-72 h-72 object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
            About Me
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
            I am <span className="font-semibold text-white">Hamid Khan</span>, a passionate Front-End Developer
            with experience in creating modern, responsive, and user-friendly websites. I specialize in 
            React JS, Tailwind CSS, WordPress, and Bootstrap.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            My goal is to build clean, visually appealing, and performance-optimized web applications. 
            I focus on delivering professional quality work with modern design and functionality.
          </p>
        </div>

      </div>
    </section>
  );
}
