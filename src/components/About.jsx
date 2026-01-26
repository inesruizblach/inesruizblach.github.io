import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="bg-gray-100 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-8 py-16 gap-8">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/poster_fair.jpeg"
          alt="Inés Ruiz"
          className="rounded-lg shadow-lg w-3/4 md:w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        {/* About */}
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="w-40 h-0.5 bg-gray-300 mb-6 rounded"></div>
        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          Senior Software Engineer with a <strong>First-Class Honours in Computer Science</strong> from Newcastle University.<br />
          Researcher on the <strong>INFORM project</strong> — AI-based food recognition & segmentation — presented at 
          <em> SPIE Optics + Photonics 2024</em> and published in the <a href="https://doi.org/10.1117/12.3031247" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">SPIE Digital Library</a>.<br />
        </p>
      </div>

    </div>
  </motion.section>
);

export default About;
