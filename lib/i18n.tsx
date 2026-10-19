"use client";

/*
 * Centralised string store for every user-facing string on the site.
 *
 * Simplified to English-only. The `t()` / `useLang()` interface stays
 * the same so every component keeps working — just the French copy is gone.
 * The LanguageProvider remains a context provider, the toggle is removed
 * from the nav, and `lang` is permanently "en".
 */

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Home" },
  "nav.about": { en: "About", fr: "About" },
  "nav.work": { en: "Projects", fr: "Projects" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Open menu" },
  "nav.close": { en: "Close menu", fr: "Close menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Scroll to enter" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "B.Tech Computer Science · SRM AP University",
    fr: "B.Tech Computer Science · SRM AP University",
  },
  "hero.h1a": { en: "Building software", fr: "Building software" },
  "hero.h1aEm": { en: "that matters.", fr: "that matters." },
  "hero.h1b": { en: "Powered by", fr: "Powered by" },
  "hero.h1bEm": { en: "code.", fr: "code." },
  "hero.sub": {
    en: "Computer Science student focused on full-stack development, machine learning, and solving real-world problems through code.",
    fr: "Computer Science student focused on full-stack development, machine learning, and solving real-world problems through code.",
  },
  "hero.cta1": { en: "Explore Projects", fr: "Explore Projects" },
  "hero.cta2": { en: "View GitHub", fr: "View GitHub" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Scroll to Explore" },
  "stat.projects": { en: "Projects Built", fr: "Projects Built" },
  "stat.years": { en: "GPA / 10", fr: "GPA / 10" },
  "stat.countries": { en: "LeetCode Problems", fr: "LeetCode Problems" },
  "stat.satisfaction": { en: "Technologies", fr: "Technologies" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "About" },
  "about.h2a": { en: "Code is how I think —", fr: "Code is how I think —" },
  "about.h2b": { en: "building is how I", fr: "building is how I" },
  "about.h2Em": { en: "learn", fr: "learn" },
  "about.h2c": { en: ".", fr: "." },
  "about.m1": {
    en: "MongoDB Certified Associate Developer",
    fr: "MongoDB Certified Associate Developer",
  },
  "about.m2": {
    en: "GPA at SRM AP University",
    fr: "GPA at SRM AP University",
  },
  "about.m3": {
    en: "Problems solved on LeetCode",
    fr: "Problems solved on LeetCode",
  },
  "about.m4": {
    en: "SmartBridge AI/ML Internship — building real ML systems",
    fr: "SmartBridge AI/ML Internship — building real ML systems",
  },
  "about.edu": {
    en: "B.Tech Computer Science & Engineering · SRM AP University · 2024–2028 · Data Structures · Algorithms · Machine Learning · Software Engineering",
    fr: "B.Tech Computer Science & Engineering · SRM AP University · 2024–2028 · Data Structures · Algorithms · Machine Learning · Software Engineering",
  },
  "about.cta": { en: "Explore Projects", fr: "Explore Projects" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "My Journey" },
  "journey.enter": { en: "Scroll to travel", fr: "Scroll to travel" },
  "journey.chapter": { en: "Chapter", fr: "Chapter" },
  "journey.lede": {
    en: "From writing my first lines of code to building full-stack applications and ML systems — the chapters of becoming a software engineer.",
    fr: "From writing my first lines of code to building full-stack applications and ML systems — the chapters of becoming a software engineer.",
  },

  /* ---------------- technical stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Toolkit" },
  "stack.h2": { en: "My Technical", fr: "My Technical" },
  "stack.h2Em": { en: "Stack.", fr: "Stack." },
  "stack.lede": {
    en: "The languages, frameworks, and tools I use to build software — from algorithms and data structures to deployed applications.",
    fr: "The languages, frameworks, and tools I use to build software — from algorithms and data structures to deployed applications.",
  },
  "stack.count": { en: "tools", fr: "tools" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- projects (work) ---------------- */
  "work.eyebrow": { en: "Projects", fr: "Projects" },
  "work.h2a": { en: "Built to solve,", fr: "Built to solve," },
  "work.h2b": { en: "engineered to", fr: "engineered to" },
  "work.h2Em": { en: "ship.", fr: "ship." },
  "work.lede": {
    en: "Full-stack applications, ML systems, and software projects — each one a real problem, a real solution, and real code.",
    fr: "Full-stack applications, ML systems, and software projects — each one a real problem, a real solution, and real code.",
  },
  "work.open": { en: "View project", fr: "View project" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "SCROLL TO BROWSE" },

  /* ---------------- building & learning (experience) ---------------- */
  "exp.eyebrow": { en: "Building & Learning", fr: "Building & Learning" },
  "exp.h2": { en: "Where I sharpened my", fr: "Where I sharpened my" },
  "exp.h2Em": { en: "skills.", fr: "skills." },
  "exp.worked": { en: "What I built", fr: "What I built" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Technologies", fr: "Technologies" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "SCROLL · CLICK TO JUMP" },
  "type.Internship": { en: "Internship", fr: "Internship" },
  "type.Full-time": { en: "Project", fr: "Project" },
  "type.Hackathon": { en: "Achievement", fr: "Achievement" },
  "type.Freelance": { en: "Academic", fr: "Academic" },

  /* ---------------- technical highlights (credentials) ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "TECHNICAL", fr: "TECHNICAL" },
  "cert.introTitle2": { en: "HIGHLIGHTS", fr: "HIGHLIGHTS" },
  "cert.introBody": {
    en: "Certifications, achievements, and milestones from my journey in computer science and software engineering.",
    fr: "Certifications, achievements, and milestones from my journey in computer science and software engineering.",
  },
  "cert.introNote": {
    en: "Certifications · Competitive programming · Academic excellence.",
    fr: "Certifications · Competitive programming · Academic excellence.",
  },
  "cert.eyebrow": { en: "Highlights", fr: "Highlights" },
  "cert.h2": { en: "Highlights", fr: "Highlights" },
  "cert.lede": {
    en: "Certifications, competitive programming achievements, and academic milestones earned throughout my CS journey.",
    fr: "Certifications, competitive programming achievements, and academic milestones earned throughout my CS journey.",
  },
  "cert.certified": { en: "Certified", fr: "Certified" },
  "cert.brandRole": { en: "CS Student", fr: "CS Student" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Issuer — to confirm" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Verified" },
  "cert.onRequest": { en: "Credential on request", fr: "Credential on request" },
  "cert.issuedBy": { en: "Issued by", fr: "Issued by" },
  "cert.year": { en: "Year", fr: "Year" },
  "cert.id": { en: "Credential ID", fr: "Credential ID" },
  "cert.tbc": { en: "To confirm", fr: "To confirm" },
  "cert.skills": { en: "Skills", fr: "Skills" },
  "cert.verify": { en: "Verify credential ↗", fr: "Verify credential ↗" },
  "cert.foot": { en: "Highlights", fr: "Highlights" },

  /* ---------------- build lab (gallery) ---------------- */
  "gallery.eyebrow": { en: "Build Lab", fr: "Build Lab" },
  "gallery.h2a": { en: "The work behind", fr: "The work behind" },
  "gallery.h2Em": { en: "the code", fr: "the code" },
  "gallery.lede": {
    en: "Technologies, architectures, and the engineering decisions that shaped each project.",
    fr: "Technologies, architectures, and the engineering decisions that shaped each project.",
  },
  "gallery.alt": {
    en: "Technical project visualization",
    fr: "Technical project visualization",
  },
  "gallery.frames": { en: "Frames", fr: "Frames" },
  "gallery.hint": { en: "Scroll to explore the lab", fr: "Scroll to explore the lab" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let's Connect", fr: "Let's Connect" },
  "connect.h2a": { en: "Let's build what's", fr: "Let's build what's" },
  "connect.h2Em": { en: "next.", fr: "next." },
  "connect.lede": {
    en: "I'm looking for software engineering and AI/ML internship opportunities — if you're building something interesting, I'd like to hear about it.",
    fr: "I'm looking for software engineering and AI/ML internship opportunities — if you're building something interesting, I'd like to hear about it.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Start a Conversation" },
  "connect.credit": { en: "Designed & Developed by", fr: "Designed & Developed by" },
  "connect.top": { en: "Back to top ↑", fr: "Back to top ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to projects", fr: "← Back to projects" },
  "case.kicker": { en: "Project Deep-Dive", fr: "Project Deep-Dive" },
  "case.role": { en: "Role", fr: "Role" },
  "case.timeline": { en: "Timeline", fr: "Timeline" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live demo", fr: "Live demo" },
  "case.repo": { en: "Source code", fr: "Source code" },
  "case.cover": { en: "COVER", fr: "COVER" },
  "case.context": { en: "Context", fr: "Context" },
  "case.problem": { en: "The Problem", fr: "The Problem" },
  "case.process": { en: "Implementation", fr: "Implementation" },
  "case.decisions": { en: "Technical Decisions", fr: "Technical Decisions" },
  "case.outcome": { en: "Outcome", fr: "Outcome" },
  "case.reflection": { en: "What I learned", fr: "What I learned" },
  "case.all": { en: "← All projects", fr: "← All projects" },
  "case.next": { en: "Next project", fr: "Next project" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — NOT FOUND" },
  "nf.h1": { en: "This page went", fr: "This page went" },
  "nf.h1Em": { en: "off the grid.", fr: "off the grid." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Back to the portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang: Lang = "en";

  const setLang = () => {
    /* English-only — no-op */
  };

  const t = (k: string) => DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns the English original (FR removed). */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  return item[field] as unknown as string;
}
