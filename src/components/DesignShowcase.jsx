import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Layers, Lightbulb, Workflow, Wrench } from "lucide-react";
import { designs } from "../data/designs";
import { FigmaIcon } from "./brandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";

export default function DesignShowcase() {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);

  // Esc to close + lock scroll
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="design" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UI/UX Design"
          title="Design showcase"
          subtitle="Selected UI work — open either piece to see the thinking behind it."
        />

        {/* Grid — sized for the current two designs */}
        <Reveal className="mt-14 lg:mt-16">
          <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:auto-rows-[18rem] sm:grid-cols-2 sm:gap-5">
            {designs.map((design, i) => (
              <motion.button
                key={design.id}
                type="button"
                onClick={() => setSelected(design)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`Open design: ${design.title}`}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card text-left shadow-soft transition-all duration-500 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="absolute inset-0">
                  {design.coverImage ? (
                    <img
                      src={design.coverImage}
                      alt=""
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 [&_svg]:absolute [&_svg]:inset-0 [&_svg]:h-full [&_svg]:w-full [&_svg]:object-cover">
                      <ProjectPreview variant={design.variant} palette={design.palette} text={design.title} id={`d-${design.id}`} />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="block">
                    <span className="inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
                      {design.category}
                    </span>
                    <span className="mt-2 block font-heading text-base font-bold leading-snug text-white sm:text-lg">
                      {design.title}
                    </span>
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Slide-over panel */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[150]" role="dialog" aria-modal="true" aria-label={selected.title}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-foreground/45 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 z-10 flex w-full max-w-md flex-col overflow-hidden bg-card shadow-lift lg:max-w-lg"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close design details"
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="relative aspect-[16/10] shrink-0 border-b border-line bg-surface">
                {selected.coverImage ? (
                  <img
                    src={selected.coverImage}
                    alt={selected.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 [&_svg]:absolute [&_svg]:inset-0 [&_svg]:h-full [&_svg]:w-full [&_svg]:object-cover">
                    <ProjectPreview variant={selected.variant} palette={selected.palette} text={selected.title} id={`lm-${selected.id}`} />
                  </div>
                )}
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {selected.category}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  {selected.title}
                </h3>

                <div className="mt-5 space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      <Lightbulb className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Objective
                    </p>
                    <p className="text-foreground/90">{selected.objective}</p>
                  </div>
                  <div>
                    <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      <Workflow className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Process
                    </p>
                    <p className="text-foreground/90">{selected.process}</p>
                  </div>
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      <Wrench className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selected.figmaUrl && (
                  <a
                    href={selected.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary"
                  >
                    <FigmaIcon className="h-4 w-4" aria-hidden="true" />
                    Open in Figma
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
                  <Layers className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {selected.figmaUrl
                    ? "View the full file in Figma for screens, flows and details."
                    : "UI case study from the design showcase."}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}