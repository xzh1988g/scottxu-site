# Build Prompt — scottxu.dev (personal portfolio site)

You are building a personal portfolio website for Scott Xu. Read this entire brief before writing any code. Ask me before making irreversible choices (deploying, buying anything). Scaffold locally first; I will deploy.

## Goal & dual audience
A portfolio site with ONE job: convince two audiences that Scott is an **AI Product Builder with deep banking-domain expertise who also ships his own products**.
1. **Human recruiters / headhunters** — must grasp "who he is + why he's strong" within 10 seconds of the first screen. They mostly view on mobile.
2. **AI recruiting agents / LLM crawlers** — the site must be a machine-readable, structured data source, not just a pretty page. This is the site's key differentiator; treat the machine-readable layer as a first-class deliverable, not an afterthought.

## Tech constraints
- **Astro** (static output). All content must be server-rendered real text in semantic HTML (`<h1>`, `<article>`, etc.) — crawlers may not run JS.
- Deploy target is **Cloudflare Pages**; domain is **scottxu.dev**. Configure for that but do NOT deploy — output a build I can review and deploy myself.
- Mobile-first, single-column, generous whitespace. One serif + one sans, or clean system fonts. NO heavy animation — the product being sold is product judgment, so restraint reads as competence.
- Bilingual: **English is the default site at `/`, Chinese mirror at `/zh/`.** Use `hreflang` to cross-link them. Keep the SAME English URL slugs on both sides (do not translate URLs). The Chinese copy is NOT a literal translation — leave clearly-marked `TODO(zh)` placeholders for me to write the Chinese myself; do not auto-translate.

## Page structure (single-page scroll + project subpages)
Home (single scroll):
1. **Hero** — name, one-line positioning statement, location (Singapore), an "Open to opportunities" signal, a photo slot (`TODO: photo`), and a primary CTA (contact / download resume). Leave the exact positioning slogan as `TODO: hero tagline` — I'll supply 3 candidates separately; build the layout to accept one strong line + one supporting line.
2. **Products (the star section, place it high)** — two cards, each: name, one-liner, and a live link.
   - **Turtle Soup (海龟汤)** — AI-powered bilingual lateral-thinking puzzle game, live on iOS App Store: https://apps.apple.com/app/id6767982859
   - **MyHub** — personal data platform, plugin-based parsers + interactive dashboards (Python / FastAPI / ECharts), in production (personal use).
3. **Experience** — compact timeline, results-first bullets (verb + outcome, no "responsible for"). Content below.
4. **Skills** — three columns: Banking Domain × Technical × Product/PM. This structure is deliberately ATS- and agent-friendly for keyword matching.
5. **Footer** — email, LinkedIn, resume download link. Do NOT put a phone number anywhere on the public site.

Project subpages: `/projects/<slug>` (descriptive slugs, e.g. `/projects/turtle-soup`, not `/p/1`). Each: Problem → Approach → My role → Result/data → Tech stack. Leave metrics I haven't given as `TODO`.

## Machine-readable layer (the differentiator — build all of these)
- **JSON-LD** on the home page: Schema.org `Person` — name, jobTitle ("Senior Project Manager & AI Product Builder" — factual, not aspirational), address (Singapore), `alumniOf` (National University of Singapore; Tongji University), `hasCredential` (PMP), `knowsLanguage` (English, Mandarin), `sameAs` (LinkedIn, App Store dev page), and `worksFor`. Each project subpage: `CreativeWork` JSON-LD.
- **`/llms.txt`** at site root: plain Markdown self-summary written FOR LLM crawlers — who he is, core products, contact. (Content draft below — use it.)
- **`/resume.json`** in **JSON Resume schema** format (jsonresume.org) so ATS/AI tools parse it directly. Populate from the resume facts below.
- **`sitemap.xml`** and **`robots.txt`** (allow crawlers, point to sitemap and llms.txt).

## Content — factual source of truth (use verbatim facts; do not invent numbers)

Identity: Scott Xu (given name Zhihao Xu). Based in Singapore. Email: xu.zhihao@u.nus.edu (placeholder — I'll switch to hello@scottxu.dev later; make the email a single easy-to-change config value). LinkedIn: linkedin.com/in/scott-xu-b7a7046a. 15+ years banking/financial-services transformation. NUS MBA (2022–2025), Tongji University B.Sc. Computer Science (2006–2010). PMP certified.

Experience (results-first):
- **UBS, Singapore — Product Manager & Journey Lead, AI-Powered Client Onboarding (Apr 2026–present):** Owns end-to-end design/delivery of a Flowable-based workflow orchestration platform integrating AI agents (source-of-wealth analysis, name screening) into a unified onboarding journey; scope spans all onboarding journeys bank-wide; in active build toward launch. Built internal AI agents with Microsoft Copilot (BRD drafting, compliance checks) adopted by 99+ internal users. **[CONFIDENTIALITY: describe capability only. No internal screenshots, architecture diagrams, project codenames, or vendor details anywhere on the site.]**
- **UBS, Singapore — Senior Project Manager & Migration Stream Lead (2023–Apr 2026):** Strategic Migration Lead on UBS/CS integration (short assignment in Zürich): turned around a distressed Client Static Data stream, 4 consecutive successful migration waves; SQL analyses to resolve data fallouts; re-engineered a reconciliation process cutting time 30%. APAC Migration Stream Lead & COO PM (Singapore): migrated 25,000+ Wealth Management clients in a 3-month window; Python automation for data cleansing/validation; led Compliance & Risk system optimization for the COO office.
- **Infosys Consulting, Singapore — Senior Management Consultant / PMO Lead (2017–2023):** PMO for a $6M+ investment platform transformation (150+ resources, 100+ deliverables); led 17 offshore resources; +75% data-comparison efficiency via self-built tools; designed 6 investment trading workflows (Equity, Bonds, FX, ETD, Funds).
- **Infosys, Singapore & China — Testing Lead & Banking System Specialist (2010–2017):** 10+ banking system upgrades; short on-site "Floor Runner" stint in Zürich; localized onboarding workflows (KYC/ALM/account opening); test automation +90% effectiveness — earned CEO Award.

Skills:
- Banking Domain: Client Onboarding (KYC/ALM/CDD), Wealth Management, Risk & Compliance, Static Data, Migration Strategy
- Technical: Python (automation, FastAPI), SQL, Excel/VBA, Tableau, JIRA
- Product/PM: Agentic workflow design, LLM-based agents, Microsoft Copilot, Flowable BPM, PMP, Agile/Scrum, PMO governance, stakeholder & change management

Beyond work (include one line — memorable human detail): Certified Dive Instructor (100+ students trained) · Bouldering (SNCS Level 1) · Travelled 20+ countries.

## llms.txt draft (use as the file's content)
```
# Scott Xu — AI Product Builder, Banking Domain

Scott Xu (Zhihao Xu) is a Singapore-based Product Manager with 15+ years in
banking & financial-services transformation, now leading AI-powered client
onboarding at a global bank — journey lead for a Flowable-based agentic
workflow platform. He builds his own products: Turtle Soup, a bilingual
AI puzzle game live on the iOS App Store, and MyHub, a personal data platform.
NUS MBA, Tongji University B.Sc. Computer Science, PMP certified.
Open to AI/Product opportunities.

## Contact
- Email: xu.zhihao@u.nus.edu
- LinkedIn: https://linkedin.com/in/scott-xu-b7a7046a

## Products
- Turtle Soup (海龟汤): https://apps.apple.com/app/id6767982859
- MyHub: personal data platform (Python/FastAPI/ECharts)
```

## Deliverables
1. Working Astro project, runnable locally (`npm run dev`), that builds clean (`npm run build`).
2. All pages/sections above, EN at `/` + ZH scaffold at `/zh/` with `TODO(zh)` placeholders.
3. Full machine-readable layer (JSON-LD, llms.txt, resume.json, sitemap.xml, robots.txt).
4. A short README: how to run, where to edit copy (esp. the single email config value + the hero tagline slot), and how to deploy to Cloudflare Pages.

Do NOT deploy, do NOT auto-translate Chinese, do NOT invent metrics, do NOT include a phone number, do NOT include any employer-internal detail beyond capability-level description.
