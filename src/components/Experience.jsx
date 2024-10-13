import { EXPERIENCES } from "../constants/index.js";

function Experience() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">Experience</h2>
      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-sm text-gray-600">
                  {experience.company} • {experience.location}
                </p>
              </div>
              <p className="text-sm font-medium text-white">{experience.year}</p>
            </div>
            <p className="mt-4 text-white">{experience.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
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

