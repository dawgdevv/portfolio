import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-10000 -translate-y-24 border-2 border-black bg-white px-3 py-1 text-xs font-bold uppercase transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        className="relative z-10 mx-auto flex w-full flex-col items-center gap-12 px-4 pb-10 pt-10 sm:px-6"
      >
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

        <section id="skills" className="portfolio-section">
          <Skills />
        </section>

        <section id="experience" className="portfolio-section">
          <Experience />
        </section>
        <section id="projects" className="portfolio-section">
          <Project />
        </section>

        <footer className="portfolio-section flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-wide">
          <span>Designed &amp; built by Nishant Raj</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}

export default App;