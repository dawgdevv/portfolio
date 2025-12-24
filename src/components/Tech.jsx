import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiUbuntu,
  SiSolidity,
} from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiNodejs, DiJavascript1, DiDocker } from "react-icons/di";

import PropTypes from "prop-types";
import SnowfallBackground from "./SnowfallBackground.jsx";

const techStack = [
  {
    Icon: DiJavascript1,
    color: "text-yellow-300",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Icon: RiReactjsLine,
    color: "text-cyan-600",
    url: "https://react.dev/blog/2023/03/16/introducing-react-dev",
  },
  { Icon: TbBrandNextjs, color: "text-white", url: "https://nextjs.org/docs" },
  {
    Icon: SiTailwindcss,
    color: "text-cyan-600",
    url: "https://tailwindcss.com/docs",
  },
  {
    Icon: DiNodejs,
    color: "text-green-500",
    url: "https://nodejs.org/en/docs/",
  },
  {
    Icon: SiMongodb,
    color: "text-green-700",
    url: "https://docs.mongodb.com/",
  },
  {
    Icon: SiPostgresql,
    color: "text-cyan-700",
    url: "https://www.postgresql.org/docs/",
  },
  {
    Icon: SiUbuntu,
    color: "text-orange-600",
    url: "https://ubuntu.com/",
  },
  {
    Icon: FaGolang,
    color: "text-blue-500",
    url: "https://golang.org/doc/",
  },
  {
    Icon: DiDocker,
    color: "text-blue-500",
    url: "https://docs.docker.com/",
  },
  {
    Icon: FaGitAlt,
    color: "text-red-500",
    url: "https://git-scm.com/doc",
  },
  {
    Icon: SiSolidity,
    color: "text-blue-500",
    url: "https://docs.soliditylang.org/",
  },
];

const TechIcon = ({ Icon, color, url }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    className="rounded-2xl border-4 border-neutral-800 p-4"
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className={`text-6xl ${color}`} />
    </a>
  </motion.div>
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Tech() {
  return (
    <div className="flex flex-col justify-center items-center relative px-4">
      <SnowfallBackground />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-4xl md:text-5xl font-black text-center uppercase tracking-tighter text-black dark:text-white"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -5,
              x: -5,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              y: 0,
              x: 0,
            }}
            className="flex justify-center"
          >
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 w-full bg-white dark:bg-zinc-800 border-4 border-black shadow-neo hover:shadow-neo-lg transition-all duration-200 group"
            >
              <tech.Icon className={`text-6xl ${tech.color} drop-shadow-md`} />
              {/* Optional label if needed, or stick to icons only as per original design but bolder */}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;
