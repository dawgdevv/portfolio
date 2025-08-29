import aboutImage from "../assets/myphoto.png";
import { ABOUT_TEXT } from "../constants/index";

function About() {
  return (
    <section className="container mx-auto px-4 py-10 h-full flex flex-col justify-center">
      <h2 className="mb-4 text-center text-2xl font-bold">About Me</h2>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
        <div className="w-full max-w-xs lg:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
            <img
              className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              src={aboutImage}
              alt="Portrait of the developer"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <p className="text-sm font-normal leading-6 text-gray-700 dark:text-gray-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
