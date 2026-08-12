const SKILLS = [
  "Python",
  "TypeScript",
  "JavaScript (ES6+)",
  "Go (Golang)",
  "SQL",
  "RAG",
  "Agentic Workflows",
  "Tool Calling",
  "Prompt Engineering",
  "LLM Observability",
  "OpenTelemetry",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Node.js",
  "Express.js",
  "REST APIs",
  "API Design",
  "Microservices",
  "OAuth",
  "FFmpeg",
  "Inngest",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "Pinecone",
  "Supabase",
  "Object Storage",
  "Cloudflare R2",
  "Observability",
  "Distributed Tracing",
  "CI/CD",
  "Docker",
  "Linux",
  "Git & GitHub",
  "Google Cloud Platform (GCP)",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "GSAP",
  "Motion.dev",
];

function Skills() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
        Skills
      </h2>
      <p className="mt-2 text-sm font-semibold leading-relaxed">
        {SKILLS.map((skill, index) => (
          <span key={skill}>
            {index > 0 && <span className="opacity-50">, </span>}
            {skill}
          </span>
        ))}
        .
      </p>
    </section>
  );
}

export default Skills;