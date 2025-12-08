"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // mouse position
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // follower (ring) position
  const ringX = useRef(0);
  const ringY = useRef(0);

  const isHovering = useRef(false);
  const isDown = useRef(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseDown = () => {
      isDown.current = true;
      if (ringRef.current) {
        ringRef.current.style.transform += " scale(0.9)";
      }
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='interactive']");
      isHovering.current = !!interactive;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    let frameId: number;

    const render = () => {
      // lerp / smoothing
      ringX.current += (mouseX.current - ringX.current) * 0.18;
      ringY.current += (mouseY.current - ringY.current) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        const size = isHovering.current ? 34 : isDown.current ? 20 : 26;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.boxShadow = isHovering.current
          ? "0 0 30px rgba(16, 185, 129, 0.55)"
          : "0 0 18px rgba(16, 185, 129, 0.25)";
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9999] rounded-full border border-emerald-400/80"
        style={{
          width: 26,
          height: 26,
          transform: "translate(-50%, -50%)",
          transition: "width 0.15s ease, height 0.15s ease, box-shadow 0.15s ease",
        }}
      />

      {/* inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full bg-emerald-500"
        style={{
          width: 8,
          height: 8,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
