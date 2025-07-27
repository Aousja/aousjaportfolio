"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFlutter,
  SiVite,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

const techIcons = [
  { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#31A8FF" },
  { icon: <SiAdobeillustrator />, name: "Illustrator", color: "#FF9A00" },
  { icon: <FaFigma />, name: "Figma", color: "#A259FF" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <FaAngular />, name: "Angular", color: "#DD0031" },
  { icon: <SiVite />, name: "Vite", color: "#646CFF" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiExpress />, name: "Express", color: "#999999" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#8CC84B" },
  { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
  { icon: <FaAndroid />, name: "Android Studio", color: "#3DDC84" },
];

const SkillSection = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useAnimationFrame(() => {
    const container = ringRef.current;
    if (!container) return;

    const t = performance.now();
    const rotation = t / 5000;

    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    iconRefs.current.forEach((el, index) => {
      if (el) {
        const angle = (2 * Math.PI * index) / techIcons.length + rotation;
        const x = centerX + radius * Math.cos(angle) - el.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - el.offsetHeight / 2;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      }
    });
  });

  return (
    <section id="skills" className="py-32 px-4 sm:px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold gradient-text mb-12"
      >
        Skill Set
      </motion.h2>

      <div className="relative mt-20 w-full h-[400px] sm:h-[500px] flex items-center justify-center">
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h3 className="text-xl sm:text-2xl font-bold gradient-text">
            My Tools Mastery
          </h3>
        </div>

        {/* Icon Orbit */}
        <div
          ref={ringRef}
          className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]"
        >
          {techIcons.map((tech, index) => {
            const angle = (2 * Math.PI * index) / techIcons.length;
            const radius = 200;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
               ref={(el: HTMLDivElement | null) => {
  iconRefs.current[index] = el;
}}
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 18px 6px ${tech.color}`,
                  color: tech.color,
                }}
                transition={{
                  duration: 0.15,
                  ease: "easeOut",
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-md
  flex items-center justify-center absolute transition-all duration-200 ease-in
  glass-icon"
                style={{
                  top: `calc(50% + ${y}px - 2rem)`,
                  left: `calc(50% + ${x}px - 2rem)`,
                }}
              >
                <div className="text-2xl sm:text-3xl">{tech.icon}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
