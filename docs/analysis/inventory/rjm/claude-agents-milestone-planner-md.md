---
package: rjm
path: .claude/agents/milestone-planner.md
type: agent
bytes: 6740
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/milestone-planner.md

## Purpose — required, verbatim
> "Use when you say \"break this epic into milestones\", \"plan this roadmap item\", or hand it a roadmap epic. Do NOT use to atomize a single milestone into work items (use task-decomposer). High-rigor planning assistant who translates roadmap epics into implementation-ready work packages with clear milestones, dependencies, and acceptance criteria. Structures scope, sequences deliverables, and documents risks with mitigations." — .claude/agents/milestone-planner.md:3

## Design intent — required
A planning coordinator agent that translates high-level roadmap epics into implementation-ready, independently shippable milestone packages. It bridges strategic product intent and atomic task execution by decomposing epics into vertical slices (targeting 3-10 person-day "M" sizing), constructing explicit ASCII dependency graphs to uncover parallelization opportunities and critical paths, establishing binary, observable exit criteria with rollback procedures, and documenting risk triggers with concrete mitigations. Without it, projects struggle with vague milestones, undetected cross-deliverable bottlenecks, and premature decomposition into untracked work items.

## Phase — required
rjm:coordinator

## Inputs — required
- Roadmap epics or roadmap items provided via `argument-hint` ("Provide the epic or roadmap item to plan") or orchestrator prompt.
- Roadmap documents and architecture specifications across the repository.
- Codebase structure and existing implementations inspected via `Read`, `Grep`, and `Glob`.
- Prior planning constraints and historical context retrieved via Serena memory tool (`mcp__serena__read_memory`).

## Outputs — required
- Structured Markdown plan documents (`# Plan: [Epic Name]`) containing:
  - Overview (summary of what, why, and outcome)
  - Objectives (measurable goals)
  - Milestones (M1, M2... specifying Outcome, Exit Criteria, Scope In/Out, Dependencies, Risks, Estimate with confidence rating, and Rollback)
  - Dependency Graph (ASCII diagram showing parallel branches and critical path)
  - Cross-milestone Risks
  - Open Questions
  - Documented Assumptions
- Plan tracking tasks managed via `TodoWrite`.

## Invokes — required
- tool Read — .claude/agents/milestone-planner.md:168
- tool Grep — .claude/agents/milestone-planner.md:168
- tool Glob — .claude/agents/milestone-planner.md:168
- tool TodoWrite — .claude/agents/milestone-planner.md:168
- tool Write — .claude/agents/milestone-planner.md:168
- tool mcp__serena__read_memory — .claude/agents/milestone-planner.md:168
- agent task-decomposer — .claude/agents/milestone-planner.md:179
- agent critic — .claude/agents/milestone-planner.md:180
- agent architect — .claude/agents/milestone-planner.md:181
- agent implementer — .claude/agents/milestone-planner.md:182

## Invoked by — required
- agent milestone-planner — .agents/AGENT-SYSTEM.md:81
- agent milestone-planner — README.md:400
- agent milestone-planner — docs/agent-catalog.md:33
- agent milestone-planner — .claude/agents/issue-feature-review.md:151

## Concepts named — required, verbatim
- `Milestone Planner Agent` — .claude/agents/milestone-planner.md:10 — defined here
- `Core Behavior` — .claude/agents/milestone-planner.md:14 — defined here
- `First-Principles Planning` — .claude/agents/milestone-planner.md:30 — defined here
- `Milestone Structure` — .claude/agents/milestone-planner.md:42 — defined here
- `vertical slice` — .claude/agents/milestone-planner.md:44 — defined here
- `Exit Criteria` — .claude/agents/milestone-planner.md:51 — defined here
- `Dependency Graph` — .claude/agents/milestone-planner.md:75 — defined here
- `Exit Criteria Rules` — .claude/agents/milestone-planner.md:87 — defined here
- `Risk Documentation` — .claude/agents/milestone-planner.md:96 — defined here
- `Sizing and Sequencing` — .claude/agents/milestone-planner.md:108 — defined here
- `Plan Template` — .claude/agents/milestone-planner.md:119 — defined here
- `Anti-Patterns to Reject` — .claude/agents/milestone-planner.md:147 — defined here

## Structure
- # Milestone Planner Agent — .claude/agents/milestone-planner.md:10
- ## Core Behavior — .claude/agents/milestone-planner.md:14
- ## When to Produce vs When to Ask — .claude/agents/milestone-planner.md:20
- ## First-Principles Planning — .claude/agents/milestone-planner.md:30
- ## Milestone Structure — .claude/agents/milestone-planner.md:42
- ## Dependency Graph — .claude/agents/milestone-planner.md:75
- ## Exit Criteria Rules — .claude/agents/milestone-planner.md:87
- ## Risk Documentation — .claude/agents/milestone-planner.md:96
- ## Sizing and Sequencing — .claude/agents/milestone-planner.md:108
- ## Plan Template — .claude/agents/milestone-planner.md:119
- ## Anti-Patterns to Reject — .claude/agents/milestone-planner.md:148
- ## Constraints — .claude/agents/milestone-planner.md:158
- ## Tools — .claude/agents/milestone-planner.md:166
- ## Handoff — .claude/agents/milestone-planner.md:170

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 96% of distinct lines with `templates/agents/milestone-planner.shared.md` (ledger V1).
- Distinct functional boundary enforced with `task-decomposer`: `milestone-planner` translates epics into shippable milestones, while `task-decomposer` atomizes an individual milestone into granular tasks.
- Enforces strict rejection of phase-based milestones ("design phase", "test phase") in favor of vertical slices that deliver observable value.

## Context cost
6740 bytes (approx. 1685 tokens).
