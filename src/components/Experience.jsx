import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Graduate Software Engineer · Nomura",
    location: "London, UK",
    date: "Jul 2024 – Present",
    details: [
      "Develop and maintain a Risk & Trading platform (Python backend, VBA & Excel frontends).",
      "Enhance Access Control services (Python backend, React frontend); migrate legacy VB6 components to Python.",
      "Production support, code reviews, and Agile collaboration with global teams (Jira, Git)."
    ]
  },
  {
    role: "Technology Industrial Placement Intern · Nomura",
    location: "London, UK",
    date: "Jun 2022 – Jun 2023",
    details: [
      "Backend/frontend improvements, production support, and Agile delivery."
    ]
  }
];

const Experience = () => (
  <motion.section
    className="bg-gray-100 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
    <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6 rounded text-justify"></div>
    {experiences.map((exp, i) => (
      <div key={i} className="mb-4">
        <h3 className="font-semibold ">{exp.role}</h3>
        <p className="text-gray-500 text-sm">{exp.location} · {exp.date}</p>
        <ul className="list-disc list-inside mt-2 text-justify">
          {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
        </ul>
      </div>
    ))}
  </motion.section>
);

export default Experience;
