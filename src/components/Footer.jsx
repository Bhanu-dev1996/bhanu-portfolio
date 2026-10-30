import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { site, navLinks } from "../data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 -z-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-20">
        {/* Primary CTA band */}
        <div className="flex flex-col gap-8 border-b border-line pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Get in touch
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Have a project or a role in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {site.title}. Based in {site.location.split(" · ")[0]} — open to remote.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-primary-strong"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={site.resumeUrl}
              download="Bhanu Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Links + contact meta */}
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-heading text-base font-extrabold text-white">
                {site.firstName[0]}
              </span>
              <span>
                <span className="block font-heading text-base font-bold text-foreground">{site.name}</span>
                <span className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
                  {site.location.split(" · ")[0]}
                </span>
              </span>
            </a>
            <div className="mt-5">
              <SocialLinks size="sm" />
            </div>
          </div>

          <nav aria-label="Footer navigation" className="lg:max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Navigate</p>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
              {navLinks.map((link, i) => (
                <li key={link.id} className="flex items-center">
                  <a
                    href={`#${link.id}`}
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {link.label}
                  </a>
                  {i < navLinks.length - 1 && (
                    <span className="mx-0.5 hidden text-line sm:inline" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">Designed & Developed by {site.name}</p>
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
