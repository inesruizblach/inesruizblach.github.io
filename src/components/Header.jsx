import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 lg:px-8">
        
        {/* Profile Image */}
        <motion.img
          src="/profile.png"
          alt="Inés Ruiz Blach"
          className="w-40 h-40 rounded-xl shadow-lg object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold">Inés Ruiz Blach</h1>
          <p className="mt-2 text-gray-600 text-lg">
            Senior Software Engineer | Computer Vision & Machine Learning Enthusiast
          </p>
          <p className="mt-1 text-gray-500 text-sm">
            <span className="mr-2">🇬🇧 London, United Kingdom</span> · <span>🇪🇸 Mallorca, Spain</span>
          </p>

          {/* Icon + Label Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            
            <a
              href="https://github.com/inesruizblach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded hover:bg-gray-700 transition text-sm"
            >
              <FaGithub className="text-lg" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/inesruizblach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-800 transition text-sm"
            >
              <FaLinkedin className="text-lg" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://huggingface.co/inesruizblach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition text-sm"
            >
              <SiHuggingface className="text-lg" />
              <span className="font-medium">Hugging Face</span>
            </a>

            <a
              href="mailto:inesruizblach@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 text-white rounded hover:bg-gray-400 transition text-sm"
            >
              <FaEnvelope className="text-lg" />
              <span className="font-medium">Email</span>
            </a>

          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
