---
package: rjm
path: .claude/skills/skillforge/references/overview-and-triggers.md
type: reference
bytes: 5742
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/overview-and-triggers.md, sha256: 663351048ad745ba6e3141bb5d51ed670959475e88412c9a7c304fd37ce46b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/overview-and-triggers.md

## Purpose — required, verbatim
> "**Any input works.** SkillForge will intelligently route to the right action:" — .claude/skills/skillforge/references/overview-and-triggers.md:5 (no explicit purpose statement)

## Design intent — required
Provides the complete reference catalog of invocation examples, activation triggers (both creation triggers and v4.0 routing triggers), end-to-end process diagrams, tool escalation policies, and command-line options for SkillForge. It acts as the routing and invocation handbook, explaining how inputs are dispatched through Phase 0 triage to recommendations, improvements, compositions, or full 4-phase creation.

## Phase — required
cross-phase

## Inputs — required
- Any user input (natural language prompts, error messages, code snippets, URLs, skill questions, task requests)

## Outputs — required
- Routing decisions to `USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, or `COMPOSE`
- CLI command executions (`SkillForge: {goal}`, `SkillForge --plan-only`, `SkillForge --quick`, `SkillForge --triage`, `SkillForge --improve`)

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:46
- skill skillforge — .claude/skills/skillforge/SKILL.md:297

## Concepts named — required, verbatim
- `Overview and Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:1 — defined here
- `Creation Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:30 — defined here
- `Routing Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:38 — defined here
- `Process Overview` — .claude/skills/skillforge/references/overview-and-triggers.md:55 — defined here
- `Phase 0: SKILL TRIAGE` — .claude/skills/skillforge/references/overview-and-triggers.md:63 — used here
- `Tool Escalation Policy` — .claude/skills/skillforge/references/overview-and-triggers.md:110 — defined here

## Structure
- `# Overview and Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:1
- `## Quick Start` — .claude/skills/skillforge/references/overview-and-triggers.md:3
- `## Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:28
- `### Creation Triggers` — .claude/skills/skillforge/references/overview-and-triggers.md:30
- `### Routing Triggers (NEW in v4.0)` — .claude/skills/skillforge/references/overview-and-triggers.md:38
- `## Process Overview` — .claude/skills/skillforge/references/overview-and-triggers.md:55
- `### Tool Escalation Policy` — .claude/skills/skillforge/references/overview-and-triggers.md:110
- `## Commands` — .claude/skills/skillforge/references/overview-and-triggers.md:122

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The Tool Escalation Policy (.claude/skills/skillforge/references/overview-and-triggers.md:110-119) mandates starting with least privilege (`Read`, `Glob`, `Grep`, `Write`, `Edit`) and adding `Bash`, `WebFetch`/`WebSearch`, or `Task` only when strictly necessary.

## Context cost
5,742 bytes (~1,435 tokens).
