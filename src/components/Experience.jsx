import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index.js";
import SnowfallBackground from "./SnowfallBackground.jsx";

function Experience() {
  return (
    <section className="container mx-auto px-4 py-2 flex flex-col justify-center">
      <SnowfallBackground />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 text-xl md:text-2xl font-black text-center uppercase tracking-tighter text-black dark:text-white"
      >
        Experience
      </motion.h2>
      <div className="space-y-2 max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, x: -4 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white dark:bg-zinc-800 p-2 border-4 border-white hover:border-black shadow-neo hover:shadow-neo-lg transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div className="space-y-1">
                <motion.h3
                  className="text-base md:text-lg font-black uppercase tracking-tight text-black dark:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {experience.role}
                </motion.h3>
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold font-mono text-sm">
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs md:text-sm font-bold bg-accent-color text-white border-2 border-white hover:border-black shadow-neo-sm transform -rotate-1">
                  {experience.year}
                </span>
              </div>
            </div>

            <p className="text-black dark:text-gray-200 text-sm md:text-base leading-relaxed font-medium">
              {experience.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 py-1 text-xs font-bold text-black border-2 border-white hover:border-black bg-white shadow-neo-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
