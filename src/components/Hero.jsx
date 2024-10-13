import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    }
  }
})
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:wg-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl tracing-light lg:mt-16 lg:text-8xl font-bold">
              Hi I am Nishant Raj
            </motion.h1>
            <motion.span variants={container(0)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              3rd Year Student at JK Lakshmipat University{" "}
            </motion.span>
            <motion.p variants={container(0)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
          <div className="flex justify-center">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
