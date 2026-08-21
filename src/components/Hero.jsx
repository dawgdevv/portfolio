import myphoto from "../assets/myphoto.webp";
import { FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ICONS = {
  Resume: FileText,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  X: FaXTwitter,
  "x.com": FaXTwitter,
  Peerlist: SiPeerlist,
};

const ICON_COLORS = {
  Resume: "#38bdf8",
  LinkedIn: "#0A66C2",
  GitHub: "#f3f5f7",
  X: "#ffffff",
  "x.com": "#ffffff",
  Peerlist: "#00AA45",
};

const Hero = ({ profileLinks }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full space-y-8">
      <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-paper/85"
              aria-hidden="true"
            />
            <img
              src={myphoto}
              alt="Nishant Raj"
              width={240}
              height={240}
              className="relative h-32 w-32 shrink-0 rounded-2xl border-2 border-paper object-cover sm:h-36 sm:w-36"
            />
          </div>
          <div>
            <h1 className="font-signature text-5xl font-normal italic leading-[0.95] tracking-[-0.03em] text-paper sm:text-6xl md:text-7xl">
              hey{" "}
              <motion.span
                aria-hidden="true"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 18, -10, 18, -6, 12, 0] }}
                transition={{ duration: 1.3, ease: "easeInOut", delay: 0.5 }}
                style={{ display: "inline-block", transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>{" "}
              i&apos;m nishant raj
            </h1>
            <p className="mt-3 text-sm font-bold lowercase text-paper/70">
              software engineer · open source developer · AI · backend · UI · linux · hackathons · deployment
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-black lowercase">
              {profileLinks?.map((item) => {
                const Icon = ICONS[item.label];
                const color = ICON_COLORS[item.label] || "currentColor";
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 520, damping: 14 }}
                    className="inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4 will-change-transform"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color }} />}
                    {item.label}
                  </motion.a>
                );
              })}
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <p>
          Software engineer building AI, backend and UI. I take full ownership
          of what I ship. Currently at Figmenta, a design and advertising
          studio that helps brands scale content, where I built{" "}
          <a href="#projects" className="underline decoration-1 underline-offset-4">
            Cadence
          </a>
          , handling MCP support, media pipeline, ingestion pipeline,
          publishing, scheduling, FFmpeg and many other features for their
          content automation platform. Also built an agentic support bot that
          triages by prompt and sentiment, replies when normal and routes to a
          human when out of bounds or team needed. I handle the platform, AI
          integrations, database and API
          optimization and craft the UI/UX that ships to production.
        </p>
        <p>
          Active open source contributor and Linux advocate (ifykyk). Right now
          focused on making AI agents reliable and drivable through
          observability and evals. Language agnostic. The problem matters more
          than the stack.
        </p>
        <p>
          CLI enthusiast. Hackathon winner, still competing. Curiosity never
          fades. I also handle cloud and DevOps. Open to any technology, no
          attachment to a single stack, especially in the AI era.
        </p>
        <p className="inline-flex items-center gap-1.5 rounded-full border border-line/30 bg-paper/5 px-3 py-1 text-xs font-bold tracking-wide">
          <MapPin className="h-3 w-3 shrink-0 text-red-500" aria-hidden="true" />
          Based in{" "}
          <span aria-hidden="true" className="text-[13px] leading-none">
            🇮🇳
          </span>{" "}
          India, available for remote
        </p>
        <p className="text-xs font-semibold opacity-80">
          coding setup: Cursor sometimes, but I mostly swap between that and
          opencode + VS Code (with Codex). Terminal: WezTerm. Distro: Ubuntu.
        </p>
      </div>

      <div id="contact" className="scroll-mt-16">
        <p className="mt-1">
          Building something? I help turn ideas into full systems with AI
          integrations, backends, apps, and deployments. If you need a partner
          who ships end to end, let&apos;s talk.
        </p>
        <div className="relative mt-2 inline-flex items-center gap-2">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nraj02415@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              try {
                e.preventDefault();
                navigator.clipboard.writeText("nraj02415@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 1400);
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nraj02415@gmail.com", "_blank", "noopener,noreferrer");
              } catch {}
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            className="inline-flex items-center gap-1.5 font-black lowercase underline decoration-1 underline-offset-4"
          >
            nraj02415@gmail.com
            <motion.span
              animate={{ scale: copied ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 600, damping: 12 }}
              className="text-[10px] opacity-60"
              aria-hidden="true"
            >
              {copied ? "✓" : "↗"}
            </motion.span>
          </motion.a>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-ink"
              >
                Copied
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
