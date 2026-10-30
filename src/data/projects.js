export const projectFilters = ["All", "React", "Next.js", "Dashboards"];

export const projects = [
  {
    id: "financial-tracker",
    name: "Financial Tracker",
    category: "Dashboards",
    categories: ["React", "Dashboards"],
    tagline: "Personal finance SPA",
    description:
      "A responsive single-page application for tracking income, expenses, budgets and savings goals — with interactive dashboards, charts and full client-side persistence.",
    caseStudy:
      "Budgeting tools are usually bulky. I built Financial Tracker as a lean SPA that keeps the whole financial picture — income, expenses, budgets and savings goals — in one responsive dashboard. It runs entirely client-side with IndexedDB (and a localStorage fallback), so there's no backend to maintain; architecture stays clear through React Router and the Context API with reusable components.",
    features: [
      "Track income, expenses, budgets and savings goals",
      "Interactive dashboards, charts and financial analytics with Recharts",
      "Full CRUD with filtering, sorting and multi-currency support",
      "Dark/light mode and PDF/Excel report export",
      "Persistent client-side storage via IndexedDB with localStorage fallback",
      "React Router and Context API for a clean, scalable architecture",
    ],
    tech: ["React 19", "JavaScript (ES6+)", "Vite", "Ant Design", "Tailwind CSS", "Recharts", "React Router", "IndexedDB"],
    github: "https://github.com/Bhanu-dev1996/financial-tracker",
    demo: "https://trackmyfundsapp.netlify.app/",
    variant: "finance",
    featured: true,
    palette: { from: "#047857", to: "#16a34a", accent: "#4ade80", glow: "rgba(74,222,128,0.35)" },
  },
  {
    id: "wanderlust",
    name: "Wanderlust",
    category: "Next.js",
    categories: ["Next.js"],
    tagline: "Responsive travel website",
    description:
      "A mobile-first single-page travel website with destination search, travel packages, a testimonials carousel and a chat widget — built with Next.js 15 and shadcn/ui.",
    caseStudy:
      "Wanderlust explores how fast a premium travel site can be built with modern React tooling. I used the Next.js App Router with Server and Client Components, next/image for optimized media, and Radix-based shadcn/ui primitives for consistent, accessible components. The result is a fully responsive, themeable landing experience with search, packages, testimonials and contact flows.",
    features: [
      "Destination search and filtering",
      "Curated travel packages and itineraries",
      "Auto-playing testimonials carousel",
      "Contact form and chat widget",
      "Mobile-first responsive design with dark/light theme",
      "Next.js App Router using Server/Client Components and next/image",
    ],
    tech: ["Next.js 15", "React 19", "JavaScript", "Tailwind CSS", "shadcn/ui", "Radix UI"],
    github: "https://github.com/Bhanu-dev1996/travel-website",
    demo: "https://wanderlust-travelwebsite.netlify.app/",
    variant: "travel",
    featured: true,
    palette: { from: "#0f766e", to: "#f59e0b", accent: "#fbbf24", glow: "rgba(251,191,36,0.3)" },
  },
  {
    id: "novacrm",
    name: "NovaCRM",
    category: "Dashboards",
    categories: ["React", "Dashboards"],
    tagline: "Contacts, pipeline and deals in one dashboard",
    description:
      "A modern CRM for teams to manage contacts, pipelines and deals from a single dashboard — currently in active development.",
    caseStudy:
      "NovaCRM is being designed around the daily sales loop: find the right contact, move a deal through the pipeline, and see the health of the book at a glance. The first cut focuses on a clean dashboard, a kanban-style pipeline and fast contact records — with live and repository links landing once the core flows are ready.",
    features: [
      "Contact and account records with search and filters",
      "Kanban pipeline for deals and stages",
      "Dashboard overview of pipeline health and activity",
      "Responsive layouts for desktop and tablet",
    ],
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    variant: "crm",
    featured: true,
    inProgress: true,
    palette: { from: "#1e3a8a", to: "#4f46e5", accent: "#818cf8", glow: "rgba(129,140,248,0.35)" },
  },
  {
    id: "shipora",
    name: "Shipora",
    category: "Dashboards",
    categories: ["React", "Dashboards"],
    tagline: "Logistics & fleet management SaaS",
    description:
      "A premium logistics operations platform for managing shipments, fleet vehicles, drivers, warehouses, delivery routes and operational performance.",
    caseStudy:
      "Shipora is planned as a single operations surface for logistics teams: track shipments, assign vehicles and drivers, watch warehouse load and keep delivery routes on time. Live and repository links will land when the project ships.",
    features: [
      "Shipment tracking and status across the network",
      "Fleet, driver and warehouse management",
      "Delivery route planning and operational performance",
      "Dashboard overview of on-time rates, load and exceptions",
    ],
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    variant: "dashboard",
    featured: true,
    upcoming: true,
    palette: { from: "#0b1220", to: "#0f766e", accent: "#2dd4bf", glow: "rgba(45,212,191,0.35)" },
  },
];
