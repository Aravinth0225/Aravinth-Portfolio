"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
<div className="max-w-none">
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
    Hello, World! I am Aravinth R — a passionate Full Stack Developer and tech enthusiast currently pursuing my 3rd year of B.E. Computer Science and Engineering at Sona College of Technology.
  </p>
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
    With hands-on experience in Web Development, I specialize in building responsive, high-performance applications using the MERN stack, React, Next.js, TypeScript, and modern tools. I’ve developed 7+ major projects and actively contribute to frontend/backend integration.
  </p>
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
    I’ve also organized and won multiple Capture the Flag (CTF) events, including 3rd prizes in Spark 23 and Threads 24, and received the Best Leadership Award for organizing Spark 24. I’m deeply involved in mentoring juniors and conducting tech expos and web competitions.
  </p>
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
    I’m passionate about sustainable tech, and building innovative real-world solutions. I believe in continuous learning and love exploring networks, cloud, and system architecture through hands-on exposure like visiting college server rooms and leading technical events.
  </p>
</div>

    </motion.section>
  );
} 