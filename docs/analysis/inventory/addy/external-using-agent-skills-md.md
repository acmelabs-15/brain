---
package: addy
path: external/using-agent-skills.md
type: doc
bytes: 21955
unit: inv-addy-32
deprecated: false
aliases: []
memo_inputs:
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/using-agent-skills.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow." — external/using-agent-skills.md:5

## Design intent — required
Provides the published web documentation page for the `using-agent-skills` skill on `skills.addy.ie`. It documents the overarching routing meta-skill that directs agents in choosing the right skill for each software development task. It provides standalone and pack CLI installation instructions (`npx skills add`), presents the standard six-part skill anatomy, links to the repository source at `skills/using-agent-skills/SKILL.md`, and defines the Meta phase context ("Route work to the right skill and set shared operating rules.").

## Phase — required
addy:Meta

## Inputs — required
- Trigger condition: "Starting a session or deciding which skill applies." — external/using-agent-skills.md:5
- Target skill source link: `skills/using-agent-skills/SKILL.md` — external/using-agent-skills.md:10
- Installation command: "npx skills add addyosmani/agent-skills --skill using-agent-skills" — external/using-agent-skills.md:8

## Outputs — required
none

## Invokes — required
- skill using-agent-skills — external/using-agent-skills.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `using-agent-skills` — external/using-agent-skills.md:5 — defined here
- `Meta phase` — external/using-agent-skills.md:5 — used here
- `routing` — external/using-agent-skills.md:5 — used here
- `workflow` — external/using-agent-skills.md:5 — used here
- `skills CLI` — external/using-agent-skills.md:6 — used here
- `anatomy` — external/using-agent-skills.md:9 — defined here
- `Overview` — external/using-agent-skills.md:10 — used here
- `When to Use` — external/using-agent-skills.md:10 — used here
- `Process` — external/using-agent-skills.md:10 — used here
- `Rationalizations` — external/using-agent-skills.md:10 — used here
- `Red Flags` — external/using-agent-skills.md:10 — used here
- `Verification` — external/using-agent-skills.md:10 — used here
- `The lifecycle` — external/using-agent-skills.md:15 — used here
- `Loop engineering` — external/using-agent-skills.md:15 — used here

## Structure
- "using-agent-skills" — external/using-agent-skills.md:5
- "Install just this skill" — external/using-agent-skills.md:5
- "How this skill is structured" — external/using-agent-skills.md:8
- "Meta phase" — external/using-agent-skills.md:12
- "Product" — external/using-agent-skills.md:15
- "Setup" — external/using-agent-skills.md:15
- "Resources" — external/using-agent-skills.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/using-agent-skills.md:5: External summary ("Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow.") exhibits slight phrasing drift relative to repository skill description in `skills/using-agent-skills/SKILL.md:3` ("Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked.").
- doc-drift · external/using-agent-skills.md:9: External page states "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." listing sections 01 Overview through 06 Verification, but `skills/using-agent-skills/SKILL.md` implements five different sections ("Overview", "Skill Discovery", "Core Operating Behaviors", "When to Use Multiple Skills", "Red Flags — What Not to Do") and omits Process, Rationalizations, and Verification.

## Observations
- Astro-rendered public catalog snapshot from `https://skills.addy.ie/skills/using-agent-skills/`.
- Documents standalone installation via `npx skills add addyosmani/agent-skills --skill using-agent-skills` and full pack install via `npx skills add addyosmani/agent-skills` (line 8).
- Categorized under `Meta phase` with sidebar text "Route work to the right skill and set shared operating rules." (line 12).
- Unlike executable or phase skills, it does not display any slash command badge or command binding on this page.
- Links to repository source at `skills/using-agent-skills/SKILL.md` (line 10).

## Context cost
21955 bytes (~5488 tokens). Web documentation snapshot; not directly loaded into agent prompt context.
