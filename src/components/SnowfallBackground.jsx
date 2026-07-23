import { useEffect, useRef } from "react";
import bgImage from "../assets/scene.webp";

const SnowfallBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const snowflakesRef = useRef([]);
  const isVisibleRef = useRef(true);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let snowflakes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSnowflakes = () => {
      const numberOfSnowflakes =
        window.innerWidth < 640 ? 90 : window.innerWidth < 1024 ? 160 : 240;
      snowflakes = [];
      for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.4 + 0.5,
          density: Math.random() * 1.8,
          drift: Math.random() * 0.8 - 0.4,
        });
      }
      snowflakesRef.current = snowflakes;
    };

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.62)";
      ctx.beginPath();
      for (const flake of snowflakesRef.current) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      }
      ctx.fill();
    };

    const moveSnowflakes = () => {
      for (const flake of snowflakesRef.current) {
        flake.y += Math.pow(flake.density, 2) * 0.35 + 0.5;
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
        if (!prefersReducedMotion) {
          createSnowflakes();
        }
      }, 100);
    };

    resizeCanvas();
    if (!prefersReducedMotion) {
      createSnowflakes();
      animate();
    }

    if (!prefersReducedMotion) {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
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
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />
    </div>
  );
};

export default SnowfallBackground;
