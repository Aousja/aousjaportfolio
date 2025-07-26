"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-8 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold gradient-text mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-base sm:text-lg text-card-foreground z-10 relative"
      >
        <p className="leading-relaxed">
          I'm a multidisciplinary creative professional with a passion for blending
          design and technology to craft seamless digital experiences. My expertise
          spans across <strong className="text-primary">graphic design</strong>,{" "}
          <strong className="text-primary">UI/UX design</strong>, and{" "}
          <strong className="text-primary">full-stack web and mobile development</strong>.
          I bring ideas to life visually using industry-standard tools like{" "}
          <strong>Adobe Photoshop</strong> and <strong>Illustrator</strong>, creating
          everything from sleek branding assets to complex visual compositions. On the
          product design side, I use <strong>Figma</strong> to build intuitive, user-centered
          interfaces that prioritize both form and function. My development stack includes{" "}
          <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>Vite</strong>,
          along with <strong>Tailwind CSS</strong> for modern styling. I'm also experienced
          in cross-platform mobile development with <strong>Flutter</strong> and native Android
          tools like <strong>Android Studio</strong>. My goal is to deliver innovative,
          scalable, and visually compelling digital solutions that truly connect with users.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
