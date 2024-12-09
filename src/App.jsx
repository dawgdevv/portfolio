import { Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const lineref = useRef(null);
  useEffect(() => {
    const handlemousemove = (e) => {
      const line = lineref.current;
      if (line) {
        line.style.left = e.clientX + "px";
        line.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handlemousemove);
    return () => window.removeEventListener("mousemove", handlemousemove);
  }, []);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div
        ref={lineref}
        className="absolute w-1 h-1 bg-cyan-500 pointer-events-none"
        style={{ width: "10px", height: "10px", backgroundColor: "#00FFFF" }}
      ></div>
    </div>
  );
}

export default App;
