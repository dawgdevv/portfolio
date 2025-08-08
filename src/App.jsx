import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./components/Hero"));
const Tech = lazy(() => import("./components/Tech"));
const Experience = lazy(() => import("./components/Experience"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const GitHub = lazy(() => import("./components/Github"));
const ResumeViewer = lazy(() => import("./components/ResumeViewer"));
import AnimatedCursor from "./components/AnimatedCursor";
import { Contact as ContactIcon, FileText } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

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
      { id: "github", label: "GitHub" },
    ],
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navHeight - 20,
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
      const scrolled = (scrollPosition / Math.max(scrollTotal, 1)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden relative selection:bg-orange-500/30">
      <AnimatedCursor />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a0d1f] to-[#111827] opacity-95"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-600 via-pink-500 to-orange-400 shadow-lg shadow-orange-500/30"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="relative z-10 container mx-auto px-4 pt-8 lg:pt-2 flex flex-col items-center">
        <Suspense fallback={<LoadingSpinner />}>
          <section
            id="hero"
            className="min-h-[calc(100vh-6rem)] w-full flex justify-center items-center py-6"
          >
            <Hero />
          </section>
          <section
            id="tech"
            className="w-full flex justify-center items-center py-16"
          >
            <Tech />
          </section>
          <section
            id="experience"
            className="w-full flex justify-center items-center py-16"
          >
            <Experience />
          </section>
          <section
            id="projects"
            className="w-full flex justify-center items-center py-16"
          >
            <Project />
          </section>
          <section
            id="github"
            className="w-full flex justify-center items-center py-16"
          >
            <GitHub />
          </section>
        </Suspense>
        <p className="mb-8">Made by Nishant Raj </p>
      </main>
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-5 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, stiffness: 100 }}
      >
        {[
          {
            label: "Resume",
            icon: <FileText className="text-red-600 w-6 h-6" />,
            action: handleResumeClick,
            href: null,
          },
          {
            label: "LinkedIn",
            icon: <FaLinkedin className="text-blue-600 w-6 h-6" />,
            href: "https://www.linkedin.com/in/nraj24/",
            action: null,
          },
          {
            label: "GitHub",
            icon: <FaGithub className="text-white w-6 h-6" />,
            href: "https://github.com/dawgdevv",
            action: null,
          },
          {
            label: "Twitter",
            icon: <FaSquareXTwitter className="w-6 h-6" />,
            href: "https://x.com/sfunish",
            action: null,
          },
          {
            label: "Peerlist",
            icon: <SiPeerlist className="text-green-500 w-6 h-6" />,
            href: "https://peerlist.io/nishantraj",
            action: null,
          },
          {
            label: "Contact",
            icon: <ContactIcon className="w-6 h-6" />,
            action: handleContactClick,
            href: null,
          },
        ].map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={
              item.action ? item.action : () => window.open(item.href, "_blank")
            }
            className="group bg-black/40 backdrop-blur-md border border-white/10 shadow-lg hover:border-orange-500/50 text-gray-300 hover:text-white p-3 rounded-full flex items-center gap-2 transition-all duration-300"
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
              <Suspense fallback={<LoadingSpinner />}>
                <Contact onClose={handleCloseModal} />
              </Suspense>
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
            <Suspense fallback={<LoadingSpinner />}>
              <ResumeViewer onClose={handleCloseResumeModal} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
