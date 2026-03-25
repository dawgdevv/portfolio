import { useEffect, useRef } from "react";
import bgImage from "../assets/1341120.png";

const SnowfallBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const snowflakesRef = useRef([]);
  const isVisibleRef = useRef(true);
  const resizeTimeoutRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    let snowflakes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSnowflakes = () => {
      const numberOfSnowflakes = 600; // Increased from 200 to 600
      snowflakes = [];
      for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.8, // Slightly bigger snowflakes
          density: Math.random() * 2.5, // Slightly faster falling speed
          drift: Math.random() * 1.5 - 0.5, // More horizontal wind shift
        });
      }
      snowflakesRef.current = snowflakes;
    };

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for (let flake of snowflakesRef.current) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      }
      ctx.fill();
    };

    const moveSnowflakes = () => {
      for (let flake of snowflakesRef.current) {
        flake.y += Math.pow(flake.density, 2) * 0.5 + 1;
        flake.x += flake.drift;

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width || flake.x < 0) {
          flake.x = Math.random() * canvas.width;
        }
      }
    };

    const animate = () => {
      if (!isVisibleRef.current) return;

      drawSnowflakes();
      moveSnowflakes();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisibleRef.current = false;
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      } else {
        isVisibleRef.current = true;
        animate();
      }
    };

    const debouncedResize = () => {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        resizeCanvas();
        createSnowflakes();
      }, 100);
    };

    resizeCanvas();
    createSnowflakes();
    animate();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", debouncedResize);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeoutRef.current);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    />
  );
};

export default SnowfallBackground;
