# Portfolio — M Bhanu Shankar

A modern, premium, interactive **personal portfolio** for a UX/UI Designer and Developer
with experience across design, UI/UX and AI-assisted development.

Built with **React 19**, **JavaScript**, **Tailwind CSS v4**, **Vite**, **Framer Motion** and
**Lucide React**.

---

## Highlights

- Sticky animated navbar with scroll-spy, mobile drawer and dark/light mode toggle (persisted, respects system preference)
- Hero with floating tech badges and a "design → code" preview card
- Interactive **Featured Projects** showcase with filters and a live preview pane
- Full **Development Projects** grid with GitHub / Live Demo / Case Study actions
- **UI/UX Design Showcase** in a masonry layout with a fullscreen lightbox
- 7-step **Design Process** and **AI-assisted Development** workflow
- Contact form with validation, error / loading / success states and an isolated submit handler ready for API wiring
- Scroll progress bar, custom cursor, magnetic buttons, back-to-top, copy-email, scroll-reveal animations
- `prefers-reduced-motion` respected throughout
- SEO metadata, Open Graph tags, semantic HTML, favicon, `robots.txt`, sitemap-ready `sitemap.xml`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or the port shown by Vite).

### Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Project structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectShowcase.jsx
│   ├── DesignShowcase.jsx
│   ├── DesignProcess.jsx
│   ├── AIWorkflow.jsx
│   ├── Achievements.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   └── ... (shared UI: Reveal, SectionHeading, MagneticButton, CustomCursor, ScrollProgress, ProjectPreview, brandIcons)
├── data/        # all content: projects, skills, experience, testimonials, designs, process
├── hooks/       # useTheme, useScrollSpy
├── lib/         # contact.js (isolated form submission handler)
├── App.jsx
├── main.jsx
└── index.css    # Tailwind v4 tokens + design system
```

## Customizing content

All copy lives in **`src/data/`** — update projects, skills, experience, designs, testimonials and
profile info without touching components:

- `site.js` — name, title, tagline, email, socials, resume link
- `projects.js` — featured + development projects
- `skills.js` — skill categories and items
- `experience.js` — timeline entries
- `designs.js` — design showcase items
- `testimonials.js` — **sample** testimonials (replace before launch)
- `process.js` — design process, AI workflow, achievements

### Images

Project and design previews are **generated SVG mockups** (`components/ProjectPreview.jsx`) so the
site never depends on broken placeholder assets. To use real screenshots instead, replace the
`<ProjectPreview>` usage in `ProjectShowcase.jsx`, `ProjectCard.jsx`, `Projects.jsx` and
`DesignShowcase.jsx` with an `<img>` and drop files into `public/`.

### Contact form backend

`src/lib/contact.js` currently simulates a request so the UI loading/success states work out of the
box. To go live, replace the body of `submitContact` with a `fetch()` to your API while keeping the
same `{ ok: true } | { ok: false, error }` return shape.

### Resume

The **Resume** buttons download `public/Bhanu-Shankar-Resume.pdf`, the real resume (source:
`public/resume.html` is a printable HTML copy with the same content). Swap the PDF for a new version
anytime — `site.resumeUrl` in `src/data/site.js` controls the link.

## Tech notes

- Tailwind CSS v4 via the official `@tailwindcss/vite` plugin; design tokens are CSS variables mapped
  through `@theme inline` (see `src/index.css`).
- Dark mode is class-based (`@custom-variant dark`) with dedicated tokens — not a color inversion.
- Icons: Lucide React. Brand marks (GitHub, LinkedIn, Figma) were removed from Lucide v1, so they're
  provided as self-contained SVG components in `components/brandIcons.jsx`.

## Target

Lighthouse-friendly baseline: responsive layouts tested from 320px up, semantic HTML, keyboard
accessibility, focus states, lazy-free lightweight assets and reduced-motion support.