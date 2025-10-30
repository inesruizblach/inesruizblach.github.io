import React from "react";
import { motion } from "framer-motion";

const roles = [
  { title: "Sr. Software Engineer · Nomura", date: "Oct 2025 – Present" },
  { title: "Graduate Software Engineer · Nomura", date: "Jul 2024 – Sep 2025" },
  { title: "Technology Industrial Placement Intern · Nomura", date: "Jun 2022 – Jun 2023" }
];

const details = [
  "Develop and maintain a Risk & Trading platform using Python and VBA backends integrated with Excel frontends.",
  "Enhance Access Control services (Python backend, React frontend) and migrate legacy VB6 components to Python.",
  "Lead development of a Generative AI solution that automates investor credit reports and improves risk management workflows.",
  "Deliver high-quality, tested, and documented code across distributed systems and production environments.",
  "Collaborate in Agile, globally distributed teams using Jira, Git, and CI/CD pipelines."
];

const education = [
  {
    degree: "BSc (Hons) in Computer Science with Industrial Placement",
    institution: "Newcastle University",
    location: "Newcastle, UK",
    date: "Sep 2020 – Jun 2024",
    details: [
      "First Class Honours · Sage & School of Computing Prize — Best Overall Performance (Stage 3)",
      "Major Project: INFORM — AI-based food recognition & segmentation (Grade: 90/100)",
      "Publication: SPIE Optics + Photonics 2024, San Diego, US"
    ]
  },
  {
    degree: "Título de Bachillerato — Science Track (Maths, Physics, IT, Technical Drawing)",
    institution: "Madre Alberta School",
    location: "Majorca, Spain",
    date: "Sep 2019 – Jun 2020",
    details: [
      "Bachillerato Average: 9.6/10 · University Entrance Grade (PBAU): 13.16/14"
    ]
  },
  {
    degree: "Academic Year Abroad — Amancio Ortega Foundation Scholar",
    institution: "Liverpool Regional High School",
    location: "Nova Scotia, Canada",
    date: "Sep 2018 – Jun 2019",
    details: [
      "Full grant recipient under the Amancio Ortega Foundation Scholarship Program.",
      "Ranked #1 in Grade 11 · First Class Honours Certificate (9.3/10)."
    ]
  }
];

const achievements = [
  "Sage & School of Computing Prize — Best Overall Performance (Stage 3), Newcastle University (2024)",
  "Amancio Ortega Foundation Scholarship — Full grant to study in Canada (2018/19)",
  "Team Full Royals Award — BUCS Conference Cup Champion, Newcastle University (2024)",
  "Balearic Islands Basketball Teams — U14 (2016), U16 (2018), U22 (2023)",
  "The Charles Ernst Award (MVP Girls Basketball) — Liverpool Regional High School (2019)",
  "Academic Honours Certificate — Outstanding Academic Achievement, Balearic Islands Government (2018)",
  "Summer Scientific Campus Scholarship in Artificial Intelligence, University of Salamanca — Spanish Government (2018)"
];

const Experience = () => (
  <motion.section
    id="experience & education"
    className="bg-gray-100 py-16 px-8 rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Experience & Education</h2>
    <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6 rounded"></div>

    {/* NOMURA EXPERIENCE */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>

      <div className="mb-3">
        {roles.map((r, i) => (
          <p key={i} className="text-gray-700">
            <strong>{r.title}</strong> · <span className="text-gray-500">{r.date}</span>
          </p>
        ))}
      </div>

      <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed text-justify">
        {details.map((d, idx) => <li key={idx}>{d}</li>)}
      </ul>
    </div>

    {/* EDUCATION */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Education</h3>
      {education.map((edu, i) => (
        <div key={i} className="mb-4">
          <h4 className="font-semibold">{edu.degree}</h4>
          <p className="text-gray-500 text-sm">{edu.institution} — {edu.location} · {edu.date}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed text-justify">
            {edu.details.map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>

    {/* ACHIEVEMENTS */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Awards & Achievements</h3>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed text-justify">
        {achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  </motion.section>
);

export default Experience;
