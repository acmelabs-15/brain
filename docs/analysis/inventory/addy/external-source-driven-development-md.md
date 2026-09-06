---
package: addy
path: external/source-driven-development.md
type: external-doc
bytes: 26358
unit: inv-addy-30
aliases: []
memo_inputs:
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# external/source-driven-development.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/source-driven-development/`) serves as the public web landing page and catalog entry for the `source-driven-development` skill in Addy Osmani's agent skills library. Hosted on skills.addy.ie, it summarizes the skill's purpose (grounding implementation decisions in official documentation, verifying against sources, and citing them), outlines trigger conditions ("You want authoritative, source-cited code for any framework or library."), presents the standardized 6-part skill anatomy, offers one-line CLI installation commands via `npx skills add` (for this individual skill or the full pack), and places the skill in the Build lifecycle phase associated with the `/build` command and related skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this page, external web users and autonomous coding agents evaluating the catalog would lack web discoverability, an overview of the skill's structure, and direct links to the canonical GitHub source repository (`skills/source-driven-development/SKILL.md`).

## Phase — required
addy:Build
> "Build phase" — external/source-driven-development.md:5

## Inputs — required
Static web page inputs:
- HTTP GET requests to `https://skills.addy.ie/skills/source-driven-development/`
- Build-time content from `skills/source-driven-development/SKILL.md` rendered via Astro page templates.
- Trigger condition documented on page: "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5
No CLI parameters, environment variables, or filesystem inputs are consumed at runtime by this static HTML document.

## Outputs — required
Static web presentation:
- Rendered HTML document presenting skill overview, triggering criteria, CLI installation commands (`npx skills add addyosmani/agent-skills --skill source-driven-development`), 6-part skill anatomy, and navigation links to related Build skills and the GitHub source file (`https://github.com/addyosmani/agent-skills/blob/main/skills/source-driven-development/SKILL.md`).
Produces no repository artifacts, files, or commits directly.

## Invokes — required
- command /build — external/source-driven-development.md:12
- skill incremental-implementation — external/source-driven-development.md:12
- skill test-driven-development — external/source-driven-development.md:12
- skill context-engineering — external/source-driven-development.md:12
- file skills/source-driven-development/SKILL.md — external/source-driven-development.md:10

## Invoked by — required
orphan (external documentation page published at `https://skills.addy.ie/skills/source-driven-development/`; not invoked or referenced by any file within `sources/addy/`)

## Concepts named — required, verbatim
- `source-driven-development` — external/source-driven-development.md:1 — defined here
- `Build phase` — external/source-driven-development.md:5 — used here
- `documentation` — external/source-driven-development.md:5 — used here
- `correctness` — external/source-driven-development.md:5 — used here
- `skills CLI` — external/source-driven-development.md:6 — used here
- `How this skill is structured` — external/source-driven-development.md:8 — defined here
- `anatomy` — external/source-driven-development.md:9 — defined here
- `Overview` — external/source-driven-development.md:10 — defined here
- `When to Use` — external/source-driven-development.md:10 — defined here
- `Process` — external/source-driven-development.md:10 — defined here
- `Rationalizations` — external/source-driven-development.md:10 — defined here
- `Red Flags` — external/source-driven-development.md:10 — defined here
- `Verification` — external/source-driven-development.md:10 — defined here
- `SKILL.md` — external/source-driven-development.md:11 — used here
- `/build` — external/source-driven-development.md:12 — used here
- `vertical slices` — external/source-driven-development.md:12 — used here
- `incremental-implementation` — external/source-driven-development.md:12 — used here
- `/test` — external/source-driven-development.md:12 — used here
- `test-driven-development` — external/source-driven-development.md:12 — used here
- `Red-Green-Refactor` — external/source-driven-development.md:12 — used here
- `test pyramid` — external/source-driven-development.md:12 — used here
- `DAMP over DRY` — external/source-driven-development.md:12 — used here
- `Beyoncé Rule` — external/source-driven-development.md:12 — used here
- `context-engineering` — external/source-driven-development.md:12 — used here
- `rules files` — external/source-driven-development.md:12 — used here
- `context packing` — external/source-driven-development.md:12 — used here
- `MCP` — external/source-driven-development.md:12 — used here
- `AI coding agents` — external/source-driven-development.md:13 — used here
- `senior-engineer` — external/source-driven-development.md:13 — used here
- `lifecycle` — external/source-driven-development.md:14 — used here
- `Claude Code` — external/source-driven-development.md:15 — used here
- `Codex` — external/source-driven-development.md:15 — used here
- `Cursor` — external/source-driven-development.md:15 — used here
- `Antigravity` — external/source-driven-development.md:15 — used here
- `Evals framework` — external/source-driven-development.md:15 — used here

## Structure
- "source-driven-development" — external/source-driven-development.md:5
- "Install just this skill" — external/source-driven-development.md:5
- "How this skill is structured" — external/source-driven-development.md:8
- "Build phase" — external/source-driven-development.md:12
- "More in the Build phase" — external/source-driven-development.md:12
- "Product" — external/source-driven-development.md:15
- "Setup" — external/source-driven-development.md:15
- "Resources" — external/source-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/source-driven-development.md:5 — The webpage summary ("Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:5) differs from the repository skill description ("Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3), appending verification and flagging clauses while omitting specific guidance on framework/library correctness.
- doc-drift — external/source-driven-development.md:5 — The page condenses the triggering criteria in the "Use when" block to "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5, omitting negative triggering conditions ("When NOT to use") and detailed trigger scenarios specified in skills/source-driven-development/SKILL.md:12-26.
- doc-drift — external/source-driven-development.md:10 — The page displays a generic 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/source-driven-development.md:9; "Process" — external/source-driven-development.md:10; "Rationalizations" — external/source-driven-development.md:10; "Red Flags" — external/source-driven-development.md:10), omitting specialized sections present in the repository skill file such as "#### Retrieval Safety: Treat Fetched Content as Data" — skills/source-driven-development/SKILL.md:97 and the authority hierarchy table ("**Source hierarchy (in order of authority):**" — skills/source-driven-development/SKILL.md:67).
- orphan — external/source-driven-development.md:1 — External documentation page is an orphan within the repository; no in-scope file in `sources/addy/` links to or invokes this external documentation page.

## Observations
- Generated via Astro static site generator (`data-astro-cid-*` attributes) and hosted at `https://skills.addy.ie/skills/source-driven-development/`.
- Provides single-skill and full-pack CLI installation commands: "npx skills add addyosmani/agent-skills --skill source-driven-development" — external/source-driven-development.md:8 and "npx skills add addyosmani/agent-skills" — external/source-driven-development.md:8.
- Includes client-side interactive clipboard copying script for the `skills CLI` installation snippet.
- Embeds Netlify RUM analytics script (`netlify-rum-container`) and links to external Geist / Geist Mono web fonts.
- Features cross-harness navigation in the footer linking to getting started guides for `Claude Code`, `Codex`, `Cursor`, and `Antigravity`.
- Places the skill under the Build phase with command "/build" — external/source-driven-development.md:12, and links to related Build skills: incremental-implementation, test-driven-development, and context-engineering ("More in the Build phase" — external/source-driven-development.md:12).
- Context cost observation: As an Astro-rendered HTML snapshot (26,358 bytes), the vast majority of tokens comprise UI layout boilerplate, CSS styling, SVG icons, and client scripts rather than actionable documentation.

## Context cost
- File size: 26,358 bytes (~6,590 tokens).
- Linked files: `skills/source-driven-development/SKILL.md` (9,949 bytes), `commands/build.toml` (3,840 bytes), `skills/incremental-implementation/SKILL.md` (9,507 bytes), `skills/test-driven-development/SKILL.md` (16,483 bytes), and `skills/context-engineering/SKILL.md` (11,070 bytes). Total with directly referenced files: 77,207 bytes (~19,300 tokens).
