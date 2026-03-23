import { useState, useMemo } from "react";
import { PROJECTS } from "../constants/index.js";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaYoutube,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const topTechs = useMemo(() => {
    const counts = {};
    PROJECTS.forEach((p) => {
      (p.technologies || []).forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map((entry) => entry[0]);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description &&
          project.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.technologies &&
          project.technologies.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      const matchesFilter =
        activeFilter === "All" ||
        (project.technologies && project.technologies.includes(activeFilter));

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const toggleProject = (projectName) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <section className="container mx-auto px-4 py-4 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black dark:text-white">
          Projects
        </h2>

        <div className="flex w-full md:w-auto relative border-4 border-white focus-within:border-black dark:border-zinc-800 dark:focus-within:border-white bg-white dark:bg-zinc-900 shadow-neo transition-all group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full md:w-64 pl-10 pr-3 py-2 bg-transparent text-black dark:text-white font-bold placeholder-gray-500 outline-none"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <span className="font-bold text-xs uppercase mr-2 text-black dark:text-gray-300">
          Filter:
        </span>
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-3 py-1 text-[10px] md:text-xs font-bold uppercase transition-all shadow-sm ${activeFilter === "All"
              ? "bg-black text-white dark:bg-white dark:text-black border-2 border-transparent"
              : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-zinc-700 hover:border-black dark:hover:border-white"
            }`}
        >
          All
        </button>
        {topTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-3 py-1 text-[10px] md:text-xs font-bold uppercase transition-all shadow-sm ${activeFilter === tech
                ? "bg-black text-white dark:bg-white dark:text-black border-2 border-transparent"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-zinc-700 hover:border-black dark:hover:border-white"
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 relative">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-12 border-4 border-dashed border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            >
              <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                No projects matched your criteria.
              </p>
            </motion.div>
          )}

          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.name;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={project.name}
                className={`relative overflow-hidden bg-white dark:bg-zinc-900 border-4 border-white hover:border-black dark:border-zinc-800 dark:hover:border-white shadow-neo w-full transition-all duration-300 ${isExpanded ? "shadow-neo-lg scale-[1.01] z-10" : "hover:scale-[1.01] z-0"
                  }`}
              >
                <div
                  onClick={() => toggleProject(project.name)}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-3 bg-white dark:bg-zinc-900 cursor-pointer group gap-2 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-800/50"
                >
                  <div className="flex gap-3 flex-1 min-w-0 items-center">
                    <div className="hidden sm:block w-12 h-12 shrink-0 bg-gray-100 dark:bg-zinc-800 border-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <h3 className="font-black text-base md:text-lg text-black dark:text-white uppercase tracking-tighter truncate w-full">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-1 md:gap-2 mt-0.5">
                        {project.technologies?.slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 md:py-1 text-[9px] md:text-[10px] font-bold uppercase bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies?.length > 5 && (
                          <span className="px-2 py-0.5 md:py-1 text-[9px] md:text-[10px] font-bold text-gray-400">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end md:self-center">
                    <div
                      className="flex items-center gap-2 mr-1 md:mr-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-transparent rounded-full transition-colors"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt className="text-xs md:text-sm" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-transparent rounded-full transition-colors"
                          title="Source Code"
                        >
                          <FaGithub className="text-xs md:text-sm" />
                        </a>
                      )}
                      {project.videoLink && (
                        <a
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-red-600 hover:text-white border-2 border-transparent rounded-full transition-colors"
                          title="Video Demo"
                        >
                          <FaYoutube className="text-xs md:text-sm" />
                        </a>
                      )}
                    </div>

                    <span
                      className={`hidden md:inline-block text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-zinc-800 border-2 border-transparent transition-all ${isExpanded ? "bg-accent-color text-white" : "text-gray-500"
                        }`}
                    >
                      {isExpanded ? "Close" : "Details"}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-lg md:text-xl text-black dark:text-white" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 md:p-4 pt-0 border-t-2 border-dashed border-gray-200 dark:border-zinc-800 mt-2">
                        <div className="border-4 border-white hover:border-black dark:border-zinc-800 dark:hover:border-white mb-4 transition-all group-hover:shadow-neo-sm">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-auto object-contain max-h-[300px] bg-gray-100 dark:bg-zinc-800"
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-black dark:text-white mb-2 flex items-center gap-2">
                                <span className="w-3 h-3 bg-accent-color border-2 border-white dark:border-zinc-800 hover:border-black dark:hover:border-white"></span>
                                About
                              </h4>
                              <p className="text-black dark:text-gray-300 font-medium leading-relaxed text-sm">
                                {project.longDescription || project.description}
                              </p>
                            </div>

                            {project.features && (
                              <div>
                                <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-black dark:text-white mb-2 flex items-center gap-2">
                                  <span className="w-3 h-3 bg-blue-500 border-2 border-white dark:border-zinc-800 hover:border-black dark:hover:border-white"></span>
                                  Features
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                  {project.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300"
                                    >
                                      <span className="mt-1.5 min-w-[6px] h-[6px] bg-black dark:bg-white rounded-full"></span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="md:col-span-1 space-y-4">
                            <div>
                              <h4 className="text-sm md:text-base font-black uppercase tracking-tight text-black dark:text-white mb-3 border-b-2 border-white dark:border-zinc-800 hover:border-black dark:hover:border-white inline-block">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 text-[10px] md:text-xs font-bold uppercase bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-2 border-white dark:border-zinc-800 hover:border-black dark:hover:border-white shadow-neo-sm transition-all hover:-translate-y-0.5"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-4 border-t-2 border-dashed border-gray-300 dark:border-zinc-700 flex flex-col gap-2">
                              {project.liveLink && (
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white font-bold uppercase text-xs md:text-sm border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                                >
                                  <FaExternalLinkAlt /> Live Demo
                                </a>
                              )}
                              {project.githubLink && (
                                <a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-200 dark:bg-zinc-800 text-black dark:text-white font-bold uppercase text-xs md:text-sm border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-white dark:hover:bg-black transition-all"
                                >
                                  <FaGithub /> Source Code
                                </a>
                              )}
                              {project.videoLink && (
                                <a
                                  href={project.videoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 text-white font-bold uppercase text-xs md:text-sm border-2 border-transparent hover:bg-white hover:text-red-600 hover:border-red-600 transition-all"
                                >
                                  <FaYoutube /> Video Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
