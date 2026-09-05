---
package: addy
path: external/documentation-and-adrs.md
type: doc
bytes: 26223
unit: inv-addy-19
aliases: []
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/documentation-and-adrs.md

## Purpose — required, verbatim
> "Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:5

## Design intent — required
Provides an external web documentation snapshot, discoverability landing page, and install portal for the `documentation-and-adrs` skill hosted on `skills.addy.ie`. It articulates the core rationale of recording decisions and documentation standards to preserve critical architectural and engineering context for future human engineers and AI coding agents. The page situates the skill in the `Ship` lifecycle phase beneath the `/ship` slash command, provides copyable installation commands using the open Vercel skills CLI, and outlines the standard agent-skills six-part anatomy to orient consumers before they read the complete `SKILL.md`.

## Phase — required
addy:Ship

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill documentation-and-adrs — external/documentation-and-adrs.md:10
- command /ship — external/documentation-and-adrs.md:12
- skill git-workflow-and-versioning — external/documentation-and-adrs.md:12
- skill ci-cd-and-automation — external/documentation-and-adrs.md:12
- skill deprecation-and-migration — external/documentation-and-adrs.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `documentation-and-adrs` — external/documentation-and-adrs.md:5 — defined here
- `Ship` — external/documentation-and-adrs.md:5 — used here
- `Architecture Decision Records` — external/documentation-and-adrs.md:5 — used here
- `API docs` — external/documentation-and-adrs.md:5 — used here
- `inline documentation standards` — external/documentation-and-adrs.md:5 — used here
- `#documentation` — external/documentation-and-adrs.md:5 — used here
- `#adr` — external/documentation-and-adrs.md:5 — used here
- `skills CLI` — external/documentation-and-adrs.md:6 — used here
- `Overview` — external/documentation-and-adrs.md:10 — used here
- `When to Use` — external/documentation-and-adrs.md:10 — used here
- `Process` — external/documentation-and-adrs.md:10 — used here
- `Rationalizations` — external/documentation-and-adrs.md:10 — used here
- `Red Flags` — external/documentation-and-adrs.md:10 — used here
- `Verification` — external/documentation-and-adrs.md:10 — used here
- `SKILL.md` — external/documentation-and-adrs.md:11 — used here
- `/ship` — external/documentation-and-adrs.md:12 — used here
- `git-workflow-and-versioning` — external/documentation-and-adrs.md:12 — used here
- `ci-cd-and-automation` — external/documentation-and-adrs.md:12 — used here
- `deprecation-and-migration` — external/documentation-and-adrs.md:12 — used here

## Structure
- "documentation-and-adrs" — external/documentation-and-adrs.md:5
- "Install just this skill" — external/documentation-and-adrs.md:5
- "How this skill is structured" — external/documentation-and-adrs.md:8
- "Ship phase" — external/documentation-and-adrs.md:12
- "More in the Ship phase" — external/documentation-and-adrs.md:12

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/documentation-and-adrs.md:10 · Page asserts standard skill anatomy includes "Process" — external/documentation-and-adrs.md:10, but skills/documentation-and-adrs/SKILL.md contains no Process section (organizing content by ADRs, inline docs, API docs, and README structure instead).
- doc-drift · external/documentation-and-adrs.md:5 · Page truncates trigger conditions to "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5, omitting the broader codebase context preservation guidance from skills/documentation-and-adrs/SKILL.md:3.

## Observations
- Declares canonical URL as `https://skills.addy.ie/skills/documentation-and-adrs/` (external/documentation-and-adrs.md:1).
- Provides dual installation commands via the Vercel skills CLI: isolated skill `npx skills add addyosmani/agent-skills --skill documentation-and-adrs` (external/documentation-and-adrs.md:8) and whole pack `npx skills add addyosmani/agent-skills` (external/documentation-and-adrs.md:8).
- Places the skill under the `Ship` phase linked to the `/ship` command, presenting related skills `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration` (external/documentation-and-adrs.md:12).
- Includes global site navigation with links for Skills, Docs, Tutorials, Lifecycle, Loops, Teach, and Compare (external/documentation-and-adrs.md:5).
- Mentions project mission in footer: "Production-grade engineering skills for AI coding agents. Encode senior-engineer" / "workflows across the full lifecycle." (external/documentation-and-adrs.md:13-14).
- The source snapshot is an Astro-built static HTML document with embedded Netlify RUM analytics script (external/documentation-and-adrs.md:19).

## Context cost
26223 bytes, ~1850 tokens (static HTML document snapshot).
