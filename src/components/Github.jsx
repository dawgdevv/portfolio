import GitHubCalendar from "react-github-calendar";

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
    <section id="github" className="py-20 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-white mb-4 bg-white dark:bg-black border-4 border-white hover:border-black inline-block px-8 py-4 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
            GitHub Activity
          </h2>
        </div>

        {/* Calendar Section */}
        <div className="mb-20">
          <div className="bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo-lg">
            {/* Calendar Content */}
            <div className="p-6 md:p-10 overflow-x-auto">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                fontSize={14}
                blockSize={14}
                blockMargin={4}
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
      </div>
    </section>
  );
};

export default GitHub;
