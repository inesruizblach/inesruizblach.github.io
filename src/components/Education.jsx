import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <motion.section
    className="bg-white rounded-xl shadow p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-semibold mb-3">Education</h2>
    <p>
      <strong>BSc (Hons) Computer Science with Industrial Placement</strong> — Newcastle University (2020–2024)<br />
      First Class Honours · Best overall performance by a Stage 3 student
    </p>
  </motion.section>
);

export default Education;
