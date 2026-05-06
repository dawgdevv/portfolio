import { OPENSOURCE } from "../constants/index.js";
import { FaExternalLinkAlt } from "react-icons/fa";

function OpenSource() {
  return (
    <section className="container mx-auto px-4 py-2 flex flex-col justify-center">
      <h2 className="mb-4 text-xl md:text-2xl font-black text-center uppercase tracking-tighter text-black" style={{ textShadow: '0 0 16px rgba(255,255,255,0.6), 0 0 32px rgba(255,255,255,0.3)' }}>
        Notable Open Source Contributions
      </h2>
      <div className="flex flex-col max-w-4xl mx-auto w-full gap-3">
        {OPENSOURCE.map((contribution, index) => (
          <div
            key={index}
            className="flex-1 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform duration-200"
          >
            <div className="bg-white dark:bg-zinc-800 p-2 md:p-3 border-4 border-white hover:border-black shadow-neo hover:shadow-neo-lg transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-black dark:text-white">
                  <span className="text-gray-500 dark:text-gray-400 font-mono text-xs mr-1">
                    {contribution.org}/
                  </span>
                  {contribution.project}
                </h3>
              </div>

              <p className="text-black dark:text-gray-200 text-[11px] md:text-sm leading-relaxed font-medium mb-3">
                {contribution.description}
              </p>

              {contribution.links && contribution.links.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {contribution.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] md:text-[10px] font-bold uppercase text-black border-2 border-gray-200 hover:border-black bg-white shadow-sm transition-colors hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-[9px]" />
                      Contribution {linkIndex + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;
