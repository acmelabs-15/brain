---
package: addy
path: external/idea-refine.md
type: external-doc
bytes: 24943
unit: inv-addy-23
deprecated: false
aliases: []
memo_inputs:
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/idea-refine.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one." — external/idea-refine.md:5

## Design intent — required
Serves as the public documentation and discovery web page for the `idea-refine` skill on the Addy Osmani agent-skills catalog website (skills.addy.ie). It addresses the problem of discoverability, understanding, and distribution of the skill by providing developers and AI agents with a high-level summary of what the skill does, when to trigger it (when dealing with rough ideas needing divergent and convergent stress-testing), how to install it individually or as part of the full pack via the skills CLI, and how it fits into the broader development lifecycle within the Define phase alongside related skills such as `interview-me` and `spec-driven-development`. Without this page, users exploring the public catalog would lack a canonical web landing page detailing the skill's purpose, installation commands, standardized structural anatomy, and lifecycle relationships.

## Phase — required
addy:Define

## Inputs — required
- User rough concept: "You have a rough idea that needs exploration and stress-testing." — external/idea-refine.md:5
- Full skill definition file: "https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md" — external/idea-refine.md:10

## Outputs — required
none

## Invokes — required
- skill interview-me — external/idea-refine.md:12
- skill spec-driven-development — external/idea-refine.md:12
- command /spec — external/idea-refine.md:12
- doc SKILL.md — external/idea-refine.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `idea-refine` — external/idea-refine.md:5 — defined here
- `Define` — external/idea-refine.md:5 — used here
- `divergent and convergent thinking` — external/idea-refine.md:5 — used here
- `ideation` — external/idea-refine.md:5 — used here
- `discovery` — external/idea-refine.md:5 — used here
- `skills CLI` — external/idea-refine.md:6 — used here
- `Overview` — external/idea-refine.md:10 — used here
- `When to Use` — external/idea-refine.md:10 — used here
- `Process` — external/idea-refine.md:10 — used here
- `Rationalizations` — external/idea-refine.md:10 — used here
- `Red Flags` — external/idea-refine.md:10 — used here
- `Verification` — external/idea-refine.md:10 — used here
- `SKILL.md` — external/idea-refine.md:11 — used here
- `/spec` — external/idea-refine.md:12 — used here
- `interview-me` — external/idea-refine.md:12 — used here
- `spec-driven-development` — external/idea-refine.md:12 — used here
- `PRD` — external/idea-refine.md:12 — used here
- `AI coding agents` — external/idea-refine.md:13 — used here
- `senior-engineer` — external/idea-refine.md:13 — used here
- `lifecycle` — external/idea-refine.md:14 — used here

## Structure
- # idea-refine
- ## Install just this skill
- ## How this skill is structured
- ### Define phase
- ## More in the Define phase
- ### interview-me
- ### spec-driven-development
- ### Product
- ### Setup
- ### Resources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/idea-refine.md:9 — The page claims "Every skill follows the same anatomy" — external/idea-refine.md:9 including Rationalizations, but skills/idea-refine/SKILL.md uses legacy headings and lacks a Rationalizations section.
- doc-drift — external/idea-refine.md:12 — The sidebar displays Command "/spec" — external/idea-refine.md:12 under Define phase, but /spec invokes spec-driven-development rather than idea-refine.
- orphan — external/idea-refine.md:1 — This external documentation page is an orphan not referenced or linked by any in-scope repository file in sources/addy/.

## Observations
- Standalone and bundle CLI installation commands are documented: "npx skills add addyosmani/agent-skills --skill idea-refine" — external/idea-refine.md:8 and "npx skills add addyosmani/agent-skills" — external/idea-refine.md:8.
- The page presents a standardized 6-section anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) under "How this skill is structured" — external/idea-refine.md:8, describing it as "a workflow the agent follows, not a doc it reads" — external/idea-refine.md:9.
- The page links to related Define-phase skills "interview-me" — external/idea-refine.md:12 and "spec-driven-development" — external/idea-refine.md:12 to assist users in selecting the appropriate requirements and discovery workflow.
- This HTML page is snapshotted from https://skills.addy.ie/skills/idea-refine/ and contains Astro site shell metadata, styles, and footer navigation.

## Context cost
24943 bytes (~6235 tokens), 0 loaded dependencies. Static web documentation snapshot not intended for agent execution context.
