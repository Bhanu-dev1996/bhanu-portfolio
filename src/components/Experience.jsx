import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, CheckCircle2, BadgeCheck, GraduationCap } from "lucide-react";
import { experience, certifications, education } from "../data/experience";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Work history, certifications, and education — the full path from engineering school to shipping production UI."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <a
            href="#experience-work"
            className="rounded-full border border-line bg-card px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Work · {experience.length}
          </a>
          <a
            href="#experience-certs"
            className="rounded-full border border-line bg-card px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Certifications · {certifications.length}
          </a>
          <a
            href="#experience-education"
            className="rounded-full border border-line bg-card px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Education · {education.length}
          </a>
        </div>

        <div id="experience-work" className="relative mt-14 scroll-mt-28 lg:mt-16">
          <h3 className="mb-8 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Work experience
          </h3>

          <div
            aria-hidden="true"
            className="absolute left-5 top-12 bottom-2 w-px bg-gradient-to-b from-primary via-line to-transparent sm:left-6"
          />

          <div className="space-y-8">
            {experience.map((job, idx) => {
              const isOpen = openId === job.id;
              return (
                <Reveal key={job.id} delay={idx * 0.06}>
                  <article className="relative pl-16 sm:pl-20">
                    <span
                      className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-primary shadow-soft sm:h-12 sm:w-12"
                      aria-hidden="true"
                    >
                      <job.icon className="h-5 w-5" />
                    </span>

                    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-colors duration-300 hover:border-primary/30">
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : job.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                              {job.role}
                            </h4>
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                              <Briefcase className="h-3 w-3" aria-hidden="true" />
                              {job.period}
                            </span>
                          </div>
                          <p className="mt-1 text-sm font-medium text-muted">
                            {job.company}
                            {job.location ? ` · ${job.location}` : ""} · {job.duration}
                          </p>
                          <p className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">
                            {job.summary}
                          </p>
                        </div>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted"
                        >
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-6 border-t border-line bg-surface/50 px-5 py-6 sm:px-6">
                              {job.responsibilities.length > 0 && (
                                <div>
                                  <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                                    Key responsibilities
                                  </h5>
                                  <ul className="grid gap-2 sm:grid-cols-2">
                                    {job.responsibilities.map((r) => (
                                      <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {job.tech.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                                    Tech:
                                  </span>
                                  {job.tech.map((t) => (
                                    <span
                                      key={t}
                                      className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-foreground"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {job.achievements.length > 0 && (
                                <div>
                                  <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                                    Highlights
                                  </h5>
                                  <ul className="space-y-2">
                                    {job.achievements.map((a) => (
                                      <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                        {a}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div id="experience-certs" className="mt-16 scroll-mt-28">
          <h3 className="mb-8 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Certifications
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.id} delay={idx * 0.06}>
                <article className="h-full rounded-2xl border border-line bg-card p-5 shadow-soft transition-colors duration-300 hover:border-primary/30 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-primary">
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {cert.date ? (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                        {cert.date}
                      </span>
                    ) : null}
                  </div>
                  <h4 className="mt-4 font-heading text-base font-bold text-foreground sm:text-lg">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-muted">{cert.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cert.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div id="experience-education" className="mt-16 scroll-mt-28">
          <h3 className="mb-8 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Education
          </h3>

          {education.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.06}>
              <article className="rounded-2xl border border-line bg-card p-5 shadow-soft sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-muted">
                        {item.school}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                    </div>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {item.period}
                    </span>
                    <p className="mt-2 text-xs font-medium text-muted">{item.credential}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
