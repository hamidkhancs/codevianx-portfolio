import { FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0F2A45] text-white px-6 py-20"
    >
      <div className="max-w-4xl w-full bg-[#0A1A2F] rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg md:text-xl text-gray-300">
          <p className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-blue-400" /> 
            <span>hamidkhancs@gmail.com / codevianx@gmail.com</span>
          </p>
          <p className="flex items-center justify-center space-x-3">
            <FaPhone className="text-blue-400" /> 
            <span>+92 314 9290853</span>
          </p>
          <p className="flex items-center justify-center space-x-3">
            <FaFacebook className="text-blue-400" /> 
            <span><a href="https://www.facebook.com/CodevianX/" target="_blank">CodevianX</a></span>
          </p>
          <p className="flex items-center justify-center space-x-3">
            <FaLinkedin className="text-blue-400" /> 
            <span><a href="https://www.linkedin.com/in/hamidkhancs/" target="_blank">Hamid Khan</a> </span>
          </p>
        </div>
      </div>
    </section>
  );
}
