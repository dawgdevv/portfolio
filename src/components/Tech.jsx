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
    <div className="pb-4 h-full flex flex-col justify-center relative">
      <SnowfallBackground />
      <h1 className="my-4 text-center text-3xl mt-48 font-bold">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center mt-8 justify-center gap-4">
        {techStack.map((tech, index) => (
          <TechIcon
            key={index}
            Icon={tech.Icon}
            color={tech.color}
            url={tech.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Tech;
