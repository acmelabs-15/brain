---
package: rjm
path: templates/agents/task-decomposer.shared.md
type: agent
bytes: 10303
unit: inv-rjm-323
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/task-decomposer.shared.md

## Purpose — required, verbatim
> "Task decomposition specialist who breaks PRDs and epics into atomic, estimable work items with clear acceptance criteria and done definitions. Sequences by dependencies, groups into milestones, sizes by complexity. Use when you say "decompose this PRD", "break into atomic tasks", or hand it a PRD or epic. Do NOT use to sequence roadmap epics into milestones (use milestone-planner)." — templates/agents/task-decomposer.shared.md:3

## Design intent — required
Cross-platform shared template defining the prompt and operational protocol for the `task-decomposer` agent, a planning support specialist that atomizes PRDs and epics into discrete, estimable work items with verifiable acceptance criteria, dependency orderings, and milestone groupings. It enforces complexity-based sizing (XS through XL) rather than time estimation, incorporates a strict 10% threshold Estimate Reconciliation Protocol to detect and reconcile estimate drift against source epics, and requires handoff checklists to prevent incomplete artifacts from reaching downstream reviewers. Without this agent template, high-level requirements would enter implementation unsegmented, leading to scope creep, hidden dependencies, and unreconciled effort estimates.

## Phase — required
rjm:plan

## Inputs — required
- PRD or epic via argument hint (`argument-hint: Provide the PRD or epic to break into tasks` — templates/agents/task-decomposer.shared.md:4)
- Source PRD file (`.agents/planning/PRD-[name].md` — templates/agents/task-decomposer.shared.md:147)
- Editor and knowledge toolsets (`$toolset:editor`, `$toolset:knowledge` — templates/agents/task-decomposer.shared.md:6-7, 9-10)
- Historical task estimation patterns retrieved from memory (`python3 .claude/skills/memory/scripts/search_memory.py --query "task estimation patterns [feature type]"` — templates/agents/task-decomposer.shared.md:71) or direct file reads of `.serena/memories/` (templates/agents/task-decomposer.shared.md:82)

## Outputs — required
- Sized, sequenced task list with acceptance criteria and dependency graph saved to `.agents/planning/TASKS-[feature-name].md` (templates/agents/task-decomposer.shared.md:141)
- Estimate reconciliation table and status when derived task estimates diverge >10% from source PRD/epic (templates/agents/task-decomposer.shared.md:219, 243-252)
- Estimation pattern memory file persisted via `mcp__serena__write_memory` to `pattern-estimation-[feature]` (templates/agents/task-decomposer.shared.md:77-80)
- Handoff validation summary and routing recommendation to orchestrator (templates/agents/task-decomposer.shared.md:321-326)

## Invokes — required
none

## Invoked by — required
- doc task-decomposer — docs/agent-catalog.md:45
- doc task-decomposer — docs/workflow-commands.md:80
- template task-decomposer — templates/AGENTS.md:181
- agent task-decomposer — templates/agents/orchestrator.shared.md:114
- agent task-decomposer — templates/agents/backlog-generator.shared.md:130
- agent task-decomposer — templates/agents/milestone-planner.shared.md:182
- agent task-decomposer — templates/agents/pr-comment-responder.shared.md:155

## Concepts named — required, verbatim
- `Task Decomposer Agent` — templates/agents/task-decomposer.shared.md:12 — defined here
- `Core Identity` — templates/agents/task-decomposer.shared.md:14 — defined here
- `Style Guide Compliance` — templates/agents/task-decomposer.shared.md:18 — defined here
- `Activation Profile` — templates/agents/task-decomposer.shared.md:37 — defined here
- `Core Mission` — templates/agents/task-decomposer.shared.md:43 — defined here
- `Scope Distinction` — templates/agents/task-decomposer.shared.md:47 — defined here
- `milestone-planner` — templates/agents/task-decomposer.shared.md:51 — used here
- `task-decomposer` — templates/agents/task-decomposer.shared.md:52 — defined here
- `Key Responsibilities` — templates/agents/task-decomposer.shared.md:56 — defined here
- `Memory Protocol` — templates/agents/task-decomposer.shared.md:64 — defined here
- `ADR-037` — templates/agents/task-decomposer.shared.md:66 — used here
- `Decomposition Process` — templates/agents/task-decomposer.shared.md:84 — defined here
- `Task Definition Format` — templates/agents/task-decomposer.shared.md:113 — defined here
- `Task List Template` — templates/agents/task-decomposer.shared.md:139 — defined here
- `Complexity Guidelines` — templates/agents/task-decomposer.shared.md:185 — defined here
- `Handoff Options` — templates/agents/task-decomposer.shared.md:195 — defined here
- `critic` — templates/agents/task-decomposer.shared.md:199 — used here
- `implementer` — templates/agents/task-decomposer.shared.md:200 — used here
- `Execution Mindset` — templates/agents/task-decomposer.shared.md:203 — defined here
- `Estimate Reconciliation Protocol` — templates/agents/task-decomposer.shared.md:213 — defined here
- `10% Threshold Rule` — templates/agents/task-decomposer.shared.md:217 — defined here
- `Reconciliation Process` — templates/agents/task-decomposer.shared.md:221 — defined here
- `Reconciliation Actions` — templates/agents/task-decomposer.shared.md:231 — defined here
- `Anti-Pattern: Unreconciled Estimate Drift` — templates/agents/task-decomposer.shared.md:254 — defined here
- `Handoff Validation` — templates/agents/task-decomposer.shared.md:271 — defined here
- `Handoff Protocol` — templates/agents/task-decomposer.shared.md:316 — defined here

## Structure
- # Task Decomposer Agent — templates/agents/task-decomposer.shared.md:12
- ## Core Identity — templates/agents/task-decomposer.shared.md:14
- ## Style Guide Compliance — templates/agents/task-decomposer.shared.md:18
- ## Activation Profile — templates/agents/task-decomposer.shared.md:37
- ## Core Mission — templates/agents/task-decomposer.shared.md:43
- ## Scope Distinction — templates/agents/task-decomposer.shared.md:47
- ## Key Responsibilities — templates/agents/task-decomposer.shared.md:56
- ## Memory Protocol — templates/agents/task-decomposer.shared.md:64
- ## Decomposition Process — templates/agents/task-decomposer.shared.md:84
- ### Phase 1: Understand Scope — templates/agents/task-decomposer.shared.md:86
- ### Phase 2: Break Down — templates/agents/task-decomposer.shared.md:95
- ### Phase 3: Sequence — templates/agents/task-decomposer.shared.md:104
- ## Task Definition Format — templates/agents/task-decomposer.shared.md:113
- ## Task List Template — templates/agents/task-decomposer.shared.md:139
- ## Complexity Guidelines — templates/agents/task-decomposer.shared.md:185
- ## Handoff Options — templates/agents/task-decomposer.shared.md:195
- ## Execution Mindset — templates/agents/task-decomposer.shared.md:203
- ## Estimate Reconciliation Protocol — templates/agents/task-decomposer.shared.md:213
- ### 10% Threshold Rule — templates/agents/task-decomposer.shared.md:217
- ### Reconciliation Process — templates/agents/task-decomposer.shared.md:221
- ### Reconciliation Actions (one MUST be chosen) — templates/agents/task-decomposer.shared.md:231
- ### Output Template Addition — templates/agents/task-decomposer.shared.md:239
- ### Anti-Pattern: Unreconciled Estimate Drift — templates/agents/task-decomposer.shared.md:254
- ## Handoff Validation — templates/agents/task-decomposer.shared.md:271
- ### Task Breakdown Complete (to critic) — templates/agents/task-decomposer.shared.md:275
- ### Estimate Reconciliation Handoff — templates/agents/task-decomposer.shared.md:288
- ### Scope Concern Handoff (to milestone-planner) — templates/agents/task-decomposer.shared.md:298
- ### Validation Failure — templates/agents/task-decomposer.shared.md:308
- ## Handoff Protocol — templates/agents/task-decomposer.shared.md:316
- ## Handoff Options (Recommendations for Orchestrator) — templates/agents/task-decomposer.shared.md:327

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Cross-platform shared template forming VARIANT V22 with `.claude/agents/task-decomposer.md` (86% shared lines, 6 diff hunks). The shared template uses Mermaid syntax (`graph TD`) for dependency graphs instead of text arrows, adds an explicit Notes block to the task definition format, rearranges section order (placing Memory Protocol, Complexity Guidelines, and Execution Mindset earlier), and replaces Claude Code-specific tool blocks and `uv run python` invocations with cross-platform toolsets and `python3`.

## Context cost
10303 bytes, approximately 2580 tokens. Loads no external references directly.
