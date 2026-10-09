/* Featured projects — single source of truth for the Projects section
   and the /work/[slug] case-study routes.

   ⚠ SOURCING: all project information comes from Gireesh's verified resume
   and his GitHub repos at github.com/gireesh2658. No metrics, stats, or
   claims are fabricated. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · COMPINTEL ─────────────── */
  {
    slug: "compintel",
    title: "CompIntel — Compensation Intelligence",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    year: "2026",
    oneLiner: "A level-first compensation intelligence platform that normalizes compensation records and enables structured comparison.",
    contribution: "Full-stack Engineering & Architecture",
    coverLabel: "compintel",
    cover: {
      bg: "#111111",
      ink: "light",
      mark: "COMPINTEL",
    },
    repo: "https://github.com/gireesh2658/CompIntel",
    study: {
      role: "Sole Developer",
      timeline: "2026",
      context: "Compensation data is heavily fragmented across companies, roles, levels, and locations. Engineers often struggle to find normalized, accurate compensation bands for specific levels within companies.",
      problem: "Salary information exists in isolated silos and varying formats. Comparing a 'Software Engineer II' at one company to an 'L4' at another requires manual normalization and calculation of base, equity, and bonus components.",
      process: [
        {
          title: "Level-First Architecture",
          body: "Designed a PostgreSQL schema around standardized engineering levels, mapping raw submissions to normalized internal levels to allow true apples-to-apples comparisons.",
        },
        {
          title: "Data Normalization",
          body: "Implemented Zod schemas at the API boundary to strictly validate incoming compensation data, ensuring base salary, stock grants, and bonuses are correctly parsed and total compensation is calculated server-side.",
        }
      ],
      decisions: [
        {
          title: "Next.js App Router + Prisma",
          why: "Chose the App Router for its server components and simplified API routes, paired with Prisma for type-safe database access and schema management.",
        },
        {
          title: "Duplicate Prevention",
          why: "Implemented logic to detect and prevent duplicate compensation submissions, ensuring data integrity across the platform.",
        }
      ],
      outcomes: [
        "Architected a scalable full-stack application supporting advanced filtering, sorting, and pagination.",
        "Delivered a robust API with strict server-side validation and automated Vitest coverage."
      ],
      reflection: "Building CompIntel solidified my understanding of how critical strict boundary validation and normalized database design are when handling user-generated data. The level-first approach proved that data structure dictates product capability.",
    }
  },
  /* ─────────────── 2 · NEXUS ─────────────── */
  {
    slug: "nexus",
    title: "Nexus — AI Video Conferencing",
    tags: ["TypeScript", "WebRTC", "AI/ML", "Real-time"],
    year: "2026",
    oneLiner:
      "An AI-powered video conferencing platform with real-time focus detection, emotion analysis, live transcription, and post-meeting intelligence reports.",
    contribution:
      "Full-stack engineering — WebRTC peer connections, AI pipeline integration, meeting intelligence dashboard.",
    coverLabel: "NEXUS AI VIDEO CONFERENCING",
    cover: { bg: "#0F172A", ink: "light", mark: "NEXUS" },
    repo: "https://github.com/gireesh2658/nexus",
    study: {
      role: "Full-Stack Developer",
      timeline: "2026",
      context:
        "Video conferencing tools like Zoom and Google Meet lack built-in intelligence about participant engagement. Meetings end without actionable data on who was focused, what emotions were expressed, or structured summaries of what was discussed.",
      problem:
        "How do you add real-time AI capabilities — focus detection, emotion analysis, live transcription — directly into a video conferencing stream without relying on third-party AI APIs, while maintaining low-latency peer-to-peer connections?",
      process: [
        {
          title: "WebRTC Architecture",
          body: "Implemented scalable WebRTC peer-to-peer connections with fallback signaling logic, ensuring low-latency video delivery and reliable session management under variable network conditions.",
        },
        {
          title: "AI Pipeline Integration",
          body: "Embedded real-time focus detection and emotion analysis directly into live video streams, processing frames on-device without external AI API dependencies.",
        },
        {
          title: "Meeting Intelligence Engine",
          body: "Designed a live transcription and post-meeting reporting engine that aggregates attention scores, sentiment trends, and engagement metrics into structured session summaries.",
        },
      ],
      decisions: [
        {
          title: "No third-party AI APIs",
          why: "Processing AI on-device reduces latency, avoids API costs, and keeps participant data private — critical for enterprise adoption.",
        },
        {
          title: "TypeScript end-to-end",
          why: "Type safety across the full stack (Node.js + client) catches integration bugs at compile time, especially important with complex real-time data flows.",
        },
        {
          title: "Fallback signaling",
          why: "Network conditions are unpredictable in real meetings. Fallback signaling ensures sessions stay connected even when direct peer-to-peer paths fail.",
        },
      ],
      outcomes: [
        "Working video conferencing platform with real-time AI analysis embedded in live streams",
        "Post-meeting intelligence reports with attention scores, sentiment trends, and engagement metrics",
        "Scalable WebRTC architecture with reliable session management",
      ],
      reflection:
        "Nexus taught me how to think about real-time systems at a deeper level — not just streaming video, but processing it intelligently in-flight. The biggest challenge was keeping AI inference fast enough that it didn't introduce noticeable latency into the video stream.",
    },
  },

  /* ─────────────── 2 · UNIMEET ─────────────── */
  {
    slug: "unimeet",
    title: "UniMeet — College Networking Platform",
    tags: ["React", "Node.js", "MongoDB", "JWT", "REST API"],
    year: "2025–2026",
    oneLiner:
      "A full-stack MERN platform enabling students to build profiles, form academic communities, and manage campus events via a responsive, role-based dashboard.",
    contribution:
      "End-to-end development — React frontend, Express API design, MongoDB data modeling, JWT authentication system.",
    coverLabel: "UNIMEET COLLEGE PLATFORM",
    cover: { bg: "#1E3A5F", ink: "light", mark: "UNIMEET" },
    repo: "https://github.com/gireesh2658/uni_meet",
    study: {
      role: "Full-Stack Developer",
      timeline: "2025–2026",
      context:
        "College students lack a unified platform for academic networking, community building, and campus event management. Existing solutions are fragmented — one tool for events, another for messaging, another for profiles — with no role-based access control.",
      problem:
        "Build a single platform where students can create profiles, join communities, register for events, and manage campus activities — with proper authentication and role-based permissions for students, organizers, and admins.",
      process: [
        {
          title: "Authentication System",
          body: "Implemented JWT stateless authentication with multi-tier RBAC (student, organizer, admin), securing all API routes with enforced permission boundaries.",
        },
        {
          title: "API Architecture",
          body: "Designed modular Express.js REST API routes for event registration, notifications, and community membership, following RESTful conventions for scalability.",
        },
        {
          title: "Data Layer",
          body: "Integrated MongoDB aggregation pipelines for efficient analytics — event attendance trends, community growth, and user engagement metrics.",
        },
      ],
      decisions: [
        {
          title: "JWT over session-based auth",
          why: "Stateless authentication scales better, works seamlessly with a React SPA frontend, and simplifies horizontal scaling of the backend.",
        },
        {
          title: "Multi-tier RBAC",
          why: "A college platform needs distinct permission levels — a student can register for events, an organizer can create them, an admin can manage everything. This hierarchy prevents privilege escalation.",
        },
        {
          title: "MongoDB aggregation for analytics",
          why: "Instead of pulling raw data and computing metrics client-side, aggregation pipelines push computation to the database — faster, less bandwidth, more scalable.",
        },
      ],
      outcomes: [
        "Full-stack MERN application with role-based dashboard",
        "Secure JWT authentication with multi-tier access control",
        "Modular REST API with MongoDB aggregation-powered analytics",
      ],
      reflection:
        "UniMeet was my first serious full-stack project. It taught me that building a feature is only half the work — the other half is designing an API that is secure, consistent, and maintainable. The RBAC system was the hardest part to get right, and the most valuable to learn.",
    },
  },

  /* ─────────────── 3 · RISING WATERS ─────────────── */
  {
    slug: "rising-waters",
    title: "Rising Waters — Flood Prediction",
    tags: ["Python", "scikit-learn", "Flask", "Machine Learning"],
    year: "2026",
    oneLiner:
      "An ML-powered web application that predicts flood risk from weather input data using a trained classification model, built during the SmartBridge AI/ML internship.",
    contribution:
      "Complete ML pipeline — data preprocessing, feature engineering, model training, evaluation dashboard, Flask web interface.",
    coverLabel: "RISING WATERS FLOOD PREDICTION",
    cover: { bg: "#0C4A6E", ink: "light", mark: "RISING\nWATERS" },
    repo: "https://github.com/gireesh2658/Rising-water",
    study: {
      role: "ML Engineer · SmartBridge AI/ML Internship",
      timeline: "2026",
      context:
        "Flood prediction is a critical problem in disaster preparedness. Traditional approaches rely on manual assessment of weather data, which is slow and inconsistent. Machine learning can automate risk classification from historical weather patterns.",
      problem:
        "Build a web application that accepts 8-field weather input data and predicts whether flooding is likely, using a trained ML classification model — complete with model evaluation metrics and prediction history.",
      process: [
        {
          title: "ML Pipeline",
          body: "Built a complete ML pipeline using scikit-learn — data preprocessing, feature engineering, model training and evaluation — achieving reliable flood vs. no-flood binary classification.",
        },
        {
          title: "Model Evaluation",
          body: "Implemented a model evaluation dashboard showing accuracy, confusion matrix, and feature importance — making the model's decision process transparent and auditable.",
        },
        {
          title: "Web Interface",
          body: "Developed a multi-page Flask web application with Jinja2 templates, user authentication, session management, and a prediction history log.",
        },
      ],
      decisions: [
        {
          title: "scikit-learn over deep learning",
          why: "For tabular weather data with 8 features, classical ML models (decision trees, random forests) perform well and are interpretable. Deep learning would be overkill and harder to explain.",
        },
        {
          title: "Feature importance visualization",
          why: "Showing which weather factors drive predictions builds trust in the model and helps domain experts validate the results.",
        },
        {
          title: "Flask with server-side rendering",
          why: "A multi-page Flask app with Jinja2 keeps the architecture simple, avoids client-side JS complexity, and serves predictions with minimal latency.",
        },
      ],
      outcomes: [
        "Working flood prediction web application with trained ML model",
        "Model evaluation dashboard with accuracy metrics and feature importance",
        "User authentication and prediction history tracking",
      ],
      reflection:
        "This project bridged the gap between learning ML from textbooks and applying it to a real-world problem. The most important lesson: a model is only as good as the problem framing and feature engineering that feeds it.",
      note: "Built during the SmartBridge AI/ML Internship.",
    },
  },

  /* ─────────────── 4 · AI REVENUE RECOVERY AGENT ─────────────── */
  {
    slug: "finance-recovery",
    title: "AI Revenue Recovery Agent",
    tags: ["TypeScript", "Next.js", "Prisma", "AI", "Node.js"],
    year: "2026",
    oneLiner:
      "An AI-assisted payment recovery workflow that orchestrates failed payments using deterministic policy controls and guarded recovery tools.",
    contribution:
      "Full-stack development — System architecture, AI integration with strict Zod validation, and policy engine implementation.",
    coverLabel: "AI REVENUE RECOVERY",
    cover: { bg: "#042f2e", ink: "light", mark: "RECOVERY" },
    repo: "https://github.com/gireesh2658/finance_recovery_system",
    study: {
      role: "Full-Stack Developer",
      timeline: "2026",
      context:
        "Failed payments occur for many reasons: insufficient funds, bank declines, expired cards, or network timeouts. Blindly retrying every failed payment is unsafe and risks high failure rates, gateway penalties, and bad customer experiences.",
      problem:
        "How to intelligently recover failed payments using AI without giving the LLM direct authority over financial state or database mutations.",
      process: [
        {
          title: "Deterministic Orchestration",
          body: "Designed a system that separates reasoning from execution. The LLM acts as an advisor to a strict, fail-closed state machine governed by an application-owned Standard Operating Procedure.",
        },
        {
          title: "Guarded Execution",
          body: "Implemented a Policy Engine that strictly checks whether the recommended AI action is allowed before a Guarded Tool executes and durably reserves the action in the database.",
        },
        {
          title: "Strict Output Validation",
          body: "Integrated Zod validation at the AI boundary to ensure the model returns strict JSON schemas. Any provider timeout or validation failure is handled deterministically.",
        },
      ],
      decisions: [
        {
          title: "No direct LLM financial authority",
          why: "To ensure strict financial safety, the AI reasoning layer is completely untrusted and constrained by a deterministic policy engine.",
        },
        {
          title: "Zod for schema enforcement",
          why: "Ensures that the LLM's structured JSON recommendations are fully typed and strictly match the expected parameters before any downstream processing.",
        },
        {
          title: "Prisma & Next.js",
          why: "Provided a robust, type-safe full-stack framework with an ORM layer for durable state management and auditing of the entire recovery lifecycle.",
        },
      ],
      outcomes: [
        "Architected an intelligent, context-aware payment orchestrator.",
        "Eliminated blind retry schedules by introducing guarded recovery tools.",
        "Achieved strict separation between untrusted AI reasoning and authoritative database mutations.",
      ],
      reflection:
        "Building the AI Revenue Recovery Agent taught me how to harness LLMs safely in high-stakes environments. The crucial takeaway was that AI should advise, but deterministic code must ultimately enforce policy and execute state changes.",
    },
  },
];
