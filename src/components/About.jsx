import { motion } from "framer-motion";
import { ArrowDownToLine, Compass, GitFork, Palette, Sparkles } from "lucide-react";
import { stats, currentlyExploring } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const workflowSteps = [
  { icon: Palette, title: "Design", desc: "Figma, tokens, prototypes" },
  { icon: GitFork, title: "Develop", desc: "Scalable, accessible React" },
  { icon: Sparkles, title: "Accelerate", desc: "AI-assisted, human-reviewed" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Design & build, end to end"
          subtitle="UX/UI Designer & Full Stack Developer · React · Python · AI"
        />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: story */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I'm <strong className="font-semibold text-foreground">Bhanu Shankar</strong>, a UX/UI
                Designer and Full Stack Developer with over 6.5 years of experience shaping interfaces that are
                both beautiful and practical — and shipping full-stack and Generative AI work alongside them.
              </p>
              <p>
                My work sits at the intersection of design and engineering. I mock up experiences in
                Figma — tokens, auto layout, prototypes — and then translate them into production-grade
                React interfaces that stay true to the design under real data and real devices.
              </p>
              <p>
                More recently I've shipped LLM applications as well as using AI as a coding multiplier.
                The AI-Forge capstone is an end-to-end RAG system — ingestion, retrieval, grounded
                generation, API, UI and tests — while Copilot and Cursor still accelerate day-to-day
                frontend work under human review.
              </p>
            </div>

            {/* workflow chips */}
            <div className="mt-8 rounded-2xl border border-line bg-card p-5 shadow-soft">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                <ArrowDownToLine className="h-4 w-4 text-primary" aria-hidden="true" />
                My design-to-code workflow
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {workflowSteps.map((step, i) => (
                  <div key={step.title} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40">
                      <step.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {step.title}
                    </span>
                    {i < workflowSteps.length - 1 && (
                      <span className="text-muted/50" aria-hidden="true">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: stats + exploring */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-line bg-card p-6 shadow-soft transition-colors duration-300 hover:border-primary/40"
                >
                  <p className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} className="text-gradient" />
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Currently exploring */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-soft"
            >
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Compass className="h-4 w-4 text-primary" aria-hidden="true" />
                Currently exploring
              </p>
              <ul className="flex flex-wrap gap-2">
                {currentlyExploring.map((topic) => (
                  <li
                    key={topic}
                    className="cursor-default rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}