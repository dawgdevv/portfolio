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

    const links = document.querySelectorAll("a, button, input, textarea, .cursor-pointer");

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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderColor: "#fff", // White + Difference = Inverted Background
      rotate: 0,
      mixBlendMode: "difference",
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "#fff", // White background for difference effect
      borderWidth: "2px",
      borderColor: "#fff",
      rotate: 45,
      mixBlendMode: "difference",
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#fff", // White + Difference = Inverted
      mixBlendMode: "difference",
    },
    link: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      {/* Main Square Cursor - delayed slightly for trail feel if desired, but here prompt asked for interesting Theme */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50 transition-colors duration-200 ease-out"
        variants={variants}
        animate={cursorVariant}
        // Use spring for snappy but smooth movement
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
        style={{
          borderStyle: "solid",
        }}
      />

      {/* Center Dot - acts as the precise pointer */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50 rounded-none"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 1000, damping: 28 }} // Super snappy
      />
    </>
  );
}

