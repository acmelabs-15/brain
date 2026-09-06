---
package: rjm
path: docs/orchestrator-routing-algorithm.md
type: doc
bytes: 21360
unit: inv-rjm-192
in_scope_via: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md
aliases: []
memo_inputs:
  - {path: docs/orchestrator-routing-algorithm.md, sha256: cbea0866b5e552898e725545f5c7888dd77260f42d64fa1475e46a6580d0fe47}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/orchestrator-routing-algorithm.md

## Purpose — required, verbatim
> "This document provides the explicit algorithm for routing tasks to appropriate agents. It enables both human decision-making and potential automation of agent selection." — docs/orchestrator-routing-algorithm.md:5

## Design intent — required
Defines the 4-phase dispatch algorithm (Classify, Select, Execute, Synthesize) governing root orchestrator routing across specialist agents, formalizing task categorization, complexity and risk heuristics, sequence generation, parallel agent grouping, and strict ADR-009 conflict resolution with weighted voting and escalation to `high-level-advisor`.

## Phase — required
cross-phase

## Inputs — required
- "task" — docs/orchestrator-routing-algorithm.md:23
- "lefthook.yml" — docs/orchestrator-routing-algorithm.md:71
- "scripts/validation/git_hook_policy.py" — docs/orchestrator-routing-algorithm.md:71
- ".agents/architecture/ADR-009-parallel-safe-multi-agent-design.md" — docs/orchestrator-routing-algorithm.md:217

## Outputs — required
- "outputs" — docs/orchestrator-routing-algorithm.md:397
- "resolutions" — docs/orchestrator-routing-algorithm.md:454

## Invokes — required
- doc ADR-009 — docs/orchestrator-routing-algorithm.md:217
- file canonical-source-mirror.md — docs/orchestrator-routing-algorithm.md:237
- doc task-classification-guide.md — docs/orchestrator-routing-algorithm.md:636
- doc routing-flowchart.md — docs/orchestrator-routing-algorithm.md:637
- doc agent-interview-protocol.md — docs/orchestrator-routing-algorithm.md:638

## Invoked by — required
- doc ADR-078 — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:179
- skill security-detection — .claude/skills/security-detection/SKILL.md:191
- doc task-classification-guide.md — docs/task-classification-guide.md:383

## Concepts named — required, verbatim
`Classify` — docs/orchestrator-routing-algorithm.md:11 — defined here
`Select` — docs/orchestrator-routing-algorithm.md:12 — defined here
`Execute` — docs/orchestrator-routing-algorithm.md:13 — defined here
`Synthesize` — docs/orchestrator-routing-algorithm.md:14 — defined here
`PRIMARY_AGENT_MAP` — docs/orchestrator-routing-algorithm.md:100 — defined here
`AGENT_SEQUENCES` — docs/orchestrator-routing-algorithm.md:119 — defined here
`CONFLICT_VOTE_WEIGHTS` — docs/orchestrator-routing-algorithm.md:241 — defined here
`merge` — docs/orchestrator-routing-algorithm.md:221 — used here
`vote` — docs/orchestrator-routing-algorithm.md:222 — used here
`escalate` — docs/orchestrator-routing-algorithm.md:223 — used here
`high-level-advisor` — docs/orchestrator-routing-algorithm.md:213 — used here
`non_negotiable` — docs/orchestrator-routing-algorithm.md:301 — defined here

## Structure
# Orchestrator Routing Algorithm — docs/orchestrator-routing-algorithm.md:1
## Purpose — docs/orchestrator-routing-algorithm.md:3
## Algorithm Overview — docs/orchestrator-routing-algorithm.md:7
## Phase 1: Classification — docs/orchestrator-routing-algorithm.md:18
### Step 1.1: Identify Task Type — docs/orchestrator-routing-algorithm.md:20
### Step 1.2: Assess Complexity — docs/orchestrator-routing-algorithm.md:48
### Step 1.3: Determine Risk Level — docs/orchestrator-routing-algorithm.md:64
## Phase 2: Agent Selection — docs/orchestrator-routing-algorithm.md:95
### Step 2.1: Select Primary Agent — docs/orchestrator-routing-algorithm.md:97
### Step 2.2: Build Agent Sequence — docs/orchestrator-routing-algorithm.md:116
### Step 2.3: Add Mandatory Agents — docs/orchestrator-routing-algorithm.md:182
## Phase 2.5: Detect Conflicts and Escalate — docs/orchestrator-routing-algorithm.md:209
## Phase 3: Execution Strategy — docs/orchestrator-routing-algorithm.md:325
### Step 3.1: Determine Execution Mode — docs/orchestrator-routing-algorithm.md:327
### Step 3.2: Execute Agent Sequence — docs/orchestrator-routing-algorithm.md:355
### Execution Rules — docs/orchestrator-routing-algorithm.md:378
## Phase 4: Result Synthesis — docs/orchestrator-routing-algorithm.md:391
### Step 4.1: Collect Outputs — docs/orchestrator-routing-algorithm.md:393
### Step 4.2: Resolve Conflicts — docs/orchestrator-routing-algorithm.md:412
### Conflict Resolution Priority — docs/orchestrator-routing-algorithm.md:489
## Indicator Patterns — docs/orchestrator-routing-algorithm.md:510
### Security Indicators — docs/orchestrator-routing-algorithm.md:512
### Infrastructure Indicators — docs/orchestrator-routing-algorithm.md:525
### Research Indicators — docs/orchestrator-routing-algorithm.md:539
### Feature Indicators — docs/orchestrator-routing-algorithm.md:549
### Bug Indicators — docs/orchestrator-routing-algorithm.md:559
## Validation Against Historical CWE-78 Incident — docs/orchestrator-routing-algorithm.md:571
### Classification — docs/orchestrator-routing-algorithm.md:577
### Agent Sequence — docs/orchestrator-routing-algorithm.md:587
### Expected Behavior — docs/orchestrator-routing-algorithm.md:600
## Quick Reference — docs/orchestrator-routing-algorithm.md:613
### When to Use Orchestrator — docs/orchestrator-routing-algorithm.md:615
### Emergency Overrides — docs/orchestrator-routing-algorithm.md:624
## Related Documents — docs/orchestrator-routing-algorithm.md:634

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents a significant architectural cleanup eliminating an invented pairwise priority table that gave unearned authority to `security`, aligning strictly with ADR-009 where only `architect > implementer` holds weight and all other agents carry weight 1.
- Implements `non_negotiable` position checking, ensuring only dissenting non-negotiable stances trigger escalation rather than agreed-upon winners.
- Documents empirical validation against a historical CWE-78 shell injection incident in `.githooks/pre-commit`, detailing the multi-agent remediation sequence.

## Context cost
21360 bytes, ~5500 tokens. Detailed architectural routing specification.
