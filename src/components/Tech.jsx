import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiUbuntu,
} from "react-icons/si";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
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
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <SnowfallBackground />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            className="flex justify-center"
          >
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-black backdrop-blur-sm border border-white  hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <tech.Icon className={`text-5xl ${tech.color}`} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;
