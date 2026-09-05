---
package: addy
path: external/incremental-implementation.md
type: external-doc
bytes: 26461
unit: inv-addy-24
deprecated: false
aliases: []
memo_inputs:
  - {path: external/incremental-implementation.md, sha256: 4ae55418a30ac016ac45f955ec59ee4d67232d113fe6999478fb8f7fac8c378f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/incremental-implementation.md

## Purpose — required, verbatim
> "Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once." — external/incremental-implementation.md:5

## Design intent — required
Web presentation and distribution catalog entry for Addy's `incremental-implementation` skill on `skills.addy.ie`. It provides an accessible web interface for developers and agents to discover the skill, understand its high-level purpose (delivering changes as thin vertical slices), install it via the Vercel open skills CLI (`npx skills add addyosmani/agent-skills --skill incremental-implementation`), view its standard structural anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), identify associated lifecycle phases and commands (`/build`), and navigate to related skills in the Build phase (`test-driven-development`, `context-engineering`, `source-driven-development`). Without this external catalog page, consumers would lack an indexed web portal to browse skills, copy one-line CLI installation commands, or inspect skill placement within Addy's lifecycle before inspecting repository source files.

## Phase — required
addy:Build (verbatim: "Build phase" — external/incremental-implementation.md:5)

## Inputs — required
Triggering conditions:
> "Any change touching more than one file." — external/incremental-implementation.md:5

Upstream repository reference:
> "https://github.com/addyosmani/agent-skills/blob/main/skills/incremental-implementation/SKILL.md" — external/incremental-implementation.md:10

No runtime arguments, environment variables, or local filesystem inputs are read by this static HTML page.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`incremental-implementation` — external/incremental-implementation.md:5 — used here
`thin vertical slices` — external/incremental-implementation.md:5 — used here
`feature flags` — external/incremental-implementation.md:5 — used here
`safe defaults` — external/incremental-implementation.md:5 — used here
`rollback-friendly changes` — external/incremental-implementation.md:5 — used here
`Build phase` — external/incremental-implementation.md:5 — used here
`/build` — external/incremental-implementation.md:5 — used here
`skills CLI` — external/incremental-implementation.md:6 — used here
`Overview` — external/incremental-implementation.md:10 — used here
`When to Use` — external/incremental-implementation.md:10 — used here
`Process` — external/incremental-implementation.md:10 — used here
`Rationalizations` — external/incremental-implementation.md:10 — used here
`Red Flags` — external/incremental-implementation.md:10 — used here
`Verification` — external/incremental-implementation.md:10 — used here
`SKILL.md` — external/incremental-implementation.md:11 — used here
`vertical slices` — external/incremental-implementation.md:12 — used here
`test-driven-development` — external/incremental-implementation.md:12 — used here
`/test` — external/incremental-implementation.md:12 — used here
`Red-Green-Refactor` — external/incremental-implementation.md:12 — used here
`the test pyramid` — external/incremental-implementation.md:12 — used here
`DAMP over DRY` — external/incremental-implementation.md:12 — used here
`the Beyoncé Rule` — external/incremental-implementation.md:12 — used here
`context-engineering` — external/incremental-implementation.md:12 — used here
`rules files` — external/incremental-implementation.md:12 — used here
`context packing` — external/incremental-implementation.md:12 — used here
`MCP` — external/incremental-implementation.md:12 — used here
`source-driven-development` — external/incremental-implementation.md:12 — used here

## Structure
Section headings and anatomical components in source order:
- `incremental-implementation` — external/incremental-implementation.md:5
- `Install just this skill` — external/incremental-implementation.md:5
- `How this skill is structured` — external/incremental-implementation.md:8
  - `01` `Overview` — external/incremental-implementation.md:10
  - `02` `When to Use` — external/incremental-implementation.md:10
  - `03` `Process` — external/incremental-implementation.md:10
  - `04` `Rationalizations` — external/incremental-implementation.md:10
  - `05` `Red Flags` — external/incremental-implementation.md:10
  - `06` `Verification` — external/incremental-implementation.md:10
- `Build phase` — external/incremental-implementation.md:12
- `More in the Build phase` — external/incremental-implementation.md:12
- `Product` — external/incremental-implementation.md:15
- `Setup` — external/incremental-implementation.md:15
- `Resources` — external/incremental-implementation.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift at external/incremental-implementation.md:10: External page presents a standardized 6-section schema ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification") and claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/incremental-implementation.md:9, whereas repository file skills/incremental-implementation/SKILL.md has no `Process` heading (substituting "The Increment Cycle" at line 21, "Slicing Strategies" at line 44, and "Implementation Rules" at line 89), titles its rationalizations section "Common Rationalizations" at line 213, and appends a "See Also" section at line 247 that is omitted from the external page anatomy.
- doc-drift at external/incremental-implementation.md:5: External page summary states "Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once." — external/incremental-implementation.md:5, injecting implementation rules into the description, whereas repository file skills/incremental-implementation/SKILL.md:3 states "description: Delivers changes incrementally. Use when implementing any feature or change that touches more than one file. Use when you're about to write a large amount of code at once, or when a task feels too big to land in one step." — skills/incremental-implementation/SKILL.md:3.
- doc-drift at external/incremental-implementation.md:5: External page collapses triggering conditions to "Any change touching more than one file." — external/incremental-implementation.md:5, omitting the detailed 4-point triggering criteria and explicit negative condition "**When NOT to use:** Single-file, single-function changes where the scope is already minimal." — skills/incremental-implementation/SKILL.md:19.

## Observations
- External presentation snapshot: This file is an Astro-built static HTML snapshot (26,461 bytes, 20 lines) of the web page hosted at `https://skills.addy.ie/skills/incremental-implementation/`. The vast majority of its byte payload comprises HTML framing, compiled inline CSS stylesheets (lines 2-4), SVG icons, and Astro client scripts (lines 8, 18).
- Distribution mechanism: Promotes installation via the open Vercel skills CLI: "npx skills add addyosmani/agent-skills --skill incremental-implementation" — external/incremental-implementation.md:8 and full pack install "npx skills add addyosmani/agent-skills" — external/incremental-implementation.md:8.
- Lifecycle categorization: Explicitly categorizes `incremental-implementation` under the `addy:Build` phase with associated command `/build` ("Command" — external/incremental-implementation.md:12, "/build" — external/incremental-implementation.md:12).
- Related skills: Links `incremental-implementation` to three other Build phase skills: `test-driven-development` ("Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule." — external/incremental-implementation.md:12), `context-engineering`, and `source-driven-development` ("source-driven-development" — external/incremental-implementation.md:12).
- Agent actionability: As a web presentation artifact, this file cannot be directly invoked or acted upon by an agent harness; it exists for human documentation and catalog navigation.

## Context cost
26,461 bytes (external/incremental-implementation.md alone; loads no child files or references). Approximately 6,600 tokens.
