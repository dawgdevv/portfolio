import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index.js";

function Experience() {
  return (
    <section className="w-full space-y-6">
      <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">Experience</h2>
      <div className="grid gap-5">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group relative"
          >
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-paper/10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
            <div className="relative rounded-2xl border-2 border-paper bg-ink p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-black uppercase leading-tight tracking-tight sm:text-lg">
                    {exp.role.replace(/\s*\(.*\)$/, "").split(" - ")[0]}
                    <span className="lowercase font-bold"> {exp.role.replace(/\s*\(.*\)$/, "").split(" - ").slice(1).join(" - ")}</span>
                  </h3>
                  <p className="text-xs lowercase opacity-60">{exp.role.match(/\(.*\)$/)?.[0]?.replace(/[()]/g, "")}</p>
                  <p className="mt-1 inline-flex rounded-full bg-paper px-2.5 py-1 text-xs font-black uppercase tracking-wide text-ink">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border-2 border-paper px-3 py-1 text-xs font-black uppercase tracking-widest">
                  {exp.year}
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed opacity-80">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-paper/30 bg-paper/10 px-2.5 py-1 text-xs font-semibold">
                    {t}
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

export default Experience;
