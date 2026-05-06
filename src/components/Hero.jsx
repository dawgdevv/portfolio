import { SiTypescript } from "react-icons/si";

import { FaGolang } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";

import Dock from "./Dock";

const Hero = ({ dockItems }) => {
  return (
    <div className="relative w-full flex items-center py-2 md:py-4">
      <div className="relative z-10 max-w-full w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-left">
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-start gap-1 md:gap-2 mb-2 font-sans py-1">
            <span className="text-lg md:text-xl font-black bg-white dark:bg-zinc-800 text-black dark:text-white uppercase tracking-wider border-4 border-black dark:border-white px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default inline-block hover:scale-[1.02] hover:-translate-x-0.5 hover:-translate-y-0.5">
              Hi there
            </span>
            <span className="text-xl md:text-2xl origin-bottom-right cursor-default py-0.5 px-0.5">
              👋
            </span>
            <span className="text-lg md:text-xl text-black dark:text-zinc-400 font-bold tracking-wide py-0.5 px-0.5">
              , I&apos;m
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 flex-wrap">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white px-5 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default inline-block hover:scale-[1.01] hover:-translate-x-1 hover:-translate-y-1">
              Nishant Raj
            </h1>

            {dockItems && (
              <div className="mb-2 shrink-0 md:ml-2">
                <Dock items={dockItems} />
              </div>
            )}
          </div>

          <div className="text-sm md:text-base text-black dark:text-zinc-200 font-medium leading-relaxed tracking-wide space-y-4 mt-8 p-4 md:p-6 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]">
            <p>
              I am a{" "}
              <span className="font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 mx-1 uppercase border-2 border-black dark:border-white shadow-[2px_2px_0_0_rgba(255,255,255,0.5)] dark:shadow-[2px_2px_0_0_#000]">
                Full Stack Engineer
              </span>{" "}
              who primarily works with{" "}
              <span className="inline-flex align-middle bg-gray-100 dark:bg-zinc-800 px-1 border-2 border-black dark:border-zinc-500 mx-1">
                <FaGolang className="text-black dark:text-white mx-0.5 text-lg" />
              </span>
              ,{" "}
              <span className="inline-flex align-middle bg-gray-100 dark:bg-zinc-800 px-1 border-2 border-black dark:border-zinc-500 mx-1">
                <SiTypescript className="text-black dark:text-white mx-0.5 text-lg" />
              </span>
              , and{" "}
              <span className="inline-flex align-middle bg-gray-100 dark:bg-zinc-800 px-1 border-2 border-black dark:border-zinc-500 mx-1">
                <DiJavascript1 className="text-black dark:text-white mx-0.5 text-lg" />
              </span>
              . I actively participate in hackathons, contribute to open source,
              build meaningful projects, and ship daily.
            </p>
            <p className="border-l-4 border-black dark:border-zinc-500 pl-3">
              I enjoy technical discussions and have shipped products for
              startups and clients that are used by real users. I believe in{" "}
              <span className="font-black uppercase decoration-4 underline-offset-4 underline bg-black dark:bg-white text-white dark:text-black px-1">
                impact over perfection
              </span>
              .
            </p>
            <p>
              <span className="font-bold border-b-2 border-dashed border-black dark:border-white inline-block">
                Connect with me
              </span>{" "}
              to turn your idea into reality or have a chat in
              general. I love everything about development and diving deep into
              building exceptional products. I am{" "}
              <span className="font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 mx-1 uppercase border-2 border-black dark:border-white shadow-[2px_2px_0_0_rgba(255,255,255,0.5)] dark:shadow-[2px_2px_0_0_#000]">
                language agnostic
              </span>{" "}
              and willing to work on anything if required. I am always learning,
              improving, and open to feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
