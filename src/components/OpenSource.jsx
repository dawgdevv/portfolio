import { OPENSOURCE } from "../constants/index.js";
import { FaExternalLinkAlt } from "react-icons/fa";

function OpenSource() {
  return (
    <section className="container mx-auto px-4 py-2 flex flex-col justify-center">
      <h2 className="mb-4 text-xl md:text-2xl font-black text-center uppercase tracking-tighter text-black" style={{ textShadow: '0 0 16px rgba(255,255,255,0.6), 0 0 32px rgba(255,255,255,0.3)' }}>
        Open Source
      </h2>
      <div className="flex flex-col max-w-4xl mx-auto w-full gap-3">
        {OPENSOURCE.map((contribution, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 p-3 md:p-4 border-4 border-white hover:border-black dark:border-zinc-800 dark:hover:border-white shadow-neo hover:shadow-neo-lg transition-all duration-200 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-black dark:text-white">
                  <span className="text-gray-500 dark:text-gray-400 font-mono text-xs mr-1">
                    {contribution.org}/
                  </span>
                  {contribution.project}
                </h3>
              </div>
            </div>

            <p className="text-black dark:text-gray-200 text-[11px] md:text-sm leading-relaxed font-medium mb-3">
              {contribution.description}
            </p>

            {contribution.links && contribution.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {contribution.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] md:text-xs font-bold uppercase bg-gray-100 dark:bg-zinc-900 text-black dark:text-white border-2 border-gray-200 dark:border-zinc-700 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                  >
                    <FaExternalLinkAlt className="text-[9px]" />
                    Contribution {linkIndex + 1}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;
