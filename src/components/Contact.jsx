import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    className="bg-white rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-semibold mb-3">Contact</h2>
    <p>Email: <a href="mailto:inesruizblach@gmail.com" className="text-blue-600">inesruizblach@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/inesruizblach" target="_blank" rel="noopener" className="text-blue-600">/in/inesruizblach</a></p>
    <p>Hugging Face: <a href="https://huggingface.co/inesruizblach" target="_blank" rel="noopener" className="text-blue-600">/inesruizblach</a></p>
  </motion.section>
);

export default Contact;
