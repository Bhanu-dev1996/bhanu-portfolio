import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.28] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_35%,transparent_100%)] dark:opacity-[0.16]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Tech Stack"
          title="Tools I ship with"
          subtitle="Pick a lane — design, frontend, backend, or AI — to see the stack behind it."
        />

        <Reveal className="mt-12 lg:mt-14">
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap gap-2 border-b border-line pb-1"
          >
            {skillCategories.map((cat) => {
              const selected = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`skills-panel-${cat.id}`}
                  id={`skills-tab-${cat.id}`}
                  onClick={() => setActiveId(cat.id)}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    selected
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <cat.icon className="h-4 w-4" aria-hidden="true" />
                  {cat.title}
                  {selected && (
                    <motion.span
                      layoutId="skills-tab-underline"
                      className="absolute inset-x-2 -bottom-[5px] h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div className="mt-8 min-h-[14rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`skills-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`skills-tab-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {String(active.skills.length).padStart(2, "0")} tools
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {active.skills.map((skill, i) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-card/80 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                          <skill.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="font-heading text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                          {skill.name}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
