import { motion } from "framer-motion";
import { designProcess } from "../data/process";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

export default function DesignProcess() {
  return (
    <section id="process" className="relative bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How I take it from zero to launch"
          subtitle="A senior-level workflow that keeps design and engineering honest with each other."
        />

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-4">
          {designProcess.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-line bg-card p-6 shadow-soft transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-line transition-colors duration-300 group-hover:text-primary/40">
                  {step.step}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>

              {i < designProcess.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-[18px] top-1/2 z-10 hidden -translate-y-1/2 text-primary/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary lg:block"
                >
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </motion.div>
          ))}

          {/* CTA tile */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 sm:flex-row">
              <p className="text-center text-sm font-medium text-foreground sm:text-left sm:text-base">
                This process is how design decisions survive contact with real code.
              </p>
              <MagneticButton strength={0.18}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-strong"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}