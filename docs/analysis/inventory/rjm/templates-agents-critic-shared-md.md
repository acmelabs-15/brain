---
package: rjm
path: templates/agents/critic.shared.md
type: agent
bytes: 19518
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/critic.shared.md

## Purpose — required, verbatim
> "You stress-test plans before implementation. Find what breaks first. Deliver a clear verdict with specific, actionable findings. Block approval when risks are not mitigated." — templates/agents/critic.shared.md:18

## Design intent — required
An adversarial, fresh-context reviewer operating on the highest model tier (Opus) that stress-tests plans, specifications, and architecture proposals before implementation begins. It counters the pervasive confirmation bias of same-context authors by enforcing a minimum finding quota (at least three issues), treating unanimous prior consensus as a red flag, scoring plans across six distinct review axes, and pushing the burden of proof back to authors under Brandolini's Law. It delivers unequivocal verdicts (APPROVED, APPROVED_WITH_CONCERNS, NEEDS_REVISION, BLOCKED) to prevent flawed plans and unmitigated risks from proceeding to code execution.

## Phase — required
rjm:plan

## Inputs — required
- Plan file path or planning artifact specified via `argument-hint` ("Provide the plan file path or planning artifact to review") — templates/agents/critic.shared.md:5.
- Governance constraints and binding architecture records searched under `.agents/architecture/` (`ADR-NNN-title.md`) — templates/agents/critic.shared.md:40.
- Autonomy rules from `AGENTS.md` — templates/agents/critic.shared.md:16.
- Critical thinking reference `.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md` — templates/agents/critic.shared.md:88.

## Outputs — required
- Markdown critique artifact saved to `.agents/critique/[NNN]-[plan-name]-critique-[YYYY-MM-DD].md` containing verdict with confidence, summary, scores by axis table, three-question reasoning protocol, critical findings (max 5), approval conditions, and 1-sentence recommendation — templates/agents/critic.shared.md:164-196.

## Invokes — required
- reference AGENTS.md — templates/agents/critic.shared.md:16
- reference critical-thinking-brandolinis-law.md — templates/agents/critic.shared.md:88
- agent implementer — templates/agents/critic.shared.md:235
- agent planner — templates/agents/critic.shared.md:236
- agent orchestrator — templates/agents/critic.shared.md:237

## Invoked by — required
- agent critic — docs/agent-catalog.md:22
- agent critic — templates/agents/orchestrator.shared.md:71
- agent critic — templates/agents/architect.shared.md:737
- agent critic — templates/agents/explainer.shared.md:139

## Concepts named — required, verbatim
- `coordinator` — templates/agents/critic.shared.md:2 — used here
- `opus` — templates/agents/critic.shared.md:3 — used here
- `Critic Agent` — templates/agents/critic.shared.md:14 — defined here
- `Autonomy Guardrail` — templates/agents/critic.shared.md:16 — defined here
- `Reviewer Asymmetry` — templates/agents/critic.shared.md:20 — defined here
- `Reasoning Protocol` — templates/agents/critic.shared.md:30 — defined here
- `Adversarial Coverage Checklist` — templates/agents/critic.shared.md:44 — defined here
- `Persona Evaluation` — templates/agents/critic.shared.md:62 — defined here
- `Naive Reader` — templates/agents/critic.shared.md:70 — defined here
- `Hostile Expert` — templates/agents/critic.shared.md:71 — defined here
- `Cynic` — templates/agents/critic.shared.md:72 — defined here
- `Brandolini's Law` — templates/agents/critic.shared.md:78 — defined here
- `Core Behavior` — templates/agents/critic.shared.md:90 — defined here
- `Review Axes` — templates/agents/critic.shared.md:114 — defined here
- `Completeness` — templates/agents/critic.shared.md:120 — defined here
- `Alignment` — templates/agents/critic.shared.md:121 — defined here
- `Feasibility` — templates/agents/critic.shared.md:122 — defined here
- `Risk coverage` — templates/agents/critic.shared.md:123 — defined here
- `Testability` — templates/agents/critic.shared.md:124 — defined here
- `Traceability` — templates/agents/critic.shared.md:125 — defined here
- `Pre-PR Readiness Validation` — templates/agents/critic.shared.md:127 — defined here
- `Verdict Rules` — templates/agents/critic.shared.md:138 — defined here
- `APPROVED` — templates/agents/critic.shared.md:144 — defined here
- `APPROVED_WITH_CONCERNS` — templates/agents/critic.shared.md:145 — defined here
- `NEEDS_REVISION` — templates/agents/critic.shared.md:146 — defined here
- `BLOCKED` — templates/agents/critic.shared.md:147 — defined here
- `Critique Length Bounds` — templates/agents/critic.shared.md:151 — defined here
- `Critique Document Structure` — templates/agents/critic.shared.md:162 — defined here
- `Escalation` — templates/agents/critic.shared.md:198 — defined here
- `Verdict Carve-Out` — templates/agents/critic.shared.md:209 — defined here
- `Anti-Patterns to Catch` — templates/agents/critic.shared.md:211 — defined here
- `Handoff` — templates/agents/critic.shared.md:227 — defined here

## Structure
- # Critic Agent — templates/agents/critic.shared.md:14
- ## Reviewer Asymmetry (Read First) — templates/agents/critic.shared.md:20
- ## Reasoning Protocol — templates/agents/critic.shared.md:30
- ## Adversarial Coverage Checklist — templates/agents/critic.shared.md:44
- ## Persona Evaluation (Prose Artifacts Only) — templates/agents/critic.shared.md:62
- ## Brandolini's Law: Review Burden Allocation — templates/agents/critic.shared.md:78
- ## Core Behavior — templates/agents/critic.shared.md:90
- ## Review Axes — templates/agents/critic.shared.md:114
- ## Pre-PR Readiness Validation — templates/agents/critic.shared.md:127
- ## Verdict Rules — templates/agents/critic.shared.md:138
- ## Critique Length Bounds — templates/agents/critic.shared.md:151
- ## Critique Document Structure — templates/agents/critic.shared.md:162
- ## Escalation — templates/agents/critic.shared.md:198
- ## Anti-Patterns to Catch — templates/agents/critic.shared.md:211
- ## Tools — templates/agents/critic.shared.md:223
- ## Handoff — templates/agents/critic.shared.md:227

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cross-platform tool definition: defines generic `$toolset:editor` and `$toolset:knowledge` for VS Code and Copilot.
- Variant relationship: shares 89% of distinct lines with `.claude/agents/critic.md` (ledger id V16; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-critic-md--templates-agents-critic-shared-md.md`).
- Architectural guardrails: mandates searching `.agents/architecture/` for ADRs before critiquing and explicitly articulates Brandolini's Law to prevent low-evidence assertions from consuming disproportionate reviewer energy.

## Context cost
19518 bytes (approx. 4880 tokens).
