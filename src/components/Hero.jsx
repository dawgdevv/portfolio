import myphoto from "../assets/myphoto.webp";

const Hero = ({ profileLinks }) => {
  return (
    <div className="w-full space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={myphoto}
            alt="Nishant Raj"
            width={64}
            height={64}
            className="h-16 w-16 object-cover"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest">
              Hi there <span aria-hidden="true">👋</span>, I&apos;m
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
          I&apos;m a <strong className="font-black">Full Stack and Backend Engineer</strong>,{" "}
          open-source contributor, and independent thinker who builds practical
          products with AI.
        </p>
        <p>
          I&apos;ve worked with startups, freelanced, and shipped projects
          around problems I find meaningful. My work spans AI integration,
          backend optimization, cloud deployments, and Linux—my daily
          environment for the past three years.
        </p>
        <p>
          I enjoy making systems faster, simpler, and more useful. I contribute
          actively to open source, communicate openly, and share honest
          opinions. I learn quickly, think independently, and care most about
          solving real problems with people who value good engineering.
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