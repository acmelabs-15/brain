---
package: rjm
path: docs/workflow-commands.md
type: doc
bytes: 7471
unit: inv-rjm-194
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/workflow-commands.md

## Purpose — required, verbatim
> "Slash commands for structured development phases. Each command invokes specialized agents and quality gates." — docs/workflow-commands.md:3

## Design intent — required
Serves as the canonical manual and reference specification for the repository's six chained lifecycle commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). It defines standard multi-phase workflows (Standard Feature, Quick Fix, Research-First), specifies for each command its invocation syntax, responsibilities, dispatched specialist agents, execution gates, produced artifacts, and entry criteria. Furthermore, it records the architectural evolution from legacy numbered commands (`/0-init` through `/4-security`) to modern stack-agnostic, platform-agnostic commands with distinct requirements/planning separation and multi-dimensional quality gates.

## Phase — required
cross-phase

## Inputs — required
- "problem-statement-or-issue-number" — docs/workflow-commands.md:50
- "spec-output-or-issue-number" — docs/workflow-commands.md:72
- "plan-step-or-task-description" — docs/workflow-commands.md:95
- "component-or-failure-description" — docs/workflow-commands.md:117
- "branch-or-pr-number" — docs/workflow-commands.md:149
- "target-branch" — docs/workflow-commands.md:179

## Outputs — required
- "Structured requirements with problem statement, acceptance criteria, out-of-scope exclusions, open questions, and CVA summary." — docs/workflow-commands.md:61
- "Milestones with exit criteria, tasks per milestone, dependency graph, risk register, and deferred items." — docs/workflow-commands.md:84
- "Per-gate verdict table with findings, evidence, and overall PASS/WARN/CRITICAL_FAIL." — docs/workflow-commands.md:138
- "Per-finding format with location (file:line), severity, and fix recommendation." — docs/workflow-commands.md:168
- "Ship report with per-check PASS/FAIL, PR link if created, and follow-up items." — docs/workflow-commands.md:200

## Invokes — required
- command /spec — docs/workflow-commands.md:45
- command /plan — docs/workflow-commands.md:67
- command /build — docs/workflow-commands.md:90
- command /test — docs/workflow-commands.md:112
- command /review — docs/workflow-commands.md:144
- command /ship — docs/workflow-commands.md:174
- agent analyst — docs/workflow-commands.md:59
- agent critic — docs/workflow-commands.md:59
- agent milestone-planner — docs/workflow-commands.md:79
- agent task-decomposer — docs/workflow-commands.md:80
- agent implementer — docs/workflow-commands.md:101
- agent qa — docs/workflow-commands.md:124
- agent security — docs/workflow-commands.md:124
- agent devops — docs/workflow-commands.md:124
- agent architect — docs/workflow-commands.md:124

## Invoked by — required
- doc docs/workflow-commands.md — README.md:344
- doc docs/workflow-commands.md — docs/when-to-use.md:13

## Concepts named — required, verbatim
`Lifecycle Commands` — docs/workflow-commands.md:1 — defined here
`Standard Feature Workflow` — docs/workflow-commands.md:17 — defined here
`Quick Fix Workflow` — docs/workflow-commands.md:28 — defined here
`Research-First Workflow` — docs/workflow-commands.md:36 — defined here
`Commonality/Variability Analysis` — docs/workflow-commands.md:57 — used here
`execution-plans` — docs/workflow-commands.md:81 — used here
`code-qualities-assessment` — docs/workflow-commands.md:104 — used here
`Multi-dimensional quality validation` — docs/workflow-commands.md:114 — defined here
`Five-axis code review` — docs/workflow-commands.md:146 — defined here
`pre-flight checks` — docs/workflow-commands.md:190 — defined here
`Old Workflow Commands` — docs/workflow-commands.md:206 — defined here

## Structure
# Lifecycle Commands Reference — docs/workflow-commands.md:1
## Overview — docs/workflow-commands.md:5
## Getting Started — docs/workflow-commands.md:15
### Standard Feature Workflow — docs/workflow-commands.md:17
### Quick Fix Workflow — docs/workflow-commands.md:28
### Research-First Workflow — docs/workflow-commands.md:36
## Command Reference — docs/workflow-commands.md:43
### /spec -- Define What to Build — docs/workflow-commands.md:45
### /plan -- Plan How to Build It — docs/workflow-commands.md:67
### /build -- Build Incrementally — docs/workflow-commands.md:90
### /test -- Prove It Works — docs/workflow-commands.md:112
### /review -- Review Before Merge — docs/workflow-commands.md:144
### /ship -- Ship It — docs/workflow-commands.md:174
## Lifecycle vs. Old Workflow Commands — docs/workflow-commands.md:206
## Related — docs/workflow-commands.md:226

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/workflow-commands.md:28-34 — Quick Fix Workflow demonstrates `/build → /test → /ship` without `/review`, but `/ship` pre-flight checks at line 196 strictly require `/review` to have run with no unresolved Critical findings (blocking). As noted in docs/when-to-use.md:30, Quick Fix omits the `/review` step that `/ship` preflight enforces.

## Observations
Provides a clear structural migration table contrasting modern lifecycle commands against legacy numbered commands (`/0-init` through `/4-security`). Notable advancements include platform-agnostic commands using `Bash(*)` over PowerShell, separating problem specification from implementation planning, and replacing single QA passes with 6-gate multi-dimensional validation.

## Context cost
7471 bytes, approximately 1867 tokens.
