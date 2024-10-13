import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion"

function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          < DiJavascript1 className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          < DiNodejs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-cyan-700" />
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
