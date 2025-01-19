import { useMemo, useState, useCallback, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import SnowfallBackground from "./components/SnowfallBackground";
import { Contact as ContactIcon } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { motion } from "framer-motion";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [focusedSection, setFocusedSection] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "hero", component: <Hero />, label: "Introduction" },
      { id: "tech", component: <Tech />, label: "Technologies" },
      { id: "experience", component: <Experience />, label: "Experience" },
      { id: "projects", component: <Project />, label: "Projects" },
    ],
    []
  );

  const handleSectionClick = useCallback((id) => {
    setFocusedSection((prevSection) => (prevSection === id ? null : id));
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && focusedSection) {
        setFocusedSection(null);
      }
    },
    [focusedSection]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const generateLayout = useCallback(() => {
    const baseLayout = sections.map((section, index) => ({
      i: section.id,
      x: index % 2,
      y: Math.floor(index / 2),
      w: 1,
      h: 1,
    }));

    if (focusedSection) {
      return baseLayout.map((item) =>
        item.i === focusedSection
          ? { ...item, x: 0, y: 0, w: 2, h: 2 }
          : { ...item, w: 0, h: 0 }
      );
    }

    return baseLayout;
  }, [focusedSection, sections]);

  return (
    <div className="relative overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen">
      <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <ResponsiveGridLayout
        className="layout h-screen"
        layouts={{ lg: generateLayout() }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={window.innerHeight / 2 - 9} // Subtract margin to fit within screen
        width={window.innerWidth}
        compactType={null}
        preventCollision={true}
        margin={[6, 6]} // Increased margin for visibility
        containerPadding={[6, 6]} // Increased padding for visibility
        isDraggable={false}
        isResizable={false}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`border-2 border-gray-400 rounded-lg cursor-pointer transition-all duration-300 ease-in-out overflow-auto ${
              focusedSection === section.id
                ? "fixed inset-0 z-50 p-8"
                : "h-full" // Ensure full height when not focused
            } ${
              focusedSection && focusedSection !== section.id ? "hidden" : ""
            }`}
            onClick={() => handleSectionClick(section.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSectionClick(section.id);
              }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={focusedSection === section.id}
          >
            <SnowfallBackground />
            {focusedSection !== section.id && (
              <motion.h2
                className="text-center text-green-400 mt-52 text-3xl font-bold"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                {section.label}
              </motion.h2>
            )}
            {focusedSection === section.id && (
              <div className="mt-4">{section.component}</div>
            )}
          </div>
        ))}
      </ResponsiveGridLayout>

      <div className="fixed bottom-4 right-4 flex space-x-4 z-50">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="cursor-pointer"
          onClick={() => setIsContactModalOpen(true)}
        >
          <ContactIcon className="text-white p-2 shadow-lg" size={48} />
        </motion.div>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://www.linkedin.com/in/nraj24/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="text-white p-2 shadow-lg" size={48} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://github.com/dawgdevv"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="text-white p-2 shadow-lg" size={48} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://x.com/sfunish"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaSquareXTwitter className="text-white p-2 shadow-lg" size={48} />
        </motion.a>
      </div>

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="absolute rounded-lg w-full max-w-lg bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setIsContactModalOpen(false)}
            >
              &times;
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
