import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { HERO_CONTENT } from "../constants/index.js";
import myphoto from "../assets/my_photo.jpg";
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
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <SnowfallBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Text Content - Left Side */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <AnimatedText
                text="Hi there 👋"
                className="text-4xl lg:text-6xl font-semibold text-orange-400/90 tracking-wide leading-tight"
                delay={0}
              />
              <AnimatedText
                text="I'm Nishant Raj"
                className="text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1]"
                delay={0.1}
              />
            </div>

            <AnimatedText
              text="Engineer That's Deep Into Building Stuff "
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-400 to-green-400 bg-clip-text text-transparent text-center lg:text-left leading-tight"
              delay={0.2}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-100 max-w-3xl text-center lg:text-left leading-8 lg:leading-9 tracking-[0.01em] [&_p]:mb-4 [&_p]:leading-8 lg:[&_p]:leading-9"
            >
              <ReactMarkdown>{HERO_CONTENT}</ReactMarkdown>
            </motion.div>
          </div>
          {/* Profile Photo - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative group"
          >
            {/* Moon-like outer glow effect */}
            <div className="absolute -inset-8 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
            <div className="absolute -inset-12 bg-yellow-50/10 rounded-full blur-2xl group-hover:animate-pulse opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

            {/* Inner border gradient */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-200/50 via-orange-400/50 to-yellow-200/50 rounded-full opacity-20 group-hover:opacity-60 transition-all duration-500"></div>

            {/* Main container */}
            <div className="relative bg-gray-900 rounded-full p-[2px]">
              <div className="relative overflow-hidden rounded-full bg-gray-900">
                <img
                  src={myphoto}
                  alt="Nishant Raj"
                  className="w-52 h-52 lg:w-64 lg:h-64 rounded-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/40 opacity-40 group-hover:opacity-0 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
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
