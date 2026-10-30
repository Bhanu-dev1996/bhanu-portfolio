import Reveal from "./Reveal";

/**
 * Consistent animated section heading:
 * eyebrow badge + large title + optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", id }) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowAlign = align === "center" ? "justify-center" : "justify-start";

  return (
    <Reveal className={`max-w-3xl ${alignClasses}`} viewportAmount={0.15}>
      <div className={`mb-4 flex items-center gap-2 ${eyebrowAlign}`}>
        <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">
          {eyebrow}
        </span>
        {align === "center" && <span className="h-px w-8 bg-primary/60" aria-hidden="true" />}
      </div>
      <h2
        id={id}
        className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}