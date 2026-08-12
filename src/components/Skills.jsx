const SKILLS = {
  Languages: [
    "Python",
    "TypeScript",
    "JavaScript (ES6+)",
    "Go (Golang)",
    "SQL",
  ],
  "AI and LLM": [
    "RAG",
    "Agentic Workflows",
    "Tool Calling",
    "Prompt Engineering",
    "LLM Observability",
    "OpenTelemetry",
    "LangGraph",
    "LangChain",
  ],
  "Backend Engineering": [
    "FastAPI",
    "Node.js",
    "Express.js",
    "REST APIs",
    "API Design",
    "Microservices",
    "OAuth",
    "FFmpeg",
    "Inngest",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "Pinecone",
    "Supabase",
    "Object Storage",
    "Cloudflare R2",
  ],
  "Cloud and DevOps": [
    "Observability",
    "Distributed Tracing",
    "CI/CD",
    "Docker",
    "Linux",
    "Git & GitHub",
    "Google Cloud Platform (GCP)",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "GSAP",
    "Motion.dev",
  ],
};

function Skills() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
        Skills
      </h2>
      <div className="mt-2 space-y-2">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <p key={category} className="text-sm font-semibold leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest">
              {category}:
            </span>{" "}
            <span className="opacity-80">
              {skills.map((skill, index) => (
                <span key={skill}>
                  {index > 0 && ", "}
                  {skill}
                </span>
              ))}
              .
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;