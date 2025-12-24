import aboutImage from "../assets/myphoto.png";
import { ABOUT_TEXT } from "../constants/index";

function About() {
  return (
    <section className="container mx-auto px-4 py-16 h-full flex flex-col justify-center">
      <h2 className="mb-8 text-center text-4xl font-black uppercase tracking-tighter decoration-4 underline decoration-accent-color underline-offset-4">About Me</h2>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start bg-white dark:bg-zinc-800 border-4 border-white hover:border-black shadow-neo-lg p-6 lg:p-10">
        <div className="w-full max-w-xs lg:w-1/3 flex-shrink-0">
          <div className="overflow-hidden border-4 border-white hover:border-black shadow-neo transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              src={aboutImage}
              alt="Portrait of the developer"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div>
            <p className="text-lg lg:text-xl font-medium leading-relaxed text-black dark:text-white">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
