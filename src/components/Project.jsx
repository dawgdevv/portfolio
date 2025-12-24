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
    <section className="container mx-auto px-4 py-10 max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-4xl md:text-5xl font-black text-center uppercase tracking-tighter text-black dark:text-white"
      >
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, x: -8 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white dark:bg-zinc-800 border-4 border-white hover:border-black shadow-neo hover:shadow-neo-lg transition-all duration-300 group"
          >
            <div className="relative border-b-4 border-white hover:border-black group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 md:h-52 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Info button to open modal */}
              <button
                onClick={() => openModal(project)}
                className="absolute top-2 right-2 bg-white text-black border-2 border-white hover:border-black p-2 hover:bg-accent-color hover:text-white transition-colors duration-300 shadow-neo-sm z-10"
                aria-label={`View details for ${project.name}`}
              >
                <FaInfoCircle size={20} />
              </button>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="p-5">
              <h3 className="font-black text-xl md:text-2xl mb-2 text-black dark:text-white uppercase tracking-tighter">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-2 font-medium h-10">
                {project.description}
              </p>

              <div className="flex gap-3 justify-start flex-wrap mt-auto">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    className="flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase bg-white text-black border-2 border-white hover:border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
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
                    className="flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase bg-black text-white border-2 border-white hover:border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
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
                    className="flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase bg-accent-color text-white border-2 border-white hover:border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
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

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative border-b-4 border-white hover:border-black shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 border-2 border-white hover:border-black text-white p-2 shadow-neo transition-all active:translate-y-1 active:shadow-none"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
                <div className="absolute bottom-0 left-0 bg-white border-t-4 border-r-4 border-white hover:border-black px-6 py-2">
                  <h3 className="font-black text-2xl md:text-4xl text-black uppercase tracking-tighter">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="grid md:grid-cols-3 gap-8">

                  {/* Left Column: Description */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-4 h-4 bg-accent-color border-2 border-white hover:border-black"></span>
                        About Project
                      </h4>
                      <p className="text-black dark:text-gray-300 font-medium leading-relaxed text-base md:text-lg">
                        {/* Prefer longDescription, fallback to description */}
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-4 flex items-center gap-2">
                          <span className="w-4 h-4 bg-blue-500 border-2 border-white hover:border-black"></span>
                          Key Features
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                              <span className="mt-1.5 min-w-[6px] h-[6px] bg-black dark:bg-white rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Tech Stack & Meta */}
                  <div className="md:col-span-1 space-y-6">
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white mb-4 border-b-2 border-white hover:border-black inline-block">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-bold uppercase bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-2 border-white hover:border-black shadow-neo-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Links inside Modal (Optional but helpful) */}
                    <div className="pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                      <div className="flex flex-col gap-3">
                        {selectedProject.liveLink && (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-white hover:border-black transition-colors"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                        {selectedProject.githubLink && (
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-200 text-black font-bold uppercase border-2 border-white hover:border-black hover:bg-white transition-colors"
                          >
                            <FaGithub /> Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

