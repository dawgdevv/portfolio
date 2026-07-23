import { ArrowUpRight } from "lucide-react";

const Hero = ({ profileLinks }) => {
  return (
    <div className="relative z-10 w-full">
      <div className="neo-panel">
        <header className="flex flex-col gap-3 border-b-4 border-black p-4 dark:border-white sm:p-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
              Hi there <span aria-hidden="true">👋</span>, I&apos;m
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl md:text-7xl">
              Nishant Raj
            </h1>
          </div>
          <div className="w-fit border-2 border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white dark:border-white dark:bg-white dark:text-black">
            Engineer · Builder · Open Source
          </div>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.8fr)]">
          <div className="space-y-5 p-4 text-sm font-medium leading-relaxed tracking-wide dark:text-zinc-200 sm:p-6 md:text-base">
            <p>
              I&apos;m a{" "}
              <strong className="font-black">
                Full Stack and Backend Engineer
              </strong>
              ,{" "}
              open-source contributor, and independent thinker who builds
              practical products with AI.
            </p>
            <p className="border-l-4 border-black pl-4 dark:border-white">
              I&apos;ve worked with startups, freelanced, and shipped projects
              around problems I find meaningful. My work spans AI integration,
              backend optimization, cloud deployments, and Linux—my daily
              environment for the past three years.
            </p>
            <p>
              I enjoy making systems faster, simpler, and more useful. I
              contribute actively to open source, communicate openly, and share
              honest opinions. I learn quickly, think independently, and care
              most about solving real problems with people who value good
              engineering.
            </p>
          </div>

          <aside className="border-t-4 border-black bg-zinc-100 p-3 dark:border-white dark:bg-zinc-900 lg:border-l-4 lg:border-t-0">
            <p className="px-2 pb-3 pt-1 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
              Find me online
            </p>
            <div className="flex flex-col gap-2">
              {profileLinks?.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-2 border-black bg-white p-2.5 text-black transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#000] focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white dark:bg-zinc-950 dark:text-white dark:hover:shadow-[3px_3px_0_0_#fff] dark:focus-visible:outline-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-zinc-100 p-2 dark:border-white dark:bg-zinc-800">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span className="block truncate text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 sm:text-xs">
                      {item.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Hero;
