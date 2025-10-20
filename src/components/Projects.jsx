import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "INFORM Project",
    link: "https://github.com/inesruizblach/INFORM-Project",
    description: "AI-based food recognition and segmentation system for IoT devices (Raspberry Pi). Implemented YOLOv8, EdgeSAM, MobileSAM, trained on public and proprietary datasets; achieved competitive metrics (mIoU, mAcc, aAcc).",
    extra: "Research contributed to: Food recognition and segmentation using embedded hardware — SPIE 2024.",
    tech: "Python · TensorFlow · PyTorch · OpenCV · YOLO · Raspberry Pi"
  },
  {
    name: "Morphix",
    link: "https://github.com/inesruizblach/Morphix",
    description: "Transforms portrait photos into artistic styles (Comic, Anime, Oil Painting, Pixel Art, Watercolour) using Stable Diffusion + ControlNet. Runs interactively via Gradio.",
    extra: "Live demo: Hugging Face Spaces",
    tech: "Python · PyTorch · Hugging Face Diffusers · ControlNet · Gradio · OpenCV",
    demo: "https://huggingface.co/spaces/inesruizblach/Morphix"
  },
  {
    name: "PersonaGen",
    link: "https://github.com/inesruizblach/PersonaGen",
    description: "Generates synthetic human portraits from text prompts, customizable by age, gender, expression, and artistic style. Interactive demo via Gradio.",
    extra: "Live demo: Hugging Face Spaces",
    tech: "Python · Hugging Face Diffusers · Gradio",
    demo: "https://huggingface.co/spaces/inesruizblach/personagen"
  },
  {
    name: "SinGlu",
    link: "https://github.com/inesruizblach/SinGlu",
    description: "AI-powered gluten-free recipe generator using available ingredients and smart substitutions. Web UI built with Streamlit.",
    tech: "Python 3.10+ · Streamlit · Hugging Face Inference API · Requests",
    demo: "https://share.streamlit.io/inesruizblach/SinGlu"
  },
  {
    name: "LiteBank",
    link: "https://github.com/inesruizblach/LiteBank",
    description: "Lightweight banking/finance related project. See repo for details.",
    tech: "Python · React · SQL (depending on repo)"
  }
];

const Projects = () => (
  <motion.section
    className="bg-white rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-semibold mb-4">Projects</h2>
    {projects.map((proj, i) => (
      <div key={i} className="mb-4 border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold text-blue-700">
          <a href={proj.link} target="_blank" rel="noopener">{proj.name}</a>
        </h3>
        <p className="mt-1">{proj.description}</p>
        {proj.extra && <p className="text-gray-500 text-sm mt-1">{proj.extra}</p>}
        {proj.demo && <p className="text-gray-500 text-sm mt-1"><a href={proj.demo} target="_blank" rel="noopener">Live Demo</a></p>}
        <p className="text-gray-500 text-sm mt-1">Tech: {proj.tech}</p>
      </div>
    ))}
  </motion.section>
);

export default Projects;
