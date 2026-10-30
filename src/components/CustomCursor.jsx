import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 280, damping: 26, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 280, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (reduce || !isFinePointer()) return;
    setEnabled(true);

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY, reduce]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200]"
        style={{ x: cursorX, y: cursorY }}
      >
        <span className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200]"
        style={{ x: ringX, y: ringY }}
      >
        <span
          className="block -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 transition-all duration-300"
          style={{
            width: hovering ? 54 : 36,
            height: hovering ? 54 : 36,
            backgroundColor: hovering ? "rgba(37,99,235,0.08)" : "transparent",
          }}
        />
      </motion.div>
    </>
  );
}