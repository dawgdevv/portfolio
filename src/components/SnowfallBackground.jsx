import { useEffect, useRef } from "react";

const SnowfallBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let snowflakes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSnowflakes = () => {
      const numberOfSnowflakes = 350; // Fewer snowflakes for a calm effect
      snowflakes = [];
      for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.6, // Smaller snowflakes for a subtle look
          density: Math.random() * 2,
          drift: Math.random() * 1 - 0.3, // Gentle horizontal drift
        });
      }
    };

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for (let flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      }
      ctx.fill();
    };

    const moveSnowflakes = () => {
      for (let flake of snowflakes) {
        flake.y += Math.pow(flake.density, 2) * 0.5 + 1.5; // Slow falling
        flake.x += flake.drift; // Gentle horizontal movement

        // Reset position if the flake moves out of view
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
      drawSnowflakes();
      moveSnowflakes();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createSnowflakes();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ backgroundColor: "black" }}
    />
  );
};

export default SnowfallBackground;
