import { EXPERIENCES } from "../constants/index.js";

function Experience() {
  return (
    <div className="neo-panel">
      <header className="neo-panel-header">
        <div>
          <p className="neo-kicker mb-2">Where I&apos;ve worked</p>
          <h2 className="neo-title">Experience</h2>
        </div>
        <span className="neo-badge">
          {EXPERIENCES.length} roles · production work
        </span>
      </header>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className={`grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-8 ${
              index !== EXPERIENCES.length - 1
                ? "border-b-4 border-black dark:border-white"
                : ""
            }`}
          >
            <div className="space-y-3">
              <span className="neo-badge">{experience.year}</span>
              <div>
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">
                  {experience.role}
                </h3>
                <p className="mt-2 font-mono text-xs font-extrabold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                  {experience.company}
                </p>
                <p className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                  {experience.location}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium leading-relaxed sm:text-base">
                {experience.description}
              </p>

              <div
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`Technologies used at ${experience.company}`}
              >
                {experience.technologies.map((tech) => (
                  <span key={tech} className="neo-tag">
                    {tech}
                  </span>
                ))}
                </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
