import { motion } from "framer-motion";
import PropTypes from "prop-types";
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
        ease: "easeOut",
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
    <div className="relative w-full flex items-center justify-center overflow-hidden min-h-screen">
      <SnowfallBackground />

      {/* Simplified background for Neo Brutalism */}


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full h-full flex flex-col justify-center items-center text-center">

        {/* Main Heading Group */}
        <div className="space-y-8 mb-12">
          <div className="inline-block bg-white dark:bg-zinc-900 p-8 border-4 border-black shadow-neo-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <AnimatedText
              text="HI THERE 👋"
              className="text-5xl md:text-7xl lg:text-8xl font-black text-black dark:text-white tracking-tighter mb-4"
              delay={0}
            />
            <AnimatedText
              text="I'M NISHANT RAJ"
              className="text-6xl md:text-8xl lg:text-9xl font-black text-accent-color tracking-tighter uppercase"
              delay={0.1}
            />
          </div>

          <div className="flex justify-center">
            <div className="bg-accent-color p-6 border-4 border-black shadow-neo transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-4xl">
              <AnimatedText
                text="ENGINEER THAT'S DEEP INTO BUILDING STUFF"
                className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase"
                delay={0.2}
              />
            </div>
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
