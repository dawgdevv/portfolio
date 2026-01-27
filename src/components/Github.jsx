import GitHubCalendar from "react-github-calendar";
import { FaStar, FaCodeFork } from "react-icons/fa6";

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
    <section id="github" className="py-2 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-3 text-center">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black dark:text-white mb-2 bg-white dark:bg-black border-4 border-white hover:border-black inline-block px-4 py-2 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
            GitHub Activity
          </h2>
        </div>

        {/* Calendar Section */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo-lg p-2 md:p-4 inline-block max-w-full overflow-x-auto">
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
