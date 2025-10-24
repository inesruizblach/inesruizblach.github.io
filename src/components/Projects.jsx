import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "INFORM Project",
    link: "https://github.com/inesruizblach/INFORM-Project",
    description: (
      <>
        Developed an AI-based food recognition and segmentation system capable of accurately labeling food items and running on IoT-based devices (Raspberry Pi).<br/>
        Implemented and fine-tuned YOLOv8, EdgeSAM, and MobileSAM models, trained on both public (FoodSeg103) and proprietary datasets.<br/>
        Achieved competitive segmentation metrics: mIoU, mAcc, aAcc.<br/>
        Research contributed to the paper: <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13137/3031247/Food-recognition-and-segmentation-using-embedded-hardware/10.1117/12.3031247.short" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Food recognition and segmentation using embedded hardware — SPIE 2024</a>, presented at SPIE Optics + Photonics 2024 and published in the SPIE Digital Library.<br/>
      </>
    ),
    tech: "Python · TensorFlow · PyTorch · OpenCV · YOLO · Raspberry Pi",
  },
  {
    name: "Morphix",
    link: "https://github.com/inesruizblach/Morphix",
    description: (
      <>
        AI app that lets users upload a portrait photo and transform it into different artistic styles: Comic, Anime, Oil Painting, Pixel Art, Watercolour.<br/>
        Uses Stable Diffusion + ControlNet (Canny) to preserve structure while changing artistic style.<br/>
        Runs interactively in-browser via Gradio; Live demo on Hugging Face Spaces.<br/>
      </>
    ),
    demo: "https://huggingface.co/spaces/inesruizblach/Morphix",
    tech: "Python · PyTorch · Hugging Face Diffusers · ControlNet · Gradio"
  },
  {
    name: "PersonaGen",
    link: "https://github.com/inesruizblach/PersonaGen",
    description: (
      <>
        Generates synthetic human portraits from text prompts, customizable by age, gender, expression, and artistic style.<br/>
        Offers artistic filters: watercolour, comic, cyberpunk, oil painting.<br/>
        Runs interactively in-browser via Gradio; Live demo on Hugging Face Spaces.<br/>
      </>
    ),
    demo: "https://huggingface.co/spaces/inesruiz/personagen",
    tech: "Python · PyTorch · Hugging Face Diffusers · Gradio"
  },
  {
    name: "LiteBank API",
    link: "https://github.com/inesruizblach/LiteBank",
    description: (
      <>
        LiteBank is a modern, lightweight banking API built with FastAPI and SQLAlchemy — designed to handle user accounts, transactions, and secure financial operations with JWT authentication.<br/>
        Deployed automatically via GitHub Actions → Render CI/CD pipeline.<br/>
        Features: Create/manage user profiles, deposit/withdraw funds, transfer money, view transaction history, JWT-based authentication, Dockerized for easy deployment.<br/>
      </>
    ),
    demo: "https://litebank.onrender.com/docs",
    tech: "Python · FastAPI · SQLAlchemy · JWT · Docker · GitHub Actions · Render"
  },
  {
    name: "RateFlow",
    link: "https://github.com/inesruizblach/RateFlow",
    description: (
      <>
        RRateFlow is a lightweight, end-to-end data pipeline built with Python.
        It automatically fetches live currency exchange rates from free APIs, stores them locally, and visualizes historical trends in an interactive Streamlit dashboard.<br/>
      </>
    ),
    tech: "Python · FastAPI · SQLAlchemy · SQLite · Pandas · Streamlit · Requests",
  },
  {
    name: "SinGlu",
    link: "https://github.com/inesruizblach/SinGlu",
    description: (
      <>
        Inspired by the challenges of following a gluten-free diet, this AI-powered app generates recipes based on available ingredients and provides smart substitutions for common gluten-containing items.<br/>
        Offers product recommendations to help users source gluten-free ingredients.<br/>
        Uses the Hugging Face chat completion API (zephyr-7b-beta) for recipe generation and runs interactively in-browser via Streamlit; Live demo.<br/>
      </>
    ),
    demo: "https://share.streamlit.io/inesruizblach/SinGlu",
    tech: "Python · Streamlit · Hugging Face Inference API · Requests · JSON configuration for product links · GitHub + Streamlit Cloud for deployment"
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="bg-gray-100 py-16 px-8 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
    <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6 rounded"></div>

    <div className="max-w-6xl mx-auto grid gap-8 md:gap-10">
      {projects.map((proj, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.name}
            </a>
          </h3>

          <p className="text-gray-700 mb-3 text-justify leading-relaxed">{proj.description}</p>

          {proj.demo && (
            <p className="text-sm">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Live Demo →
              </a>
            </p>
          )}

          <p className="text-gray-600 text-sm mt-3">
            <span className="font-medium text-gray-800">Tech:</span>{" "}
            {proj.tech}
          </p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
