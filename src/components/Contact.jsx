import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

const Contact = () => (
  <motion.section
    className="bg-gray-100 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
    <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6 rounded"></div>
    
    <div className="mt-6 flex flex-wrap justify-center gap-3 text-center">
    
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

  </motion.section>
);

export default Contact;
