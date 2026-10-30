import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";
import { aiWorkflow, aiPrinciples, aiTools, aiMeaning } from "../data/process";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function AIWorkflow() {
  return (
    <section id="ai" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-16 -z-10 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="AI-assisted development"
            title={
              <>
                Building faster <span className="text-gradient">with AI</span>
              </>
            }
            subtitle="AI drafts the repetitive middle. I still design the approach, review every change, and own what ships."
          />
        </Reveal>

        {/* What AI-assisted development means */}
        <Reveal className="mt-12 lg:mt-14">
          <div className="grid gap-4 sm:grid-cols-3">
            {aiMeaning.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-line bg-card/80 p-5 shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-heading text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: tools + guardrails */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="flex items-start gap-2.5 text-sm font-medium text-foreground">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Prompt → generate → review → refine → test → ship. Design judgment and ownership stay human.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Tools in this flow</p>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="rounded-full border border-line bg-card px-4 py-2 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="text-sm font-semibold text-foreground">{tool.name}</span>
                    <span className="block text-[11px] text-muted">{tool.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-soft">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                Guardrails that never change
              </p>
              <ul className="space-y-2.5">
                {aiPrinciples.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: elaborated flow */}
          <div className="relative">
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              How the flow works
            </p>
            <div
              aria-hidden="true"
              className="absolute left-7 top-12 bottom-4 w-px bg-gradient-to-b from-primary via-line to-accent lg:left-8"
            />
            <div className="space-y-4">
              {aiWorkflow.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-start gap-5"
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl border shadow-soft transition-colors duration-300 ${
                      step.highlight
                        ? "border-primary/40 bg-gradient-to-br from-primary to-accent text-white"
                        : "border-line bg-card text-primary"
                    }`}
                    aria-hidden="true"
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div
                    className={`flex-1 rounded-2xl border p-5 shadow-soft transition-all duration-300 hover:border-primary/30 ${
                      step.highlight ? "border-primary/35 bg-primary/5" : "border-line bg-card"
                    }`}
                  >
                    <p className="flex flex-wrap items-center gap-2 font-heading text-base font-bold text-foreground">
                      <span className="font-mono text-[11px] font-semibold text-muted">{step.step}</span>
                      {step.title}
                      {step.highlight && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          AI step
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
