import { OPENSOURCE } from "../constants/index.js";
import { ArrowUpRight } from "lucide-react";

function OpenSource() {
  return (
    <div className="neo-panel">
      <header className="neo-panel-header">
        <div>
          <p className="neo-kicker mb-2">Building in public</p>
          <h2 className="neo-title">Open Source</h2>
        </div>
        <span className="neo-badge">Code beyond my own projects</span>
      </header>

      {OPENSOURCE.map((contribution, contributionIndex) => (
        <article
          key={`${contribution.org}-${contribution.project}`}
          className={`grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-8 ${
            contributionIndex !== OPENSOURCE.length - 1
              ? "border-b-4 border-black dark:border-white"
              : ""
          }`}
        >
          <div>
            <p className="neo-kicker mb-2">{contribution.org}</p>
            <h3 className="text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl">
              {contribution.project}
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-200">
              {contribution.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="neo-kicker mb-1">Accepted contributions</p>
            {contribution.links?.map((link, linkIndex) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${contribution.org} ${contribution.project} contribution ${linkIndex + 1}`}
                className="neo-interactive grid min-h-12 grid-cols-[auto_1fr_auto] items-center gap-3 border-2 border-black bg-zinc-100 px-3 py-2 text-black dark:border-white dark:bg-zinc-900 dark:text-white"
              >
                <span className="font-mono text-[10px] font-black">
                  0{linkIndex + 1}
                </span>
                <span className="text-xs font-black uppercase tracking-wide">
                  View contribution
                </span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default OpenSource;
