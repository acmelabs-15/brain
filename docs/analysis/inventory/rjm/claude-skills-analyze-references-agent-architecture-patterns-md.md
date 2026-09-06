---
package: rjm
path: .claude/skills/analyze/references/agent-architecture-patterns.md
type: reference
bytes: 2232
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/agent-architecture-patterns.md

## Purpose — required, verbatim
> "Narrow agents with clear goals outperform general-purpose agents. Most agent failures are architecture failures, not model failures." — .claude/skills/analyze/references/agent-architecture-patterns.md:9

## Design intent — required
Establishes design rules and diagnostic heuristics for creating specialized, reliable AI agents within the system. By enforcing a 7-10 skill budget per agent, a 6-step prompt structure, a 3-file planning pattern (`task_plan.md`, `findings.md`, `progress.md`) that maintains active attention, and testable constraints, it prevents tool confusion, context degradation, and capability creep across complex multi-step workflows.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/agent-architecture-patterns.md — .claude/skills/analyze/SKILL.md:71

## Concepts named — required, verbatim
- `Skill Budget Rule` — .claude/skills/analyze/references/agent-architecture-patterns.md:11 — defined here
- `6-Step Structured Prompt Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:15 — defined here
- `Core Mission` — .claude/skills/analyze/references/agent-architecture-patterns.md:17 — defined here
- `Role Identity` — .claude/skills/analyze/references/agent-architecture-patterns.md:18 — defined here
- `Decision Logic` — .claude/skills/analyze/references/agent-architecture-patterns.md:19 — defined here
- `Constraints` — .claude/skills/analyze/references/agent-architecture-patterns.md:20 — defined here
- `Output Format` — .claude/skills/analyze/references/agent-architecture-patterns.md:21 — defined here
- `Escalation Paths` — .claude/skills/analyze/references/agent-architecture-patterns.md:22 — defined here
- `3-File Planning Pattern` — .claude/skills/analyze/references/agent-architecture-patterns.md:24 — defined here
- `Context Engineering` — .claude/skills/analyze/references/agent-architecture-patterns.md:24 — used here
- `task_plan.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:27 — defined here
- `findings.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:28 — defined here
- `progress.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:29 — defined here
- `MCP Tool Selection Criteria` — .claude/skills/analyze/references/agent-architecture-patterns.md:34 — defined here
- `Meta-Rules for Agent Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:38 — defined here
- `Diagnostic Signals` — .claude/skills/analyze/references/agent-architecture-patterns.md:46 — defined here

## Structure
# Agent Architecture Patterns — .claude/skills/analyze/references/agent-architecture-patterns.md:7
## Skill Budget Rule — .claude/skills/analyze/references/agent-architecture-patterns.md:11
## 6-Step Structured Prompt Design — .claude/skills/analyze/references/agent-architecture-patterns.md:15
## 3-File Planning Pattern (Context Engineering) — .claude/skills/analyze/references/agent-architecture-patterns.md:24
## MCP Tool Selection Criteria — .claude/skills/analyze/references/agent-architecture-patterns.md:34
## Meta-Rules for Agent Design — .claude/skills/analyze/references/agent-architecture-patterns.md:38
## Diagnostic Signals — .claude/skills/analyze/references/agent-architecture-patterns.md:46

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides concrete architectural rules for agent construction, noting that re-reading plans (`task_plan.md`) serves as intentional attention manipulation to keep goals in context. Emphasizes limiting conditionals to 2 levels and rejecting vague instructions like "be helpful". Source frontmatter cites external `wiki/concepts/AI Productivity/Agent Architecture Patterns.md`.

## Context cost
2232 bytes, approximately 550 tokens.
