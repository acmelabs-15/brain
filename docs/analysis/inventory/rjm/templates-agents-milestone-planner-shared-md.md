---
package: rjm
path: templates/agents/milestone-planner.shared.md
type: agent
bytes: 6805
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/milestone-planner.shared.md

## Purpose — required, verbatim
> "Use when you say \"break this epic into milestones\", \"plan this roadmap item\", or hand it a roadmap epic. Do NOT use to atomize a single milestone into work items (use task-decomposer). High-rigor planning assistant who translates roadmap epics into implementation-ready work packages with clear milestones, dependencies, and acceptance criteria. Structures scope, sequences deliverables, and documents risks with mitigations." — templates/agents/milestone-planner.shared.md:3

## Design intent — required
The `milestone-planner` shared agent template defines a planning coordinator that decomposes roadmap epics into implementation-ready, independently shippable milestone packages. It bridges high-level strategic product intent and atomic task execution by structuring work into vertical slices (targeting 3-10 person-day "M" sizing), constructing explicit ASCII dependency graphs to uncover critical paths and parallel workstreams, establishing observable exit criteria with rollback plans, and documenting risk triggers with concrete mitigations.

## Phase — required
rjm:coordinator

## Inputs — required
- Roadmap epics or roadmap items provided via `argument-hint` ("Provide the epic or roadmap item to plan" — templates/agents/milestone-planner.shared.md:4).
- Context from roadmap and architecture documents read via editor and knowledge toolsets (templates/agents/milestone-planner.shared.md:6-10).
- Prior plans and architectural constraints queried from Serena memory (`mcp__serena__read_memory` — templates/agents/milestone-planner.shared.md:171).

## Outputs — required
- Structured epic plan documents conforming to the plan template (templates/agents/milestone-planner.shared.md:124), containing overview, objectives, milestone definitions (`M[N]`), dependency graph, cross-milestone risks, open questions, and assumptions.
- Handoff reports returned to orchestrator specifying milestone count, total effort estimate, critical path length, top 3 risks, and recommended next agent (templates/agents/milestone-planner.shared.md:175-185).

## Invokes — required
- tool mcp__serena__read_memory — templates/agents/milestone-planner.shared.md:171
- agent task-decomposer — templates/agents/milestone-planner.shared.md:182
- agent critic — templates/agents/milestone-planner.shared.md:183
- agent architect — templates/agents/milestone-planner.shared.md:184
- agent implementer — templates/agents/milestone-planner.shared.md:185

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:33

## Concepts named — required, verbatim
- `coordinator` — templates/agents/milestone-planner.shared.md:2 — defined here
- `Core Behavior` — templates/agents/milestone-planner.shared.md:17 — defined here
- `First-Principles Planning` — templates/agents/milestone-planner.shared.md:33 — defined here
- `Milestone Structure` — templates/agents/milestone-planner.shared.md:45 — defined here
- `Dependency Graph` — templates/agents/milestone-planner.shared.md:78 — defined here
- `Exit Criteria Rules` — templates/agents/milestone-planner.shared.md:90 — defined here
- `Risk Documentation` — templates/agents/milestone-planner.shared.md:99 — defined here
- `Sizing and Sequencing` — templates/agents/milestone-planner.shared.md:111 — defined here
- `Plan Template` — templates/agents/milestone-planner.shared.md:122 — defined here
- `Anti-Patterns to Reject` — templates/agents/milestone-planner.shared.md:150 — defined here
- `Constraints` — templates/agents/milestone-planner.shared.md:161 — defined here
- `Tools` — templates/agents/milestone-planner.shared.md:169 — defined here
- `Handoff` — templates/agents/milestone-planner.shared.md:173 — defined here

## Structure
- # Milestone Planner Agent — templates/agents/milestone-planner.shared.md:13
- ## Core Behavior — templates/agents/milestone-planner.shared.md:17
- ## When to Produce vs When to Ask — templates/agents/milestone-planner.shared.md:23
- ## First-Principles Planning — templates/agents/milestone-planner.shared.md:33
- ## Milestone Structure — templates/agents/milestone-planner.shared.md:45
- ## Dependency Graph — templates/agents/milestone-planner.shared.md:78
- ## Exit Criteria Rules — templates/agents/milestone-planner.shared.md:90
- ## Risk Documentation — templates/agents/milestone-planner.shared.md:99
- ## Sizing and Sequencing — templates/agents/milestone-planner.shared.md:111
- ## Plan Template — templates/agents/milestone-planner.shared.md:122
- ## Anti-Patterns to Reject — templates/agents/milestone-planner.shared.md:150
- ## Constraints — templates/agents/milestone-planner.shared.md:161
- ## Tools — templates/agents/milestone-planner.shared.md:169
- ## Handoff — templates/agents/milestone-planner.shared.md:173

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Establishes a distinct separation of concerns with `task-decomposer`: `milestone-planner` plans epics into milestones, while `task-decomposer` atomizes a single milestone into atomic tasks (`templates/agents/milestone-planner.shared.md:3`).
- Forms VARIANT V1 with `.claude/agents/milestone-planner.md` (96% shared). Divergence card is at `docs/analysis/inventory/rjm/_divergence/claude-agents-milestone-planner-md--templates-agents-milestone-planner-shared-md.md`.

## Context cost
6,805 bytes (~1,701 tokens) standalone. Loads no subsidiary files directly.
