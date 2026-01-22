import { useState } from "react";
import { PROJECTS } from "../constants/index.js";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

export default function Project() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleProject = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-10 max-w-4xl">
      <h2 className="mb-16 text-4xl md:text-5xl font-black text-center uppercase tracking-tighter text-black dark:text-white">
        Projects
      </h2>

      <div className="flex flex-col gap-4 relative">
        {PROJECTS.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`relative overflow-hidden bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo w-full ${isExpanded ? "shadow-neo-lg" : ""}`}
            >
              <div
                onClick={() => toggleProject(index)}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white dark:bg-zinc-900 cursor-pointer group gap-4"
              >
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                  <h3 className="font-black text-2xl md:text-3xl text-black dark:text-white uppercase tracking-tighter truncate w-full">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-bold uppercase bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-transparent shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 5 && (
                      <span className="px-2 py-0.5 text-[10px] font-bold text-gray-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end md:self-center">
                  <div
                    className="flex items-center gap-2 mr-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-transparent rounded-full"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-transparent rounded-full"
                        title="Source Code"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-red-600 hover:text-white border-2 border-transparent rounded-full"
                        title="Video Demo"
                      >
                        <FaYoutube className="text-sm" />
                      </a>
                    )}
                  </div>

                  <span
                    className={`hidden md:inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-zinc-800 border-2 border-transparent ${isExpanded ? "bg-accent-color text-white" : "text-gray-500"}`}
                  >
                    {isExpanded ? "Close" : "Details"}
                  </span>
                  <div className={`${isExpanded ? "rotate-180" : "rotate-0"}`}>
                    <FaChevronDown className="text-xl text-black dark:text-white" />
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="p-6 pt-0">
                  <div className="border-4 border-white hover:border-black mb-6">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 md:h-80 object-cover"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-4 flex items-center gap-2">
                          <span className="w-4 h-4 bg-accent-color border-2 border-white hover:border-black"></span>
                          About
                        </h4>
                        <p className="text-black dark:text-gray-300 font-medium leading-relaxed text-sm md:text-base">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {project.features && (
                        <div>
                          <h4 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-4 h-4 bg-blue-500 border-2 border-white hover:border-black"></span>
                            Features
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm font-bold text-gray-700 dark:text-gray-300"
                              >
                                <span className="mt-1.5 min-w-[6px] h-[6px] bg-black dark:bg-white rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-1 space-y-6">
                      <div>
                        <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white mb-4 border-b-2 border-white hover:border-black inline-block">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs font-bold uppercase bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-2 border-white hover:border-black shadow-neo-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col gap-3">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-white hover:border-black"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-200 text-black font-bold uppercase border-2 border-white hover:border-black hover:bg-white"
                          >
                            <FaGithub /> Source Code
                          </a>
                        )}
                        {project.videoLink && (
                          <a
                            href={project.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 text-white font-bold uppercase border-2 border-transparent hover:bg-white hover:text-red-600 hover:border-red-600"
                          >
                            <FaYoutube /> Video Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
