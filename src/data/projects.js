export const projectFilters = ["All", "AI", "Full-Stack", "RAG", "Python", "UI/UX", "React", "Next.js", "Dashboards", "Mobile"];

// Demo/source links point to the live portfolio for now — swap in your repo
// and deployed URLs when available.
const sourceLink = "https://bhanushankar-portfolio.netlify.app";

export const projects = [
  {
    id: "amzur-ai-chat",
    name: "Amzur AI Chat",
    category: "AI",
    categories: ["AI", "Full-Stack", "RAG"],
    tagline: "Conversational AI platform",
    description:
      "A multi-user browser chat product built during the Amzur AI engineering program (May 2026). Users sign in, keep threaded conversations, and switch between normal chat, images, SQL, spreadsheets and research modes. Every model call flows through an internal LiteLLM proxy — the app never talks to OpenAI or Google directly.",
    caseStudy:
      "Amzur AI Chat is the flagship of the 27-day full-stack AI engineering program, built with a clean FastAPI + React split: routers handle HTTP, services hold the logic, and SQLAlchemy models + Pydantic schemas stay separate, with Alembic owning schema changes. The result is a real browser product — threaded chat with token-by-token streaming, email/password + Google OAuth behind httpOnly cookies, file uploads, PDF RAG with per-user ChromaDB collections, an NL-to-SQL agent with a read-only keyword guard (INSERT, UPDATE, DELETE, DROP, TRUNCATE, ALTER blocked), a Pandas agent for Sheets/CSV, a research digest agent with MCP-first arXiv search, and an n8n sidecar that turns support intent into tickets, emails and a Google Sheets digest.",
    features: [
      "Threaded conversations with token-by-token streaming",
      "Email/password and Google OAuth, with JWT stored in an httpOnly cookie",
      "File uploads (image, video, code, PDF) stored on disk with metadata in the DB",
      "Conversation memory loaded from the DB (last 20 messages)",
      "Multi-modal messages — images and video sent alongside the prompt",
      "AI image generation with Gemini Imagen",
      "PDF RAG: chunk, embed with text-embedding-3-large, per-user ChromaDB collection",
      "Read-only natural-language-to-SQL agent with a keyword blocklist",
      "Google Sheets and CSV questions answered through a Pandas agent",
      "Research digest agent: arXiv via MCP (direct API fallback), coverage judgment, structured streaming digest",
      "n8n sidecar: support-intent detection, LLM-classified tickets, Gmail notifications, weekday 9 AM digest to Gmail + Google Sheets",
    ],
    tech: ["Python", "FastAPI", "React 18", "TypeScript", "Vite", "Tailwind CSS", "PostgreSQL", "LangChain (LCEL)", "LangGraph", "ChromaDB", "LiteLLM", "MCP", "n8n", "pytest"],
    github: sourceLink,
    demo: sourceLink,
    variant: "rag",
    featured: true,
    palette: { from: "#7c3aed", to: "#06b6d4", accent: "#a78bfa", glow: "rgba(167,139,250,0.35)" },
  },
  {
    id: "langgraph-tic-tac-toe",
    name: "LangGraph Tic-Tac-Toe",
    category: "AI",
    categories: ["AI", "Full-Stack"],
    tagline: "AI agent game",
    description:
      "A Tic-Tac-Toe game where a person plays an AI agent that picks a cell from board state via the LiteLLM proxy, explains its move, and falls back to a perfect minimax player when the model returns an invalid move. Game state lives in PostgreSQL, with a React board and scoreboard.",
    caseStudy:
      "The second app from the AI engineering program turns an LLM into a game player. A LangGraph agent reads the board, selects a move through LiteLLM, and narrates the reasoning for each move. Because LLMs occasionally hallucinate illegal moves, a minimax engine (and a random mode) sits as a guaranteed-legal fallback. FastAPI persists game state and the scoreboard in PostgreSQL, and a React 18 + TypeScript board renders a thinking state while the agent decides.",
    features: [
      "LangGraph agent chooses legal moves from board state via a LiteLLM proxy",
      "Model explains each move in natural language",
      "Perfect minimax fallback when the model outputs an invalid move, plus a random mode",
      "Game state and scoreboard persisted in PostgreSQL",
      "React board UI with a 'thinking…' state while the agent decides",
    ],
    tech: ["Python", "LangGraph", "LiteLLM", "FastAPI", "PostgreSQL", "React 18", "TypeScript", "Vite", "Tailwind CSS"],
    github: sourceLink,
    demo: sourceLink,
    variant: "saas",
    featured: true,
    palette: { from: "#6d28d9", to: "#f59e0b", accent: "#fbbf24", glow: "rgba(251,191,36,0.3)" },
  },
  {
    id: "kb-navigator",
    name: "Internal Knowledge Base Navigator",
    category: "RAG",
    categories: ["RAG", "Python"],
    tagline: "AI-Forge 2026 Capstone",
    description:
      "Employees type a question. A four-stage RAG pipeline answers it from eight company policy documents — leave, remote work, expenses, onboarding, security, and more — with ranked source links instead of invented answers.",
    caseStudy:
      "Internal policy Q&A usually fails in two ways: search that misses the right paragraph, or an LLM that invents an answer. I built a sequential RAG system so employees can ask in plain language and get a grounded reply. Query understanding classifies intent (POLICY_LOOKUP, PROCESS_INQUIRY, CONTACT_LOOKUP, GENERAL_INFO, UNKNOWN), rewrites the question for search, and extracts topics. Semantic search pulls the top chunks from ChromaDB. Answer generation writes only from those chunks — and says so when the documents do not contain the answer. Source linking deduplicates by file, ranks matches, and returns clickable document links. Around that pipeline: a Markdown ingestion CLI (~35 embedded chunks), a FastAPI API with path-traversal-safe document viewing, a Streamlit chat UI with intent chips and a pipeline trace, 15 pytest tests with mocked LLM and vector-store calls, and architecture specs.",
    features: [
      "Four-stage sequential RAG: intent, retrieval, grounded generation, source linking",
      "Ingestion CLI that chunks, embeds, and persists policy Markdown in ChromaDB",
      "FastAPI REST API with POST /query, GET /health, GET /documents",
      "Document viewer protected against path traversal",
      "Streamlit chat UI with intent chips, source cards, and session history",
      "Pipeline trace: reformulated query, entities, and latency",
      "Refuses to invent answers when the corpus does not contain them",
      "15 pytest tests (8 pipeline unit, 7 API integration) with mocked LLM and vector store",
    ],
    tech: ["Python", "LangChain", "RAG", "FastAPI", "Streamlit", "ChromaDB", "Pydantic", "pytest"],
    github: sourceLink,
    demo: sourceLink,
    variant: "rag",
    featured: true,
    palette: { from: "#0f766e", to: "#6366f1", accent: "#818cf8", glow: "rgba(129,140,248,0.35)" },
  },
  {
    id: "financial-tracker",
    name: "Financial Tracker",
    category: "Dashboards",
    categories: ["React", "Dashboards", "Mobile"],
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
    github: sourceLink,
    demo: sourceLink,
    variant: "finance",
    featured: true,
    palette: { from: "#047857", to: "#16a34a", accent: "#4ade80", glow: "rgba(74,222,128,0.35)" },
  },
  {
    id: "wanderlust",
    name: "Wanderlust",
    category: "Next.js",
    categories: ["Next.js", "Mobile", "UI/UX"],
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
    github: sourceLink,
    demo: sourceLink,
    variant: "travel",
    featured: true,
    palette: { from: "#0f766e", to: "#f59e0b", accent: "#fbbf24", glow: "rgba(251,191,36,0.3)" },
  },
];