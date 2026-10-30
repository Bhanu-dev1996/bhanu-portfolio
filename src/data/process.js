import {
  Search,
  Users,
  PenLine,
  Palette,
  Code2,
  Bug,
  Rocket,
  Lightbulb,
  Sparkles,
  MessageSquareText,
  Eye,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export const designProcess = [
  {
    step: "01",
    title: "Understand",
    icon: Search,
    desc: "Clarify goals, users and constraints before a single pixel is drawn.",
  },
  {
    step: "02",
    title: "Research",
    icon: Users,
    desc: "Talk to users, audit competitors and collect evidence to guide decisions.",
  },
  {
    step: "03",
    title: "Wireframe",
    icon: PenLine,
    desc: "Sketch structure, hierarchy and flows in fast, disposable lo-fi frames.",
  },
  {
    step: "04",
    title: "Design",
    icon: Palette,
    desc: "Translate approved structure into polished, token-driven visual design.",
  },
  {
    step: "05",
    title: "Develop",
    icon: Code2,
    desc: "Build it in React with scalable components, real data and full responsiveness.",
  },
  {
    step: "06",
    title: "Test",
    icon: Bug,
    desc: "Verify accessibility, edge cases, performance and cross-browser behavior.",
  },
  {
    step: "07",
    title: "Launch",
    icon: Rocket,
    desc: "Ship, measure, and iterate with real usage feedback.",
  },
];

/**
 * AI-assisted development = using Copilot/Cursor to speed up coding,
 * while a human still decides architecture, reviews every change, and owns quality.
 */
export const aiWorkflow = [
  {
    step: "01",
    title: "Frame the task",
    icon: Lightbulb,
    desc: "I write a clear prompt: the goal, file context, constraints, and what “done” looks like — so the model isn’t guessing.",
    highlight: false,
  },
  {
    step: "02",
    title: "Generate with AI",
    icon: Sparkles,
    desc: "Cursor or Copilot drafts scaffolding, boilerplate, refactors, tests, or docs across files — the repetitive middle work, not the product decisions.",
    highlight: true,
  },
  {
    step: "03",
    title: "Review & understand",
    icon: Eye,
    desc: "I read every suggestion line by line. If I don’t understand it, it doesn’t ship. Architecture, naming, and edge cases stay my call.",
    highlight: false,
  },
  {
    step: "04",
    title: "Refine & integrate",
    icon: RefreshCw,
    desc: "I edit the output to match the design system, project patterns, and security rules — then wire it into the real codebase.",
    highlight: false,
  },
  {
    step: "05",
    title: "Test & verify",
    icon: Bug,
    desc: "Run tests, check accessibility, try the happy path and failure cases. AI can suggest tests; I still validate the behavior.",
    highlight: false,
  },
  {
    step: "06",
    title: "Ship with ownership",
    icon: Rocket,
    desc: "Deploy only after human sign-off. Faster delivery, same bar for quality — I own every line that reaches production.",
    highlight: false,
  },
];

export const aiMeaning = [
  {
    title: "What it is",
    icon: MessageSquareText,
    body: "A coding multiplier: AI drafts and accelerates routine work (components, APIs, refactors, tests) from natural-language prompts and project context.",
  },
  {
    title: "What it isn’t",
    icon: ShieldCheck,
    body: "Blind paste. AI doesn’t replace design judgment, product decisions, or accountability — those stay human.",
  },
  {
    title: "Why it matters",
    icon: Sparkles,
    body: "Same senior-level quality, shorter cycle time: more energy on UX, architecture, and review; less on boilerplate.",
  },
];

export const aiPrinciples = [
  "Code quality — suggestions are cleaned, refactored and understood, never pasted blindly",
  "Accessibility — every AI-assisted pattern passes a real a11y review",
  "Design consistency — AI output is matched against design system tokens and patterns",
  "Maintainability — generated code follows the same conventions as hand-written code",
  "Human review — I read and own every line that ships",
];

export const aiTools = [
  { name: "GitHub Copilot", note: "Inline completions, docs, quick refactors" },
  { name: "Cursor", note: "Multi-file edits with full project context" },
  { name: "Prompt-driven flow", note: "Clear briefs → generate → review → refine" },
];
