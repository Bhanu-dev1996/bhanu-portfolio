import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Lightweight scroll-reveal wrapper. Animates children into view once.
 * Respects prefers-reduced-motion by disabling transform animation.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className,
  once = true,
  viewportAmount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
      },
    }),
    [reduce, y, delay]
  );

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={variants}
      {...rest}
    >
      {children}
    </Comp>
  );
}