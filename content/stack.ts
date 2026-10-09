/* Technical Stack — tools shown in the spiral orbit.
   Grouped by discipline, matching skills from Gireesh's verified resume.
   `mono` monograms keep the visual set uniform when no logo file exists. */

export type Tool = {
  name: string;
  group: "Code" | "Web" | "AI" | "Tools";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Programming Languages — */
  { name: "Python",     group: "Code",  mono: "Py", color: "#3776AB" },
  { name: "C++",        group: "Code",  mono: "C+", color: "#00599C" },
  { name: "C",          group: "Code",  mono: "C",  color: "#555555" },
  { name: "JavaScript", group: "Code",  mono: "JS", color: "#F7DF1E" },

  /* — Web / Backend — */
  { name: "React",      group: "Web",   mono: "Re", color: "#61DAFB" },
  { name: "Node.js",    group: "Web",   mono: "No", color: "#339933" },
  { name: "Express",    group: "Web",   mono: "Ex", color: "#141414" },
  { name: "Flask",      group: "Web",   mono: "Fl", color: "#141414" },
  { name: "HTML5",      group: "Web",   mono: "H5", color: "#E34F26" },
  { name: "CSS3",       group: "Web",   mono: "C3", color: "#1572B6" },
  { name: "Jinja2",     group: "Web",   mono: "J2", color: "#B41717" },

  /* — AI / ML / Data — */
  { name: "scikit-learn", group: "AI",  mono: "Sk", color: "#F7931E" },
  { name: "pandas",     group: "AI",    mono: "Pd", color: "#150458" },
  { name: "NumPy",      group: "AI",    mono: "Np", color: "#013243" },
  { name: "Matplotlib", group: "AI",    mono: "Mp", color: "#11557C" },

  /* — Databases & Tools — */
  { name: "MongoDB",    group: "Tools", mono: "MG", color: "#47A248" },
  { name: "MySQL",      group: "Tools", mono: "SQ", color: "#4479A1" },
  { name: "Git",        group: "Tools", mono: "Gi", color: "#F05032" },
  { name: "GitHub",     group: "Tools", mono: "GH", color: "#181717" },
  { name: "VS Code",    group: "Tools", mono: "VS", color: "#007ACC" },
  { name: "Postman",    group: "Tools", mono: "Pm", color: "#FF6C37" },
];
