import myphoto from "../assets/myphoto.webp";

const Hero = ({ profileLinks }) => {
  return (
    <div className="w-full space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={myphoto}
            alt="Nishant Raj"
            width={96}
            height={96}
            className="h-24 w-24 object-cover"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest">
              Hi there <span aria-hidden="true">✌️</span>, I&apos;m
            </p>
            <h1 className="text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl md:text-4xl">
              Nishant Raj
            </h1>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold lowercase">
              {profileLinks?.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4"
                >
                  {item.label}
                </a>
              ))}
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <p>
          I&apos;m a software engineer. I work on AI, backend, and a little bit
          of UI, and I take responsibility for every feature I build. Right
          now I work at Figmenta, a design and advertising company, building
          digital products for them, the full MCP end to end for their content
          automation platform, AI integrations, database optimization, API
          optimization, and creative UI/UX needs.
        </p>
        <p>
          Other than that, I contribute to open source often, I love open
          source software and I&apos;m a big advocate for Linux (ifykyk).
          Right now I&apos;m deeply studying AI, mostly how to make agents
          drivable by setting up observability and evals around them. I&apos;m
          a language-agnostic engineer, I care about the problem more than the
          stack, and I keep growing.
        </p>
        <p>
          Big fan of CLIs too. I&apos;ve won a few hackathons, still
          participating, will continue, curiosity should not die. I also do
          some cloud/devops, and honestly I&apos;m really open to any
          technology. Never attached to a tech stack, especially in these AI
          times.
        </p>
        <p className="text-xs font-semibold opacity-80">
          coding setup: Cursor sometimes, but I mostly swap between that and
          opencode + VS Code (with Codex). Terminal: WezTerm. Distro: Ubuntu.
        </p>
      </div>

      <div>
        <p className="mt-1">
          Building something? I help turn ideas into full systems with AI
          integrations, backends, apps, and deployments. If you need a partner
          who ships end to end, let&apos;s talk.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nraj02415@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block font-black lowercase underline decoration-1 underline-offset-4"
        >
          nraj02415@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Hero;