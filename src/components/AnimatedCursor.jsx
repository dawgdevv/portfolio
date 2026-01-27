import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const mouseDown = () => setCursorVariant("click");
    const mouseUp = () => setCursorVariant((prev) => (prev === "click" ? "default" : prev));

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant("link");
    const handleLinkExit = () => setCursorVariant("default");

    const selectors = "a, button, input, textarea, .cursor-pointer";
    const links = document.querySelectorAll(selectors);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkExit);
    });

    // Observer for dynamic elements
    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll(selectors);
      newLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.addEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkExit);
        link.addEventListener("mouseleave", handleLinkExit);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkExit);
      });
      observer.disconnect();
    };
  }, []);

  const variants = {
    default: {
      height: 12, // Small default
      width: 12,
      x: -6,
      y: -6,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      rotate: 0,
    },
    link: {
      height: 32, // Subtle expansion
      width: 32,
      x: -16,
      y: -16,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      rotate: 0, // No rotation, keeping it minimal
    },
    click: {
      height: 10,
      width: 10,
      x: -5,
      y: -5,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      rotate: 0,
    }
  };

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        initial="default"
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      />
    </>
  );
}
