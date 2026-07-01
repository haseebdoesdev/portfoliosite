export const projects = [
  {
    id: "LOG-13",
    slug: "leadflow",
    title: "LeadFlow",
    subtitle: "Lead Capture & Automation",
    category: "Full Stack / Automation",
    status: "LIVE",
    description: "Full-stack lead capture system with n8n-powered automation pipelines. Captures leads via a Next.js frontend, stores them in Supabase, and automatically syncs to Airtable & Google Sheets while triggering Slack alerts and Gmail follow-ups.",
    tagline: "A visitor submits a form. Supabase persists it. n8n fans out to Airtable, Sheets, Slack, and Gmail — in parallel, async, instantly.",
    overview: `LeadFlow is a production-grade lead capture and CRM automation system built as a full-stack portfolio demo. A visitor lands on the public form, fills in their contact details, and hits submit. The Next.js API route validates the payload, performs a duplicate check against the Supabase Postgres database using Row Level Security, inserts the lead with an \`is_duplicate\` flag, and fires an n8n webhook in a fire-and-forget pattern — all within a single API call that responds in under 200ms.\n\nThe n8n automation workflow runs independently. It normalises the incoming lead data, evaluates the \`is_duplicate\` flag, and branches: new leads are fanned out in parallel to Airtable (CRM record), Google Sheets (reporting row), Slack (team notification), and Gmail (welcome email to the lead). Duplicate leads trigger a single Slack alert without creating noise in other tools.\n\nAn admin dashboard at /dashboard, protected by Supabase Auth with email/password, displays all captured leads in a sortable table with duplicate status badges.`,
    scope: [
      { value: "8", label: "n8n workflow nodes" },
      { value: "4", label: "external integrations" },
      { value: "RLS", label: "security model" },
      { value: "< 200ms", label: "API response time" },
      { value: "3", label: "app routes" },
      { value: "async", label: "webhook architecture" },
    ],
    techStack: [
      { name: "Next.js 14", icon: "nextdotjs", role: "Frontend + API Routes", color: "000000" },
      { name: "TypeScript", icon: "typescript", role: "Type-safe codebase", color: "3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", role: "Utility-first styling", color: "06B6D4" },
      { name: "Supabase", icon: "supabase", role: "Postgres + Auth + RLS", color: "3ECF8E" },
      { name: "n8n", icon: "n8n", role: "Automation engine", color: "EA4B71" },
      { name: "Airtable", icon: "airtable", role: "CRM record store", color: "18BFFF" },
      { name: "Google Sheets", icon: "googlesheets", role: "Lead reporting", color: "34A853" },
      { name: "Slack", icon: "slack", role: "Team notifications", color: "4A154B" },
      { name: "Gmail", icon: "gmail", role: "Welcome emails", color: "EA4335" },
      { name: "Vercel", icon: "vercel", role: "Edge deployment", color: "000000" },
    ],
    architecture: {
      description: "The system is split into three layers: a Next.js full-stack app deployed on Vercel (frontend form + protected admin dashboard + API route), a Supabase backend (Postgres with RLS + Auth), and an n8n cloud automation engine connected via webhook. The API route is the only bridge between Supabase and n8n — keeping the automation layer completely decoupled from the web layer.",
      diagram: `graph LR
  Browser["Browser\\nLead Form"] --> FE
  AdminUI["Browser\\nAdmin Dashboard"] --> FE
  subgraph Vercel["▲ Vercel — Edge Network"]
    FE["Next.js 14\\nTypeScript + Tailwind"]
    API["API Route\\n/api/leads"]
    FE --> API
  end
  API --> DB[("Supabase\\nPostgres + Auth + RLS")]
  AdminUI --> DB
  API -.->|"async webhook"| N8N["n8n Cloud\\nAutomation"]
  N8N --> AT["Airtable\\nCRM Records"]
  N8N --> GS["Google Sheets\\nReporting"]
  N8N --> SL["Slack\\nNotifications"]
  N8N --> GM["Gmail\\nWelcome Emails"]`
    },
    sequenceDiagram: `sequenceDiagram
  autonumber
  actor U as User
  participant FE as Next.js Frontend
  participant API as API Route
  participant DB as Supabase DB
  participant N8N as n8n Workflow

  U->>FE: Fill & submit lead form
  FE->>+API: POST /api/leads
  Note over FE,API: name, email, phone?, company?, role?
  API->>+DB: SELECT WHERE email = ? (dup check)
  DB-->>-API: exists: bool
  API->>+DB: INSERT lead with is_duplicate flag
  DB-->>-API: lead object
  API-)N8N: POST webhook (fire & forget)
  API-->>-FE: success + duplicate + id
  FE-->>U: Show confirmation message

  Note over N8N: Runs async — independently of API response
  N8N->>N8N: Normalize lead data
  alt is_duplicate = false
    N8N->>N8N: Airtable — create CRM record
    N8N->>N8N: Google Sheets — append row
    N8N->>N8N: Slack — new lead notification
    N8N->>N8N: Gmail — send welcome email
  else is_duplicate = true
    N8N->>N8N: Slack — duplicate alert only
  end`,
    activityDiagram: `flowchart TD
  A([Start]) --> B[User fills lead form]
  B --> C{"Required fields?\\nname + email"}
  C -->|Missing| D[Show validation error]
  D --> B
  C -->|Valid| E["POST /api/leads"]
  E --> F{"Duplicate email\\nin Supabase?"}

  F -->|"No — new lead"| G["INSERT lead\\nis_duplicate = false"]
  G --> H[Fire n8n webhook]
  H --> I1[Airtable\\nCreate record]
  H --> I2[Google Sheets\\nAppend row]
  H --> I3[Slack\\nNew lead alert]
  H --> I4[Gmail\\nWelcome email]
  I1 & I2 & I3 & I4 --> J[Return success: true]

  F -->|"Yes — duplicate"| K["INSERT lead\\nis_duplicate = true"]
  K --> L[Fire n8n webhook]
  L --> M[Slack\\nDuplicate alert]
  M --> N[Return duplicate: true]

  J --> O[Show user feedback]
  N --> O
  O --> P([End])`,
    github: "https://github.com/haseebdoesdev/leadflow",
    live: "https://leadflow-three-tau.vercel.app",
    timestamp: "2026.07"
  },
  {
    id: "LOG-01",
    slug: "ml-trading-system",
    title: "Full-Stack ML Trading System",
    subtitle: "Forex Algorithmic Trading",
    category: "AI / ML",
    status: "COMPLETED",
    description: "Forex trading system for an Australian quant firm — ETL pipeline with 100+ technical indicators, Temporal Fusion Transformer with attention mechanisms achieving 63% out-of-sample accuracy, and live cTrader API integration with ATR-based risk management.",
    tagline: "End-to-end forex trading system: ETL → TFT model → live cTrader execution with ATR risk management.",
    overview: `A production-grade algorithmic trading system built for an Australian quant firm. The pipeline ingests raw OHLCV tick data, applies an ETL process to derive 100+ technical indicators (RSI, MACD, Bollinger Bands, ATR variants, and custom momentum signals), and feeds a Temporal Fusion Transformer — a state-of-the-art attention-based time series model — trained on multi-year historical data.\n\nThe model achieved 63% out-of-sample directional accuracy on EUR/USD 1H candles, significantly above the 50% baseline. The live trading layer connects to cTrader's OpenAPI, translates model predictions into executable orders, and applies ATR-based position sizing with hard stop-loss and take-profit levels for risk management. The system runs on a dedicated VPS with monitoring and alerting for drawdown thresholds.`,
    scope: [
      { value: "100+", label: "technical indicators" },
      { value: "63%", label: "out-of-sample accuracy" },
      { value: "TFT", label: "model architecture" },
      { value: "ATR", label: "risk management" },
      { value: "Live", label: "cTrader API integration" },
      { value: "VPS", label: "deployment target" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
      { name: "TensorFlow", icon: "tensorflow", role: "TFT model training", color: "FF6F00" },
      { name: "Pandas", icon: "pandas", role: "ETL & feature engineering", color: "150458" },
      { name: "NumPy", icon: "numpy", role: "Numerical computation", color: "013243" },
    ],
    github: null,
    live: null,
    timestamp: "2024.01"
  },
  {
    id: "LOG-02",
    slug: "ai-social-voice-agents",
    title: "AI Social Media & Voice Agent Suite",
    subtitle: "Autonomous Multi-Platform Agents",
    category: "Generative AI",
    status: "COMPLETED",
    description: "Autonomous agents managing Facebook, WhatsApp, LinkedIn, Instagram & TikTok interactions. Integrated RAG pipelines with LangChain + LLMs for context-aware responses and AI Voice Caller agents with STT/TTS for automated outbound communications.",
    tagline: "Five social platforms + voice calling — all automated with RAG-powered LLM agents.",
    overview: `A suite of autonomous AI agents built for a US-based client, covering the full spectrum of social media communication and outbound voice calling. Each platform agent (Facebook, WhatsApp, LinkedIn, Instagram, TikTok) monitors inbound messages and comments, retrieves relevant context from a RAG knowledge base via LangChain, and generates contextually appropriate responses using fine-tuned LLM prompts.\n\nThe Voice Caller agent handles outbound call campaigns using STT (Speech-to-Text) for real-time transcription and TTS (Text-to-Speech) for natural-sounding responses. The system includes a conversation state machine to handle multi-turn dialogues and escalation paths to human agents.`,
    scope: [
      { value: "5", label: "social platforms" },
      { value: "RAG", label: "retrieval architecture" },
      { value: "STT/TTS", label: "voice pipeline" },
      { value: "LangChain", label: "agent framework" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
      { name: "LangChain", icon: "langchain", role: "Agent & RAG framework", color: "1C3C3C" },
      { name: "OpenAI", icon: "openai", role: "LLM + TTS/STT", color: "412991" },
      { name: "FastAPI", icon: "fastapi", role: "Webhook endpoints", color: "009688" },
    ],
    github: "https://github.com/haseebdoesdev/TiktokSocialAI",
    live: null,
    timestamp: "2024.06"
  },
  {
    id: "LOG-03",
    slug: "lead-handling-automation",
    title: "Automation Build & Lead Handling",
    subtitle: "Lead Generation Pipeline",
    category: "Full Stack AI",
    status: "COMPLETED",
    description: "End-to-end lead generation and handling automation system. Scrapes, processes, and manages leads with intelligent routing and automated follow-ups for US-based clients.",
    tagline: "Scrape → enrich → route → follow-up. A complete automated lead pipeline.",
    overview: `A full pipeline for automated lead generation and CRM management. Web scrapers extract target prospect data from multiple sources, an enrichment layer appends contact information and company details, and a routing engine assigns leads to appropriate outreach sequences based on industry, company size, and intent signals. Automated follow-up sequences are triggered via email and messaging APIs.`,
    scope: [
      { value: "Multi-source", label: "data extraction" },
      { value: "Enrichment", label: "contact data layer" },
      { value: "Automated", label: "follow-up sequences" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
      { name: "Selenium", icon: "selenium", role: "Web scraping", color: "43B02A" },
      { name: "PostgreSQL", icon: "postgresql", role: "Lead storage", color: "336791" },
    ],
    github: "https://github.com/haseebdoesdev/automation_build_lead_handling",
    live: null,
    timestamp: "2024.08"
  },
  {
    id: "LOG-04",
    slug: "multi-agent-warehouse",
    title: "Multi-Agent Robotic Warehouse",
    subtitle: "AI Agent Coordination System",
    category: "AI / ML",
    status: "COMPLETED",
    description: "Multi-agent system simulating robotic warehouse operations with intelligent task allocation, path planning, and coordination between autonomous agents.",
    tagline: "Autonomous warehouse robots coordinating task allocation and collision-free path planning.",
    overview: `A simulation of a multi-agent robotic warehouse system where autonomous agents coordinate to pick, transport, and stow items. The system implements intelligent task allocation using a bidding protocol — each robot evaluates available tasks based on proximity and current load, then bids competitively. Path planning uses A* with dynamic obstacle avoidance to prevent collisions between concurrent agents.`,
    scope: [
      { value: "Multi-agent", label: "coordination protocol" },
      { value: "A*", label: "path planning algorithm" },
      { value: "Bidding", label: "task allocation method" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
    ],
    github: "https://github.com/haseebdoesdev/multi-agent-robotic-warehouse-system",
    live: null,
    timestamp: "2024.09"
  },
  {
    id: "LOG-05",
    slug: "goodreads-analysis",
    title: "Goodreads Review Analysis",
    subtitle: "NLP & Network Science",
    category: "NLP / Data Science",
    status: "COMPLETED",
    description: "Scraped 15,000+ reviews via GraphQL API. Applied VADER Sentiment Analysis and PageRank algorithm for influential reviewer detection and network science analysis.",
    tagline: "15,000 reviews → VADER sentiment + PageRank to surface the most influential Goodreads voices.",
    overview: `A data science project combining NLP and network science on Goodreads review data. 15,000+ reviews were scraped via the Goodreads GraphQL API, cleaned, and stored in a structured dataset. VADER Sentiment Analysis was applied to classify reviews as positive, negative, or neutral. A co-reviewer network was constructed — connecting reviewers who reviewed the same books — and the PageRank algorithm identified the most influential voices in the reading community.`,
    scope: [
      { value: "15,000+", label: "reviews scraped" },
      { value: "VADER", label: "sentiment analysis" },
      { value: "PageRank", label: "influence detection" },
      { value: "GraphQL", label: "data extraction API" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
      { name: "Pandas", icon: "pandas", role: "Data processing", color: "150458" },
      { name: "NetworkX", icon: "networkx", role: "Graph algorithms", color: "777777" },
    ],
    github: "https://github.com/haseebdoesdev/goodreads-comments-analysis",
    live: null,
    timestamp: "2024.03"
  },
  {
    id: "LOG-06",
    slug: "face-attendance",
    title: "Face Attendance App",
    subtitle: "Mobile ML Application",
    category: "Mobile + ML",
    status: "COMPLETED",
    description: "Flutter mobile app using Google ML Kit + FaceNet TFLite (512-dim embeddings) for real-time face recognition with cosine similarity matching and SQLite storage.",
    tagline: "Flutter + FaceNet TFLite: real-time face recognition for mobile attendance tracking.",
    overview: `A Flutter mobile application for automated attendance tracking using face recognition. Google ML Kit detects faces in real time from the device camera. FaceNet, a pre-trained deep learning model converted to TFLite format, generates 512-dimensional face embeddings. Attendance is marked by computing cosine similarity between the live embedding and stored embeddings in SQLite — a match above a configurable threshold records the attendance entry.`,
    scope: [
      { value: "512-dim", label: "FaceNet embeddings" },
      { value: "Cosine", label: "similarity matching" },
      { value: "TFLite", label: "on-device inference" },
      { value: "SQLite", label: "local storage" },
    ],
    techStack: [
      { name: "Flutter", icon: "flutter", role: "Mobile framework", color: "02569B" },
      { name: "Dart", icon: "dart", role: "Programming language", color: "0175C2" },
      { name: "TensorFlow Lite", icon: "tensorflow", role: "On-device ML", color: "FF6F00" },
    ],
    github: "https://github.com/haseebdoesdev/mobile_app_face_attendance_app_using_facenet",
    live: null,
    timestamp: "2024.05"
  },
  {
    id: "LOG-07",
    slug: "github-mcp-server",
    title: "GitHub MCP Server",
    subtitle: "Developer Tools",
    category: "Developer Tools",
    status: "COMPLETED",
    description: "A Model Context Protocol (MCP) server for GitHub repository management — enabling AI assistants to interact with GitHub repos programmatically.",
    tagline: "MCP server exposing GitHub repo management to AI assistants via structured tool calls.",
    overview: `An MCP (Model Context Protocol) server that bridges AI assistants like Claude with GitHub's API. The server exposes structured tools for repo operations — listing files, reading content, creating commits, managing branches, and opening pull requests — so AI models can interact with GitHub repositories during conversations without leaving the chat interface.`,
    scope: [
      { value: "MCP", label: "protocol implementation" },
      { value: "GitHub API", label: "backend integration" },
      { value: "Structured", label: "tool definitions" },
    ],
    techStack: [
      { name: "TypeScript", icon: "typescript", role: "Core language", color: "3178C6" },
      { name: "Node.js", icon: "nodedotjs", role: "Runtime", color: "339933" },
    ],
    github: "https://github.com/haseebdoesdev/github-mcp",
    live: null,
    timestamp: "2025.01"
  },
  {
    id: "LOG-08",
    slug: "ai-reading-aid",
    title: "AI Reading Aid",
    subtitle: "LLM-Powered Reading Assistant",
    category: "Generative AI",
    status: "COMPLETED",
    description: "AI-powered reading assistance tool that helps users comprehend and interact with text content using language models for summarization, Q&A, and analysis.",
    tagline: "Paste any text — get summaries, Q&A, and deep analysis from an LLM in seconds.",
    overview: `An AI reading assistant that helps users process and understand dense text. Users paste or upload content, and the tool offers multiple interaction modes: automatic summarization at configurable compression ratios, Q&A mode for asking questions about the text, and an analysis mode that extracts key arguments, identifies logical structure, and flags unsupported claims.`,
    scope: [
      { value: "3 modes", label: "summarise / Q&A / analyse" },
      { value: "LLM", label: "language model backend" },
    ],
    techStack: [
      { name: "TypeScript", icon: "typescript", role: "Core language", color: "3178C6" },
      { name: "React", icon: "react", role: "Frontend", color: "61DAFB" },
    ],
    github: "https://github.com/haseebdoesdev/ai-reading-aid",
    live: null,
    timestamp: "2024.07"
  },
  {
    id: "LOG-09",
    slug: "khaleej-job-pipeline",
    title: "Khaleej Job Pipeline",
    subtitle: "Data Engineering",
    category: "Data Engineering",
    status: "COMPLETED",
    description: "Automated job data pipeline scraping, processing, and structuring job listings from the Khaleej region for market research and analysis.",
    tagline: "Automated ETL pipeline ingesting Khaleej job listings for market intelligence.",
    overview: `An automated data pipeline that scrapes job listings from Khaleej-region job boards, normalises inconsistent field formats (title, location, salary, skills), deduplicates against the existing dataset, and loads clean records into a structured database for market research and analysis dashboards.`,
    scope: [
      { value: "ETL", label: "pipeline architecture" },
      { value: "Dedup", label: "record matching" },
      { value: "Structured", label: "output schema" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Pipeline language", color: "3776AB" },
      { name: "Selenium", icon: "selenium", role: "Web scraping", color: "43B02A" },
      { name: "PostgreSQL", icon: "postgresql", role: "Data storage", color: "336791" },
    ],
    github: "https://github.com/haseebdoesdev/khaleej-job-pipeline",
    live: null,
    timestamp: "2024.02"
  },
  {
    id: "LOG-10",
    slug: "ai-flashcard-generator",
    title: "AI Flashcard Generator",
    subtitle: "Study Tool",
    category: "Full Stack AI",
    status: "COMPLETED",
    description: "AI-powered flashcard generation tool that automatically creates study materials from input content using language models and spaced repetition.",
    tagline: "Input any study material — AI generates spaced-repetition flashcards instantly.",
    overview: `A study tool that generates flashcard decks from raw text, PDFs, or URLs using LLMs. The model identifies key concepts, definitions, and facts, then formats them as question-answer pairs optimised for spaced repetition. Decks are exportable to Anki-compatible format.`,
    scope: [
      { value: "LLM", label: "card generation" },
      { value: "Anki", label: "export format" },
      { value: "Spaced", label: "repetition optimised" },
    ],
    techStack: [
      { name: "TypeScript", icon: "typescript", role: "Core language", color: "3178C6" },
      { name: "React", icon: "react", role: "Frontend", color: "61DAFB" },
      { name: "Next.js", icon: "nextdotjs", role: "Framework", color: "000000" },
    ],
    github: "https://github.com/haseebdoesdev/flashcard-generator",
    live: null,
    timestamp: "2024.10"
  },
  {
    id: "LOG-11",
    slug: "facebook-publisher",
    title: "Facebook Automated Publisher",
    subtitle: "Content Automation",
    category: "Automation",
    status: "COMPLETED",
    description: "Automated content publishing system for Facebook pages — scheduling, posting, and managing content across multiple pages with intelligent timing.",
    tagline: "Schedule, generate, and auto-publish content across multiple Facebook pages.",
    overview: `An automation system for managing content publication across multiple Facebook pages. Content is scheduled via a calendar interface, auto-generated or queued from a content library, and published at optimal times based on audience engagement data from the Facebook Insights API. Supports image, video, and link posts.`,
    scope: [
      { value: "Multi-page", label: "Facebook management" },
      { value: "Scheduled", label: "content pipeline" },
      { value: "Insights", label: "API-driven timing" },
    ],
    techStack: [
      { name: "Python", icon: "python", role: "Core language", color: "3776AB" },
    ],
    github: "https://github.com/haseebdoesdev/facebook-automated-publisher-teknoraid",
    live: null,
    timestamp: "2024.04"
  },
  {
    id: "LOG-12",
    slug: "emotions-detector",
    title: "Emotions Detector",
    subtitle: "Computer Vision",
    category: "Computer Vision",
    status: "COMPLETED",
    description: "Real-time emotion detection system using computer vision to analyze facial expressions and classify emotional states from video feeds.",
    tagline: "Real-time facial emotion classification from video using TensorFlow.js — runs entirely in the browser.",
    overview: `A browser-based real-time emotion detection system. The TensorFlow.js model runs entirely client-side, analysing webcam frames to detect faces and classify emotional states (happy, sad, angry, surprised, fearful, disgusted, neutral) with confidence scores. No video data is transmitted to a server.`,
    scope: [
      { value: "7 classes", label: "emotion categories" },
      { value: "Client-side", label: "privacy-preserving" },
      { value: "Real-time", label: "webcam inference" },
    ],
    techStack: [
      { name: "JavaScript", icon: "javascript", role: "Core language", color: "F7DF1E" },
      { name: "TensorFlow.js", icon: "tensorflow", role: "Browser ML", color: "FF6F00" },
    ],
    github: "https://github.com/haseebdoesdev/emotions_detector",
    live: null,
    timestamp: "2024.04"
  }
];

export const getProject = (slug) => projects.find(p => p.slug === slug);
