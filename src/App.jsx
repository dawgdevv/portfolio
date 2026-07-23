/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import OpenSource from "./components/OpenSource";
import CustomCursor from "./components/CustomCursor";
import SnowfallBackground from "./components/SnowfallBackground";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollTotal =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = (scrollPosition / Math.max(scrollTotal, 1)) * 100;
          setScrollProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SnowfallBackground />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-10000 -translate-y-24 border-4 border-black bg-white px-4 py-2 font-black uppercase text-black shadow-[4px_4px_0_0_#000] transition-transform focus:translate-y-0 dark:border-white dark:bg-black dark:text-white dark:shadow-[4px_4px_0_0_#fff]"
      >
        Skip to content
      </a>
      <div className="relative min-h-screen overflow-x-hidden bg-transparent text-black selection:bg-black selection:text-white dark:text-zinc-100 dark:selection:bg-white dark:selection:text-black">
        <CustomCursor />
        <div className="fixed left-0 top-0 z-60 h-1.5 w-full border-b-2 border-black/25 bg-white/40 dark:border-white/25 dark:bg-black/40">
          <div
            className="h-full border-r-2 border-white bg-black dark:border-black dark:bg-white"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <main
          id="main-content"
          className="relative z-10 mx-auto flex w-full flex-col items-center gap-10 px-4 pb-8 pt-10 sm:px-6 md:gap-16 md:pb-12 md:pt-14"
        >
          <section id="hero" className="portfolio-section">
          <Hero
            profileLinks={[
              {
                label: "Resume",
                icon: <FileText className="text-black dark:text-white w-full h-full" />,
                href: "https://drive.google.com/file/d/1pmEk6SRjhfyPsgyEB6O1iORs1BVV4Qwd/view",
                description: "Experience, skills, and selected work",
              },
              {
                label: "LinkedIn",
                icon: <FaLinkedin className="text-black dark:text-white w-full h-full" />,
                href: "https://www.linkedin.com/in/nraj24/",
                description: "Professional experience and updates",
              },
              {
                label: "GitHub",
                icon: <FaGithub className="text-black dark:text-white w-full h-full" />,
                href: "https://github.com/dawgdevv",
                description: "Code, open source, and experiments",
              },
              {
                label: "X",
                icon: <FaSquareXTwitter className="text-black dark:text-white w-full h-full" />,
                href: "https://x.com/sfunish",
                description: "Thoughts on engineering and current work",
              },
              {
                label: "Peerlist",
                icon: <SiPeerlist className="text-black dark:text-white w-full h-full" />,
                href: "https://peerlist.io/nishantraj",
                description: "Developer profile and featured projects",
              },
            ]}
          />
          </section>

          <section id="experience" className="portfolio-section">
            <Experience />
          </section>
          <section id="projects" className="portfolio-section">
            <Project />
          </section>
          <section id="opensource" className="portfolio-section">
            <OpenSource />
          </section>

          <footer className="neo-footer">
            <span>Designed &amp; built by Nishant Raj</span>
            <span className="neo-kicker">© {new Date().getFullYear()}</span>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
