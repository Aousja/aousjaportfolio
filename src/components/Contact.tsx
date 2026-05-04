import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xanbodby", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 3500);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text"
      >
        Let's Connect
      </motion.h2>

      <p className="text-center text-cyan-500 dark:text-cyan-400 mb-12 max-w-xl mx-auto">
          Got an idea? Let's build something great together.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-cyan-500/20 shadow-xl shadow-gray-200/60 dark:shadow-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="text-green-400 w-14 h-14 mb-4 animate-bounce" />
              <p className="text-white text-lg font-semibold">Message Sent Successfully!</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-cyan-300">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg text-sm bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-cyan-300">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg text-sm bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-cyan-300">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-lg text-sm bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-none"
          />
        </div>

        {/* Button — fixed gradient, no color change on theme switch */}
        <button
          type="submit"
          className="w-full py-3 text-sm sm:text-base font-semibold rounded-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition duration-300 shadow-lg shadow-cyan-500/20"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-gray-500 dark:text-cyan-100 text-sm">or reach out directly:</p>
        <div className="flex justify-center gap-6 text-cyan-500 dark:text-cyan-300">
          <a href="mailto:aousja5@email.com" className="hover:text-cyan-700 dark:hover:text-white transition">
            <Mail />
          </a>
          <a href="https://github.com/Aousja" target="_blank" className="hover:text-cyan-700 dark:hover:text-white transition">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/aousja-haidar-b54986299/" target="_blank" className="hover:text-cyan-700 dark:hover:text-white transition">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/xousja_haidar/" target="_blank" className="hover:text-cyan-700 dark:hover:text-white transition">
            <Instagram />
          </a>
        </div>
      </div>

      {/* Report Download */}
      <div className="mt-16 text-center px-4">
        <p className="text-sm mb-6 gradient-text">
          Curious how this website is made? Download the full report below.
        </p>
        <a href="https://drive.google.com/file/d/1VXtrhz6kwVBUGH2mT-XcTSgGbSj3y6Tv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          <span>Download Website Report (PDF)</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;