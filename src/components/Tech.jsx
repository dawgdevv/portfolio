import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiUbuntu,
  SiSolidity,
  SiRedis,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";

import { FaGitAlt, FaAws, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiNodejs, DiJavascript1, DiDocker } from "react-icons/di";

import PropTypes from "prop-types";
import SnowfallBackground from "./SnowfallBackground.jsx";

const techStack = [
  {
    Icon: DiJavascript1,
    color: "text-yellow-300",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Icon: SiTypescript,
    color: "text-blue-600",
    url: "https://www.typescriptlang.org/",
  },
  {
    Icon: FaPython,
    color: "text-blue-500",
    url: "https://www.python.org/",
  },
  {
    Icon: RiReactjsLine,
    color: "text-cyan-600",
    url: "https://react.dev/blog/2023/03/16/introducing-react-dev",
  },
  { Icon: TbBrandNextjs, color: "text-white", url: "https://nextjs.org/docs" },
  {
    Icon: SiTailwindcss,
    color: "text-cyan-600",
    url: "https://tailwindcss.com/docs",
  },
  {
    Icon: DiNodejs,
    color: "text-green-500",
    url: "https://nodejs.org/en/docs/",
  },
  {
    Icon: SiFastapi,
    color: "text-teal-500",
    url: "https://fastapi.tiangolo.com/",
  },
  {
    Icon: SiMongodb,
    color: "text-green-700",
    url: "https://docs.mongodb.com/",
  },
  {
    Icon: SiPostgresql,
    color: "text-cyan-700",
    url: "https://www.postgresql.org/docs/",
  },
  {
    Icon: SiRedis,
    color: "text-red-600",
    url: "https://redis.io/",
  },
  {
    Icon: FaAws,
    color: "text-orange-500",
    url: "https://aws.amazon.com/",
  },
  {
    Icon: DiDocker,
    color: "text-blue-500",
    url: "https://docs.docker.com/",
  },
  {
    Icon: SiUbuntu,
    color: "text-orange-600",
    url: "https://ubuntu.com/",
  },
  {
    Icon: FaGolang,
    color: "text-blue-500",
    url: "https://golang.org/doc/",
  },
  {
    Icon: FaGitAlt,
    color: "text-red-500",
    url: "https://git-scm.com/doc",
  },
  {
    Icon: SiSolidity,
    color: "text-blue-500",
    url: "https://docs.soliditylang.org/",
  },
];

const TechIcon = ({ Icon, color, url }) => (
  <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon className={`text-6xl ${color}`} />
    </a>
  </div>
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Tech() {
  // Organize tech stack into categories for better "stacked" presentation
  const techCategories = [
    {
      title: "Frontend",
      techs: techStack.filter((t) =>
        [
          RiReactjsLine,
          TbBrandNextjs,
          SiTailwindcss,
          DiJavascript1,
          SiTypescript,
        ].includes(t.Icon),
      ),
    },
    {
      title: "Backend & DB",
      techs: techStack.filter((t) =>
        [
          DiNodejs,
          SiFastapi,
          SiMongodb,
          SiPostgresql,
          SiRedis,
          FaPython,
          FaGolang,
        ].includes(t.Icon),
      ),
    },
    {
      title: "DevOps & Tools",
      techs: techStack.filter((t) =>
        [FaAws, DiDocker, SiUbuntu, FaGitAlt, SiSolidity].includes(t.Icon),
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center relative px-4 py-10 max-w-4xl mx-auto">
      <SnowfallBackground />
      <h2 className="mb-16 text-4xl md:text-5xl font-black text-center uppercase tracking-tighter text-black dark:text-white">
        Technologies
      </h2>

      <div className="w-full grid gap-8">
        {techCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo p-6 relative group overflow-hidden"
          >
            {/* Hover Accent Background */}
            <div className="absolute inset-0 bg-accent-color opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>

            <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6 flex items-center gap-2 relative z-10">
              <span className="w-10 h-1 bg-black dark:bg-white"></span>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4 relative z-10">
              {category.techs.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 dark:bg-zinc-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-zinc-700 rounded-lg"
                  title={tech.url}
                >
                  <tech.Icon
                    className={`text-3xl ${tech.color} drop-shadow-sm`}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
