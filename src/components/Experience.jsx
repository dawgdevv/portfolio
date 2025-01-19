import { EXPERIENCES } from "../constants/index.js";
import SnowfallBackground from "./SnowfallBackground.jsx";

function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 h-full flex flex-col justify-center">
      <SnowfallBackground />
      <h2 className="mb-4 text-center text-3xl font-bold">Experience</h2>
      <div className="space-y-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-xs text-gray-400">
                  {experience.company} • {experience.location}
                </p>
              </div>
              <p className="text-lg font-medium text-white">
                {experience.year}
              </p>
            </div>
            <p className="mt-2 text-white text-lg">{experience.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
