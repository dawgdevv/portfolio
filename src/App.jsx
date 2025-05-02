import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import SnowfallBackground from "./components/SnowfallBackground";
import AnimatedCursor from "./components/AnimatedCursor";
import { Contact as ContactIcon } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Introduction" },
      { id: "tech", label: "Technologies" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ],
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    setActiveSection("hero");

    const handleScroll = () => {
      // Track active section
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(id);
          }
        }
      });

      // Update scroll progress
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / scrollTotal) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden relative">
      <AnimatedCursor />
      <SnowfallBackground />

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#030712] to-[#1f2937] opacity-90" />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />

      <main className="relative z-10 container mx-auto px-2 pt-12 flex flex-col items-center">
        <section
          id="hero"
          className="min-h-[70vh] w-full flex justify-center items-center"
        >
          <Hero />
        </section>

        <section
          id="tech"
          className="min-h-[70vh] w-full flex justify-center items-center"
        >
          <Tech />
        </section>

        <section
          id="experience"
          className="min-h-[70vh] w-full flex justify-center items-center"
        >
          <Experience />
        </section>

        <section
          id="projects"
          className="min-h-[70vh] w-full flex justify-center items-center"
        >
          <Project />
        </section>
      </main>

      {/* Social Icons Section with hover effects */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleContactClick}
          className="bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-gray-800/50 flex items-center justify-center transition-all duration-300"
        >
          <ContactIcon className="w-6 h-6 text-white" />
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/nraj24/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-800/50 flex items-center justify-center transition-all duration-300"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/dawgdevv"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-800/50 flex items-center justify-center transition-all duration-300"
        >
          <FaGithub className="w-6 h-6 text-white" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/sfunish"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-800/50 flex items-center justify-center transition-all duration-300"
        >
          <FaSquareXTwitter className="w-6 h-6 text-white" />
        </motion.a>
      </div>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <Contact onClose={handleCloseModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
