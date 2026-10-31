# Decision Log

A running record of meaningful choices made while building this project, with
the options considered and the tradeoffs behind each. Read this instead of
scrolling chat history.

**How to read this:** newest decisions at the bottom. Entries are never edited
or deleted. If a decision is reversed, the old entry's **Status** points to the
newer entry that replaced it.

---

<!--
  TEMPLATE — copy this block for each new decision.

## D-001 — <short title>

- **Date:** YYYY-MM-DD
- **Phase / area:**
- **Status:** Accepted   (or: Superseded by D-0XX)
- **Decision:** <one line>

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **<chosen>** ✅ | ... |
| <alternative> | ... |

**Why chosen:** <the actual reason>

---
-->

## D-001 — Experience cards keep full bullet lists in the lime/black redesign

- **Date:** 2026-06-21
- **Phase / area:** Frontend redesign — `Experience.tsx`, visual theme overhaul (lime/black "terminal" aesthetic) adopted from a reference design screenshot
- **Status:** Superseded by D-005
- **Decision:** When restyling Experience to the new theme, keep the existing full bullet-list content as-is and only repaint colors/borders/timeline. Company logo icons stay too.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **Keep full bullet list, restyle visuals only** ✅ | Zero content loss — full detail (e.g. Spinny's 40% First Response Time reduction) stays visible on expand. Expanded cards look denser than the reference screenshot's minimal style, but that's a deliberate tradeoff. |
| Condensed summary + tags only | Matches the reference screenshot 1:1 and reads punchier, but throws away granular, hard-won achievement detail pulled from LinkedIn earlier in the project. |
| Hybrid: summary + tags first, bullets behind a second "show details" click | Gets both the clean first look and the full detail, but adds an extra interaction and more state to the component for marginal benefit. |

**Why chosen:** Detailed bullets serve hiring managers who click into Experience specifically to assess scope and seniority via concrete numbers. The punchy/condensed style is already covered by Hero and About. Detail retention won over pixel-matching the reference's card density.

---

## D-002 — Project highlight stats render in white, not full neon green

- **Date:** 2026-06-24
- **Phase / area:** Frontend polish — `Projects.tsx`, the big stat/value text inside each project's highlights list (e.g. "+20%", "Auto-logged", "Full-stack AI")
- **Status:** Superseded by D-003
- **Decision:** The large bold highlight values use `text-white` with `font-black`; the neon `#cbff3f` is now carried only by the `border-l-2` accent on each highlight row, not by the value text itself.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| Dim the existing neon (opacity-reduced green fill, smaller/lighter weight) | First attempt — softened the color but the fix was indirect: still a large block of saturated green repeated ~10 times down the page, just slightly less so. |
| **White value, green left-border accent only** ✅ | Impact now comes from size/weight/whitespace instead of raw saturated color; cuts the total green-on-black area on the page the most since 10 stacked instances drop from full green text to a thin border line. Smallest code diff. |
| Contained badge/pill (white text on a `bg-[#cbff3f]/10` chip) | Boxes the brightness into a small area, but adds a background/border/padding combo to every highlight row — more visual weight added back via the chip itself. |
| Gradient fade (white → green via `bg-clip-text`) | Reads as glossy rather than flat-neon, but text-fill gradients can look muddy at bold weight/smaller sizes and add a non-obvious CSS technique for a cosmetic fix. |
| KPI flip (tiny green uppercase label, large white number) | Same color move (white takes the value) but also reorders content hierarchy — the label becomes the first thing read, which wasn't part of the actual complaint. |

**Why chosen:** The complaint was specifically that the neon green stat text was "too shiny to the eyes" when repeated down the page. Moving the color to a thin border and letting the value itself be bold white addresses the actual eye-strain cause (a lot of saturated color) rather than just turning the dial down on it, while keeping the stat just as large/bold/eye-catching as before.

---

## D-003 — Reverted to neon-colored highlight stats, dialed back via size + opacity

- **Date:** 2026-06-24
- **Phase / area:** Frontend polish — `Projects.tsx`, same highlight value text as D-002
- **Status:** Accepted (supersedes D-002)
- **Decision:** After seeing the white-value version, reverted the highlight stat text to the neon `#cbff3f`, but at `text-2xl` (down from `text-3xl`) and `/80` opacity, instead of a flat full-strength fill.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| Keep D-002's white value + green border-only accent | Cuts eye-strain the most, but the brand neon green disappears from the one place on the page meant to draw the eye to the proof points — lost the "neon" identity the highlights were going for. |
| **Neon color kept, smaller + lower opacity** ✅ | Keeps the brand-green identity on the headline stats (still the first thing the eye lands on), while a smaller size and 80% opacity reduce both the area and intensity of fully-saturated color — directly requested by the user after comparing both looks. |

**Why chosen:** Direct user preference after comparing the white-text version against the original neon — wants the green back as the highlight color, just less stunning. Reusing both levers (size down, opacity down) rather than just one keeps the change noticeable without re-introducing the original eye-strain.

---

## D-005 — Experience cards condensed into "What I built / Impact" columns, replacing full bullet lists

- **Date:** 2026-06-24
- **Phase / area:** Frontend redesign — `Experience.tsx` expanded card body + `resume.ts` experience data shape (`bullets: string[]` replaced with `built[]` / `impact[]` / `facts[]`)
- **Status:** Accepted (supersedes D-001)
- **Decision:** Each expanded experience card now splits into two columns: a white-text "What I built" list (short bold title + one-line description, green left-border accent) and a neon "Impact" column (boxed stat cards reusing the Projects highlight number style, plus optional fact rows). The original long-form paragraph bullets are gone from the UI (data is rewritten, not just re-styled).

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| Keep D-001's full verbose bullets | Preserves maximum detail, but buries the actual quantified impact (30%, 40%, etc.) inside dense paragraphs — a recruiter skimming has to read full sentences to find the numbers that matter most. |
| **Condensed built/impact columns** ✅ | Surfaces the same real numbers already in the original bullets (no invented stats) as standalone headline figures, and condenses the rest into short titles + one-liners — scans faster while keeping every fact traceable to the original bullet it came from. |

**Why chosen:** Direct user request, shown via a reference design, specifically because it "shows impact clearly." This explicitly reverses D-001's earlier reasoning (detail retention over scannability) — the second look at the design prioritized fast-scanning impact over paragraph-level detail. Stat boxes reuse the existing Projects-highlight number treatment (color/weight) rather than the reference's arrow-icon style, so the "big number" visual language stays consistent across Projects and Experience instead of introducing a second pattern.

---

## D-004 — Hero photo caption says "open to remote · hybrid", not "remote · hybrid"

- **Date:** 2026-06-24
- **Phase / area:** Frontend copy — `Hero.tsx`, the location/work-mode caption overlaid on the profile photo
- **Status:** Superseded by D-008
- **Decision:** Changed the photo caption from `remote · hybrid` to `open to remote · hybrid`.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| Leave as `remote · hybrid` | Reads next to a city (`Gurugram, IN`) the same way a "current work mode" badge would on a profile card, implying he's currently working remote/hybrid rather than open to it — misrepresents his actual current arrangement. |
| **Prefix with "open to"** ✅ | One extra word removes the ambiguity entirely and matches the phrasing already used in `About.tsx` ("Open to remote & hybrid roles"), so the claim is consistent across the page. |

**Why chosen:** The caption is meant to signal openness to remote/hybrid roles for future opportunities, not describe his present employment mode. Matching the unambiguous wording already established in About.tsx was a one-line fix with no layout impact.

---

## D-006 — Profile view tracking via Vercel Web Analytics (private dashboard, no on-page counter)

- **Date:** 2026-07-05
- **Phase / area:** Analytics — `@vercel/analytics` package + `<Analytics />` in `src/app/layout.tsx`
- **Status:** Accepted
- **Decision:** Track page/profile views with Vercel Web Analytics: install `@vercel/analytics` and render `<Analytics />` in the root layout. Data is viewed privately in the Vercel dashboard; no view count is displayed on the page.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **Vercel Web Analytics** ✅ | Two-line, first-party integration for a site already on Vercel. Cookieless / GDPR-friendly (no consent banner needed), free on the Hobby tier. Gives page views, unique visitors, top pages, referrers, devices. Private-only — cannot render a live count on the page without extra work. |
| Custom counter: Route Handler + Upstash Redis KV | Full control and can display a live "X views" badge, but requires a persistent store, an increment API, bot/refresh de-duping, and more moving parts — overkill when the user only wants private analytics. |
| Third-party analytics (Plausible / Umami / GoatCounter) | Similar cookieless analytics with a richer dashboard and portability off Vercel, but adds an external account/script and (for hosted Plausible) a cost, with no advantage here since the site is already on Vercel. |
| Google Analytics (GA4) | Free and ubiquitous, but heavier script, sets cookies (needs a consent banner in many regions), and far more than a portfolio view count needs. |

**Why chosen:** User confirmed the site is on Vercel and wants private analytics only (no public counter). Vercel Web Analytics is the lowest-friction option that satisfies exactly that — native to the existing host, no cookie-consent overhead, and no persistent-store infrastructure to build and maintain. Requires one manual step: enabling Web Analytics in the Vercel project dashboard.

---

## D-007 — Repositioned portfolio as "AI Engineer"; resume is the source of truth for Spinny, but non-resume items stay

- **Date:** 2026-10-31
- **Phase / area:** Content refresh — `src/data/resume.ts` (personal, about, Spinny experience, projects, skills), `Hero.tsx`, `About.tsx`, `Marquee.tsx`, `Contact.tsx`, `layout.tsx` metadata
- **Status:** Superseded by D-009
- **Decision:** Retitle the site from "Software/Backend Engineer" to "AI Engineer" and rewrite the Spinny card entirely from the new resume (multi-agent platform, guardrailed ReAct agent, intent classification, LLMOps gateway, context engineering). Items the one-page resume omits for space (Growth Loops internship, InboxPilot, Graph Chatbot, college names) are kept. Added JevBenchmarking as the first project.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **Resume-driven rewrite of changed content, keep extra portfolio items** ✅ | Site and resume tell the same AI-engineer story with identical numbers, while the portfolio still shows the broader history it has room for. Old Spinny stats (-40% human intervention, -25% FRT) and SDUI/Denial Bot/AI CRM entries are dropped from the card because the resume replaced them. |
| Mirror the resume 1:1 (drop everything not on it) | Perfect consistency, but throws away real work (an internship, two projects) purely because of a one-page PDF constraint. |
| Merge old and new Spinny bullets | Keeps every past metric, but mixes superseded figures with the new ones and makes the card long and harder to scan — contradicts D-005's scannability goal. |

**Why chosen:** The user asked to update the portfolio to match the new AI Engineer resume. Numbers on the site should match the resume an interviewer has in hand, but a portfolio isn't page-limited, so content the resume merely omits is kept rather than deleted.

---

## D-008 — Work-mode copy says "open to all opportunities" instead of remote/hybrid only

- **Date:** 2026-10-31
- **Phase / area:** Frontend copy — `Hero.tsx` photo caption, `About.tsx` location card
- **Status:** Accepted (supersedes D-004)
- **Decision:** Hero photo caption changed from `open to remote · hybrid` to `open to all opportunities`; About location card changed from "Open to remote & hybrid roles" to "Open to on-site, hybrid & remote roles".

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| Keep `open to remote · hybrid` | Implicitly rules out on-site roles, which no longer matches what the user is looking for. |
| `open to on-site · hybrid · remote` in the caption | Explicit, but long for the narrow caption bar and reads like a checklist. |
| **`open to all opportunities` (caption) + explicit list in About** ✅ | Short enough for the caption, and the About card still spells out the three work modes for anyone who wants specifics. |

**Why chosen:** The user wants to signal openness to every opportunity, not just remote/hybrid. A short catch-all fits the caption space; keeping the explicit list in About retains D-004's goal of unambiguous wording.

---

## D-009 — One portfolio positioned as "Backend + AI Engineer" to serve both resumes

- **Date:** 2026-10-31
- **Phase / area:** Positioning — `resume.ts` (personal, about), `Hero.tsx`, `About.tsx`, `Marquee.tsx`, `Contact.tsx`, `layout.tsx` metadata
- **Status:** Accepted (supersedes D-007's "AI Engineer"-only title; D-007's resume-driven content rules still apply)
- **Decision:** The user now keeps two resumes (Backend Engineer and AI Engineer). The portfolio stays a single page titled "Backend + AI Engineer" that shows both the backend and AI work, matching the LinkedIn headline. Backend-specific content will be merged in from the Backend resume.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **One combined "Backend + AI" site** ✅ | One URL that both resumes link to, matches LinkedIn, one place to maintain. Less tailored: each audience also sees the other track's work. |
| Two tailored variants (e.g. `/ai` and `/backend`) | Each resume links to a version that matches it exactly, but every content update has to be made twice, the data model and routing get more complex, and a recruiter comparing the two could see them as inconsistent. |
| Keep "AI Engineer" only (D-007) | No extra work, but backend recruiters land on a page that says "AI Engineer", which contradicts the Backend resume they're holding. |

**Why chosen:** User picked the combined option. The real work overlaps (agents run on backend services they own), so one "Backend + AI" story is accurate for both audiences without doubling maintenance.

---
