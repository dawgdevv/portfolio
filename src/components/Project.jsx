import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-4xl font-bold bg-gradient-to-r text-center from-gray-100 to-gray-300 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2 }}
            key={index}
            className="bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-white hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-white/90 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 justify-start">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live
                  </motion.a>
                )}
                {project.githubLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xs" /> Code
                  </motion.a>
                )}
                {project.videoLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.videoLink}
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-green-800/50 hover:bg-gray-700/50 border border-gray-700/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Video
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
