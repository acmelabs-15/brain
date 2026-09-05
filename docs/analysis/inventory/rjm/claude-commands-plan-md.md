---
package: rjm
path: .claude/commands/plan.md
type: command
bytes: 3120
unit: inv-rjm-74
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "Plan how to build it. Decompose specs into milestones with dependencies and risk mitigations. Run after /spec." — .claude/commands/plan.md:2

## Design intent — required
Second phase in rjm's lifecycle pipeline, decomposing validated specifications into independently shippable milestones and atomic verifiable tasks. It orchestrates a multi-agent pipeline (`milestone-planner`, `task-decomposer`, `analyst`, and `critic`), evaluates plans across five concrete axes (scope integrity, dependency ordering, risk coverage, estimate confidence, reversibility), and enforces a front-gate requirement ensuring no ungated ideas enter execution.

## Phase — required
rjm:plan

## Inputs — required
- Spec output or issue number from argument ("argument-hint: spec-output-or-issue-number" — .claude/commands/plan.md:4; "If $ARGUMENTS is empty, check for recent /spec output in the conversation. If none found, ask the user what to plan." — .claude/commands/plan.md:11)
- Context file `@CLAUDE.md` (.claude/commands/plan.md:7)
- Spec requirements, design, and testable acceptance criteria ("Planning a spec that was never gated manufactures work." — .claude/commands/plan.md:15)
- Codebase structure mapped via Grep and Glob ("Map sub-problems to existing code" — .claude/commands/plan.md:20)

## Outputs — required
- Persisted versioned plan artifact ("Invoke Skill(skill=\"execution-plans\") to persist the plan as a versioned artifact." — .claude/commands/plan.md:23)
- Structured plan text covering milestones, tasks, dependency graph, risk register, and deferred items ("Structured plan:" — .claude/commands/plan.md:43)

## Invokes — required
- doc CLAUDE.md — .claude/commands/plan.md:7
- agent milestone-planner — .claude/commands/plan.md:21
- agent task-decomposer — .claude/commands/plan.md:22
- skill execution-plans — .claude/commands/plan.md:23
- agent analyst — .claude/commands/plan.md:24
- agent critic — .claude/commands/plan.md:25

## Invoked by — required
- command /plan — .claude/commands/build.md:2

## Concepts named — required, verbatim
- `front-gate` — .claude/commands/plan.md:15 — used here
- `six forcing questions` — .claude/commands/plan.md:15 — used here
- `front-gate-before-pipeline` — .claude/commands/plan.md:15 — used here
- `Evaluation Axes` — .claude/commands/plan.md:27 — defined here
- `Scope integrity` — .claude/commands/plan.md:29 — defined here
- `Dependency ordering` — .claude/commands/plan.md:30 — defined here
- `Risk coverage` — .claude/commands/plan.md:31 — defined here
- `Estimate confidence` — .claude/commands/plan.md:32 — defined here
- `Reversibility` — .claude/commands/plan.md:33 — defined here
- `Programming by Intention` — .claude/commands/plan.md:37 — used here
- `OODA Loop` — .claude/commands/plan.md:38 — used here
- `First Principles` — .claude/commands/plan.md:39 — used here

## Structure
- ## If you arrived here without a spec, run the front-gate first — .claude/commands/plan.md:13
- ## Process — .claude/commands/plan.md:17
- ## Evaluation Axes — .claude/commands/plan.md:27
- ## Principles — .claude/commands/plan.md:35
- ## Output — .claude/commands/plan.md:41

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces front-gate entry constraint (delegating back to `/spec` if no requirement/design/acceptance criteria exist), preventing premature work decomposition.
- Chains four specialized agents (`milestone-planner`, `task-decomposer`, `analyst`, `critic`) to evaluate plans across 5 distinct axes.

## Context cost
3,120 bytes. Approximately 780 tokens.
