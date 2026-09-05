---
package: addy
path: external/spec-driven-development.md
type: doc
bytes: 25104
unit: inv-addy-31
aliases: []
memo_inputs:
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/spec-driven-development.md

## Purpose — required, verbatim
> "Creates specs before coding. Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5

## Design intent — required
This external documentation page serves as the public documentation catalog entry and web preview for the `spec-driven-development` skill on `skills.addy.ie`. It establishes the skill's positioning within the Addy agent-skills ecosystem as a core Define-phase skill (`addy:Define`), detailing its role in creating structured specifications before writing any code to prevent guessing and alignment failures. It articulates when the skill should be triggered ("Starting a new project, feature, or significant change"), associates it with the `/spec` command, provides copy-paste installation commands via the open `skills CLI` (`npx skills add addyosmani/agent-skills --skill spec-driven-development`), summarizes the standard 6-part anatomy of agent skills, and links to related Define-phase skills (`interview-me`, `idea-refine`). Without this page, users discovering skills via the web catalog would lack a shareable web reference, quick-install instructions, triggering guidance, and contextual navigation for spec-driven workflows.

## Phase — required
addy:Define

## Inputs — required
- Triggering conditions: "Starting a new project, feature, or significant change." — external/spec-driven-development.md:5
- Requirements context: "when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5
- Upstream source repository reference: "https://github.com/addyosmani/agent-skills/blob/main/skills/spec-driven-development/SKILL.md" — external/spec-driven-development.md:10
- Installation tool: open "skills CLI" — external/spec-driven-development.md:6

## Outputs — required
- Specification document: "Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries" — external/spec-driven-development.md:5
- Skill install command: "npx skills add addyosmani/agent-skills --skill spec-driven-development" — external/spec-driven-development.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/spec-driven-development.md:8
- No files produced on disk (none)

## Invokes — required
- skill spec-driven-development — external/spec-driven-development.md:10
- skill interview-me — external/spec-driven-development.md:12
- skill idea-refine — external/spec-driven-development.md:12
- command /spec — external/spec-driven-development.md:12
- doc CONTRIBUTING.md — external/spec-driven-development.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — external/spec-driven-development.md:5 — defined here
- `PRD` — external/spec-driven-development.md:5 — defined here
- `Define phase` — external/spec-driven-development.md:5 — used here
- `Define` — external/spec-driven-development.md:5 — used here
- `#spec` — external/spec-driven-development.md:5 — used here
- `#planning` — external/spec-driven-development.md:5 — used here
- `#requirements` — external/spec-driven-development.md:5 — used here
- `skills CLI` — external/spec-driven-development.md:6 — used here
- `Overview` — external/spec-driven-development.md:10 — used here
- `When to Use` — external/spec-driven-development.md:10 — used here
- `Process` — external/spec-driven-development.md:10 — used here
- `Rationalizations` — external/spec-driven-development.md:10 — used here
- `Red Flags` — external/spec-driven-development.md:10 — used here
- `Verification` — external/spec-driven-development.md:10 — used here
- `SKILL.md` — external/spec-driven-development.md:11 — used here
- `interview-me` — external/spec-driven-development.md:12 — used here
- `idea-refine` — external/spec-driven-development.md:12 — used here
- `requirements discovery` — external/spec-driven-development.md:12 — used here
- `ideation discovery` — external/spec-driven-development.md:12 — used here
- `Loop engineering` — external/spec-driven-development.md:15 — used here
- `Evals framework` — external/spec-driven-development.md:15 — used here

## Structure
- spec-driven-development — external/spec-driven-development.md:5
- Install just this skill — external/spec-driven-development.md:5
- How this skill is structured — external/spec-driven-development.md:8
- Define phase — external/spec-driven-development.md:12
- More in the Define phase — external/spec-driven-development.md:12
- Product — external/spec-driven-development.md:15
- Setup — external/spec-driven-development.md:15
- Resources — external/spec-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/spec-driven-development.md:10 · Website anatomy panel displays a static 6-section template ("Process", "Rationalizations") whereas SKILL.md contains seven sections including "The Gated Workflow" (with 5 phases: Phase 0 Scope Check, Phase 1 Specify, Phase 2 Plan, Phase 3 Tasks, Phase 4 Implement), "Keeping the Spec Alive", and "Common Rationalizations".
- doc-drift · external/spec-driven-development.md:5 · The page summary states the skill "Writes a PRD" (matching README.md:236), whereas SKILL.md never uses the term "PRD" and consistently refers to producing a "spec" or "structured specification".
- orphan · external/spec-driven-development.md:1 · External doc snapshot from skills.addy.ie is not linked or referenced by any repository file in sources/addy/.

## Observations
The page provides a web presentation and discovery catalog entry for `spec-driven-development` within the `Define` phase on `skills.addy.ie`. It associates the skill directly with the `/spec` slash command and tags it with `#spec`, `#planning`, and `#requirements`. It features copy-paste terminal commands for the `skills CLI` to install either `spec-driven-development` alone (`npx skills add addyosmani/agent-skills --skill spec-driven-development`) or the complete pack. The file is an Astro-generated HTML page (20 lines, 25,104 bytes) containing CSS stylesheets, client-side clipboard JavaScript, SVG markup, and footer navigation links. Over 90% of the byte content consists of HTML presentation markup rather than operational skill instructions.

## Context cost
25,104 bytes (~6,276 tokens) for this documentation file. If an executing agent loads both this page and the linked `skills/spec-driven-development/SKILL.md` (12,163 bytes, ~3,041 tokens), the combined context cost is approximately 37,267 bytes (~9,317 tokens). Most of this documentation file consists of HTML and CSS boilerplate that an executing coding agent cannot operationalize.
