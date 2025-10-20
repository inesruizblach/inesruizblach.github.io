import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    className="bg-white rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-semibold mb-3">About</h2>
    <p>
      Graduate Software Engineer with a <strong>First-Class Honours in Computer Science</strong> from Newcastle University.
      Researcher on the <strong>INFORM project</strong> — AI-based food recognition & segmentation — presented at
      <em> SPIE Optics + Photonics 2024</em> and published in the <a href="https://doi.org/10.1117/12.3031247" className="text-blue-600" target="_blank" rel="noopener">SPIE Digital Library</a>.
      Passionate about building production-ready systems that combine software engineering, AI, and computer vision.
    </p>
  </motion.section>
);

export default About;
