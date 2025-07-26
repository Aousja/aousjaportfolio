import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react"; // You can also use a custom SVG if needed

const projects = [
   {
    title: "JODXZEUS ESPORTS LOGO",
    image: "/projects/FORINSTA-01.png",
    description: "Created for a gaming YouTube Channel.",
  },
  {
    title: "IDEAL GAMERZ LOGO",
    image: "/projects/IDEAL GAMERZ LOGO-01.png",
    description: "Minimalist logo for a gaming YouTube Channel.",
  },
  {
    title: "Sneekers Social Media Post",
    image: "/projects/SHoe.png",
    description: "Practing my skills with a sneaker post.",
  },
  {
    title: "Anime + Gaming Style banner",
    image: "/projects/XXbanner2.png",
    description: "Created for a gaming YouTube Channel.",
  },

   {
    title: "Crousel Social media post",
    image: "/projects/1.png",
    description: "Designed for a Society Event.",
  },
   {
    title: "MLSA LOGO",
    image: "/projects/MLSA SIilver Blue LOGO with mockup.png",
    description: "Designed for MLSA Society.",
  },

  {
    title: "Tech'ON 2023 Event Poster",
    image: "/projects/techon 2023.png",
    description: "Created for Society Event.",
  },

  {
    title: "Trifold Brochure For Cafe",
    image: "/projects/TRI-fold for insta.png",
    description: "Designed for the Cafe shop Menu Card.",
  },

   {
    title: "Burger Lab Menu Card",
    image: "/projects/fast food 2.png",
    description: "Single Page Menu Card for Burger Lab.",
  },

   {
    title: "Malware Awareness Infographic",
    image: "/projects/INFOGRAPHIC part 2.png",
    description: "A project to design a Malware Awareness Infographic.",
  },
 {
    title: "MLSA Society Standee design",
    image: "/projects/Standee 2.png",
    description: "Standee design created for event.",
  },

   {
    title: "SC-FI Thumbnail",
    image: "/projects/right size.png",
    description: "Showcasing of Sci-fi thumbnails.",
  },

   {
    title: "Gamming Banners",
    image: "/projects/right size 2.png",
    description: "Showcasing of Gamming thumbnails.",
  },

 
  

   {
    title: "Anime logo",
    image: "/projects/Aniverse.png",
    description: "logo created for anime fan club.",
  },

  {
    title: "Fivver Servers Banner",
    image: "/projects/Ali 1100x740 2.png",
    description: "Fivver gig image to display Ali azan services.",
  },
];

const testimonials = [
  {
    name: "Zaka Ullah Satti",
    feedback: "Pakistan #1 Graphic Designer pure talent.",
  },
  {
    name: "Ali Azan",
    feedback: "Very Professional designer created me beautiful designs",
  },
  {
    name: "Afaq Munir",
    feedback: "Outstanding creativity and professionalism.One of the best designers.",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section id="projects" className="min-h-screen text-white px-4 sm:px-8 py-24 bg-transparent">
      {/* === Projects Header === */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
        My Work
      </h2>

      {/* === Masonry Grid === */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative mb-6 cursor-pointer group overflow-hidden rounded-xl border border-cyan-500/20 bg-white/5 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-shadow duration-300"
            onClick={() => setSelected(index)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {/* === Modal === */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-[#111] p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selected].image}
                alt={projects[selected].title}
                className="rounded-lg mb-4 max-h-[400px] w-full object-contain"
              />
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">
                {projects[selected].title}
              </h3>
              <p className="text-gray-300">{projects[selected].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Testimonials Section === */}
      <section className="pt-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          What Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-500/10 p-6 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-shadow duration-300 text-center"
            >
              <p className="text-sm text-gray-300 italic mb-4">“{testimonial.feedback}”</p>
              <h4 className="font-semibold text-cyan-300">{testimonial.name}</h4>
              <div className="flex justify-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
