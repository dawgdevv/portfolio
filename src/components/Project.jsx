import { useState } from "react";
import { PROJECTS, OPENSOURCE } from "../constants/index.js";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectName) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <section className="w-full space-y-8">
      <header>
        <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
          Projects
        </h2>
      </header>

      <div className="space-y-8">
        {PROJECTS.map((project) => {
          const isExpanded = expandedProject === project.name;

          return (
            <article key={project.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">
                  {project.name}
                </h3>
                <span className="text-xs font-semibold opacity-80">
                  {project.technologies?.join(" · ")}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium leading-relaxed">
                {project.description}
              </p>

              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4"
                  >
                    Live ↗
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4"
                  >
                    Source ↗
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4"
                  >
                    Video ↗
                  </a>
                )}
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleProject(project.name)}
                  className="font-black underline decoration-1 underline-offset-4"
                >
                  {isExpanded ? "Close" : "Details"}
                </button>
              </p>

              {isExpanded && (
                <div className="mt-4 space-y-4">
                  <p className="text-sm font-medium leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                  {project.features?.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">
                        Core features
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm font-medium leading-relaxed">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="space-y-6 border-t-2 border-line pt-6">
        <div>
          <h3 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
            Open Source
          </h3>
        </div>

        {OPENSOURCE.map((contribution) => (
          <article key={`${contribution.org}-${contribution.project}`}>
            <p className="text-xs font-semibold opacity-80">
              {contribution.org}
            </p>
            <h4 className="text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">
              {contribution.project}
            </h4>
            <p className="mt-1 text-sm font-medium leading-relaxed">
              {contribution.description}
            </p>
<p className="mt-1 font-mono text-xs font-bold uppercase">
              Contribution{" "}
              <span className="opacity-50">[</span>
              {contribution.links?.map((link, linkIndex) => (
                <span key={link}>
                  {linkIndex > 0 && <span className="opacity-50">, </span>}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4"
                  >
                    {linkIndex + 1}
                  </a>
                </span>
              ))}
              <span className="opacity-50">]</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
