// Design case studies shown in the showcase. Add more entries as new work is ready.
export const designs = [
  {
    id: "careerpilot",
    title: "CareerPilot — Webpage & Dashboard",
    category: "Web + Dashboard",
    objective:
      "Help job seekers move from discovery to action — a clear marketing site paired with a dashboard that tracks applications, skills and next steps.",
    process:
      "Defined the dual surface early: a webpage that sells the product, and a dashboard that owns daily use. Mapped primary flows (browse roles, track applications, review insights), then designed responsive layouts and component patterns that stay consistent across both.",
    tools: ["Figma", "Auto Layout", "Prototyping"],
    figmaUrl:
      "https://www.figma.com/design/NRvVtlDB0lmDkH2Xnfjl0c/UX-Designs?node-id=0-1&p=f&t=Smx7BVEdMSxV3Z8o-0",
    coverImage: "/designs/careerpilot-cover.png",
    variant: "dashboard",
    ratio: "wide",
    size: "lg",
    palette: { from: "#0a0f0a", to: "#ccff00" },
  },
  {
    id: "healthconnect",
    title: "HealthConnect — Mobile App",
    category: "Mobile",
    objective:
      "Give patients a calm mobile experience for appointments, records and care updates — everything reachable with one thumb.",
    process:
      "Started mobile-first at 375px, prioritized the most frequent tasks (book, view records, message care team), wireframed bottom-nav navigation, then polished high-fidelity screens with clear hierarchy and accessible contrast for clinical trust.",
    tools: ["Figma", "Smart Animate", "Mobile frames"],
    coverImage: "/designs/healthconnect-cover.png",
    variant: "mobile",
    ratio: "tall",
    size: "lg",
    palette: { from: "#0f172a", to: "#14b8a6" },
  },

];
