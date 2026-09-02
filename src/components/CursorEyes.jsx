import { useEffect, useRef } from "react";

const PUPIL_TRAVEL = 10;

export default function CursorEyes() {
  const eyeRefs = useRef([]);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pointer = null;
    let animationFrame = null;

    const reset = () => {
      eyeRefs.current.forEach((eye) => {
        const pupil = eye?.firstElementChild;
        if (pupil) pupil.style.transform = "translate3d(0, 0, 0)";
      });
    };

    const update = () => {
      animationFrame = null;
      if (!pointer || !finePointer.matches || reducedMotion.matches) return;

      eyeRefs.current.forEach((eye) => {
        const pupil = eye?.firstElementChild;
        if (!pupil) return;

        const bounds = eye.getBoundingClientRect();
        const deltaX = pointer.x - (bounds.left + bounds.width / 2);
        const deltaY = pointer.y - (bounds.top + bounds.height / 2);
        const distance = Math.hypot(deltaX, deltaY) || 1;
        const travel = Math.min(PUPIL_TRAVEL, distance);
        const x = (deltaX / distance) * travel;
        const y = (deltaY / distance) * travel;

        pupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      if (animationFrame === null) animationFrame = requestAnimationFrame(update);
    };

    const handleCapabilityChange = () => {
      if (!finePointer.matches || reducedMotion.matches) {
        pointer = null;
        if (animationFrame !== null) cancelAnimationFrame(animationFrame);
        animationFrame = null;
        reset();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    finePointer.addEventListener("change", handleCapabilityChange);
    reducedMotion.addEventListener("change", handleCapabilityChange);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      finePointer.removeEventListener("change", handleCapabilityChange);
      reducedMotion.removeEventListener("change", handleCapabilityChange);
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <span className="cursor-eyes" aria-hidden="true">
      {[0, 1].map((index) => (
        <span key={index} ref={(eye) => (eyeRefs.current[index] = eye)} className="cursor-eye">
          <span className="cursor-eye-pupil" />
        </span>
      ))}
    </span>
  );
}
