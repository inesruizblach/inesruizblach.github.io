import React from "react";
import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    className="bg-white rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-semibold mb-3">Skills</h2>
    <p><strong>Programming & frameworks:</strong> Python · SQL · JavaScript (React) · Flask · VBA · Tkinter</p>
    <p><strong>AI & ML:</strong> Machine Learning · Deep Learning · TensorFlow · PyTorch · YOLOv8 · Stable Diffusion · ControlNet · Gradio · OpenCV · Computer Vision · Image Processing</p>
    <p><strong>Tools & platforms:</strong> Git · GitHub · Jira · Jupyter Notebook · Google Colab · VS Code · PyCharm · Hugging Face</p>
  </motion.section>
);

export default Skills;
