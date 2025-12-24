import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

const GitHub = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = "dawgdevv";

  // Theme colors derived from --accent-color: #8b5cf6
  const theme = {
    light: [
      "#f3e8ff", // very light purple (bg)
      "#d8b4fe", // light purple
      "#a855f7", // purple
      "#7e22ce", // dark purple
      "#581c87", // very dark purple
    ],
    dark: [
      "#2e1065", // very dark background for empty squares in dark mode
      "#7e22ce",
      "#a855f7",
      "#d8b4fe",
      "#f3e8ff",
    ],
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);

      const userResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`
      );
      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`
      );
      if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
      const reposData = await reposResponse.json();

      setGithubStats(userData);
      setRepositories(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateDescription = (description, maxLength = 80) => {
    if (!description) return "No description available";
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };

  if (loading) {
    return (
      <section id="github" className="container mx-auto px-4 py-20 bg-bg-primary">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-12 w-12 border-4 border-black border-t-accent-color rounded-full"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="container mx-auto px-4 py-20 bg-bg-primary">
        <div className="bg-red-100 border-4 border-black p-6 text-center shadow-neo">
          <p className="font-bold text-red-600 text-xl">ERROR: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-white mb-4 bg-white dark:bg-black border-4 border-black inline-block px-8 py-4 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
            GitHub Activity
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Repositories", value: githubStats?.public_repos, icon: FaCode, color: "text-blue-600" },
            { label: "Followers", value: githubStats?.followers, icon: FaUsers, color: "text-purple-600" },
            { label: "Following", value: githubStats?.following, icon: FaCodeBranch, color: "text-green-600" },
            { label: "Gists", value: githubStats?.public_gists, icon: FaGithub, color: "text-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="bg-white dark:bg-zinc-900 border-4 border-black p-6 shadow-neo hover:shadow-neo-lg transition-all duration-300 group cursor-pointer"
            >
              <stat.icon className={`text-4xl mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-4xl font-black text-black dark:text-white mb-1 group-hover:text-accent-color transition-colors">
                {stat.value}
              </h3>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-zinc-900 border-4 border-black shadow-neo-lg">

            {/* Calendar Content */}
            <div className="p-6 md:p-10 overflow-x-auto">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                fontSize={14}
                blockSize={14}
                blockMargin={4}
                theme={theme}
                style={{
                  color: 'inherit',
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Repositories */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <FaCode className="text-4xl text-black dark:text-white" />
            <h3 className="text-3xl font-black uppercase text-black dark:text-white">
              Latest Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo, index) => (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, x: -4, rotate: 1 }}
                className="block bg-white dark:bg-zinc-900 border-4 border-black shadow-neo p-6 hover:shadow-neo-lg transition-all duration-300 relative group overflow-hidden"
              >
                {/* Hover Accent Background */}
                <div className="absolute inset-0 bg-accent-color opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-black text-black dark:text-white uppercase truncate pr-4 group-hover:text-accent-color transition-colors">
                    {repo.name}
                  </h4>
                  <FaExternalLinkAlt className="text-black dark:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 line-clamp-2 h-12 text-sm leading-relaxed">
                  {truncateDescription(repo.description)}
                </p>

                <div className="flex items-center justify-between border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-accent-color border-2 border-black"></div>
                        <span className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1 hover:text-yellow-600 transition-colors">
                      <FaStar className="text-yellow-500" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <FaCodeBranch className="text-blue-500" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-black uppercase tracking-wider border-4 border-transparent hover:bg-accent-color hover:text-white hover:border-black hover:shadow-neo transition-all transform hover:-translate-y-1"
            >
              <FaGithub className="text-xl" />
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;

