/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import GitHub from "./components/Github";
import ResumeViewer from "./components/ResumeViewer";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Introduction" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "github", label: "GitHub" },
    ],
    [],
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

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-black dark:text-gray-100 overflow-x-hidden relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="relative inset-0 -z-10 absolute bg-white dark:bg-zinc-950">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-2 z-[60] bg-transparent border-b-2 border-dashed border-gray-300 dark:border-zinc-800">
        <motion.div
          className="h-full bg-black dark:bg-white border-r-4 border-white dark:border-black"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col items-center gap-2 md:gap-4">
        <section
          id="hero"
          className="w-full flex justify-center items-center py-2"
        >
          <Hero
            dockItems={[
              {
                label: "Resume",
                icon: <FileText className="text-black dark:text-white w-full h-full" />,
                action: handleResumeClick,
              },
              {
                label: "LinkedIn",
                icon: <FaLinkedin className="text-black dark:text-white w-full h-full" />,
                href: "https://www.linkedin.com/in/nraj24/",
              },
              {
                label: "GitHub",
                icon: <FaGithub className="text-black dark:text-white w-full h-full" />,
                href: "https://github.com/dawgdevv",
              },
              {
                label: "Twitter",
                icon: <FaSquareXTwitter className="text-black dark:text-white w-full h-full" />,
                href: "https://x.com/sfunish",
              },
              {
                label: "Peerlist",
                icon: <SiPeerlist className="text-black dark:text-white w-full h-full" />,
                href: "https://peerlist.io/nishantraj",
              },

            ]}
          />
        </section>

        <section
          id="experience"
          className="w-full flex justify-center items-center py-2"
        >
          <Experience />
        </section>
        <section
          id="projects"
          className="w-full flex justify-center items-center py-2"
        >
          <Project />
        </section>
        <section
          id="github"
          className="w-full flex justify-center items-center py-2"
        >
          <GitHub />
        </section>
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white dark:bg-black border-4 border-black dark:border-white shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff] hover:translate-x-[4px] hover:translate-y-[4px] px-4 md:px-6 py-2 flex items-center gap-2 transition-all group cursor-default z-50">
          <span className="text-xs md:text-sm font-black uppercase text-black dark:text-white group-hover:underline underline-offset-4 decoration-4 transition-colors">
            Made By Nishant Raj
          </span>
        </div>
      </main>
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[70] flex items-center justify-center p-4"
          >
            <Suspense fallback={<LoadingFallback />}>
              <ResumeViewer onClose={handleCloseResumeModal} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
