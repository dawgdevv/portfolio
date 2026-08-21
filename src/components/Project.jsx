import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { PROJECTS, OPENSOURCE } from "../constants/index.js";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);
  const toggleProject = (name) => setExpandedProject(expandedProject === name ? null : name);
  return (
    <section className="w-full space-y-8">
      <h2 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">Projects</h2>
      <div className="grid gap-5">
        {PROJECTS.map((p, i) => {
          const isExpanded = expandedProject === p.name;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-paper/10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
              <div className="relative rounded-2xl border-2 border-paper bg-ink p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-base font-black uppercase leading-tight tracking-tight sm:text-lg">{p.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies?.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-paper px-2 py-1 text-[11px] font-black uppercase tracking-wide text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">{p.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase">
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-1 underline-offset-4">
                      Live <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {p.githubLink && (
                    <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-1 underline-offset-4">
                      Source <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  <motion.button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleProject(p.name)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1 rounded-full border-2 border-paper px-3 py-1 text-xs font-black hover:bg-paper hover:text-ink transition-colors"
                  >
                    {isExpanded ? "Close" : "Details"}
                    <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                      <ChevronDown className="h-3 w-3" />
                    </motion.span>
                  </motion.button>
                </div>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t-2 border-paper/15 pt-4">
                        <p className="text-sm font-medium leading-relaxed opacity-90">{p.longDescription || p.description}</p>
                        {p.features?.length > 0 && (
                          <ul className="grid gap-2">
                            {p.features.map((f) => (
                              <li key={f} className="flex gap-2 text-sm font-medium">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div id="opensource" className="space-y-5 pt-2">
        <h3 className="text-lg font-black uppercase tracking-tight">Open Source</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {OPENSOURCE.map((c, i) => (
            <motion.div
              key={`${c.org}-${c.project}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-paper/10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
              <div className="relative rounded-2xl border-2 border-paper bg-ink p-4">
                <p className="text-xs font-black uppercase tracking-widest opacity-60">{c.org}</p>
                <h4 className="text-base font-black uppercase">{c.project}</h4>
                <p className="mt-1 text-sm font-medium opacity-80">{c.description}</p>
                <p className="mt-2 font-mono text-xs font-bold uppercase opacity-70">
                  [<span className="opacity-40"> </span>
                  {c.links?.map((l, idx) => (
                    <span key={l}>
                      {idx > 0 && <span className="opacity-40">, </span>}
                      <a href={l} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4">
                        {idx + 1}
                      </a>
                    </span>
                  ))}
                  <span className="opacity-40"> </span>]
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
