import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
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
          className="portfolio-section sticky top-0 z-50 flex flex-wrap justify-center gap-x-5 gap-y-2 bg-ink py-4 text-xs font-black lowercase"
        >
          <a className="underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#hero">
            intro
          </a>
          <a className="underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#skills">
            skills
          </a>
          <a className="underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#experience">
            experience
          </a>
          <a className="underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#projects">
            projects
          </a>
          <a className="underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#contact">
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
                label: "X",
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
