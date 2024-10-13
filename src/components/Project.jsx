import { Hammer, Sparkles } from "lucide-react";

function Project() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>
      <div className="rounded-lg p-8 text-center shadow-md">
        <div className="mb-6 flex justify-center">
          <Hammer className="mr-2 h-8 w-8 text-primary" />
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-4 text-2xl font-semibold">Building the Foundation</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I&apos;m currently working on some exciting foundation projects. New and innovative projects are on the horizon!
        </p>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Check back soon for updates on my latest work.
        </p>
      </div>
    </section>
  );
}

export default Project;