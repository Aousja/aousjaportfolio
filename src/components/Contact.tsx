import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xanbodby", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
    <section
         id="contact"
      className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-xl relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text"
      >
        Let's Connect
      </motion.h2>

      <p className="text-center text-cyan-500 mb-16 max-w-xl mx-auto px-4">
        Have a project, idea, or just want to say hi? Fill out the form and I'll
        get back to you.
      </p>

      <motion.form
        onSubmit={handleSubmit}
       className="glass w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-xl relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="text-green-400 w-14 h-14 mb-4 animate-bounce" />
              <p className="text-white text-lg font-semibold">
                Message Sent Successfully!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-5">
          <label className="block mb-2 text-[#30516d] dark:text-cyan-300">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-cyan-500/20 rounded-md text-white focus:outline-none focus:border-cyan-300 transition text-sm"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[#30516d] dark:text-cyan-300">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-cyan-500/20 rounded-md text-white focus:outline-none focus:border-cyan-300 transition text-sm"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-[#30516d] dark:text-cyan-300">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-cyan-500/20 rounded-md text-white focus:outline-none focus:border-cyan-300 transition resize-none text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 rounded-md text-white font-semibold transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="mt-12 sm:mt-16 text-center space-y-4">
        <p className="text-[#30516d] dark:text-cyan-100 text-sm sm:text-base">or reach out directly:</p>
        <div className="flex justify-center gap-6 text-cyan-300 text-lg">
          <a href="mailto:aousja5@email.com">
            <Mail className="hover:text-white transition" />
          </a>
          <a href="https://github.com/Aousja" target="_blank">
            <Github className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/aousja-haidar-b54986299/" target="_blank">
            <Linkedin className="hover:text-white transition" />
          </a>
          <a href="https://www.instagram.com/xousja_haidar/" target="_blank">
            <Instagram className="hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Project Report Download */}
      <div className="mt-16 sm:mt-24 text-center px-4">
        <motion.h2 className="text-sm sm:text-lg text-300 mb-6 gradient-text">
          Curious how this website is made? You can download the full report below.
        </motion.h2>

        <a
          href="https://drive.google.com/file/d/1VXtrhz6kwVBUGH2mT-XcTSgGbSj3y6Tv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap justify-center items-center gap-2 bg-white/10  border border-white/20 px-5 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-white/20 transition duration-300 shadow-md hover:shadow-cyan-500/30 text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          <span>Download Website Report (PDF)</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
