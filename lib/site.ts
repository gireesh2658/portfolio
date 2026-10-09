/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Pandiri Gireesh",
  jobTitle: "Computer Science Student & Software Developer",
  email: "gireesh2658@gmail.com",
  location: "SRM AP University, India",
  /* exact profile URLs — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/gireesh-pandiri-340ba833a",
    "https://github.com/gireesh2658",
    "https://leetcode.com/u/gireesh2658/",
  ],
};
