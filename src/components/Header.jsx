import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white shadow py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 lg:px-8">
        <motion.img
          src="https://via.placeholder.com/160?text=Photo"
          alt="Profile placeholder"
          className="w-40 h-40 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
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
            <span className="mr-2">🇬🇧 London</span> · <span>🇪🇸 Mallorca</span>
          </p>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://github.com/inesruizblach"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/inesruizblach"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/inesruizblach"
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
              target="_blank"
              rel="noopener"
            >
              Hugging Face
            </a>
            <a
              href="mailto:inesruizblach@gmail.com"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
