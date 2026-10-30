import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Loader2,
  CircleCheck,
  AlertCircle,
  Copy,
  MapPin,
  Check,
} from "lucide-react";
import { buildContactMailto, submitContact, validateContact } from "../lib/contact";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

const initialForm = { name: "", email: "", subject: "", message: "", company: "" };

function Field({ label, htmlFor, error, hint, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>
      )}
    </div>
  );
}

const inputClasses = (hasError) =>
  `w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors duration-200 focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-400 focus:ring-red-300"
      : "border-line focus:border-primary focus:ring-primary/20"
  }`;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [formError, setFormError] = useState("");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(copyTimer.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError("");
      setStatus("error");
      return;
    }

    setFormError("");
    setStatus("loading");
    const result = await submitContact(form);
    if (result.ok) {
      setStatus("success");
      setForm(initialForm);
    } else {
      setFormError(result.error || "Something went wrong while sending. Please try again.");
      setStatus("error");
    }
  };

  const mailtoFallback = buildContactMailto(form);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      {/* animated background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40 dark:opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Let's build something great together. From Figma to React to production — I'll take your
            idea the whole way.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left: info */}
          <Reveal delay={0.05}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  Email
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-medium text-muted transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    title="Copy email address"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <span className="mt-1 block text-xs text-muted">{copied ? "Copied!" : "Click to copy"}</span>
              </div>

              <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  Location
                </p>
                <p className="mt-2 text-sm text-muted">{site.location}</p>
              </div>

              <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
                <p className="mb-4 text-sm font-semibold text-foreground">Connect with me</p>
                <SocialLinks variant="text" />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative rounded-3xl border border-line bg-card p-6 shadow-lift sm:p-8"
            >
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[360px] flex-col items-center justify-center text-center"
                    role="status"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CircleCheck className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                      Message sent!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                      Thanks for reaching out — I'll get back to you within a couple of business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 rounded-full border border-line px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name *" htmlFor="name" error={errors.name}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          autoComplete="name"
                          aria-invalid={!!errors.name}
                          className={inputClasses(!!errors.name)}
                        />
                      </Field>
                      <Field label="Email *" htmlFor="email" error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          className={inputClasses(!!errors.email)}
                        />
                      </Field>
                    </div>

                    <Field label="Subject" htmlFor="subject" error={errors.subject} hint="Optional — e.g. 'New dashboard project'">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className={inputClasses(!!errors.subject)}
                      />
                    </Field>

                    <Field label="Message *" htmlFor="message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline and goals…"
                        rows={5}
                        aria-invalid={!!errors.message}
                        className={`resize-none ${inputClasses(!!errors.message)}`}
                      />
                    </Field>

                    {status === "error" && !Object.keys(errors).length && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400" role="alert">
                        {formError || "Something went wrong while sending. Please try again."}{" "}
                        <a href={mailtoFallback} className="underline underline-offset-2">
                          Email me directly
                        </a>
                        .
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}