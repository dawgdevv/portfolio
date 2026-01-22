import { motion } from "framer-motion";

import { SiTypescript } from "react-icons/si";

import { FaGolang } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-10 lg:-mt-20">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4 font-mono"
          >
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider">
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
              className="text-2xl md:text-3xl origin-bottom-right cursor-default"
            >
              👋
            </motion.span>
            <span className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide uppercase">
              , I&apos;m
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 overflow-hidden break-words">
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
                className="inline-block hover:text-cyan-400 transition-colors duration-300 cursor-default"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed tracking-wide space-y-6"
          >
            <p>
              I am a{" "}
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-medium">
                Full Stack Engineer
              </span>
              . I primarily like to work with{" "}
              <span className="inline-flex align-middle">
                <FaGolang className="text-blue-500 mx-1" />
              </span>
              ,{" "}
              <span className="inline-flex align-middle">
                <SiTypescript className="text-blue-600 mx-1" />
              </span>
              , and{" "}
              <span className="inline-flex align-middle">
                <DiJavascript1 className="text-yellow-300 mx-1" />
              </span>
              . I like to participate in hackathons, contribute to open source,
              build projects, and ship daily.
            </p>
            <p>
              I enjoy technical discussions and have shipped products for
              startups and clients that are used by real users. I believe in{" "}
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-semibold">
                impact over perfection
              </span>
              .
            </p>
            <p>
              Connect with me to turn your idea into reality or have a chat in
              general. I love everything about development and diving deep into
              building stuff. I am{" "}
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-medium">
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
