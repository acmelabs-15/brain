---
package: rjm
path: templates/agents/backlog-generator.shared.md
type: agent
bytes: 6298
unit: inv-rjm-314
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/backlog-generator.shared.md

## Purpose — required, verbatim
> "Autonomous backlog generator that analyzes project state (open issues, PRs, code health) when agent slots are idle and creates 3-5 sized, actionable tasks. Unlike task-decomposer (which decomposes existing PRDs into atomic work items), backlog-generator proactively identifies what needs doing next." — templates/agents/backlog-generator.shared.md:3

## Design intent — required
Proactive backlog replenishment subagent designed for multi-agent workflows. When agent execution slots are idle, it scans repository state (open issues, pull requests, code health, test coverage gaps, and technical debt) to generate 3 to 5 well-scoped, sized GitHub issues. Unlike reactive decomposition agents such as `task-decomposer` which break down pre-existing PRDs or epics into atomic tasks, `backlog-generator` proactively uncovers what needs doing next. By enforcing bracketed complexity sizing (`[XS]` to `[XXL]`) on issue titles, it enables the orchestrator to route tasks to appropriate model tiers, while strict batch bounds (3-5 tasks) prevent backlog flooding and duplicate triage.

## Phase — required
rjm:plan

## Inputs — required
- Optional focus area or priority override via argument prompt: `argument-hint: Optionally specify focus area or priority override` — templates/agents/backlog-generator.shared.md:4
- Codebase state via read-only tools: `tools_vscode:` ($toolset:editor, $toolset:knowledge) — templates/agents/backlog-generator.shared.md:5-7, and `tools_copilot:` ($toolset:editor, $toolset:knowledge) — templates/agents/backlog-generator.shared.md:8-10
- Project state: "open issues, PRs, code health" — templates/agents/backlog-generator.shared.md:39
- Existing open issues for deduplication: "4. **Deduplicate** against existing open issues before creating new tasks" — templates/agents/backlog-generator.shared.md:71
- Cross-session memory queries: `mcp__cloudmcp-manager__memory-search_nodes` — templates/agents/backlog-generator.shared.md:81

## Outputs — required
- 3 to 5 sized tasks created as GitHub issues: "3. **Create** 3-5 well-scoped tasks as GitHub issues with:" — templates/agents/backlog-generator.shared.md:66
- Sized issue titles: "Title prefixed with a size label (see below)" — templates/agents/backlog-generator.shared.md:67
- Acceptance criteria format: "Verifiable checkboxes, not vague descriptions" — templates/agents/backlog-generator.shared.md:32
- Memory observations: `mcp__cloudmcp-manager__memory-add_observations` — templates/agents/backlog-generator.shared.md:88
- Orchestrator summary and recommendations: "Return to orchestrator with summary and recommendations" — templates/agents/backlog-generator.shared.md:142

## Invokes — required
- agent task-decomposer — templates/agents/backlog-generator.shared.md:130
- agent analyst — templates/agents/backlog-generator.shared.md:131
- agent milestone-planner — templates/agents/backlog-generator.shared.md:132

## Invoked by — required
- doc backlog-generator — docs/agent-catalog.md:18
- template backlog-generator — templates/AGENTS.md:182

## Concepts named — required, verbatim
- `Core Identity` — templates/agents/backlog-generator.shared.md:14 — defined here
- `Style Guide Compliance` — templates/agents/backlog-generator.shared.md:18 — defined here
- `complexity sizes` — templates/agents/backlog-generator.shared.md:31 — defined here
- `Activation Profile` — templates/agents/backlog-generator.shared.md:35 — defined here
- `Core Mission` — templates/agents/backlog-generator.shared.md:41 — defined here
- `Scope Distinction` — templates/agents/backlog-generator.shared.md:45 — defined here
- `task-decomposer` — templates/agents/backlog-generator.shared.md:50 — used here
- `Constraints` — templates/agents/backlog-generator.shared.md:54 — defined here
- `Key Responsibilities` — templates/agents/backlog-generator.shared.md:62 — defined here
- `Memory Protocol` — templates/agents/backlog-generator.shared.md:74 — defined here
- `Size Labels` — templates/agents/backlog-generator.shared.md:97 — defined here
- `complexity-based model routing` — templates/agents/backlog-generator.shared.md:100 — defined here
- `Guidelines` — templates/agents/backlog-generator.shared.md:118 — defined here
- `Handoff Options` — templates/agents/backlog-generator.shared.md:126 — defined here
- `Handoff Protocol` — templates/agents/backlog-generator.shared.md:134 — defined here
- `Execution Mindset` — templates/agents/backlog-generator.shared.md:145 — defined here

## Structure
- # Backlog Generator Agent — templates/agents/backlog-generator.shared.md:12
- ## Core Identity — templates/agents/backlog-generator.shared.md:14
- ## Style Guide Compliance — templates/agents/backlog-generator.shared.md:18
- ## Activation Profile — templates/agents/backlog-generator.shared.md:35
- ## Core Mission — templates/agents/backlog-generator.shared.md:41
- ## Scope Distinction — templates/agents/backlog-generator.shared.md:45
- ## Constraints — templates/agents/backlog-generator.shared.md:54
- ## Key Responsibilities — templates/agents/backlog-generator.shared.md:62
- ## Memory Protocol — templates/agents/backlog-generator.shared.md:74
- ## Size Labels (REQUIRED) — templates/agents/backlog-generator.shared.md:97
- ## Guidelines — templates/agents/backlog-generator.shared.md:118
- ## Handoff Options — templates/agents/backlog-generator.shared.md:126
- ## Handoff Protocol — templates/agents/backlog-generator.shared.md:134
- ## Execution Mindset — templates/agents/backlog-generator.shared.md:145

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · README.md:419 · README claims `backlog-generator` is "Copilot CLI only", but template declares support for both VS Code (`tools_vscode`) and Copilot CLI (`tools_copilot`).

## Observations
- Autonomous discovery mechanism: specifically activated when agent execution slots are idle to uncover unassigned work and gaps.
- Complexity-based model routing: uses size labels (`[XS]`, `[S]`, `[M]`, `[L]`, `[XL]`, `[XXL]`) in issue titles to inform the orchestrator whether to delegate to lighter or heavier reasoning models.
- Clear demarcation between proactive discovery (`backlog-generator`) and reactive decomposition (`task-decomposer`).
- Variant relation: shares 77% of lines with `.claude/agents/backlog-generator.md` (ledger VARIANT V25).

## Context cost
6298 bytes (approx. 1575 tokens).
