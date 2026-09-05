---
package: addy
path: external/interview-me.md
type: external-doc
bytes: 24935
unit: inv-addy-25
deprecated: false
aliases: []
memo_inputs:
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/interview-me.md

## Purpose — required, verbatim
> "Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent." — external/interview-me.md:5

## Design intent — required
Serves as the public documentation and catalog landing page for the `interview-me` skill on the Addy Osmani agent-skills catalog website (skills.addy.ie). It addresses the problem of discoverability, user onboarding, and modular distribution for the skill by providing developers and AI agents with a high-level overview of intent extraction (interviewing one question at a time to reach ~95% confidence), triggering conditions (when the ask is underspecified or explicitly invoked), one-line CLI installation commands via the Vercel open skills CLI (both for this skill individually and for the entire package), a summary of the standard 6-section skill anatomy, and navigation links within the Define lifecycle phase alongside related skills (`idea-refine` and `spec-driven-development`). Without this page, developers and autonomous agents browsing the public catalog would lack an indexed web portal to discover the skill, inspect its prerequisites and placement in the Define phase, and install it without cloning or manually inspecting the GitHub repository.

## Phase — required
addy:Define

## Inputs — required
- User ask or trigger: "The ask is underspecified" — external/interview-me.md:5
- Upstream skill definition: "https://github.com/addyosmani/agent-skills/blob/main/skills/interview-me/SKILL.md" — external/interview-me.md:10

## Outputs — required
none

## Invokes — required
- skill idea-refine — external/interview-me.md:12
- skill spec-driven-development — external/interview-me.md:12
- command /spec — external/interview-me.md:12
- doc SKILL.md — external/interview-me.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interview-me` — external/interview-me.md:5 — defined here
- `Define` — external/interview-me.md:5 — used here
- `requirements` — external/interview-me.md:5 — used here
- `discovery` — external/interview-me.md:5 — used here
- `skills CLI` — external/interview-me.md:6 — used here
- `Overview` — external/interview-me.md:10 — used here
- `When to Use` — external/interview-me.md:10 — used here
- `Process` — external/interview-me.md:10 — used here
- `Rationalizations` — external/interview-me.md:10 — used here
- `Red Flags` — external/interview-me.md:10 — used here
- `Verification` — external/interview-me.md:10 — used here
- `SKILL.md` — external/interview-me.md:11 — used here
- `/spec` — external/interview-me.md:12 — used here
- `idea-refine` — external/interview-me.md:12 — used here
- `spec-driven-development` — external/interview-me.md:12 — used here
- `PRD` — external/interview-me.md:12 — used here
- `AI coding agents` — external/interview-me.md:13 — used here
- `senior-engineer` — external/interview-me.md:13 — used here
- `lifecycle` — external/interview-me.md:14 — used here

## Structure
- # interview-me
- ## Install just this skill
- ## How this skill is structured
- ### Define phase
- ## More in the Define phase
- ### idea-refine
- ### spec-driven-development
- ### Product
- ### Setup
- ### Resources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/interview-me.md:9 — The page claims "Every skill follows the same anatomy" — external/interview-me.md:9 including standard 6 sections, but skills/interview-me/SKILL.md adds non-standard sections (Loading Constraints, Output, Example, Interaction with Other Skills) and uses non-standard headings (The Process, Common Rationalizations).
- doc-drift — external/interview-me.md:12 — The sidebar displays Command "/spec" — external/interview-me.md:12 under Define phase, but /spec invokes spec-driven-development rather than interview-me.
- orphan — external/interview-me.md:1 — This external documentation page is an orphan not referenced or linked by any in-scope repository file in sources/addy/.

## Observations
- Standalone and bundle CLI installation commands: "npx skills add addyosmani/agent-skills --skill interview-me" — external/interview-me.md:8 and "npx skills add addyosmani/agent-skills" — external/interview-me.md:8.
- The page presents a standardized 6-section anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) under "How this skill is structured", describing skills as "a workflow the agent follows, not a doc it reads" — external/interview-me.md:9.
- The page links to related Define-phase skills "idea-refine" — external/interview-me.md:12 and "spec-driven-development" — external/interview-me.md:12.
- Mentions target ecosystem and developer role: "Production-grade engineering skills for AI coding agents. Encode senior-engineer" — external/interview-me.md:13 and "workflows across the full lifecycle." — external/interview-me.md:14.
- Snapshotted from "https://skills.addy.ie/skills/interview-me/" — external/interview-me.md:1 and contains Astro site framework markup with scoped component identifiers.

## Context cost
24935 bytes (~6234 tokens), 0 loaded dependencies. Static web documentation snapshot not intended for agent execution context.
