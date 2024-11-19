import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import PropTypes from "prop-types";

const techStack = [
  { Icon: DiJavascript1, color: "text-yellow-300" },
  { Icon: RiReactjsLine, color: "text-cyan-600" },
  { Icon: TbBrandNextjs, color: "text-white" },
  { Icon: SiTailwindcss, color: "text-cyan-600" },
  { Icon: DiNodejs, color: "text-green-500" },
  { Icon: SiMongodb, color: "text-green-700" },
  { Icon: SiPostgresql, color: "text-cyan-700" },
];

const TechIcon = ({ Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    className="rounded-2xl border-4 border-neutral-800 p-4"
  >
    <Icon className={`text-7xl ${color}`} />
  </motion.div>
);

function Tech() {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techStack.map((tech, index) => (
          <TechIcon key={index} Icon={tech.Icon} color={tech.color} />
        ))}
      </div>
    </div>
  );
}

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tech;
