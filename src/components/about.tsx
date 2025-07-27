"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 px-4 sm:px-8 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-bold gradient-text mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed sm:leading-loose text-card-foreground z-10 relative"
      >
        <p>
          I'm a multidisciplinary creative professional with a passion for blending
          design and technology to craft seamless digital experiences. My expertise
          spans across <strong className="text-primary">graphic design</strong>,{" "}
          <strong className="text-primary">UI/UX design</strong>, and{" "}
          <strong className="text-primary">full-stack web and mobile development</strong>.
          I bring ideas to life visually using industry-standard tools like{" "}
          <strong className="text-primary">Adobe Photoshop</strong> and{" "}
          <strong className="text-primary">Illustrator</strong>, creating
          everything from sleek branding assets to complex visual compositions. On the
          product design side, I use <strong className="text-primary">Figma</strong> to build
          intuitive, user-centered interfaces that prioritize both form and function.
          My development stack includes{" "}
          <strong className="text-primary">React</strong>,{" "}
          <strong className="text-primary">Angular</strong>,{" "}
          <strong className="text-primary">Node.js</strong>,{" "}
          <strong className="text-primary">Express</strong>,{" "}
          <strong className="text-primary">MongoDB</strong>, and{" "}
          <strong className="text-primary">Vite</strong>, along with{" "}
          <strong className="text-primary">Tailwind CSS</strong> for modern styling.
          I'm also experienced in cross-platform mobile development with{" "}
          <strong className="text-primary">Flutter</strong> and native Android
          tools like <strong className="text-primary">Android Studio</strong>. My goal
          is to deliver innovative, scalable, and visually compelling digital
          solutions that truly connect with users.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
