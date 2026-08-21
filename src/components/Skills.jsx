import { motion } from "framer-motion";

const SKILLS = {
  Languages: ["Python", "TypeScript", "JavaScript (ES6+)", "Go (Golang)", "SQL"],
  "AI and LLM": ["RAG", "Agentic Workflows", "Tool Calling", "Prompt Engineering", "LLM Observability", "OpenTelemetry", "LangGraph", "LangChain"],
  "Backend Engineering": ["FastAPI", "Node.js", "Express.js", "REST APIs", "API Design", "Microservices", "OAuth", "FFmpeg", "Inngest"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Pinecone", "Supabase", "Object Storage", "Cloudflare R2"],
  "Cloud and DevOps": ["Observability", "Distributed Tracing", "CI/CD", "Docker", "Linux", "Git & GitHub", "Google Cloud Platform (GCP)"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "GSAP", "Motion.dev"],
};

function Skills() {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(SKILLS).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group relative"
          >
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-paper/10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
            <div className="relative rounded-2xl border-2 border-paper bg-ink p-4 transition-colors group-hover:border-paper/80">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-paper" aria-hidden="true" />
                {category}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-paper px-2.5 py-1 text-xs font-bold leading-none text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
