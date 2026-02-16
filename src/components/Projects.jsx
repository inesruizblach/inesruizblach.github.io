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
        Research contributed to the paper{" "}
        <a
          href="https://doi.org/10.1117/12.3031247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Food recognition and segmentation using embedded hardware
        </a>, presented at SPIE Optical Engineering + Applications 2024 and published in the SPIE Digital Library.<br/>
      </>
    ),
    tech: "Python · TensorFlow · PyTorch · OpenCV · YOLO · Raspberry Pi",
  },
  {
    name: "LiteBank API",
    link: "https://github.com/inesruizblach/LiteBank",
    description: (
      <>
        Modern, lightweight banking API built with FastAPI and SQLAlchemy, designed to handle user accounts, transactions, and secure financial operations with JWT authentication.<br/>
        Deployed automatically via a GitHub Actions → Render CI/CD pipeline.<br/>
        Supports user management, deposits, withdrawals, transfers, transaction history, and JWT-based authentication.<br/>
      </>
    ),
    demo: "https://litebank.onrender.com/docs",
    tech: "Python · FastAPI · SQLAlchemy · JWT · Docker · GitHub Actions · Render",
  },
  {
    name: "RateFlow",
    link: "https://github.com/inesruizblach/RateFlow",
    description: (
      <>
        Lightweight, end-to-end data pipeline that automatically fetches live currency exchange rates from open APIs and visualises historical trends in an interactive dashboard.<br/>
        Implements automated ETL, local persistence with SQLite, and interactive data exploration via Streamlit.<br/>
      </>
    ),
    tech: "Python · Pandas · SQLAlchemy · SQLite · Streamlit · Requests · Altair",
  },
  {
    name: "LangChain-DocRAG",
    link: "https://github.com/inesruizblach/LangChain-DocRAG",
    description: (
      <>
        AI-powered document question answering application that allows users to upload PDF files and query them interactively.<br/>
        Implements a Retrieval-Augmented Generation (RAG) pipeline using LangChain, combining semantic retrieval with Hugging Face hosted LLMs.<br/>
        Uses local Sentence-Transformers embeddings, ChromaDB for vector storage, and provides source-aware answers with page references via a Streamlit UI.<br/>
      </>
    ),
    tech: "Python · Streamlit · LangChain · Hugging Face Inference API · Sentence-Transformers · ChromaDB · PyPDF · dotenv",
  },
  {
    name: "Morphix",
    link: "https://github.com/inesruizblach/Morphix",
    description: (
      <>
        AI application that allows users to upload a portrait photo and transform it into multiple artistic styles, including Comic, Anime, Oil Painting, Pixel Art, and Watercolour.<br/>
        Uses Stable Diffusion with ControlNet (Canny) to preserve facial structure while applying stylistic transformations.<br/>
        Runs interactively in-browser via Gradio, with a live demo hosted on Hugging Face Spaces.<br/>
      </>
    ),
    demo: "https://huggingface.co/spaces/inesruizblach/Morphix",
    tech: "Python · PyTorch · Hugging Face Diffusers · ControlNet · Gradio · OpenCV",
  },
  {
    name: "PersonaGen",
    link: "https://github.com/inesruizblach/PersonaGen",
    description: (
      <>
        Generates synthetic human portraits from text prompts, with configurable attributes such as age, gender, expression, and artistic style.<br/>
        Supports multiple artistic filters including watercolour, comic, cyberpunk, and oil painting.<br/>
        Runs interactively in-browser via Gradio, with a live demo hosted on Hugging Face Spaces.<br/>
      </>
    ),
    demo: "https://huggingface.co/spaces/inesruizblach/PersonaGen",
    tech: "Python · PyTorch · Hugging Face Diffusers · Gradio",
  },
  {
    name: "SinGlu",
    link: "https://github.com/inesruizblach/SinGlu",
    description: (
      <>
        AI-powered gluten-free recipe generator inspired by the challenges of following a gluten-free diet.<br/>
        Generates recipes based on available ingredients, suggests gluten-free substitutions, and provides product recommendations.<br/>
        Uses the Hugging Face chat completion API for recipe generation and runs interactively via Streamlit.<br/>
      </>
    ),
    demo: "https://share.streamlit.io/inesruizblach/SinGlu",
    tech: "Python · Streamlit · Hugging Face Inference API · Requests · JSON · GitHub · Streamlit Cloud",
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
