---
package: addy
path: external/frontend-ui-engineering.md
type: external-doc
bytes: 26596
unit: inv-addy-21
deprecated: false
aliases: []
memo_inputs:
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/frontend-ui-engineering.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated." — external/frontend-ui-engineering.md:5

## Design intent — required
Serves as the public-facing web documentation and catalog entry for the `frontend-ui-engineering` skill on `skills.addy.ie`. It introduces the skill to human developers and agent orchestrators, summarizing its focus on producing production-quality, accessible, and responsive user interfaces that avoid generic "AI-generated" aesthetics through component architecture, design system adherence, and WCAG 2.1 AA compliance. Without this page, catalog users would lack an accessible discovery entry point detailing triggering conditions, installation commands via the skills CLI, and contextual positioning within the Build phase of the lifecycle.

## Phase — required
addy:Build

## Inputs — required
Triggered by:
- "Building or modifying user-facing interfaces." — external/frontend-ui-engineering.md:5

Consumes skill metadata and content from the `agent-skills` repository for web rendering.

## Outputs — required
none

## Invokes — required
- skill skills/frontend-ui-engineering/SKILL.md — external/frontend-ui-engineering.md:10
- command /build — external/frontend-ui-engineering.md:12
- skill incremental-implementation — external/frontend-ui-engineering.md:12
- skill test-driven-development — external/frontend-ui-engineering.md:12
- skill context-engineering — external/frontend-ui-engineering.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `frontend-ui-engineering` — external/frontend-ui-engineering.md:1 — defined here
- `WCAG 2.1 AA` — external/frontend-ui-engineering.md:5 — used here
- `Component architecture` — external/frontend-ui-engineering.md:5 — used here
- `design systems` — external/frontend-ui-engineering.md:5 — used here
- `state management` — external/frontend-ui-engineering.md:5 — used here
- `responsive design` — external/frontend-ui-engineering.md:5 — used here
- `Build phase` — external/frontend-ui-engineering.md:5 — used here
- `skills CLI` — external/frontend-ui-engineering.md:6 — used here
- `anatomy` — external/frontend-ui-engineering.md:9 — defined here
- `Overview` — external/frontend-ui-engineering.md:10 — defined here
- `When to Use` — external/frontend-ui-engineering.md:10 — defined here
- `Process` — external/frontend-ui-engineering.md:10 — defined here
- `Rationalizations` — external/frontend-ui-engineering.md:10 — defined here
- `Red Flags` — external/frontend-ui-engineering.md:10 — defined here
- `Verification` — external/frontend-ui-engineering.md:10 — defined here
- `SKILL.md` — external/frontend-ui-engineering.md:11 — used here
- `vertical slices` — external/frontend-ui-engineering.md:12 — used here
- `/build` — external/frontend-ui-engineering.md:12 — used here
- `incremental-implementation` — external/frontend-ui-engineering.md:12 — used here
- `/test` — external/frontend-ui-engineering.md:12 — used here
- `test-driven-development` — external/frontend-ui-engineering.md:12 — used here
- `context-engineering` — external/frontend-ui-engineering.md:12 — used here
- `Red-Green-Refactor` — external/frontend-ui-engineering.md:12 — used here
- `test pyramid` — external/frontend-ui-engineering.md:12 — used here
- `DAMP over DRY` — external/frontend-ui-engineering.md:12 — used here
- `Beyoncé Rule` — external/frontend-ui-engineering.md:12 — used here
- `rules files` — external/frontend-ui-engineering.md:12 — used here
- `context packing` — external/frontend-ui-engineering.md:12 — used here
- `MCP` — external/frontend-ui-engineering.md:12 — used here
- `coding agents` — external/frontend-ui-engineering.md:13 — used here
- `lifecycle` — external/frontend-ui-engineering.md:14 — used here
- `Product` — external/frontend-ui-engineering.md:15 — used here
- `Setup` — external/frontend-ui-engineering.md:15 — used here
- `Resources` — external/frontend-ui-engineering.md:15 — used here
- `Claude Code` — external/frontend-ui-engineering.md:15 — used here
- `Codex` — external/frontend-ui-engineering.md:15 — used here
- `Cursor` — external/frontend-ui-engineering.md:15 — used here
- `Antigravity` — external/frontend-ui-engineering.md:15 — used here
- `Evals framework` — external/frontend-ui-engineering.md:15 — used here
- `Loop engineering` — external/frontend-ui-engineering.md:15 — used here

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
- doc-drift — "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/frontend-ui-engineering.md:9 asserts a standardized six-section workflow, but skills/frontend-ui-engineering/SKILL.md contains no "Process" section, organizing its content into reference sections including "## Component Architecture" — skills/frontend-ui-engineering/SKILL.md:20 and using "## Common Rationalizations" — skills/frontend-ui-engineering/SKILL.md:299.
- doc-drift — "Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated." — external/frontend-ui-engineering.md:5 and "Building or modifying user-facing interfaces." — external/frontend-ui-engineering.md:5 condense the scope and omit triggering criteria documented in the repository description: "creating components, implementing layouts, meeting WCAG accessibility requirements, managing state" — skills/frontend-ui-engineering/SKILL.md:3.
- orphan — external/frontend-ui-engineering.md:1 — External documentation page is an orphan within the repository; no in-scope file in sources/addy/ links to or invokes this external documentation page.

## Observations
- Compiled HTML page produced by the Astro framework with scoped CSS classes (`data-astro-cid-*`) and Netlify RUM monitoring telemetry.
- Details CLI installation commands using the open `skills CLI` (`github.com/vercel-labs/skills`) for both standalone skill installation (`npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`) and full pack installation (`npx skills add addyosmani/agent-skills`).
- Contextualizes `frontend-ui-engineering` within the `addy:Build` phase alongside related skills `incremental-implementation`, `test-driven-development`, and `context-engineering`, linking them to the `/build` and `/test` commands.
- Emphasizes avoiding generic "AI-generated" aesthetics through component architecture, design system adherence, and WCAG 2.1 AA accessibility standards.

## Context cost
26596 bytes, 20 lines (~6600 tokens). Static HTML page with embedded styles and navigation chrome; not intended to be loaded into agent working context.
