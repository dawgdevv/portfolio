import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index.js";
import SnowfallBackground from "./SnowfallBackground.jsx";

function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col justify-center">
      <SnowfallBackground />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-4xl font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2 }}
            key={index}
            className="bg-black backdrop-blur-sm rounded-xl p-4 border border-white hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="space-y-1">
                <motion.h3
                  className="text-xl font-bold text-white"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {experience.role}
                </motion.h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm font-medium">
                    {experience.company}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-sm text-orange-300 bg-orange-500/10 rounded-full border border-orange-500/20">
                  {experience.year}
                </span>
              </div>
            </div>

            <p className="mt-3 text-gray-300 text-base leading-relaxed">
              {experience.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-colors"
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
