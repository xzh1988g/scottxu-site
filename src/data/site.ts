/**
 * Central site configuration — the single source of truth for contact details,
 * external links, and identity facts used across pages AND the machine-readable
 * layer (JSON-LD, resume.json, llms.txt).
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ TO CHANGE THE EMAIL: edit `email` below (one place). It flows to the      │
 * │ hero CTA, footer, JSON-LD, and resume.json automatically.                 │
 * │ When ready, switch "xu.zhihao@u.nus.edu" → "hello@scottxu.dev".           │
 * │ NOTE: public/llms.txt and public/resume.json are static files — if you    │
 * │ change the email, update those two files too (they are crawler copies).   │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  // Deployed origin — used for canonical URLs, hreflang, sitemap, JSON-LD.
  url: 'https://scottxu.dev',

  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Scott Xu',
  givenName: 'Zhihao Xu',
  jobTitle: 'Senior Project Manager & AI Product Builder',
  location: 'Singapore',

  // ── Contact (change the email here — one place) ─────────────────────────────
  email: 'xu.zhihao@u.nus.edu',

  // ── External links ──────────────────────────────────────────────────────────
  linkedin: 'https://linkedin.com/in/scott-xu-b7a7046a',
  appStoreDev: 'https://apps.apple.com/app/id6767982859',

  // ── Resume download (drop a PDF at public/resume.pdf) ───────────────────────
  resumePdf: '/resume.pdf', // TODO: add public/resume.pdf
  resumeJson: '/resume.json',

  // ── Photo (drop an image at public/scott.jpg) ───────────────────────────────
  photo: '/scott.jpg', // TODO: photo

  // ── Open-to-work signal ─────────────────────────────────────────────────────
  openToWork: true,
} as const;

export type Lang = 'en' | 'zh';
