import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const GitHub = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = "dawgdevv";

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);

      // Fetch user stats
      const userResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}`
      );
      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const userData = await userResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
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

  const truncateDescription = (description, maxLength = 100) => {
    if (!description) return "No description available";
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };

  if (loading) {
    return (
      <section id="github" className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center text-red-400">
          <p>Error loading GitHub data: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="container mx-auto px-4 py-10 max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-3xl md:text-4xl font-bold bg-gradient-to-r text-center from-gray-100 to-gray-300 bg-clip-text text-transparent"
      >
        GitHub Activity
      </motion.h2>

      {/* GitHub Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
      >
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
          <FaCode className="text-orange-500 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">
            {githubStats?.public_repos || 0}
          </div>
          <div className="text-gray-400 text-sm">Repositories</div>
        </div>
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
          <FaUsers className="text-blue-500 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">
            {githubStats?.followers || 0}
          </div>
          <div className="text-gray-400 text-sm">Followers</div>
        </div>
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
          <FaCodeBranch className="text-green-500 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">
            {githubStats?.following || 0}
          </div>
          <div className="text-gray-400 text-sm">Following</div>
        </div>
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
          <FaGithub className="text-gray-500 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">
            {githubStats?.public_gists || 0}
          </div>
          <div className="text-gray-400 text-sm">Gists</div>
        </div>
      </motion.div>

      {/* GitHub Contribution Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <FaGithub className="text-orange-500" />
          Contribution Activity
        </h3>
        <div className="overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme="dark"
            fontSize={15}
            blockSize={17}
            maxlevel={{
              level0: "#161b22",
              level1: "#0e4429",
              level2: "#006d32",
              level3: "#26a641",
              level4: "#39d353",
            }}
          />
        </div>
      </motion.div>

      {/* Recent Repositories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <FaCode className="text-orange-500" />
          Recent Repositories
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-5 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-white truncate">
                  {repo.name}
                </h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <HiOutlineExternalLink size={18} />
                </a>
              </div>

              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                {truncateDescription(repo.description)}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FaStar size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch size={12} />
                    {repo.forks_count}
                  </span>
                </div>
                <span>{formatDate(repo.updated_at)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Repositories Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-8"
      >
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          <FaGithub />
          View All Repositories
          <HiOutlineExternalLink size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default GitHub;
