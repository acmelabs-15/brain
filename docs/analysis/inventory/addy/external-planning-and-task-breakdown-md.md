---
package: addy
path: external/planning-and-task-breakdown.md
type: external-doc
bytes: 22310
unit: inv-addy-27
deprecated: false
aliases: []
memo_inputs:
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/planning-and-task-breakdown.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — external/planning-and-task-breakdown.md:5

## Design intent — required
This external documentation page provides the web catalog entry and public landing page for Addy Osmani's `planning-and-task-breakdown` skill, published at `skills.addy.ie`. It serves as the discovery interface for the skill within the "Plan" lifecycle phase, communicating its core purpose, triggering conditions ("You have a spec and need implementable units."), standardized six-part skill anatomy, CLI installation commands via the `skills` CLI, and slash command association (`/plan`). Without this page, developers and autonomous agents navigating the public catalog would lack a high-level summary of task decomposition with acceptance criteria and dependency ordering, installation instructions, and the direct link to the canonical `SKILL.md` in the GitHub repository.

## Phase — required
addy:Plan ("Plan phase" — external/planning-and-task-breakdown.md:5)

## Inputs — required
none (static HTML documentation page; conceptually describes trigger conditions: "You have a spec and need implementable units." — external/planning-and-task-breakdown.md:5)

## Outputs — required
none (pure reference/documentation page)

## Invokes — required
- command /plan — external/planning-and-task-breakdown.md:5
- skill planning-and-task-breakdown — external/planning-and-task-breakdown.md:8
- doc SKILL.md — external/planning-and-task-breakdown.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — external/planning-and-task-breakdown.md:5 — defined here
- `Plan` — external/planning-and-task-breakdown.md:5 — used here
- `Plan phase` — external/planning-and-task-breakdown.md:5 — used here
- `/plan` — external/planning-and-task-breakdown.md:5 — used here
- `acceptance criteria` — external/planning-and-task-breakdown.md:5 — used here
- `dependency ordering` — external/planning-and-task-breakdown.md:5 — used here
- `#planning` — external/planning-and-task-breakdown.md:5 — used here
- `#tasks` — external/planning-and-task-breakdown.md:5 — used here
- `skills CLI` — external/planning-and-task-breakdown.md:6 — used here
- `anatomy` — external/planning-and-task-breakdown.md:9 — used here
- `Overview` — external/planning-and-task-breakdown.md:10 — used here
- `When to Use` — external/planning-and-task-breakdown.md:10 — used here
- `Process` — external/planning-and-task-breakdown.md:10 — used here
- `Rationalizations` — external/planning-and-task-breakdown.md:10 — used here
- `Red Flags` — external/planning-and-task-breakdown.md:10 — used here
- `Verification` — external/planning-and-task-breakdown.md:10 — used here
- `tasks` — external/planning-and-task-breakdown.md:12 — used here
- `lifecycle` — external/planning-and-task-breakdown.md:12 — used here

## Structure
- "planning-and-task-breakdown" — external/planning-and-task-breakdown.md:5
- "Install just this skill" — external/planning-and-task-breakdown.md:5
- "How this skill is structured" — external/planning-and-task-breakdown.md:8
  - "Overview" — external/planning-and-task-breakdown.md:10
  - "When to Use" — external/planning-and-task-breakdown.md:10
  - "Process" — external/planning-and-task-breakdown.md:10
  - "Rationalizations" — external/planning-and-task-breakdown.md:10
  - "Red Flags" — external/planning-and-task-breakdown.md:10
  - "Verification" — external/planning-and-task-breakdown.md:10
- "Plan phase" — external/planning-and-task-breakdown.md:12
- "Product" — external/planning-and-task-breakdown.md:15
- "Setup" — external/planning-and-task-breakdown.md:15
- "Resources" — external/planning-and-task-breakdown.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: external catalog summary "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — external/planning-and-task-breakdown.md:5 differs from in-repo skill description "description: Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — skills/planning-and-task-breakdown/SKILL.md:3.
- doc-drift: external page claims a 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/planning-and-task-breakdown.md:9) whereas skills/planning-and-task-breakdown/SKILL.md structures its workflow across detailed sub-steps (Step 1: Enter Plan Mode through Step 6: Define the Verification Strategy), Task Sizing Rules, and Task Template, and lacks a Rationalizations section.
- orphan: "https://skills.addy.ie/skills/planning-and-task-breakdown/" — external/planning-and-task-breakdown.md:1 — this external documentation snapshot is not referenced or invoked by any file in the source repository.

## Observations
- The page is built using Astro (`data-astro-cid-*`) and rendered as static HTML.
- Provides copyable installation commands for the Vercel-labs `skills` CLI: "npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown" — external/planning-and-task-breakdown.md:8 and "npx skills add addyosmani/agent-skills" — external/planning-and-task-breakdown.md:8.
- Explicitly links to the GitHub repository source file: "https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md" — external/planning-and-task-breakdown.md:10.
- Categorizes `planning-and-task-breakdown` within the `Plan` phase ("Plan phase" — external/planning-and-task-breakdown.md:5), with sidebar description "Break the spec into small, verifiable, ordered tasks." — external/planning-and-task-breakdown.md:12.
- Associates the skill with slash command "/plan" — external/planning-and-task-breakdown.md:5.
- Unlike other external catalog entries (such as `external/performance-optimization.md`), this page contains no "More in the Plan phase" related skills grid section before the footer.

## Context cost
22310 bytes (~5578 tokens at 4 bytes/token). Follows 0 invoked files. Total: 22310 bytes (~5578 tokens).
