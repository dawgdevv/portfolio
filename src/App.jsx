import { useEffect } from "react";
import Hero from "./components/Hero";
import GitHubContributions from "./components/GitHubContributions";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    const t = setTimeout(() => window.scrollTo(0, 0), 80);
    return () => clearTimeout(t);
  }, []);

  // live paper dot pulse favicon — minimal, matches ink/paper system
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    let link = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (!link) link = document.querySelector('link[rel="icon"]');
    if (!link) return;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const draw = (t) => {
      const pulse = (Math.sin(t / 1000) + 1) / 2; // 0..1 over 2s
      const r = 2.2 + pulse * 2.0;
      const op = 1 - pulse * 0.3;
      const ringR = 3.2 + pulse * 3.3;
      const ringOp = 0.18 * (1 - pulse);
      ctx.clearRect(0, 0, 32, 32);
      ctx.fillStyle = "#000";
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(0, 0, 32, 32, 7);
      else ctx.rect(0, 0, 32, 32);
      ctx.fill();
      ctx.strokeStyle = "rgba(243,245,247,0.30)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.globalAlpha = op;
      ctx.fillStyle = "#f3f5f7";
      ctx.beginPath();
      ctx.arc(16, 16, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = ringOp;
      ctx.strokeStyle = "#f3f5f7";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(16, 16, ringR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      link.href = canvas.toDataURL("image/png");
    };
    let last = 0;
    const loop = (now) => {
      if (document.hidden) {
        raf = requestAnimationFrame(loop);
        return;
      }
      if (now - last > 45) {
        last = now;
        draw(now);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-10000 -translate-y-24 border-2 border-paper bg-paper px-3 py-1 text-xs font-bold uppercase text-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        className="relative z-10 mx-auto flex w-full flex-col items-center gap-12 px-4 pb-10 sm:px-6"
      >
        <nav
          aria-label="Portfolio sections"
          className="portfolio-section sticky top-0 z-50 flex flex-wrap justify-center gap-x-6 gap-y-2 bg-ink px-2 py-5 text-sm font-black lowercase sm:gap-x-8 sm:text-[15px]"
        >
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#hero">
            intro
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#contributions">
            contributions
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#skills">
            skills
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#experience">
            experience
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#projects">
            projects
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#contact">
            contact
          </a>
        </nav>

        <section id="hero" className="portfolio-section">
          <Hero
            profileLinks={[
              {
                label: "Resume",
                href: "https://drive.google.com/file/d/1SGwhko2mDzWD_IoYJt3RSr7N-6uc1ND9/view",
                description: "Experience, skills, and selected work",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nraj24/",
                description: "Professional experience and updates",
              },
              {
                label: "GitHub",
                href: "https://github.com/dawgdevv",
                description: "Code, open source, and experiments",
              },
              {
                label: "x.com",
                href: "https://x.com/sfunish",
                description: "Thoughts on engineering and current work",
              },
              {
                label: "Peerlist",
                href: "https://peerlist.io/nishantraj",
                description: "Developer profile and featured projects",
              },
            ]}
          />
        </section>

        <section id="contributions" className="portfolio-section border-t-2 border-line pt-10">
          <GitHubContributions />
        </section>

        <section id="skills" className="portfolio-section border-t-2 border-line pt-10">
          <Skills />
        </section>

        <section id="experience" className="portfolio-section border-t-2 border-line pt-10">
          <Experience />
        </section>
        <section id="projects" className="portfolio-section border-t-2 border-line pt-10">
          <Project />
        </section>

        <footer className="portfolio-section flex items-center justify-between gap-4 border-t-2 border-line pt-10 text-xs font-bold uppercase tracking-wide">
          <span>Designed &amp; built by Nishant Raj</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}

export default App;
