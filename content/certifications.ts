/* Technical Highlights — repurposed from certifications.
 *
 * ⚠ SOURCING: every entry comes from Gireesh's verified resume.
 * Only the MongoDB Associate Developer cert is confirmed as a formal
 * certification. The other entries are verified achievements. */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "MongoDB",
    title: "MongoDB Associate Developer Certificate",
    year: "2026",
    credentialId: null,
    verified: true,
    skills: [
      "MongoDB CRUD operations & aggregation",
      "Schema design & data modeling",
      "Indexing & performance optimization",
    ],
    metric: { value: "Certified", label: "MongoDB Associate Developer" },
  },
  {
    no: "2.2",
    issuer: "SmartBridge",
    title: "AI/ML Internship — Rising Waters Flood Prediction",
    year: "2026",
    credentialId: null,
    verified: true,
    skills: [
      "Machine learning classification pipelines",
      "scikit-learn model training & evaluation",
      "Flask web application development",
    ],
    metric: { value: "AI/ML", label: "Structured internship track" },
  },
  {
    no: "2.3",
    issuer: "LeetCode",
    title: "Algorithm Problem Solving — 190+ Problems",
    year: null,
    credentialId: null,
    credentialUrl: "https://leetcode.com/u/gireesh2658/",
    verified: true,
    skills: [
      "Arrays, strings, linked lists, trees",
      "Dynamic programming & graph algorithms",
      "Time & space complexity optimization",
    ],
    metric: { value: "190+", label: "Problems solved" },
  },
  {
    no: "2.4",
    issuer: "SRM AP University",
    title: "B.Tech CSE — Academic Excellence",
    year: "2024–2028",
    credentialId: null,
    verified: true,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
    ],
    metric: { value: "8.79", label: "GPA / 10" },
  },
];
