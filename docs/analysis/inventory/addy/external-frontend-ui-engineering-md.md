---
package: addy
path: external/frontend-ui-engineering.md
type: external-doc
bytes: 26596
unit: inv-addy-16
aliases: []
memo_inputs:
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/frontend-ui-engineering.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated." — external/frontend-ui-engineering.md:1, 5

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/frontend-ui-engineering/` serves as the public web catalog entry, distribution point, and architectural overview for the `frontend-ui-engineering` skill in the `agent-skills` ecosystem. It presents web-accessible discovery metadata, package installation commands via the Vercel Labs `skills` CLI (`npx skills add ...`), a standardized 6-section skill anatomy template, lifecycle taxonomy positioning (`Build phase`, associated with command `/build`), and related skill discovery links (pointing to `incremental-implementation`, `test-driven-development`, and `context-engineering`). Without this document, developers and autonomous agents browsing the public web documentation would lack an accessible landing page outlining the frontend engineering standards (component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility), its installation entry points, and its structured relationship to implementation and testing within the development lifecycle.

## Phase — required
addy:Build

(Rendered as `Build` in breadcrumb at `external/frontend-ui-engineering.md:5`, and as `Build phase` in the phase chip and sidebar at `external/frontend-ui-engineering.md:5, 12`. Aligns with `CLAUDE.md:23`, `README.md:254, 362`, and `skills/using-agent-skills/SKILL.md:178`).

## Inputs — required
- User or agent intent to discover, evaluate, or install frontend UI engineering skills via web browser or CLI (`npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` or full pack) — external/frontend-ui-engineering.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/frontend-ui-engineering/SKILL.md` — external/frontend-ui-engineering.md:10
- Triggering conditions / Use-when context: "Building or modifying user-facing interfaces." — external/frontend-ui-engineering.md:5
- Static assets, stylesheets, Google Fonts (Geist, Geist Mono), Netlify RUM analytics script, and site navigation links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — external/frontend-ui-engineering.md:1, 5, 12, 15, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — external/frontend-ui-engineering.md:5, 8, 12, 15

## Outputs — required
- Public web page presentation of skill metadata, summary description, taxonomy tags (`#frontend`, `#ui`, `#accessibility`), and install commands — external/frontend-ui-engineering.md:1, 5, 8
- Installation commands for clipboard / shell execution: `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` and `npx skills add addyosmani/agent-skills` — external/frontend-ui-engineering.md:8
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/frontend-ui-engineering.md:10
- Lifecycle navigation routing and discovery links to related build skills (`incremental-implementation`, `test-driven-development`, `context-engineering`) and lifecycle documentation — external/frontend-ui-engineering.md:12
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — external/frontend-ui-engineering.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /build — external/frontend-ui-engineering.md:12
- command /test — external/frontend-ui-engineering.md:12
- skill incremental-implementation — external/frontend-ui-engineering.md:12
- skill test-driven-development — external/frontend-ui-engineering.md:12
- skill context-engineering — external/frontend-ui-engineering.md:12
- file skills/frontend-ui-engineering/SKILL.md — external/frontend-ui-engineering.md:10
- doc CONTRIBUTING.md — external/frontend-ui-engineering.md:15
- doc evals — external/frontend-ui-engineering.md:15
- doc lifecycle — external/frontend-ui-engineering.md:5
- doc tutorials — external/frontend-ui-engineering.md:5
- doc loops — external/frontend-ui-engineering.md:5
- doc teach — external/frontend-ui-engineering.md:5
- doc compare — external/frontend-ui-engineering.md:5
- script /.netlify/scripts/rum — external/frontend-ui-engineering.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/frontend-ui-engineering.md`) is a frozen snapshot of `https://skills.addy.ie/skills/frontend-ui-engineering/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `frontend-ui-engineering` — external/frontend-ui-engineering.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/frontend-ui-engineering.md:1, 5, 8, 10, 15 — used here
- `Component architecture` — external/frontend-ui-engineering.md:1, 5 — used here
- `design systems` — external/frontend-ui-engineering.md:1, 5 — used here
- `state management` — external/frontend-ui-engineering.md:1, 5 — used here
- `responsive design` — external/frontend-ui-engineering.md:1, 5 — used here
- `WCAG 2.1 AA accessibility` — external/frontend-ui-engineering.md:1, 5 — used here
- `production-quality` — external/frontend-ui-engineering.md:1, 5 — used here
- `AI-generated` — external/frontend-ui-engineering.md:1, 5 — used here
- `Skills` — external/frontend-ui-engineering.md:5 — used here
- `Build` — external/frontend-ui-engineering.md:5, 12 — defined here
- `Build phase` — external/frontend-ui-engineering.md:5, 12 — defined here
- `Use when` — external/frontend-ui-engineering.md:5 — defined here
- `#frontend` — external/frontend-ui-engineering.md:5 — defined here
- `#ui` — external/frontend-ui-engineering.md:5 — defined here
- `#accessibility` — external/frontend-ui-engineering.md:5 — defined here
- `skills CLI` — external/frontend-ui-engineering.md:6 — used here
- `This skill only` — external/frontend-ui-engineering.md:8 — defined here
- `All skills` — external/frontend-ui-engineering.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` — external/frontend-ui-engineering.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/frontend-ui-engineering.md:8, 15 — defined here
- `How this skill is structured` — external/frontend-ui-engineering.md:8 — defined here
- `anatomy` — external/frontend-ui-engineering.md:9, 10 — defined here
- `Overview` — external/frontend-ui-engineering.md:10 — defined here
- `When to Use` — external/frontend-ui-engineering.md:10 — defined here
- `Process` — external/frontend-ui-engineering.md:10 — defined here
- `Rationalizations` — external/frontend-ui-engineering.md:10 — defined here
- `Red Flags` — external/frontend-ui-engineering.md:10 — defined here
- `Verification` — external/frontend-ui-engineering.md:10 — defined here
- `SKILL.md` — external/frontend-ui-engineering.md:10, 11 — used here
- `Read the full SKILL.md` — external/frontend-ui-engineering.md:11 — used here
- `Command` — external/frontend-ui-engineering.md:8, 12 — defined here
- `/build` — external/frontend-ui-engineering.md:12 — used here
- `See the full lifecycle` — external/frontend-ui-engineering.md:12 — used here
- `More in the Build phase` — external/frontend-ui-engineering.md:12 — defined here
- `incremental-implementation` — external/frontend-ui-engineering.md:12 — used here
- `Thin vertical slices` — external/frontend-ui-engineering.md:12 — used here
- `Rollback-friendly changes` — external/frontend-ui-engineering.md:12 — used here
- `test-driven-development` — external/frontend-ui-engineering.md:12 — used here
- `/test` — external/frontend-ui-engineering.md:12 — used here
- `Red-Green-Refactor` — external/frontend-ui-engineering.md:12 — used here
- `test pyramid` — external/frontend-ui-engineering.md:12 — used here
- `DAMP over DRY` — external/frontend-ui-engineering.md:12 — used here
- `Beyoncé Rule` — external/frontend-ui-engineering.md:12 — used here
- `context-engineering` — external/frontend-ui-engineering.md:12 — used here
- `MCP` — external/frontend-ui-engineering.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/frontend-ui-engineering.md:13 — used here
- `full lifecycle` — external/frontend-ui-engineering.md:12, 14 — used here
- `Skills catalog` — external/frontend-ui-engineering.md:15 — used here
- `Tutorials` — external/frontend-ui-engineering.md:5, 15 — used here
- `The lifecycle` — external/frontend-ui-engineering.md:15 — used here
- `Loop engineering` — external/frontend-ui-engineering.md:15 — used here
- `Teach` — external/frontend-ui-engineering.md:5, 15 — used here
- `Teach &amp; share` — external/frontend-ui-engineering.md:15 — used here
- `How it compares` — external/frontend-ui-engineering.md:15 — used here
- `Getting started` — external/frontend-ui-engineering.md:15 — used here
- `Claude Code` — external/frontend-ui-engineering.md:15 — used here
- `Codex` — external/frontend-ui-engineering.md:15 — used here
- `Cursor` — external/frontend-ui-engineering.md:15 — used here
- `Antigravity` — external/frontend-ui-engineering.md:15 — used here
- `Contributing` — external/frontend-ui-engineering.md:15 — used here
- `Evals framework` — external/frontend-ui-engineering.md:15 — used here
- `addyosmani.com` — external/frontend-ui-engineering.md:15 — used here

## Structure
- `frontend-ui-engineering` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Build phase` (H3 — line 12)
- `More in the Build phase` (H2 — line 12)
  - `incremental-implementation` (H3 — line 12)
  - `test-driven-development` (H3 — line 12)
  - `context-engineering` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/frontend-ui-engineering.md:12 vs sources/addy/commands/build.toml:4, 33 · The external page sidebar pairs frontend-ui-engineering with Command /build, but commands/build.toml (along with .claude/commands/build.md:4 and .gemini/commands/build.toml:4) explicitly binds only incremental-implementation and test-driven-development to /build, and nowhere invokes or references frontend-ui-engineering.
- doc-drift · external/frontend-ui-engineering.md:10 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:20-294 · The external page asserts a standardized 6-section skill anatomy including "03 Process" (Step-by-step workflow) and "04 Rationalizations", but SKILL.md contains no section named Process (providing instead domain guidance sections: Component Architecture, State Management, Design System Adherence, Accessibility (WCAG 2.1 AA), Responsive Design, Loading and Transitions), and titles its rationalizations section Common Rationalizations (line 299) rather than Rationalizations.
- doc-drift · external/frontend-ui-engineering.md:5 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:3, 12-19 · The external page condenses "Use when" to a single generic clause ("Building or modifying user-facing interfaces."), omitting the 5 granular triggering conditions defined in SKILL.md:14-18 (building new UI components/pages, modifying existing interfaces, implementing responsive layouts, adding interactivity/state management, fixing visual/UX issues) as well as the broader trigger criteria in frontmatter description ("meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated").
- missing-path · external/frontend-ui-engineering.md:1-20 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:297 · SKILL.md:297 explicitly directs users to ../../references/accessibility-checklist.md for detailed accessibility requirements and testing tools, but this companion reference document is completely omitted and unlinked from the external documentation page.
- internal-contradiction · external/frontend-ui-engineering.md:9-11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately presents a primary CTA button stating "Read the full SKILL.md".
- orphan · external/frontend-ui-engineering.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/frontend-ui-engineering/) or its snapshot file.
- other · external/frontend-ui-engineering.md:1-20 · Heavy packaging overhead: 26,596 bytes of static compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,500 bytes (~6%) dedicated to skill-specific description and metadata.

## Observations
- **Design standard over procedural workflow**: Unlike execution-focused skills (such as `incremental-implementation` or `test-driven-development`), `frontend-ui-engineering` serves primarily as an architectural standard and visual quality bar ("output that looks production-quality, not AI-generated"), providing anti-patterns ("Avoid the AI Aesthetic") and concrete code examples rather than a linear command pipeline.
- **Companion reference omitted**: `SKILL.md:297` relies on `references/accessibility-checklist.md` as its primary testing and WCAG compliance companion, but the public catalog entry provides no link to this reference, exposing only `#accessibility` as a categorical tag.
- **Build phase synergy**: Grouped with `incremental-implementation`, `test-driven-development`, and `context-engineering` as companion skills in the `Build phase`, representing the visual and accessibility craftsmanship required during feature construction.
- **Vercel Skills CLI distribution**: Provides immediate copy-paste CLI installation commands for both isolated skill installation (`npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`) and the entire `agent-skills` repository via `npx skills add`.
- **Multi-agent setup links**: Directly links setup guides for 4 major coding agent environments: Claude Code, Codex, Cursor, and Antigravity.

## Context cost
- File size: 26,596 bytes (~6,649 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
