import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view.
 * Uses the section that has crossed the offset and is closest to the top.
 */
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0] || "");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0] || "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }

      // Pin to last section when scrolled near the bottom of the page.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}

export { useScrollSpy as default };