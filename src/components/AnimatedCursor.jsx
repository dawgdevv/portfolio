import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleLinkHover = () => setCursorVariant("link");
    const handleLinkExit = () => setCursorVariant("default");

    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkExit);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkExit);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    link: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-none border-2 border-black bg-accent-color pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-black rounded-none pointer-events-none z-50 transform rotate-45"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
      />
    </>
  );
}
