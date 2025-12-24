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

const KeyboardIllustration = () => {
  const rows = [
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5], // ~13u
    [1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.2], // ~13u
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ~12u
    [2.3, 1, 1, 1, 1, 1, 1, 1, 1, 2], // ~12u
    [1.5, 1.5, 1.5, 4, 1.5, 1.5, 1.5]  // Spacebar row
  ];

  return (
    <div className="hidden xl:block absolute left-[100%] top-1/2 -translate-y-1/2 -translate-x-8 z-0">
      {/* Wire Suspension */}
      <svg className="absolute -top-12 -left-12 w-24 h-24 pointer-events-none z-0" style={{ overflow: 'visible' }}>
        <path
          d="M -20 -10 Q 10 20 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-black dark:text-white"
        />
      </svg>

      <div className="bg-white dark:bg-zinc-800 p-2 border-2 border-white hover:border-black shadow-neo rounded-lg transform rotate-[5deg] hover:rotate-2 transition-transform duration-500 scale-75 origin-top-left relative z-10">
        <div className="flex flex-col gap-1">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 justify-center">
              {row.map((width, keyIndex) => (
                <motion.div
                  key={`${rowIndex}-${keyIndex}`}
                  initial={{ y: 0 }}
                  animate={{ y: [0, 2, 0] }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 5 + 2,
                    delay: Math.random() * 2,
                  }}
                  className="h-4 md:h-5 bg-gray-100 dark:bg-zinc-700 border-b-2 border-r border-l border-t border-gray-300 dark:border-zinc-600 rounded bg-white shadow-sm"
                  style={{ width: `${width * 14}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden min-h-screen">
      <SnowfallBackground />

      {/* Simplified background for Neo Brutalism */}


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full h-full flex flex-col justify-center items-center text-center">

        {/* Main Heading Group */}
        <div className="space-y-8 mb-12 relative w-full flex flex-col items-center">

          {/* Keyboard Decoration - Positioned relative to the main block container */}
          <div className="relative inline-block">
            <div className="inline-block bg-white dark:bg-zinc-900 p-8 border-4 border-white hover:border-black shadow-neo-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 relative z-10">
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
            {/* Render Keyboard Side Visual (Desktop Only) */}
            <KeyboardIllustration />
          </div>


          <div className="flex justify-center">
            <div className="bg-accent-color p-6 border-4 border-white hover:border-black shadow-neo transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-4xl relative z-10">
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
