---
package: rjm
path: .claude/agents/task-decomposer.md
type: agent
bytes: 10436
unit: inv-rjm-73
in_scope_via: .claude/agents/orchestrator.md
aliases: []
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/task-decomposer.md

## Purpose — required, verbatim
> "Task decomposition specialist who breaks PRDs and epics into atomic, estimable work items with clear acceptance criteria and done definitions. Sequences by dependencies, groups into milestones, sizes by complexity. Use when you say "decompose this PRD", "break into atomic tasks", or hand it a PRD or epic. Do NOT use to sequence roadmap epics into milestones (use milestone-planner)." — .claude/agents/task-decomposer.md:3

## Design intent — required
Specialized task decomposition agent that transforms PRDs and epics into atomic, estimable work items (TASK-NNN) with verifiable acceptance criteria, dependency sequencing, milestone grouping, and complexity sizing (XS/S/M/L/XL). It enforces an Estimate Reconciliation Protocol (the 10% Threshold Rule) to prevent scope drift between high-level epic estimates and granular task sums, and specifies structured handoff validation checklists to critic, implementer, or milestone-planner. Without it, engineering plans would suffer from vague work definitions, unsequenced dependencies, and untracked scope inflation during implementation.

## Phase — required
rjm:plan

## Inputs — required
- PRD documents (.agents/planning/PRD-[name].md), epics, or architectural requirements.
- Argument hint: `Provide the PRD or epic to break into tasks` — .claude/agents/task-decomposer.md:7
- Codebase context and estimation patterns retrieved via Memory Router.

## Outputs — required
- Task breakdown document saved to:
  `.agents/planning/TASKS-[feature].md` — .claude/agents/task-decomposer.md:260
- Estimation patterns stored to memory via `mcp__serena__write_memory`.
- Handoff recommendations to orchestrator (routing to critic, implementer, or milestone-planner).

## Invokes — required
none

## Invoked by — required
- agent task-decomposer — .claude/agents/orchestrator.md:103

## Concepts named — required, verbatim
- `task-decomposer` — .claude/agents/task-decomposer.md:2 — defined here
- `Task Decomposer` — .claude/agents/task-decomposer.md:9 — defined here
- `Core Identity` — .claude/agents/task-decomposer.md:11 — defined here
- `Style Guide Compliance` — .claude/agents/task-decomposer.md:15 — defined here
- `Activation Profile` — .claude/agents/task-decomposer.md:34 — defined here
- `Claude Code Tools` — .claude/agents/task-decomposer.md:40 — defined here
- `ADR-037` — .claude/agents/task-decomposer.md:48 — used here
- `Core Mission` — .claude/agents/task-decomposer.md:55 — defined here
- `Scope Distinction` — .claude/agents/task-decomposer.md:59 — defined here
- `Key Responsibilities` — .claude/agents/task-decomposer.md:68 — defined here
- `Decomposition Process` — .claude/agents/task-decomposer.md:76 — defined here
- `Task Definition Format` — .claude/agents/task-decomposer.md:105 — defined here
- `Complexity Guidelines` — .claude/agents/task-decomposer.md:128 — defined here
- `Output Format` — .claude/agents/task-decomposer.md:138 — defined here
- `Memory Protocol` — .claude/agents/task-decomposer.md:175 — defined here
- `Estimate Reconciliation Protocol` — .claude/agents/task-decomposer.md:195 — defined here
- `10% Threshold Rule` — .claude/agents/task-decomposer.md:199 — defined here
- `Handoff Validation` — .claude/agents/task-decomposer.md:253 — defined here
- `Handoff Protocol` — .claude/agents/task-decomposer.md:298 — defined here
- `Handoff Options` — .claude/agents/task-decomposer.md:309 — defined here
- `Execution Mindset` — .claude/agents/task-decomposer.md:317 — defined here

## Structure
- # Task Decomposer
- ## Core Identity
- ## Style Guide Compliance
- ## Activation Profile
- ## Claude Code Tools
- ## Core Mission
- ## Scope Distinction
- ## Key Responsibilities
- ## Decomposition Process
- ### Phase 1: Understand Scope
- ### Phase 2: Break Down
- ### Phase 3: Sequence
- ## Task Definition Format
- ## Complexity Guidelines
- ## Output Format
- ## Memory Protocol
- ## Estimate Reconciliation Protocol
- ### 10% Threshold Rule
- ### Reconciliation Process
- ### Reconciliation Actions (one MUST be chosen)
- ### Output Template Addition
- ### Anti-Pattern: Unreconciled Estimate Drift
- ## Handoff Validation
- ### Task Breakdown Complete (to critic)
- ### Estimate Reconciliation Handoff
- ### Scope Concern Handoff (to milestone-planner)
- ### Validation Failure
- ## Handoff Protocol
- ## Handoff Options (Recommendations for Orchestrator)
- ## Execution Mindset

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Shares 86% of lines with templates/agents/task-decomposer.shared.md (ledger variant V22, 6 hunks). Canonical version defines Claude Code specific tools and retains sequential task flow. Subagents cannot delegate directly and must return task breakdowns to the orchestrator.

## Context cost
10436 bytes, approximately 2610 tokens. Loads no additional files when invoked.
