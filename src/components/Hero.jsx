import { motion } from "framer-motion";

import { SiTypescript } from "react-icons/si";

import { FaGolang } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";

const Hero = () => {
  return (
    <div className="relative w-full flex items-center overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-full w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
          className="space-y-3"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            className="flex flex-wrap items-center justify-start gap-2 md:gap-3 mb-2 font-sans"
          >
            <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent uppercase tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              Hi there
            </span>
            <motion.span
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="text-2xl md:text-4xl origin-bottom-right cursor-default"
            >
              💻
            </motion.span>
            <span className="text-xl md:text-3xl text-gray-300 font-bold tracking-wide uppercase">
              , I&apos;m
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-4 overflow-hidden break-words">
            {"Nishant Raj".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05 + 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="inline-block hover:text-amber-300 transition-colors duration-300 cursor-default"
                whileHover={{
                  y: -10,
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl font-sans leading-relaxed tracking-wide space-y-6"
          >
            <p className="text-gray-300">
              I am a{" "}
              <span className="text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] font-semibold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Full Stack Engineer
              </span>{" "}
              who primarily works with{" "}
              <span className="inline-flex align-middle">
                <FaGolang className="text-blue-400 mx-1 text-xl" />
              </span>
              ,{" "}
              <span className="inline-flex align-middle">
                <SiTypescript className="text-blue-500 mx-1 text-xl" />
              </span>
              , and{" "}
              <span className="inline-flex align-middle">
                <DiJavascript1 className="text-yellow-300 mx-1 text-xl" />
              </span>
              . I actively participate in hackathons, contribute to open source,
              build meaningful projects, and ship daily.
            </p>
            <p className="text-gray-300">
              I enjoy technical discussions and have shipped products for
              startups and clients that are used by real users. I believe in{" "}
              <span className="text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] font-semibold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                impact over perfection
              </span>
              .
            </p>
            <p className="text-gray-300">
              Connect with me to turn your idea into reality or have a chat in
              general. I love everything about development and diving deep into
              building exceptional products. I am{" "}
              <span className="text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] font-semibold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                language agnostic
              </span>{" "}
              and willing to work on anything if required. I am always learning,
              improving, and open to feedback.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
