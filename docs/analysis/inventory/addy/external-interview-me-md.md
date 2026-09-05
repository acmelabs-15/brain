---
package: addy
path: external/interview-me.md
type: doc
bytes: 24935
unit: inv-addy-25
aliases: []
memo_inputs:
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/interview-me.md

## Purpose — required, verbatim
> "Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent." — external/interview-me.md:5

## Design intent — required
Provides the external web documentation catalog entry and landing page for the `interview-me` skill on `skills.addy.ie`. It articulates the skill's role in the Define lifecycle phase (`addy:Define`) as an intent-extraction mechanism that uncovers genuine user goals before plans, specifications, or code are produced. It offers ready-to-use CLI installation commands via the open `skills CLI`, outlines the standard six-part skill anatomy, and provides discovery navigation to related Define-phase skills (`idea-refine`, `spec-driven-development`) and the canonical GitHub repository source. Without this page, developers discovering or installing skills outside the git repository would lack an indexable overview, usage triggers, CLI installation syntax, and lifecycle phase positioning for intent extraction.

## Phase — required
addy:Define

## Inputs — required
- Trigger condition: "The ask is underspecified, or you invoke &quot;interview me&quot; / &quot;grill me&quot;." — external/interview-me.md:5
- Source repository link: "https://github.com/addyosmani/agent-skills/blob/main/skills/interview-me/SKILL.md" — external/interview-me.md:10
- Skill installer: open "skills CLI" — external/interview-me.md:6

## Outputs — required
- Skill install command: "npx skills add addyosmani/agent-skills --skill interview-me" — external/interview-me.md:8
- Pack install command: "npx skills add addyosmani/agent-skills" — external/interview-me.md:8
- Intent clarification goal: "underlying intent" — external/interview-me.md:5
- No files produced directly on disk (none)

## Invokes — required
- skill interview-me — external/interview-me.md:5
- doc SKILL.md — external/interview-me.md:10
- command /spec — external/interview-me.md:12
- skill idea-refine — external/interview-me.md:12
- skill spec-driven-development — external/interview-me.md:12
- doc CONTRIBUTING.md — external/interview-me.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interview-me` — external/interview-me.md:5 — defined here
- `Define phase` — external/interview-me.md:5, 12 — used here
- `Define` — external/interview-me.md:5, 12 — used here
- `underlying intent` — external/interview-me.md:5 — defined here
- `requirements` — external/interview-me.md:5 — used here
- `discovery` — external/interview-me.md:5 — used here
- `skills CLI` — external/interview-me.md:6 — used here
- `anatomy` — external/interview-me.md:9 — defined here
- `Overview` — external/interview-me.md:10 — used here
- `When to Use` — external/interview-me.md:10 — used here
- `Process` — external/interview-me.md:10 — used here
- `Rationalizations` — external/interview-me.md:10 — used here
- `Red Flags` — external/interview-me.md:10 — used here
- `Verification` — external/interview-me.md:10 — used here
- `SKILL.md` — external/interview-me.md:10 — used here
- `/spec` — external/interview-me.md:12 — used here
- `idea-refine` — external/interview-me.md:12 — used here
- `spec-driven-development` — external/interview-me.md:12 — used here
- `PRD` — external/interview-me.md:12 — used here
- `CONTRIBUTING.md` — external/interview-me.md:15 — used here
- `Evals framework` — external/interview-me.md:15 — used here

## Structure
- "interview-me" — external/interview-me.md:5
- "Install just this skill" — external/interview-me.md:5
- "How this skill is structured" — external/interview-me.md:8
- "Define phase" — external/interview-me.md:12
- "More in the Define phase" — external/interview-me.md:12
- "Product" — external/interview-me.md:15
- "Setup" — external/interview-me.md:15
- "Resources" — external/interview-me.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/interview-me.md:5: External page summary ("Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent.") differs from the repository description in skills/interview-me/SKILL.md:3, which details specific trigger conditions ("Use when an ask is underspecified ('build me X' without 'for whom' or 'why now'), when the user explicitly invokes ('interview me', 'grill me', 'are we sure?', 'stress-test my thinking'), or when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists.").
- doc-drift · external/interview-me.md:9: External page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" listing six standardized sections (01 Overview to 06 Verification), but skills/interview-me/SKILL.md includes additional specialized sections not present in the six-part template (Loading Constraints, Output, Example, Interaction with Other Skills).
- doc-drift · external/interview-me.md:12: External page displays Command /spec in the Define phase sidebar, associating the skill's phase with the /spec command, but commands/spec.toml:4 only invokes spec-driven-development and does not invoke interview-me.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/interview-me/`.
- Documents skill distribution via the open Vercel `skills` CLI using `npx skills add addyosmani/agent-skills --skill interview-me` and full pack installation `npx skills add addyosmani/agent-skills` (line 8).
- Embeds the skill into the `Define` phase taxonomy alongside sibling skills `idea-refine` and `spec-driven-development` (line 12).
- Links directly to the repository skill source on GitHub at `skills/interview-me/SKILL.md` (line 10).
- Contains client-side interactive elements (clipboard copy buttons for CLI commands on line 8, responsive mobile navigation drawer toggle script on line 5) and Netlify telemetry (`netlify-rum-container` on line 19).

## Context cost
24,935 bytes (~6,234 tokens). As an external web documentation page, it is loaded over HTTP by users or browser agents rather than loaded directly into an agent conversation context window.
