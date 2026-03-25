import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

const GitHub = () => {
  const GITHUB_USERNAME = "dawgdevv";

  // Theme colors derived from --accent-color: #4cec3eff
  const theme = {
    light: [
      "#ebedf0", // Level 0
      "#9be9a8", // Level 1
      "#40c463", // Level 2
      "#30a14e", // Level 3
      "#216e39", // Level 4
    ],
    dark: [
      "#161b22", // Level 0
      "#0e4429", // Level 1
      "#006d32", // Level 2
      "#26a641", // Level 3
      "#39d353", // Level 4
    ],
  };

  return (
    <section id="github" className="container mx-auto px-4 py-2 flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-lg md:text-xl font-black text-center uppercase tracking-tighter text-black dark:text-[#FFEDC2]"
        >
          GitHub Activity
        </motion.h2>

        {/* Calendar Section */}
        <div className="mb-4 flex justify-center">
          <div className="bg-white dark:bg-zinc-800 border-4 border-white hover:border-black shadow-neo hover:shadow-neo-lg transition-all duration-200 p-2 inline-block max-w-full overflow-x-auto">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              fontSize={12}
              blockSize={13}
              blockMargin={3}
              theme={theme}
              style={{
                color: "inherit",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
