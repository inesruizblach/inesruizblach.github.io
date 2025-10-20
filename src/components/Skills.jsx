import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Programming & Frameworks": ["Python", "SQL", "JavaScript (React)", "Flask", "VBA", "Tkinter"],
  "AI & ML": ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "YOLOv8", "Stable Diffusion", "ControlNet", "Gradio", "OpenCV", "Computer Vision", "Image Processing"],
  "Tools & Platforms": ["Git", "GitHub", "Jira", "Jupyter Notebook", "Google Colab", "VS Code", "PyCharm", "Hugging Face"]
};

const Skills = () => (
  <motion.section
    className="bg-gray-100 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
    <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6 rounded"></div>

    {Object.entries(skills).map(([category, items], i) => (
      <div key={i} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, j) => (
            <span
              key={j}
              className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </motion.section>
);

export default Skills;
