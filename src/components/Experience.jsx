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
        className="mb-4 text-lg md:text-xl font-black text-center uppercase tracking-tighter text-black dark:text-[#FFEDC2]"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col max-w-4xl mx-auto w-full">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex gap-2 md:gap-4 relative group">
            {/* Timeline Line & Dot */}
            <div className="flex flex-col items-center pt-4 relative ml-1 md:ml-2">
              <div className="w-2.5 h-2.5 bg-white dark:bg-zinc-800 border-2 border-black dark:border-white rounded-full z-10 group-hover:bg-black dark:group-hover:bg-white transition-colors"></div>
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-zinc-700 -mb-4"></div>
              )}
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, x: -2 }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 mb-4"
            >
              <div className="bg-white dark:bg-zinc-800 p-2 md:p-3 border-4 border-white hover:border-black shadow-neo hover:shadow-neo-lg transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <div className="space-y-0.5">
                    <motion.h3
                      className="text-sm md:text-base font-black uppercase tracking-tight text-black dark:text-white"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {experience.role}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-bold font-mono text-xs">
                      <span>{experience.company}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-auto mt-1 md:mt-0">
                    <span className="px-2 py-0.5 text-[10px] md:text-xs font-bold bg-accent-color text-white border-2 border-white hover:border-black shadow-neo-sm transform -rotate-1">
                      {experience.year}
                    </span>
                  </div>
                </div>

                <p className="text-black dark:text-gray-200 text-[11px] md:text-sm leading-relaxed font-medium">
                  {experience.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-0.5 text-[9px] md:text-[10px] font-bold uppercase text-black border-2 border-gray-200 hover:border-black bg-white shadow-sm transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
