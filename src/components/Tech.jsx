import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiUbuntu,
  SiSolidity,
  SiRedis,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";

import { FaGitAlt, FaAws, FaPython } from "react-icons/fa";
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
    Icon: SiTypescript,
    color: "text-blue-600",
    url: "https://www.typescriptlang.org/",
  },
  {
    Icon: FaPython,
    color: "text-blue-500",
    url: "https://www.python.org/",
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
    Icon: SiFastapi,
    color: "text-teal-500",
    url: "https://fastapi.tiangolo.com/",
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
    Icon: SiRedis,
    color: "text-red-600",
    url: "https://redis.io/",
  },
  {
    Icon: FaAws,
    color: "text-orange-500",
    url: "https://aws.amazon.com/",
  },
  {
    Icon: DiDocker,
    color: "text-blue-500",
    url: "https://docs.docker.com/",
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
    <div className="flex flex-col justify-center items-center relative px-4 overflow-hidden py-10">
      <SnowfallBackground />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-4xl md:text-5xl font-black text-center uppercase tracking-tighter text-black dark:text-white"
      >
        Technologies
      </motion.h2>

      <div className="w-full relative overflow-hidden">

        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array to create the infinite loop effect */}
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              className="flex-shrink-0"
            >
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-zinc-800 border-4 border-black shadow-neo hover:shadow-neo-lg transition-all duration-200 group"
              >
                <tech.Icon className={`text-5xl md:text-6xl ${tech.color} drop-shadow-md transition-transform`} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
