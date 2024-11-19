import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import PropTypes from "prop-types";

const AnimatedText = ({ text, className, delay = 0 }) => {
  const container = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
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
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <AnimatedText
              text="Hi, I am Nishant Raj"
              className="pb-16 text-6xl tracking-light lg:mt-16 lg:text-8xl font-bold"
              delay={0}
            />
            <AnimatedText
              text="3rd Year Student at JK Lakshmipat University"
              className="bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              delay={0.2}
            />
            <AnimatedText
              text={HERO_CONTENT}
              className="my-2 max-w-xl py-6 font-medium tracking-tighter"
              delay={0.4}
            />
          </div>
        </div>
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
