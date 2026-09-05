---
package: addy
path: external/frontend-ui-engineering.md
type: doc
bytes: 26596
unit: inv-addy-21
aliases: []
memo_inputs:
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/frontend-ui-engineering.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated." — external/frontend-ui-engineering.md:5

## Design intent — required
This external documentation page serves as the public web catalog entry and discoverability landing page for the `frontend-ui-engineering` skill on `skills.addy.ie`. It establishes the skill's positioning within the Addy agent-skills ecosystem as a Build-phase engineering skill (`addy:Build`), detailing its primary purpose of creating production-grade, accessible, and responsive user interfaces that avoid generic AI aesthetics. It articulates trigger conditions ("Building or modifying user-facing interfaces"), provides copyable CLI installation commands via the open Vercel skills CLI (`npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`), summarizes the standard 6-part anatomy of agent skills, links to the canonical `SKILL.md` source in the repository, and provides cross-navigation to related Build-phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this page, developers exploring the agent-skills catalog on the web would lack a discoverable landing page, quick installation entry points, and high-level architectural framing for frontend engineering practices.

## Phase — required
addy:Build

## Inputs — required
- Triggering condition: "Building or modifying user-facing interfaces." — external/frontend-ui-engineering.md:5
- Upstream source link: "https://github.com/addyosmani/agent-skills/blob/main/skills/frontend-ui-engineering/SKILL.md" — external/frontend-ui-engineering.md:10
- Open installation CLI: "skills CLI" — external/frontend-ui-engineering.md:6

## Outputs — required
- Isolated skill installation command: "npx skills add addyosmani/agent-skills --skill frontend-ui-engineering" — external/frontend-ui-engineering.md:8
- Full catalog installation command: "npx skills add addyosmani/agent-skills" — external/frontend-ui-engineering.md:8
- No files produced on disk (none)

## Invokes — required
- skill frontend-ui-engineering — external/frontend-ui-engineering.md:10
- command /build — external/frontend-ui-engineering.md:12
- skill incremental-implementation — external/frontend-ui-engineering.md:12
- skill test-driven-development — external/frontend-ui-engineering.md:12
- skill context-engineering — external/frontend-ui-engineering.md:12
- command /test — external/frontend-ui-engineering.md:12
- doc CONTRIBUTING.md — external/frontend-ui-engineering.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `frontend-ui-engineering` — external/frontend-ui-engineering.md:5 — defined here
- `Build phase` — external/frontend-ui-engineering.md:5 — used here
- `WCAG 2.1 AA` — external/frontend-ui-engineering.md:5 — used here
- `Component architecture` — external/frontend-ui-engineering.md:5 — used here
- `design systems` — external/frontend-ui-engineering.md:5 — used here
- `state management` — external/frontend-ui-engineering.md:5 — used here
- `responsive design` — external/frontend-ui-engineering.md:5 — used here
- `#frontend` — external/frontend-ui-engineering.md:5 — used here
- `#ui` — external/frontend-ui-engineering.md:5 — used here
- `#accessibility` — external/frontend-ui-engineering.md:5 — used here
- `skills CLI` — external/frontend-ui-engineering.md:6 — used here
- `Overview` — external/frontend-ui-engineering.md:10 — used here
- `When to Use` — external/frontend-ui-engineering.md:10 — used here
- `Process` — external/frontend-ui-engineering.md:10 — used here
- `Rationalizations` — external/frontend-ui-engineering.md:10 — used here
- `Red Flags` — external/frontend-ui-engineering.md:10 — used here
- `Verification` — external/frontend-ui-engineering.md:10 — used here
- `SKILL.md` — external/frontend-ui-engineering.md:10 — used here
- `vertical slices` — external/frontend-ui-engineering.md:12 — used here
- `/build` — external/frontend-ui-engineering.md:12 — used here
- `incremental-implementation` — external/frontend-ui-engineering.md:12 — used here
- `test-driven-development` — external/frontend-ui-engineering.md:12 — used here
- `context-engineering` — external/frontend-ui-engineering.md:12 — used here
- `/test` — external/frontend-ui-engineering.md:12 — used here
- `Red-Green-Refactor` — external/frontend-ui-engineering.md:12 — used here
- `test pyramid` — external/frontend-ui-engineering.md:12 — used here
- `DAMP over DRY` — external/frontend-ui-engineering.md:12 — used here
- `Beyoncé Rule` — external/frontend-ui-engineering.md:12 — used here
- `rules files` — external/frontend-ui-engineering.md:12 — used here
- `context packing` — external/frontend-ui-engineering.md:12 — used here
- `MCP` — external/frontend-ui-engineering.md:12 — used here
- `Loop engineering` — external/frontend-ui-engineering.md:15 — used here
- `Evals framework` — external/frontend-ui-engineering.md:15 — used here

## Structure
- "frontend-ui-engineering" — external/frontend-ui-engineering.md:5
- "Install just this skill" — external/frontend-ui-engineering.md:5
- "How this skill is structured" — external/frontend-ui-engineering.md:8
- "Build phase" — external/frontend-ui-engineering.md:12
- "More in the Build phase" — external/frontend-ui-engineering.md:12
- "Product" — external/frontend-ui-engineering.md:15
- "Setup" — external/frontend-ui-engineering.md:15
- "Resources" — external/frontend-ui-engineering.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/frontend-ui-engineering.md:10 · Website anatomy panel displays a static 6-section template ("Process", "Rationalizations") whereas skills/frontend-ui-engineering/SKILL.md contains twelve sections including "Component Architecture", "Avoiding the \"AI Aesthetic\"", "Design Systems & Tokens", "Accessibility (WCAG 2.1 AA)", "State Management", "Responsive Design", and "Performance".
- doc-drift · external/frontend-ui-engineering.md:5 · Page abbreviates trigger condition to "Building or modifying user-facing interfaces." — external/frontend-ui-engineering.md:5, whereas skills/frontend-ui-engineering/SKILL.md:3 specifies six distinct triggering scenarios including creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, and avoiding AI aesthetic.
- orphan · external/frontend-ui-engineering.md:1 · External documentation snapshot from skills.addy.ie is not linked or referenced by any repository file in sources/addy/.

## Observations
- Declares canonical URL as `https://skills.addy.ie/skills/frontend-ui-engineering/` (external/frontend-ui-engineering.md:1).
- Provides dual CLI installation commands via Vercel skills CLI: isolated skill `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` (external/frontend-ui-engineering.md:8) and whole pack `npx skills add addyosmani/agent-skills` (external/frontend-ui-engineering.md:8).
- Categorizes `frontend-ui-engineering` in the `Build phase` associated with command `/build`, and cross-links related Build-phase skills `incremental-implementation` (/build), `test-driven-development` (/test), and `context-engineering` (external/frontend-ui-engineering.md:12).
- Includes global site navigation with links for Skills, Docs, Tutorials, Lifecycle, Loops, Teach, and Compare (external/frontend-ui-engineering.md:5).
- States project mission in footer: "Production-grade engineering skills for AI coding agents. Encode senior-engineer" / "workflows across the full lifecycle." (external/frontend-ui-engineering.md:13-14).
- The document is an Astro-built static HTML page snapshot with Netlify RUM tracking script (external/frontend-ui-engineering.md:19).

## Context cost
26596 bytes, ~1850 tokens (static HTML document snapshot).
