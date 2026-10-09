/* Building & Learning — repurposed from professional experience.
 * These entries use the same stacked-deck UI but showcase Gireesh's
 * projects, internship, and academic achievements instead of job roles.
 *
 * ⚠ SOURCING: every entry traces to Gireesh's verified resume. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Nexus",
    role: "AI-Powered Video Conferencing Platform",
    type: "Full-time", /* renders as "Project" via i18n */
    location: "SRM AP University",
    period: "2026",
    summary:
      "Engineered a full-stack video conferencing platform with real-time focus detection and emotion analysis embedded in live streams, delivering meeting intelligence without third-party AI APIs.",
    achievements: [
      "Implemented scalable WebRTC peer-to-peer connections with fallback signaling logic for reliable low-latency sessions",
      "Built real-time AI processing pipeline for focus detection and emotion analysis on live video streams",
      "Designed live transcription and post-meeting reporting engine aggregating attention scores, sentiment trends, and engagement metrics",
    ],
    outcome: "Working AI-enhanced video conferencing platform with meeting intelligence reports",
    skills: ["TypeScript", "Node.js", "WebRTC", "AI/ML", "Real-time Systems"],
    color: "#0F172A",
    fg: "light",
  },
  {
    company: "SmartBridge AI/ML Internship",
    role: "Rising Waters — Flood Prediction System",
    type: "Internship",
    location: "India",
    period: "2026",
    summary:
      "Selected for a structured AI/ML track internship; built a flood prediction web application with real-world ML integration.",
    achievements: [
      "Developed a multi-page Flask web application predicting flood risk from 8-field weather input data",
      "Built a complete ML pipeline using scikit-learn: preprocessing, feature engineering, model training & evaluation",
      "Implemented model evaluation dashboard (accuracy, confusion matrix, feature importance) and prediction history log",
    ],
    outcome: "End-to-end ML-powered flood prediction application",
    skills: ["Python", "Flask", "scikit-learn", "pandas", "NumPy", "Jinja2"],
    color: "#0C4A6E",
    fg: "light",
  },
  {
    company: "UniMeet",
    role: "College Networking & Event Platform",
    type: "Full-time", /* renders as "Project" */
    location: "SRM AP University",
    period: "2025–2026",
    summary:
      "Engineered a full-stack MERN platform enabling students to build profiles, form academic communities, and manage campus events via a responsive, role-based dashboard.",
    achievements: [
      "Implemented JWT stateless authentication with multi-tier RBAC (student, organizer, admin), securing all API routes",
      "Designed modular Express.js REST API routes for event registration, notifications, and community membership",
      "Integrated MongoDB aggregation pipelines for efficient analytics on event attendance and community growth",
    ],
    outcome: "Full-stack MERN application with role-based access control",
    skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    color: "#1E3A5F",
    fg: "light",
  },
  {
    company: "LeetCode",
    role: "Algorithm & Problem Solving",
    type: "Hackathon", /* renders as "Achievement" */
    location: "Online",
    period: "Ongoing",
    summary:
      "Consistent problem-solving practice covering core data structures and algorithm paradigms.",
    achievements: [
      "Solved 190+ problems covering arrays, strings, linked lists, trees, dynamic programming, and graph algorithms",
      "Systematic approach to problem-solving: understanding constraints, identifying patterns, optimizing solutions",
    ],
    outcome: "190+ problems solved across core CS topics",
    skills: ["DSA", "Problem Solving", "C++", "Python", "Dynamic Programming"],
    color: "#FFA116",
    fg: "dark",
  },
  {
    company: "SRM AP University",
    role: "B.Tech Computer Science & Engineering",
    type: "Freelance", /* renders as "Academic" */
    location: "Andhra Pradesh, India",
    period: "2024–2028",
    summary:
      "Pursuing a B.Tech in Computer Science and Engineering with a strong academic record and focus on practical application of CS fundamentals.",
    achievements: [
      "Maintaining a GPA of 8.79/10 — academic excellence while shipping real software projects",
      "Core coursework: OOP, Data Structures & Algorithms, DBMS, Software Engineering",
      "Earned MongoDB Associate Developer certification alongside academic studies",
    ],
    outcome: "GPA 8.79/10 · MongoDB Certified · Production-ready project portfolio",
    skills: ["DSA", "OOP", "DBMS", "Software Engineering", "C++", "Python"],
    color: "#FFFFFF",
    fg: "dark",
  },
];
