"use client";

import { Download, Mail, Linkedin, Instagram, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/xousja_haidar/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aousja-haidar-b54986299/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:aousja5@gmail.com",
      label: "Email",
      color: "hover:text-accent",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left flex-1"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground">
              Hi, I'm <span className="gradient-text">Aousja</span>!
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl md:text-3xl font-heading font-medium text-foreground">
              <span>Creative</span>
              <Zap className="text-accent w-8 h-8 animate-pulse" />
              <span>Full-Stack</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground">
              Developer & Designer
            </h2>
          </div>

          <p
            className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ color: "#B0B0B0" }}
          >
            I design modern UI, build seamless web & mobile apps, and craft
            digital experiences that stand out.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="glass rounded-full overflow-hidden flex border border-primary/20"
              style={{ boxShadow: "0 0 20px rgba(20, 255, 236, 0.3)" }}
            >
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-4 font-heading font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,236,0.6)]"
              >
                Hire Me
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Oj8K2PcSjdZKiej7YbUUdfXU1NiN0gEe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-card/50 text-foreground px-8 py-4 font-heading font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,236,0.3)] flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`glass p-4 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="glass rounded-full p-1 w-80 h-80 border border-primary/30">
              <img
                src="/WhatsApp Image 2025-06-06 at 15.11.30_d0364db4.png"
                alt="Aousja - Creative Full-Stack Developer"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-full p-3 animate-bounce">
              <Zap className="w-6 h-6 text-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
