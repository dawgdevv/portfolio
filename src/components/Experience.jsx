import { EXPERIENCES } from "../constants/index.js";

function Experience() {
  return (
    <section className="w-full space-y-8">
      <header>
        <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
          Experience
        </h2>
      </header>

      <div className="space-y-8">
        {EXPERIENCES.map((experience) => (
          <article key={`${experience.company}-${experience.role}`}>
            <div className="flex items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">
                  {experience.role.replace(/\s*\(.*\)$/, "").split(" - ")[0]}
                  <span className="lowercase">
                    {" "}
                    {experience.role.replace(/\s*\(.*\)$/, "").split(" - ").slice(1).join(" - ")}
                  </span>
                </h3>
                <p className="lowercase opacity-80">
                  {experience.role.match(/\(.*\)$/)?.[0]?.replace(/[()]/g, "")}
                </p>
                <p className="text-xs font-bold uppercase tracking-wide">
                  {experience.company} — {experience.location}
                </p>
              </div>
              <p className="shrink-0 text-xs font-semibold opacity-80">
                {experience.year}
              </p>
            </div>
            <p className="mt-2 text-sm font-medium leading-relaxed">
              {experience.description}
            </p>
            <p className="mt-2 text-xs font-semibold">
              {experience.technologies.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;