---
package: rjm
path: .claude/agents/backlog-generator.md
type: agent
bytes: 6991
unit: inv-rjm-64
in_scope_via: .agents/architecture/ADR-046-planning-agent-rename.md
aliases: []
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/backlog-generator.md

## Purpose — required, verbatim
> "Autonomous backlog generator that analyzes project state (open issues, PRs, code health) when agent slots are idle and creates 3-5 sized, actionable tasks. Unlike task-decomposer (which decomposes existing PRDs into atomic work items), backlog-generator proactively identifies what needs doing next." — .claude/agents/backlog-generator.md:3

## Design intent — required
Proactive backlog discovery subagent that scans repository state (open issues, PRs, code health, test coverage gaps, technical debt) during idle agent execution slots to generate 3-5 well-scoped, sized, actionable GitHub issues. Unlike reactive decomposition agents like `task-decomposer` which break down existing PRDs into work items, `backlog-generator` discovers what needs doing next, applying strict complexity sizing (`[XS]` to `[XXL]`) that directly drives model routing in the orchestrator, prioritizing bug fixes and test coverage over technical debt and new features while strictly capping batch size at 3-5 to avoid backlog flooding.

## Phase — required
rjm:plan

## Inputs — required
- Optional focus area or priority override via argument prompt (`argument-hint: Optionally specify focus area or priority override` — .claude/agents/backlog-generator.md:7)
- Codebase state via read-only tools: `Read`, `Grep`, `Glob` (.claude/agents/backlog-generator.md:36)
- GitHub issues, PRs, and project health via repository skill wrappers or bash (.claude/agents/backlog-generator.md:37)
- Context via Memory Router (`search_memory.py`) and Serena memory tools (.claude/agents/backlog-generator.md:38-43)
- Existing open issues for deduplication (.claude/agents/backlog-generator.md:81)

## Outputs — required
- 3 to 5 sized tasks created as GitHub issues with complexity labels, descriptions, and verifiable acceptance criteria checkboxes (.claude/agents/backlog-generator.md:69-80, 106-124, 147)
- Memory entries stored via Serena tools (`mcp__serena__write_memory`) with name `backlog-planning-[area]` (.claude/agents/backlog-generator.md:97-100, 148)
- Summary recommendations to orchestrator (e.g. routing `[XXL]` tasks to `task-decomposer`) (.claude/agents/backlog-generator.md:149-150)

## Invokes — required
- script search_memory.py — .claude/agents/backlog-generator.md:39
- agent task-decomposer — .claude/agents/backlog-generator.md:137
- agent analyst — .claude/agents/backlog-generator.md:138
- agent milestone-planner — .claude/agents/backlog-generator.md:139

## Invoked by — required
- doc backlog-generator — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:136
- doc backlog-generator — .agents/architecture/ADR-046-planning-agent-rename.md:42
- doc backlog-generator — .claude/agents/AGENTS.md:144
- doc backlog-generator — .claude/agents/orchestrator.md:84
- doc backlog-generator — README.md:419
- doc backlog-generator — docs/agent-catalog.md:18
- doc backlog-generator — templates/AGENTS.md:182

## Concepts named — required, verbatim
- `Style Guide Compliance` — .claude/agents/backlog-generator.md:15 — defined here
- `Complexity sizes` — .claude/agents/backlog-generator.md:28 — defined here
- `Claude Code Tools` — .claude/agents/backlog-generator.md:32 — defined here
- `Memory Router` — .claude/agents/backlog-generator.md:38 — used here
- `Activation Profile` — .claude/agents/backlog-generator.md:45 — defined here
- `Scope Distinction` — .claude/agents/backlog-generator.md:55 — defined here
- `Memory Protocol` — .claude/agents/backlog-generator.md:84 — defined here
- `Size Labels` — .claude/agents/backlog-generator.md:104 — defined here
- `Handoff Options` — .claude/agents/backlog-generator.md:133 — defined here
- `Handoff Protocol` — .claude/agents/backlog-generator.md:141 — defined here
- `Execution Mindset` — .claude/agents/backlog-generator.md:152 — defined here

## Structure
- # Backlog Generator Agent — .claude/agents/backlog-generator.md:9
- ## Core Identity — .claude/agents/backlog-generator.md:11
- ## Style Guide Compliance — .claude/agents/backlog-generator.md:15
- ## Claude Code Tools — .claude/agents/backlog-generator.md:32
- ## Activation Profile — .claude/agents/backlog-generator.md:45
- ## Core Mission — .claude/agents/backlog-generator.md:51
- ## Scope Distinction — .claude/agents/backlog-generator.md:55
- ## Constraints — .claude/agents/backlog-generator.md:64
- ## Key Responsibilities — .claude/agents/backlog-generator.md:72
- ## Memory Protocol — .claude/agents/backlog-generator.md:84
- ## Size Labels (REQUIRED) — .claude/agents/backlog-generator.md:104
- ## Guidelines — .claude/agents/backlog-generator.md:125
- ## Handoff Options — .claude/agents/backlog-generator.md:133
- ## Handoff Protocol — .claude/agents/backlog-generator.md:141
- ## Execution Mindset — .claude/agents/backlog-generator.md:152

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · README.md:419 · README claims `backlog-generator` is "Copilot CLI only", but this file provides a native Claude Code agent configuration under `.claude/agents/`.

## Observations
- Autonomous discovery mechanism: specifically activated when agent execution slots are idle to discover unassigned work.
- Complexity-based model routing: uses size labels (`[XS]`, `[S]`, `[M]`, `[L]`, `[XL]`, `[XXL]`) prefixed in task titles to inform the orchestrator whether to delegate to lighter or heavier reasoning models.
- Clear demarcation between proactive discovery (`backlog-generator`) and reactive decomposition (`task-decomposer`).
- Forms VARIANT pair V25 with `templates/agents/backlog-generator.shared.md` (77% shared lines).

## Context cost
6991 bytes. Approximately 1,750 tokens. Model specified as `sonnet`.
