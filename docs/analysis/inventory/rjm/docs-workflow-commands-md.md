---
package: rjm
path: docs/workflow-commands.md
type: doc
bytes: 7471
unit: inv-rjm-194
in_scope_via: README.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/workflow-commands.md

## Purpose — required, verbatim
> "Slash commands for structured development phases. Each command invokes specialized agents and quality gates." — docs/workflow-commands.md:3

## Design intent — required
Authoritative reference manual for the repository's six lifecycle slash commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). It establishes a linear, chained development pipeline progressing from problem statements through milestone decomposition, TDD vertical slice implementation, multi-dimensional quality gating across six specialized agents, five-axis pre-merge code review, and automated pre-flight shipping validation. It documents the replacement of legacy numbered workflow commands (`/0-init` through `/4-security`) with stack-agnostic, platform-agnostic commands that separate requirements from planning and deepen verification gates. Without this reference, developers and autonomous agents would lack a unified operational contract defining the inputs, outputs, agent/skill invocations, and quality thresholds required at each stage of development.

## Phase — required
cross-phase

## Inputs — required
- Problem statements or issue numbers for `/spec` (docs/workflow-commands.md:47, 50, 55).
- Spec output or issue numbers for `/plan` (docs/workflow-commands.md:72, 77).
- Plan steps or atomic task descriptions for `/build` (docs/workflow-commands.md:92, 95, 100).
- Component or failure descriptions, diffs, and PR type classifications (CODE, WORKFLOW, CONFIG, DOCS, MIXED) for `/test` (docs/workflow-commands.md:117, 122).
- Git branches or PR numbers, diffs against base branch for `/review` (docs/workflow-commands.md:149, 154).
- Target branches (default `main`) and pre-flight check statuses for `/ship` (docs/workflow-commands.md:179, 182, 186).

## Outputs — required
- Structured requirements specification with problem statement, acceptance criteria, exclusions, open questions, and CVA summary (docs/workflow-commands.md:58, 61).
- Execution plan with shippable milestones, exit criteria, S/M/L sized atomic tasks, dependency graph, risk register, and deferred items persisted via execution-plans skill (docs/workflow-commands.md:79-82, 84).
- Production code, unit tests, atomic commits with conventional commit messages, and quality scores (docs/workflow-commands.md:92, 102-104).
- Six-gate test report with per-gate verdicts (PASS, WARN, CRITICAL_FAIL), findings, and evidence (docs/workflow-commands.md:114, 125, 138).
- Five-axis code review findings with file:line locations, severities (Critical, Important, Suggestion), and remediation recommendations (docs/workflow-commands.md:156, 168).
- Ship pre-flight report with per-check PASS/FAIL status, validated PR description, and created PR link (docs/workflow-commands.md:188, 200).

## Invokes — required
- command /spec — docs/workflow-commands.md:10
- command /plan — docs/workflow-commands.md:10
- command /build — docs/workflow-commands.md:10
- command /test — docs/workflow-commands.md:10
- command /review — docs/workflow-commands.md:10
- command /ship — docs/workflow-commands.md:10
- agent analyst — docs/workflow-commands.md:59
- agent decision-critic — docs/workflow-commands.md:59
- agent critic — docs/workflow-commands.md:59
- agent milestone-planner — docs/workflow-commands.md:79
- agent task-decomposer — docs/workflow-commands.md:80
- skill execution-plans — docs/workflow-commands.md:81
- agent implementer — docs/workflow-commands.md:101
- skill code-qualities-assessment — docs/workflow-commands.md:104
- agent qa — docs/workflow-commands.md:124
- agent security — docs/workflow-commands.md:124
- agent devops — docs/workflow-commands.md:124
- agent architect — docs/workflow-commands.md:124
- skill security-scan — docs/workflow-commands.md:163
- skill golden-principles — docs/workflow-commands.md:166
- skill taste-lints — docs/workflow-commands.md:166
- reference implementer.shared.md — docs/workflow-commands.md:212
- doc CLAUDE.md — docs/workflow-commands.md:227
- doc AGENTS.md — docs/workflow-commands.md:228

## Invoked by — required
- README.md — README.md:344, 543
- docs/when-to-use.md — docs/when-to-use.md:13, 30, 32, 94

## Concepts named — required, verbatim
- `Lifecycle Commands` — docs/workflow-commands.md:1 — defined here
- `Standard Feature Workflow` — docs/workflow-commands.md:17 — defined here
- `Quick Fix Workflow` — docs/workflow-commands.md:28 — defined here
- `Research-First Workflow` — docs/workflow-commands.md:36 — defined here
- `Commonality/Variability Analysis` — docs/workflow-commands.md:57 — defined here
- `CVA` — docs/workflow-commands.md:57 — defined here
- `acceptance criteria` — docs/workflow-commands.md:58 — defined here
- `milestones` — docs/workflow-commands.md:69 — defined here
- `pre-mortem` — docs/workflow-commands.md:82 — defined here
- `vertical slices` — docs/workflow-commands.md:92 — defined here
- `TDD` — docs/workflow-commands.md:92 — defined here
- `atomic commits` — docs/workflow-commands.md:92 — defined here
- `CODE` — docs/workflow-commands.md:122 — defined here
- `WORKFLOW` — docs/workflow-commands.md:122 — defined here
- `CONFIG` — docs/workflow-commands.md:122 — defined here
- `DOCS` — docs/workflow-commands.md:122 — defined here
- `MIXED` — docs/workflow-commands.md:122 — defined here
- `PASS` — docs/workflow-commands.md:125 — defined here
- `WARN` — docs/workflow-commands.md:125 — defined here
- `CRITICAL_FAIL` — docs/workflow-commands.md:125 — defined here
- `Critical` — docs/workflow-commands.md:156 — defined here
- `Important` — docs/workflow-commands.md:156 — defined here
- `Suggestion` — docs/workflow-commands.md:156 — defined here
- `pre-flight checks` — docs/workflow-commands.md:186 — defined here
- `pre-flight validation` — docs/workflow-commands.md:176 — defined here
- `/0-init` — docs/workflow-commands.md:212 — defined here
- `/1-plan` — docs/workflow-commands.md:213 — defined here
- `/2-impl` — docs/workflow-commands.md:214 — defined here
- `/3-qa` — docs/workflow-commands.md:215 — defined here
- `/4-security` — docs/workflow-commands.md:216 — defined here

## Structure
- # Lifecycle Commands Reference — docs/workflow-commands.md:1
- ## Overview — docs/workflow-commands.md:5
- ## Getting Started — docs/workflow-commands.md:15
- ### Standard Feature Workflow — docs/workflow-commands.md:17
- ### Quick Fix Workflow — docs/workflow-commands.md:28
- ### Research-First Workflow — docs/workflow-commands.md:36
- ## Command Reference — docs/workflow-commands.md:43
- ### /spec -- Define What to Build — docs/workflow-commands.md:45
- ### /plan -- Plan How to Build It — docs/workflow-commands.md:67
- ### /build -- Build Incrementally — docs/workflow-commands.md:90
- ### /test -- Prove It Works — docs/workflow-commands.md:112
- ### /review -- Review Before Merge — docs/workflow-commands.md:144
- ### /ship -- Ship It — docs/workflow-commands.md:174
- ## Lifecycle vs. Old Workflow Commands — docs/workflow-commands.md:206
- ## Related — docs/workflow-commands.md:225

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/workflow-commands.md:59 · Names decision-critic as an agent ("analyst, decision-critic, and critic agents"), but decision-critic is implemented as a skill under .claude/skills/decision-critic rather than an agent under .claude/agents/.

## Observations
Provides explicit migration mappings from legacy numbered commands (/0-init through /4-security) to the modern six-phase lifecycle commands. Addresses all Phase 1V verification findings by including agent decision-critic and all five invoked skills (execution-plans, code-qualities-assessment, security-scan, golden-principles, taste-lints) in Invokes, and all finding severities (Critical, Important, Suggestion), PR types (CODE, WORKFLOW, CONFIG, DOCS, MIXED), and legacy numbered commands in Concepts named.

## Context cost
7471 bytes, ~1868 tokens.
