/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, lazy, Suspense, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Contact as ContactIcon, FileText } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";

const Hero = lazy(() => import("./components/Hero"));
const Experience = lazy(() => import("./components/Experience"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const GitHub = lazy(() => import("./components/Github"));
const ResumeViewer = lazy(() => import("./components/ResumeViewer"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center py-16 text-sm font-semibold text-gray-400">
    Loading...
  </div>
);

function Dock({ items }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 px-4 pb-3 z-50 transform"
      initial={{ opacity: 0, y: 50, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
    >
      {items.map((item, index) => (
        <DockIcon mouseX={mouseX} key={index} item={item} />
      ))}
    </motion.div>
  );
}

function DockIcon({ mouseX, item }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square flex justify-center items-center cursor-pointer group relative"
      onClick={
        item.action ? item.action : () => window.open(item.href, "_blank")
      }
    >
      <div className="w-full h-full p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 flex items-center justify-center transition-colors">
        {item.icon}
      </div>

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.label}
      </span>
    </motion.div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
        <Suspense fallback={<LoadingFallback />}>
          <section
            id="hero"
            className="min-h-[calc(100vh-6rem)] w-full flex justify-center items-center py-24"
          >
            <Hero />
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
      </main>
      <Dock
        items={[
          {
            label: "Resume",
            icon: <FileText className="text-red-600 w-full h-full" />,
            action: handleResumeClick,
          },
          {
            label: "LinkedIn",
            icon: <FaLinkedin className="text-blue-600 w-full h-full" />,
            href: "https://www.linkedin.com/in/nraj24/",
          },
          {
            label: "GitHub",
            icon: <FaGithub className="text-white w-full h-full" />,
            href: "https://github.com/dawgdevv",
          },
          {
            label: "Twitter",
            icon: <FaSquareXTwitter className="w-full h-full" />,
            href: "https://x.com/sfunish",
          },
          {
            label: "Peerlist",
            icon: <SiPeerlist className="text-green-500 w-full h-full" />,
            href: "https://peerlist.io/nishantraj",
          },
          {
            label: "Contact",
            icon: <ContactIcon className="w-full h-full" />,
            action: handleContactClick,
          },
        ]}
      />
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
              <Suspense fallback={<LoadingFallback />}>
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
