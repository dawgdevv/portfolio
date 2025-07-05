import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer"; // Import the ResumeViewer component
import AnimatedCursor from "./components/AnimatedCursor";
import { Contact as ContactIcon, FileText } from "lucide-react"; // Import FileText icon
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
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
      const navHeight = document.querySelector("nav")?.offsetHeight || 80; // Dynamically get nav height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navHeight - 20, // Added extra offset
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    setActiveSection("hero");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const navHeight = document.querySelector("nav")?.offsetHeight || 80;

      let currentSection = "hero";
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Adjust detection point to be slightly below navbar
          if (
            scrollPosition >= offsetTop - navHeight - windowHeight / 2 &&
            scrollPosition <
              offsetTop + offsetHeight - navHeight - windowHeight / 2
          ) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);

      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / Math.max(scrollTotal, 1)) * 100; // Avoid division by zero
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set correct section if page loads scrolled
    handleScroll();
    // Removed window.scrollTo(0,0) to respect refresh scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden relative selection:bg-purple-500/30">
      <AnimatedCursor />
      {/* <SnowfallBackground /> */}{" "}
      {/* Consider making this optional or more subtle if performance is a concern */}
      {/* More dynamic background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a0d1f] to-[#111827] opacity-95"></div>
        {/* Subtle animated noise */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        {" "}
        {/* Ensure it's above navbar */}
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 shadow-lg shadow-purple-500/30"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="relative z-10 container mx-auto px-4 pt-8 lg:pt-2 flex flex-col items-center">
        <section
          id="hero"
          className="min-h-[calc(100vh-6rem)] w-full flex justify-center items-center py-6"
        >
          <Hero />
        </section>
        <section
          id="tech"
          className="min-h-[70vh] w-full flex justify-center items-center py-8 lg:py-12"
        >
          <Tech />
        </section>
        <section
          id="experience"
          className="min-h-[70vh] w-full flex justify-center items-center py-8 lg:py-12"
        >
          <Experience />
        </section>
        <section
          id="projects"
          className="min-h-[70vh] w-full flex justify-center items-center py-8 lg:py-12"
        >
          <Project />
        </section>
        <p className="mb-8">Made by Nishant Raj </p>
      </main>
      {/* Floating Action Buttons / Social Icons Group */}
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-5 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, stiffness: 100 }}
      >
        {[
          {
            label: "Resume",
            icon: <FileText className="w-8 h-8" />,
            action: handleResumeClick,
            href: null,
          },
          {
            label: "Contact",
            icon: <ContactIcon className="w-8 h-8" />,
            action: handleContactClick,
            href: null,
          },
          {
            label: "LinkedIn",
            icon: <FaLinkedin className="w-8 h-8" />,
            href: "https://www.linkedin.com/in/nraj24/",
            action: null,
          },
          {
            label: "GitHub",
            icon: <FaGithub className="w-8 h-8" />,
            href: "https://github.com/dawgdevv",
            action: null,
          },
          {
            label: "Twitter",
            icon: <FaSquareXTwitter className="w-8 h-8" />,
            href: "https://x.com/sfunish",
            action: null,
          },
        ].map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={
              item.action ? item.action : () => window.open(item.href, "_blank")
            }
            className="group bg-black/40 backdrop-blur-md border border-white/10 shadow-lg hover:border-purple-500/50 text-gray-300 hover:text-white p-3 rounded-full flex items-center gap-2 transition-all duration-300"
            aria-label={item.label}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
          >
            {item.icon}
            <span className="hidden group-hover:inline-block text-xs font-mono pr-1">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[70] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-lg"
            >
              <Contact onClose={handleCloseModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[70] flex items-center justify-center p-4"
          >
            {/* ResumeViewer might need its own motion.div for entry/exit if it's not self-contained */}
            <ResumeViewer onClose={handleCloseResumeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
