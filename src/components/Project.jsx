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
    <div className="neo-panel">
      <header className="neo-panel-header">
        <div>
          <p className="neo-kicker mb-2">Selected work</p>
          <h2 className="neo-title">Projects</h2>
        </div>
        <span className="neo-badge">{PROJECTS.length} things shipped</span>
      </header>

      <div className="grid gap-5 border-b-4 border-black bg-zinc-100 p-4 dark:border-white dark:bg-zinc-900 sm:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <label className="block">
          <span className="neo-kicker mb-2 block">Search the archive</span>
          <span className="flex min-h-12 items-center border-2 border-black bg-white focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-black dark:border-white dark:bg-zinc-950 dark:focus-within:outline-white">
            <FaSearch aria-hidden="true" className="ml-3 h-4 w-4 shrink-0" />
            <input
              type="search"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm font-bold outline-none placeholder:text-zinc-500"
              placeholder="Name, description, or technology"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </span>
        </label>

        <div>
          <p className="neo-kicker mb-2">Filter by technology</p>
          <div className="flex flex-wrap gap-2">
            {["All", ...topTechs].map((tech) => {
              const isActive = activeFilter === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(tech)}
                  className={`neo-interactive min-h-8 border-2 border-black px-2.5 py-1 font-mono text-[10px] font-black uppercase dark:border-white ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white text-black dark:bg-zinc-950 dark:text-white"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        {filteredProjects.length === 0 && (
          <div className="p-10 text-center">
            <p className="neo-kicker">No matching projects</p>
            <p className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
              Try another technology or a broader search.
            </p>
          </div>
        )}

        {filteredProjects.map((project, projectIndex) => {
          const isExpanded = expandedProject === project.name;
          const projectSlug = project.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          const headingId = `${projectSlug}-heading`;
          const panelId = `${projectSlug}-details`;

          return (
            <article
              key={project.name}
              className={
                projectIndex !== filteredProjects.length - 1
                  ? "border-b-4 border-black dark:border-white"
                  : ""
              }
            >
              <div className="grid grid-cols-[1fr_auto] items-stretch">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleProject(project.name)}
                  className="group grid min-w-0 grid-cols-[3.5rem_1fr_auto] items-center gap-3 p-3 text-left transition-colors hover:bg-zinc-100 focus-visible:z-10 focus-visible:-outline-offset-4 focus-visible:outline-4 focus-visible:outline-black dark:hover:bg-zinc-900 dark:focus-visible:outline-white sm:grid-cols-[4.5rem_1fr_auto] sm:gap-4 sm:p-4"
                >
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="h-14 w-14 border-2 border-black bg-zinc-100 object-cover dark:border-white dark:bg-zinc-900 sm:h-16 sm:w-16"
                  />
                  <span className="min-w-0">
                    <span
                      id={headingId}
                      className="block truncate text-sm font-black uppercase tracking-tight sm:text-lg"
                    >
                      {project.name}
                    </span>
                    <span className="mt-1 flex flex-wrap gap-1.5">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <span key={tech} className="neo-kicker">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="neo-kicker">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </span>
                    <span className="mt-2 line-clamp-2 text-xs font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-sm">
                      {project.description}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="hidden border-2 border-black px-2 py-1 font-mono text-[10px] font-black uppercase dark:border-white sm:inline">
                      {isExpanded ? "Close" : "Details"}
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown aria-hidden="true" className="h-4 w-4" />
                    </motion.span>
                  </span>
                </button>

                <div className="flex flex-col border-l-2 border-black dark:border-white sm:flex-row">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.name}`}
                      className="neo-interactive flex min-h-11 min-w-11 flex-1 items-center justify-center border-b-2 border-black bg-white p-3 dark:border-white dark:bg-zinc-950 sm:border-b-0 sm:border-r-2"
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.name}`}
                      className="neo-interactive flex min-h-11 min-w-11 flex-1 items-center justify-center border-b-2 border-black bg-white p-3 last:border-b-0 dark:border-white dark:bg-zinc-950 sm:border-b-0 sm:border-r-2 sm:last:border-r-0"
                    >
                      <FaGithub aria-hidden="true" />
                    </a>
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch video for ${project.name}`}
                      className="neo-interactive flex min-h-11 min-w-11 flex-1 items-center justify-center bg-white p-3 dark:bg-zinc-950"
                    >
                      <FaYoutube aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="border-t-4 border-black bg-zinc-100 p-4 dark:border-white dark:bg-zinc-900 sm:p-6"
                  >
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)]">
                      <div className="space-y-6">
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          loading="lazy"
                          className="max-h-80 w-full border-4 border-black bg-white object-contain dark:border-white dark:bg-zinc-950"
                        />
                        <div>
                          <p className="neo-kicker mb-2">About the project</p>
                          <p className="text-sm font-medium leading-relaxed sm:text-base">
                            {project.longDescription || project.description}
                          </p>
                        </div>
                        {project.features?.length > 0 && (
                          <div>
                            <p className="neo-kicker mb-3">Core features</p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {project.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="border-l-4 border-black pl-3 text-xs font-bold leading-relaxed dark:border-white sm:text-sm"
                                >
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <aside>
                        <p className="neo-kicker mb-3">Technology</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech) => (
                            <span key={tech} className="neo-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </aside>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </div>
  );
}
