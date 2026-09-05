---
package: addy
path: external/planning-and-task-breakdown.md
type: doc
bytes: 22310
unit: inv-addy-27
aliases: []
memo_inputs:
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/planning-and-task-breakdown.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — external/planning-and-task-breakdown.md:5

## Design intent — required
Web documentation and catalog page published at `skills.addy.ie/skills/planning-and-task-breakdown/` for the `planning-and-task-breakdown` skill. It provides developers and autonomous coding agents with a web-accessible summary of Addy's plan-phase methodology (decomposing specifications into ordered tasks with acceptance criteria, dependency mapping, vertical slicing, task sizing, and verification checkpoints), standalone installation commands via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`), triggering conditions, navigation to the `/plan` command, and a link to the canonical GitHub source (`skills/planning-and-task-breakdown/SKILL.md`). Without this page, agents and engineers navigating the external web catalog would lack an indexed landing page and installation snippets for the sole skill representing Addy's Plan lifecycle phase.

## Phase — required
addy:Plan

## Inputs — required
- Trigger condition: "You have a spec and need implementable units." — external/planning-and-task-breakdown.md:5
- Installation command: "npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown" — external/planning-and-task-breakdown.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/planning-and-task-breakdown.md:8
- Canonical skill source link: `skills/planning-and-task-breakdown/SKILL.md` — external/planning-and-task-breakdown.md:10

## Outputs — required
none

## Invokes — required
- skill planning-and-task-breakdown — external/planning-and-task-breakdown.md:5
- command /plan — external/planning-and-task-breakdown.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — external/planning-and-task-breakdown.md:5 — defined here
- `Plan phase` — external/planning-and-task-breakdown.md:5, 12 — used here
- `/plan` — external/planning-and-task-breakdown.md:5, 12 — used here
- `ordered tasks` — external/planning-and-task-breakdown.md:5 — used here
- `acceptance criteria` — external/planning-and-task-breakdown.md:5 — used here
- `dependency ordering` — external/planning-and-task-breakdown.md:5 — used here
- `skills CLI` — external/planning-and-task-breakdown.md:6 — used here
- `anatomy` — external/planning-and-task-breakdown.md:9 — defined here
- `Overview` — external/planning-and-task-breakdown.md:10 — used here
- `When to Use` — external/planning-and-task-breakdown.md:10 — used here
- `Process` — external/planning-and-task-breakdown.md:10 — used here
- `Rationalizations` — external/planning-and-task-breakdown.md:10 — used here
- `Red Flags` — external/planning-and-task-breakdown.md:10 — used here
- `Verification` — external/planning-and-task-breakdown.md:10 — used here
- `SKILL.md` — external/planning-and-task-breakdown.md:10 — used here
- `full lifecycle` — external/planning-and-task-breakdown.md:14 — used here
- `The lifecycle` — external/planning-and-task-breakdown.md:15 — used here
- `Loop engineering` — external/planning-and-task-breakdown.md:15 — used here

## Structure
- "planning-and-task-breakdown" — external/planning-and-task-breakdown.md:5
- "Install just this skill" — external/planning-and-task-breakdown.md:5
- "How this skill is structured" — external/planning-and-task-breakdown.md:8
- "Plan phase" — external/planning-and-task-breakdown.md:12
- "Product" — external/planning-and-task-breakdown.md:15
- "Setup" — external/planning-and-task-breakdown.md:15
- "Resources" — external/planning-and-task-breakdown.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/planning-and-task-breakdown.md:9: Page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" specifying six standardized sections (01 Overview to 06 Verification), but skills/planning-and-task-breakdown/SKILL.md contains additional structural sections: The Planning Process with five steps (lines 22-124), Task Sizing Guidelines (line 125), Output Files / Task List Target (lines 143-165), Plan Document Template (line 166), Parallelization Opportunities (line 213), and See Also (line 255).
- doc-drift · external/planning-and-task-breakdown.md:5: External summary ("Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.") differs from repo skill description in skills/planning-and-task-breakdown/SKILL.md:3 ("Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.").
- cross-file-contradiction · external/planning-and-task-breakdown.md:5, 12: External page links slash command `/plan` exclusively, whereas repository commands provide both `.claude/commands/plan.md` (`/plan`) and `commands/planning.toml` (`/planning`) as entry points invoking `planning-and-task-breakdown`.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/planning-and-task-breakdown/`.
- Documents single-skill installation via the open `skills` CLI using `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` as well as whole-pack installation via `npx skills add addyosmani/agent-skills` (line 8).
- Identifies `planning-and-task-breakdown` as the sole canonical skill in Addy's `Plan` phase (`addy:Plan`). Unlike pages for multi-skill phases (such as Review or Build), this catalog page has no "More in the Plan phase" related skill grid.
- Contains an external GitHub link pointing to `https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` (line 10).

## Context cost
22310 bytes, ~5578 tokens. As an external web landing page, it is accessed over HTTP by developers or browser-based agents rather than loaded directly into standard coding agent prompt contexts.
