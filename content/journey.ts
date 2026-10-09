/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * Transformed from a career timeline into Gireesh's technical learning
 * journey. Every fact traces to his resume, GitHub repos, and verified
 * achievements. No fabricated dates or experiences.
 */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "foundations",
    year: "2022",
    title: "The starting point",
    place: "Andhra Pradesh, India",
    story:
      "Class 10th — 576/600. The first encounter with logic was in a classroom, but the curiosity that followed was about something different: how software actually works, and how people build the things we use every day.",
    bridge: "That curiosity turned into a decision: Computer Science.",
  },
  {
    id: "gateway",
    year: "2024",
    title: "Choosing the path",
    place: "SRM AP University · Andhra Pradesh",
    story:
      "Class 12th — 963/1000. Then B.Tech Computer Science & Engineering at SRM AP University. C, C++, data structures, algorithms, OOP, DBMS — the formal foundation. Not just learning to code, but learning to think about problems.",
    bridge: "The fundamentals were in place. Now it was time to build.",
  },
  {
    id: "fullstack",
    year: "2025",
    title: "Building real software",
    place: "SRM AP University",
    story:
      "UniMeet — a full-stack MERN platform for college networking with JWT authentication, role-based access control, and MongoDB aggregation pipelines. The first time code turned into a product someone could actually use.",
    bridge: "Shipping a full-stack app changed everything. The next question: what else could software solve?",
  },
  {
    id: "aiml",
    year: "2026",
    title: "Teaching machines",
    place: "SmartBridge Internship · SRM AP",
    story:
      "Rising Waters — an ML-powered flood prediction system built during the SmartBridge AI/ML internship. scikit-learn pipelines, feature engineering, model evaluation dashboards, and a Flask web interface. Machine learning stopped being theory and became a tool.",
    bridge: "Data, models, predictions — ML was not magic. It was engineering.",
  },
  {
    id: "nexus",
    year: "2026",
    title: "AI meets real-time",
    place: "SRM AP University",
    story:
      "Nexus — an AI-powered video conferencing platform with real-time focus detection, emotion analysis, live transcription, and post-meeting intelligence reports. WebRTC peer-to-peer connections, TypeScript, and AI processing on live streams. Built to compete with Zoom and Google Meet.",
    bridge: "190+ LeetCode problems, a MongoDB certification, and three serious projects later — the foundation is set.",
  },
  {
    id: "now",
    year: "NOW",
    title: "What comes next",
    place: "Looking ahead",
    story:
      "GPA of 8.79/10, MongoDB Associate Developer certified, actively building software that solves real problems. Looking for software engineering and AI/ML internship opportunities to keep growing.",
    bridge: "The best code is the code I haven't written yet.",
  },
];
