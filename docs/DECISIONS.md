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
- **Status:** Accepted
- **Decision:** When restyling Experience to the new theme, keep the existing full bullet-list content as-is and only repaint colors/borders/timeline. Company logo icons stay too.

**Options considered:**

| Option | Tradeoff |
| --- | --- |
| **Keep full bullet list, restyle visuals only** ✅ | Zero content loss — full detail (e.g. Spinny's 40% First Response Time reduction) stays visible on expand. Expanded cards look denser than the reference screenshot's minimal style, but that's a deliberate tradeoff. |
| Condensed summary + tags only | Matches the reference screenshot 1:1 and reads punchier, but throws away granular, hard-won achievement detail pulled from LinkedIn earlier in the project. |
| Hybrid: summary + tags first, bullets behind a second "show details" click | Gets both the clean first look and the full detail, but adds an extra interaction and more state to the component for marginal benefit. |

**Why chosen:** Detailed bullets serve hiring managers who click into Experience specifically to assess scope and seniority via concrete numbers. The punchy/condensed style is already covered by Hero and About. Detail retention won over pixel-matching the reference's card density.

---
