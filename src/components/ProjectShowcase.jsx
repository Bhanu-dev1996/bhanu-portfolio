import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./brandIcons";
import { projects, projectFilters } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

function projectBadge(project) {
  if (project.upcoming) {
    return {
      label: "Upcoming",
      note: "Upcoming project — live and repository links coming soon",
    };
  }
  if (project.inProgress) {
    return {
      label: "In progress",
      note: "In progress — live and repository links coming soon",
    };
  }
  return null;
}

export default function ProjectShowcase() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const active = filtered[activeIndex] ?? filtered[0];
  const activeBadge = active ? projectBadge(active) : null;

  return (
    <section id="projects" className="relative overflow-x-hidden bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work that ships"
          subtitle="From shipped work to a CRM in progress and an upcoming logistics platform — pick one to explore how it looks, works and is engineered."
        />

        {/* Filters — scroll on small screens so chips don't crush the layout */}
        <Reveal className="mt-10">
          <div className="-mx-4 sm:-mx-6 lg:mx-0">
            <div
              className="flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:px-6 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                    filter === f
                      ? "bg-primary text-white shadow-soft"
                      : "border border-line bg-card text-muted hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid min-w-0 gap-6 sm:mt-10 lg:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          {/* Project picker */}
          <Reveal delay={0.05} className="min-w-0 order-2 lg:order-1">
            <div className="-mx-4 sm:-mx-6 lg:mx-0">
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 no-scrollbar sm:px-6 lg:max-h-[min(520px,70vh)] lg:snap-none lg:flex-col lg:gap-0 lg:overflow-y-auto lg:overflow-x-visible lg:px-0 lg:pb-0">
                {filtered.map((project, i) => {
                  const isActive = i === activeIndex;
                  const badge = projectBadge(project);
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative flex w-[min(78vw,280px)] shrink-0 snap-start flex-col rounded-2xl border p-4 text-left transition-all duration-300 sm:w-[260px] sm:p-5 lg:w-auto lg:min-w-0 lg:shrink lg:snap-none lg:rounded-none lg:border-0 lg:border-l-2 lg:p-0 ${
                        isActive
                          ? "border-primary/40 bg-card shadow-soft lg:border-l-primary lg:bg-card lg:py-5 lg:pl-5 lg:pr-3"
                          : "border-line bg-card/60 hover:border-primary/20 lg:border-l-line lg:bg-transparent lg:py-5 lg:pl-5 lg:pr-3"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="showcase-active"
                          className="absolute -left-[1.5px] top-0 hidden h-full w-[3px] rounded-full bg-primary lg:block"
                        />
                      )}
                      <span className="flex items-center justify-between gap-2">
                        <span className={`font-mono text-xs ${isActive ? "text-primary" : "text-muted"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight
                          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? "text-primary opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-2">
                        <span
                          className={`font-heading text-base font-bold leading-snug transition-colors sm:text-lg ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {project.name}
                        </span>
                        {badge && (
                          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            {badge.label}
                          </span>
                        )}
                      </span>
                      <span className="mt-1 line-clamp-2 text-sm text-muted">{project.tagline}</span>
                      <span className="mt-3 flex flex-wrap gap-1.5">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                              isActive ? "bg-primary/10 text-primary" : "bg-surface text-muted"
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {filtered.length > 1 && (
              <p className="mt-2 text-center text-[11px] text-muted lg:hidden">
                Swipe to browse projects
              </p>
            )}
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.1} className="min-w-0 order-1 lg:order-2">
            <div className="relative min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-lg sm:-inset-3"
              />

              {!active ? (
                <p className="rounded-3xl border border-line bg-card py-10 text-center text-sm text-muted">
                  No projects in this category.
                </p>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-lift sm:rounded-3xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id + filter}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="min-w-0"
                    >
                      <div className="aspect-[16/10] max-h-[220px] overflow-hidden border-b border-line bg-surface sm:max-h-none">
                        <ProjectPreview
                          variant={active.variant}
                          palette={active.palette}
                          text={active.name}
                          id={active.id}
                        />
                      </div>

                      <div className="min-w-0 p-4 sm:p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="break-words font-heading text-xl font-extrabold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                            {active.name}
                          </h3>
                          {activeBadge && (
                            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                              {activeBadge.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-primary">{active.tagline}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                          {active.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                          {active.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-foreground sm:px-3 sm:text-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                          {activeBadge ? (
                            <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                              {activeBadge.note}
                            </p>
                          ) : (
                            <>
                              {active.demo && (
                                <MagneticButton strength={0.18}>
                                  <a
                                    href={active.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-strong sm:w-auto"
                                  >
                                    View Project
                                    <ArrowRight
                                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </MagneticButton>
                              )}
                              {active.github && (
                                <a
                                  href={active.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
                                >
                                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                                  Repository
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
