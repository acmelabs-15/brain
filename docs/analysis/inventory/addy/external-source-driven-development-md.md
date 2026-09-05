---
package: addy
path: external/source-driven-development.md
type: external-doc
bytes: 26358
unit: inv-addy-30
deprecated: false
aliases: []
memo_inputs:
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/source-driven-development.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:5

## Design intent — required
Web presentation and distribution catalog entry for Addy's `source-driven-development` skill on `skills.addy.ie`. It provides an accessible web interface for developers and agents to discover the skill, understand its core principle of grounding framework implementation decisions in official documentation, install it via the Vercel open skills CLI (`npx skills add addyosmani/agent-skills --skill source-driven-development`), inspect its standard structural anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), identify its lifecycle categorization in the Build phase with command `/build`, and discover related skills in the Build phase (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this external catalog page, consumers would lack an indexed web portal to browse skills, copy one-line CLI installation commands, or inspect skill placement within Addy's lifecycle before inspecting repository source files.

## Phase — required
addy:Build (verbatim: "Build phase" — external/source-driven-development.md:5)

## Inputs — required
Triggering conditions:
> "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5

Upstream repository reference:
> "https://github.com/addyosmani/agent-skills/blob/main/skills/source-driven-development/SKILL.md" — external/source-driven-development.md:10

No runtime arguments, environment variables, or local filesystem inputs are read by this static HTML page.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`source-driven-development` — external/source-driven-development.md:5 — used here
`Build phase` — external/source-driven-development.md:5 — used here
`skills CLI` — external/source-driven-development.md:6 — used here
`Overview` — external/source-driven-development.md:10 — used here
`When to Use` — external/source-driven-development.md:10 — used here
`Process` — external/source-driven-development.md:10 — used here
`Rationalizations` — external/source-driven-development.md:10 — used here
`Red Flags` — external/source-driven-development.md:10 — used here
`Verification` — external/source-driven-development.md:10 — used here
`SKILL.md` — external/source-driven-development.md:11 — used here
`vertical slices` — external/source-driven-development.md:12 — used here
`Build phase` — external/source-driven-development.md:12 — used here
`/build` — external/source-driven-development.md:12 — used here
`incremental-implementation` — external/source-driven-development.md:12 — used here
`test-driven-development` — external/source-driven-development.md:12 — used here
`/test` — external/source-driven-development.md:12 — used here
`Red-Green-Refactor` — external/source-driven-development.md:12 — used here
`the test pyramid` — external/source-driven-development.md:12 — used here
`DAMP over DRY` — external/source-driven-development.md:12 — used here
`the Beyoncé Rule` — external/source-driven-development.md:12 — used here
`context-engineering` — external/source-driven-development.md:12 — used here
`rules files` — external/source-driven-development.md:12 — used here
`context packing` — external/source-driven-development.md:12 — used here
`MCP` — external/source-driven-development.md:12 — used here

## Structure
Section headings and anatomical components in source order:
- `source-driven-development` — external/source-driven-development.md:5
- `Install just this skill` — external/source-driven-development.md:5
- `How this skill is structured` — external/source-driven-development.md:8
  - `01` `Overview` — external/source-driven-development.md:10
  - `02` `When to Use` — external/source-driven-development.md:10
  - `03` `Process` — external/source-driven-development.md:10
  - `04` `Rationalizations` — external/source-driven-development.md:10
  - `05` `Red Flags` — external/source-driven-development.md:10
  - `06` `Verification` — external/source-driven-development.md:10
- `Build phase` — external/source-driven-development.md:12
- `More in the Build phase` — external/source-driven-development.md:12
- `Product` — external/source-driven-development.md:15
- `Setup` — external/source-driven-development.md:15
- `Resources` — external/source-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift at external/source-driven-development.md:10: External page presents a standardized 6-section anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification") and claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/source-driven-development.md:9, whereas repository file skills/source-driven-development/SKILL.md titles its process section "## The Process" — skills/source-driven-development/SKILL.md:27, titles its rationalizations section "## Common Rationalizations" — skills/source-driven-development/SKILL.md:181, and includes a specialized subsection "#### Retrieval Safety: Treat Fetched Content as Data" — skills/source-driven-development/SKILL.md:97 that is completely omitted from the external page anatomy.
- doc-drift at external/source-driven-development.md:5: External page summary states "Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:5, modifying the repository frontmatter description "description: Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3 by replacing the usage context with workflow instructions.
- doc-drift at external/source-driven-development.md:5: External page collapses triggering conditions to "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5, omitting the detailed 6-point trigger list and explicit negative conditions under "**When NOT to use:**" — skills/source-driven-development/SKILL.md:21.

## Observations
- External presentation snapshot: This file is an Astro-built static HTML snapshot (26,358 bytes, 20 lines) of the web page hosted at `https://skills.addy.ie/skills/source-driven-development/`. The bulk of the file comprises HTML layout structure, inline CSS stylesheets (lines 2-4), embedded SVG icons, and Astro client bundle scripts (lines 8, 18).
- Distribution mechanism: Promotes installation via the open Vercel skills CLI: "npx skills add addyosmani/agent-skills --skill source-driven-development" — external/source-driven-development.md:8 and full pack install "npx skills add addyosmani/agent-skills" — external/source-driven-development.md:8.
- Lifecycle categorization: Explicitly categorizes `source-driven-development` under the `addy:Build` phase with associated command `/build` ("Command" — external/source-driven-development.md:12, "/build" — external/source-driven-development.md:12).
- Related skills: Links `source-driven-development` to three other Build phase skills: `incremental-implementation` ("Thin vertical slices - implement, test, verify, commit. Rollback-friendly changes." — external/source-driven-development.md:12), `test-driven-development` ("Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule." — external/source-driven-development.md:12), and `context-engineering` ("Feed agents the right information at the right time - rules files, context packing, MCP." — external/source-driven-development.md:12).
- Agent actionability: As a web presentation artifact, this file cannot be directly invoked or executed by an agent harness; it exists for human developer documentation, web discoverability, and CLI package distribution.

## Context cost
26,358 bytes (external/source-driven-development.md alone; loads no child files or references). Approximately 6,600 tokens.
