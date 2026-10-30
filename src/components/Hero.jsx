import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  FolderKanban,
  Sparkles,
  Atom,
  Code2,
  FileCode2,
  Paintbrush,
  MousePointerClick,
} from "lucide-react";
import { FigmaIcon } from "./brandIcons";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";
import MagneticButton from "./MagneticButton";

const floatingBadges = [
  { label: "React", icon: Atom, className: "left-0 top-6 sm:-left-6", delay: 0 },
  { label: "JavaScript", icon: Code2, className: "right-2 top-2 sm:-right-4", delay: 0.4 },
  { label: "HTML", icon: FileCode2, className: "-left-2 top-1/3 sm:-left-14", delay: 0.6 },
  { label: "Figma", icon: FigmaIcon, className: "-left-3 bottom-28 sm:-left-10", delay: 0.8 },
  { label: "CSS", icon: Paintbrush, className: "right-0 top-[28%] sm:-right-14", delay: 1.0 },
  { label: "Next.js", icon: null, className: "right-4 top-[52%] sm:-right-12", delay: 1.3 },
  { label: "Tailwind", icon: null, className: "right-1 bottom-3 sm:-right-6", delay: 1.6 },
  { label: "UI/UX", icon: MousePointerClick, className: "bottom-0 left-10 sm:-left-4", delay: 1.9 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ctaButtons = [
    {
      href: "#projects",
      label: "View Projects",
      primary: true,
      icon: FolderKanban,
    },
    {
      href: site.resumeUrl,
      label: "Download Resume",
      primary: false,
      icon: Download,
      download: "Bhanu Resume.pdf",
    },
    {
      href: "#contact",
      label: "Contact Me",
      primary: false,
      icon: Mail,
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)] dark:opacity-[0.22]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl dark:from-primary/20 dark:to-accent/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12%] -z-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {site.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[64px]"
          >
            {site.heroIntro.split("Bhanu Shankar")[0]}
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 font-heading text-xl font-bold text-muted sm:text-2xl"
          >
            {site.heroTitle}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.heroTagline}
            <span className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Figma → React → AI-assisted workflow
            </span>
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            {ctaButtons.map((btn) => {
              const Icon = btn.icon;
              return (
                <MagneticButton key={btn.label} strength={0.2}>
                  <a
                    href={btn.href}
                    {...(btn.download ? { download: btn.download } : {})}
                    className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      btn.primary
                        ? "bg-primary text-white shadow-lift hover:bg-primary-strong"
                        : "border border-line bg-card text-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {btn.label}
                    <ArrowRight
                      className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </MagneticButton>
              );
            })}
          </motion.div>

          <motion.div variants={item} className="mt-9">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Find me on
            </p>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: interactive visual */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            {/* glow */}
            <div
              aria-hidden="true"
              className="absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl"
            />

            {/* main card: design -> code */}
            <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-lift">
              <div className="flex items-center gap-2 border-b border-line bg-surface px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 hidden rounded-md bg-background px-3 py-1 text-[11px] font-medium text-muted sm:inline-flex">
                  bhanu/portfolio — design-to-code
                </span>
              </div>

              <div className="grid grid-cols-2 gap-0">
                {/* design side */}
                <div className="relative border-r border-line p-5">
                  <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    <FigmaIcon className="h-3.5 w-3.5" aria-hidden="true" /> Figma
                  </p>
                  <div className="space-y-3">
                    <div className="h-16 rounded-xl bg-gradient-to-r from-primary to-accent" />
                    <div className="h-3 w-3/4 rounded-full bg-line" />
                    <div className="h-3 w-1/2 rounded-full bg-line" />
                    <div className="h-10 w-1/2 rounded-xl border border-primary/40 bg-primary/5" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg bg-line/70" />
                      <div className="h-12 rounded-lg bg-line/70" />
                      <div className="h-12 rounded-lg bg-line/70" />
                    </div>
                  </div>
                </div>

                {/* code side */}
                <div className="bg-[#0d1117] p-5">
                  <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                    <Code2 className="h-3.5 w-3.5" aria-hidden="true" /> React
                  </p>
                  <div className="font-mono text-[10px] leading-[1.7]">
                    <p>
                      <span className="text-purple-400">import</span>
                      <span className="text-slate-400"> {"{"} Hero {"}"}</span>
                      <span className="text-slate-500"> from</span>
                    </p>
                    <p className="mb-2 text-emerald-400">'../components/Hero'</p>
                    <p className="text-slate-500">{"{/* tokens */}"}</p>
                    <p>
                      <span className="text-purple-400">const</span>
                      <span className="text-sky-300"> color</span>
                      <span className="text-slate-400"> = </span>
                      <span className="text-emerald-400">var(--primary)</span>
                    </p>
                    <p className="mt-2 text-slate-500">{"{/* responsive */}"}</p>
                    <p className="text-sky-300">
                      grid-cols-1 <span className="text-amber-300">lg:</span>
                      <span className="text-emerald-400">grid-cols-2</span>
                    </p>
                    <p className="mt-2 text-slate-500">{"{/* a11y */}"}</p>
                    <p className="text-amber-300">aria-label</p>
                    <p className="text-slate-400">="Get started"</p>
                  </div>
                </div>
              </div>

              {/* progress chips */}
              <div className="flex items-center justify-between border-t border-line bg-surface px-5 py-3">
                <span className="text-[11px] font-medium text-muted">
                  Estimate: 2 days → 6 hours with AI
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                  +84% velocity
                </span>
              </div>
            </div>

            {/* floating badges */}
            {floatingBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + badge.delay * 0.35, duration: 0.6 }}
                  className={`absolute ${badge.className}`}
                >
                  <div
                    className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-line bg-card/90 px-4 py-2.5 font-heading text-sm font-bold text-foreground shadow-soft backdrop-blur-sm"
                    style={{ animation: `float ${7 + badge.delay * 1.5}s ease-in-out ${badge.delay * 0.5}s infinite` }}
                  >
                    {Icon && <Icon className="h-4 w-4 text-primary" aria-hidden="true" />}
                    {badge.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}