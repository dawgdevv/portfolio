import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { HERO_CONTENT } from "../constants/index.js";
import SnowfallBackground from "./SnowfallBackground.jsx";

const AnimatedText = ({ text, className, delay = 0 }) => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text}
    </motion.div>
  );
};

function Hero() {
  return (
    <div className="relative h-full flex items-center justify-center bg-gradient-to-r">
      <SnowfallBackground />
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
        <AnimatedText
          text="Hi, I am Nishant Raj"
          className="pb-4 text-4xl lg:text-6xl font-bold text-white"
          delay={0}
        />
        <AnimatedText
          text="3rd Year Student at JK Lakshmipat University"
          className="bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl text-transparent"
          delay={0.2}
        />
        <AnimatedText
          text={HERO_CONTENT}
          className="my-4 max-w-xl py-6 font-medium tracking-tighter text-2xl lg:text-xl text-white"
          delay={0.4}
        />
      </div>
    </div>
  );
}

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default Hero;
