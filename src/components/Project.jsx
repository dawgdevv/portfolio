import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "../constants/index.js";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

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

              {/* Info button to open modal */}
              <button
                onClick={() => openModal(project)}
                className="absolute bottom-3 right-3 bg-black/60 hover:bg-purple-500 p-2 rounded-full text-white transition-colors duration-300"
                aria-label={`View details for ${project.name}`}
              >
                <FaInfoCircle />
              </button>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-white/90 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-2">
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

                {/* Button to open modal (alternative to the icon in the image) */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-blue-800/30 hover:bg-blue-700/40 border border-blue-700/30"
                >
                  Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-red-500 p-2 rounded-full text-white transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>

                {/* Project title */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="font-bold text-2xl text-white">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Project technologies - if they exist in your data */}
                {selectedProject.technologies && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Full description */}
                <div className="text-gray-300 mb-6">
                  <p className="leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Additional details if available */}
                  {selectedProject.longDescription && (
                    <div className="mt-4">
                      <p className="leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                  )}
                </div>

                {/* Key features - if they exist in your data */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
