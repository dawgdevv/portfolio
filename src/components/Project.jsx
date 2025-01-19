// import SnowfallBackground from "./SnowfallBackground.jsx";
// import { PROJECTS } from "../constants/index.js";

// function Project() {
//   return (
//     <section className="container mx-auto px-4 py-16 h-full flex flex-col justify-center relative">
//       <SnowfallBackground />
//       <h2 className="mb-8 text-center text-4xl font-bold text-white">
//         Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105"
//           >
//             <div className="mb-4 flex justify-center"></div>
//             <h3 className="mb-2 text-xl font-semibold text-white">
//               {project.name}
//             </h3>
//             <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
//               {project.description}
//             </p>
//             <video
//               className="mx-auto mb-4 rounded-lg"
//               width="320"
//               height="240"
//               controls
//               src={project.videoLink}
//             >
//               Your browser does not support the video tag.
//             </video>
//             <div className="flex justify-center space-x-4">
//               <a
//                 href={project.liveLink}
//                 className="text-green-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Live Link
//               </a>
//               <a
//                 href={project.githubLink}
//                 className="text-green-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub Repo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Project;

import { Hammer, Sparkles } from "lucide-react";
import SnowfallBackground from "./SnowfallBackground.jsx";
function Project() {
  return (
    <section className="container mx-auto px-4 py-16 h-full flex flex-col justify-center">
      <SnowfallBackground />
      <h2 className="mb-4 text-center text-2xl font-bold">Projects</h2>
      <div className="rounded-lg p-4 text-center shadow-md">
        <div className="mb-4 flex justify-center">
          <Hammer className="mr-2 h-6 w-6 text-primary" />
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">Building the Foundation</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          I&apos;m currently working on some exciting foundation projects. New
          and innovative projects are on the horizon!
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Check back soon for updates on my latest work.
        </p>
      </div>
    </section>
  );
}

export default Project;
