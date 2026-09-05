---
package: addy
path: external/spec-driven-development.md
type: external-doc
bytes: 25104
unit: inv-addy-31
deprecated: false
aliases: []
memo_inputs:
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/spec-driven-development.md

## Purpose — required, verbatim
> "Creates specs before coding. Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5

## Design intent — required
Serves as the public web documentation and discovery landing page for Addy Osmani's `spec-driven-development` skill on the `agent-skills` catalog website (`skills.addy.ie/skills/spec-driven-development/`). It addresses the problem of skill discoverability, developer onboarding, and tool distribution by summarizing the core philosophy of spec-driven development (authoring a PRD/specification covering objectives, commands, structure, code style, testing, and boundaries before coding), detailing when the skill should trigger (starting a new project, feature, or major architectural change, or whenever requirements are ambiguous), providing instant CLI installation commands via the skills CLI (`npx skills add`), showcasing the standardized 6-section skill anatomy, and situating the skill within the Define phase of the development lifecycle alongside complementary skills (`interview-me`, `idea-refine`) and the `/spec` command. Without this page, users exploring the public catalog would lack an accessible overview of the skill's workflow, installation mechanics, and lifecycle relationships.

## Phase — required
addy:Define
> "Define phase" — external/spec-driven-development.md:5

## Inputs — required
- User requirements trigger: "Starting a new project, feature, or significant change." — external/spec-driven-development.md:5
- Trigger condition: "when requirements are unclear, ambiguous, or only exist as a vague idea." — external/spec-driven-development.md:5
- Full skill definition file: "https://github.com/addyosmani/agent-skills/blob/main/skills/spec-driven-development/SKILL.md" — external/spec-driven-development.md:10

## Outputs — required
none

## Invokes — required
- skill interview-me — external/spec-driven-development.md:12
- skill idea-refine — external/spec-driven-development.md:12
- command /spec — external/spec-driven-development.md:5
- doc SKILL.md — external/spec-driven-development.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — external/spec-driven-development.md:5 — defined here
- `Define` — external/spec-driven-development.md:5 — used here
- `PRD` — external/spec-driven-development.md:5 — used here
- `spec` — external/spec-driven-development.md:5 — used here
- `planning` — external/spec-driven-development.md:5 — used here
- `requirements` — external/spec-driven-development.md:5 — used here
- `skills CLI` — external/spec-driven-development.md:6 — used here
- `Overview` — external/spec-driven-development.md:10 — used here
- `When to Use` — external/spec-driven-development.md:10 — used here
- `Process` — external/spec-driven-development.md:10 — used here
- `Rationalizations` — external/spec-driven-development.md:10 — used here
- `Red Flags` — external/spec-driven-development.md:10 — used here
- `Verification` — external/spec-driven-development.md:10 — used here
- `SKILL.md` — external/spec-driven-development.md:11 — used here
- `/spec` — external/spec-driven-development.md:12 — used here
- `interview-me` — external/spec-driven-development.md:12 — used here
- `idea-refine` — external/spec-driven-development.md:12 — used here
- `AI coding agents` — external/spec-driven-development.md:13 — used here
- `senior-engineer` — external/spec-driven-development.md:13 — used here
- `lifecycle` — external/spec-driven-development.md:14 — used here

## Structure
- # spec-driven-development
- ## Install just this skill
- ## How this skill is structured
- ### Define phase
- ## More in the Define phase
- ### interview-me
- ### idea-refine
- ### Product
- ### Setup
- ### Resources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/spec-driven-development.md:5 — The page states "Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries" — external/spec-driven-development.md:5, but skills/spec-driven-development/SKILL.md uses the term "spec document" and does not mention PRD.
- doc-drift — external/spec-driven-development.md:9 — The page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/spec-driven-development.md:9 with section "Process" — external/spec-driven-development.md:10 and "Rationalizations" — external/spec-driven-development.md:10, whereas skills/spec-driven-development/SKILL.md uses "The Gated Workflow" and "Common Rationalizations", and includes an extra section "Keeping the Spec Alive".
- orphan — external/spec-driven-development.md:1 — This external documentation page is an orphan not referenced or linked by any in-scope repository file in sources/addy/.

## Observations
- Standalone and bundle CLI installation commands are documented: "npx skills add addyosmani/agent-skills --skill spec-driven-development" — external/spec-driven-development.md:8 and "npx skills add addyosmani/agent-skills" — external/spec-driven-development.md:8.
- The page presents a standardized 6-section anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) under "How this skill is structured" — external/spec-driven-development.md:8, describing it as "a workflow the agent follows, not a doc it reads." — external/spec-driven-development.md:9.
- The page links to related Define-phase skills "interview-me" — external/spec-driven-development.md:12 and "idea-refine" — external/spec-driven-development.md:12 to assist users in selecting the appropriate discovery workflow before specifying.
- This HTML page is snapshotted from https://skills.addy.ie/skills/spec-driven-development/ and contains Astro site shell metadata, styles, and footer navigation.

## Context cost
25104 bytes (~6276 tokens), 0 loaded dependencies. Static web documentation snapshot not intended for agent execution context.
