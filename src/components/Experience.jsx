import React from "react";
import { motion } from "framer-motion";

const roles = [
  { title: "Sr. Software Engineer · Nomura", date: "Oct 2025 – Present" },
  { title: "Software Engineer · Nomura", date: "Jul 2024 – Sep 2025" },
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
      "Major Project: INFORM — AI-based food recognition & segmentation (Grade: 90/100)"
    ]
  },
];

const achievements = [
  "Sage & School of Computing Prize | Best Overall Performance by a Stage 3 student. School of Computing, Newcastle University, 2024",
  "Team Full Royals Award | Member of the Basketball team that won the Tier 2 BUCS Conference Cup. Newcastle University, 2024",
  "Representative Athlete | Selected for the U14 (2016), U16 (2018), and U22 (2023) Balearic Islands Basketball Teams",
  "The Charles Ernst Award 2018/19 | MVP Girls Basketball. Liverpool Regional High School, Nova Scotia, 2019",
  "Student Athlete Award | Nova Scotia School Athletic Federation, 2019",
  "Amancio Ortega Foundation Scholarship | Full grant to study one academic year of high school in Canada (2018/19)",
  "Summer Scientific Campus Scholarship in Artificial Intelligence | University of Salamanca. Spanish Government, 2018",
  "Academic Honours Certificate | Award for Outstanding Achievement in Secondary Education. Balearic Islands Government, 2018"
];

const publication = [
  {
    title: "Food recognition and segmentation using embedded hardware",
    authors: "James Rainey, Inés R. Blach, Douglas MacLachlan, John Wannan, and Deepayan Bhowmik",
    venue: "Proc. SPIE 13137, Applications of Digital Image Processing XLVII, 131370H",
    date: "30 September 2024",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13137/3031247/Food-recognition-and-segmentation-using-embedded-hardware/10.1117/12.3031247.short"
  }
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

      <ul className="list-disc list-outside pl-5 mt-2 text-gray-700 leading-relaxed text-justify">
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
          <ul className="list-disc list-outside pl-5 mt-2 text-gray-700 leading-relaxed text-justify">
            {edu.details.map((d, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: d }} />
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* ACHIEVEMENTS */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Awards & Achievements</h3>
      <ul className="list-disc list-outside pl-5 text-gray-700 leading-relaxed">
        {achievements.map((a, i) => {
          const [title, rest] = a.split(" | ");
          return (
            <li key={i}>
              <strong>{title}</strong>
              {rest ? ` | ${rest}` : ""}
            </li>
          );
        })}
      </ul>
    </div>

    {/* PUBLICATION */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Publication</h3>
      <p className="text-gray-700 leading-relaxed">
        <strong>James Rainey, Inés R. Blach, Douglas MacLachlan, John Wannan, and Deepayan Bhowmik</strong>,{" "}
        <em>Food recognition and segmentation using embedded hardware</em>, Proc. SPIE 13137, Applications of Digital Image Processing XLVII, 131370H (30 September 2024);{" "}
        <a
          href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13137/3031247/Food-recognition-and-segmentation-using-embedded-hardware/10.1117/12.3031247.short"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://doi.org/10.1117/12.3031247
        </a>
      </p>
    </div>
  </motion.section>
);

export default Experience;
