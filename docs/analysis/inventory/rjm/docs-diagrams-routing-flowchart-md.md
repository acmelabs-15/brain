---
package: rjm
path: docs/diagrams/routing-flowchart.md
type: doc
bytes: 7205
unit: inv-rjm-191
in_scope_via: docs/orchestrator-routing-algorithm.md
aliases: []
memo_inputs:
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/diagrams/routing-flowchart.md

## Purpose — required, verbatim
> "This document provides a visual representation of the orchestrator routing algorithm." — docs/diagrams/routing-flowchart.md:5

## Design intent — required
Provides visual Mermaid diagrams representing the complete multi-stage decision pipeline executed by the orchestrator. Covers the four sequential phases (Classify, Select, Execute, Synthesize), task type classification logic (checking security, infrastructure, questions, bugs, features), complexity assessment thresholds (domains > 2, files > 3, agents > 1), risk level determination (critical, high, medium/low), agent sequence assembly with mandatory security insertion and QA pairing, serial versus parallel group execution strategy, and a fixed conflict resolution hierarchy (security > architect > critic > escalation). Includes a historical routing walkthrough for a CWE-78 vulnerability remediation in pre-commit hooks. Without this document, the routing rules described in prose across other documents would lack a clear structural reference diagram.

## Phase — required
rjm:cross-phase

## Inputs — required
- Incoming task description ("RECEIVE[RECEIVE TASK]" — docs/diagrams/routing-flowchart.md:14)
- Task type, complexity assessment, and risk level ("INPUT[TASK TYPE +<br/>COMPLEXITY +<br/>RISK LEVEL]" — docs/diagrams/routing-flowchart.md:122)
- Sequence map lookups ("LOOKUP[LOOKUP IN SEQUENCE MAP]" — docs/diagrams/routing-flowchart.md:123)
- Execution compatibility pairs ("FOR_EACH[For each pair of agents]" — docs/diagrams/routing-flowchart.md:151)
- Agent conflict pairs ("CONFLICT[CONFLICT<br/>DETECTED]" — docs/diagrams/routing-flowchart.md:177)

## Outputs — required
- Primary specialist agent and assembled agent sequence ("PRIMARY[Select<br/>Primary]" — docs/diagrams/routing-flowchart.md:27; "SEQUENCE[Build Agent<br/>Sequence]" — docs/diagrams/routing-flowchart.md:28; "MANDATORY[Add Mandatory<br/>Agents]" — docs/diagrams/routing-flowchart.md:29)
- Executable serial queues and parallel groups ("SERIAL_QUEUE[Add to<br/>SERIAL<br/>queue]" — docs/diagrams/routing-flowchart.md:155; "PARALLEL_GROUP[Add to<br/>PARALLEL<br/>group]" — docs/diagrams/routing-flowchart.md:154)
- Final delivered result ("DELIVER[DELIVER RESULT]" — docs/diagrams/routing-flowchart.md:49)

## Invokes — required
none

## Invoked by — required
- doc docs/orchestrator-routing-algorithm.md — docs/orchestrator-routing-algorithm.md:637
- doc docs/task-classification-guide.md — docs/task-classification-guide.md:384

## Concepts named — required, verbatim
- `Orchestrator Routing Flowchart` — docs/diagrams/routing-flowchart.md:1 — defined here
- `orchestrator routing algorithm` — docs/diagrams/routing-flowchart.md:5 — used here
- `PHASE 1: CLASSIFY` — docs/diagrams/routing-flowchart.md:13 — used here
- `PHASE 2: SELECT` — docs/diagrams/routing-flowchart.md:23 — used here
- `PHASE 3: EXECUTE` — docs/diagrams/routing-flowchart.md:32 — used here
- `PHASE 4: SYNTHESIZE` — docs/diagrams/routing-flowchart.md:41 — used here
- `MULTI_DOMAIN` — docs/diagrams/routing-flowchart.md:87 — used here
- `MULTI_STEP` — docs/diagrams/routing-flowchart.md:90 — used here
- `SIMPLE` — docs/diagrams/routing-flowchart.md:94 — used here
- `CRITICAL` — docs/diagrams/routing-flowchart.md:106 — used here
- `HIGH` — docs/diagrams/routing-flowchart.md:109 — used here
- `PARALLEL GROUP` — docs/diagrams/routing-flowchart.md:38 — used here
- `SERIAL GROUP` — docs/diagrams/routing-flowchart.md:37 — used here
- `CWE-78` — docs/diagrams/routing-flowchart.md:192 — used here
- `lefthook.yml` — docs/diagrams/routing-flowchart.md:196 — used here

## Structure
- ## Overview — docs/diagrams/routing-flowchart.md:3
- ## Main Routing Flow — docs/diagrams/routing-flowchart.md:9
- ## Task Type Classification Flow — docs/diagrams/routing-flowchart.md:55
- ## Complexity Assessment Flow — docs/diagrams/routing-flowchart.md:80
- ## Risk Level Flow — docs/diagrams/routing-flowchart.md:99
- ## Agent Selection Flow — docs/diagrams/routing-flowchart.md:118
- ## Execution Strategy Flow — docs/diagrams/routing-flowchart.md:146
- ## Conflict Resolution Flow — docs/diagrams/routing-flowchart.md:173
- ## Historical Example: CWE-78 Routing — docs/diagrams/routing-flowchart.md:192
- ## Related Documents — docs/diagrams/routing-flowchart.md:238

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: "./orchestrator-routing-algorithm.md" — docs/diagrams/routing-flowchart.md:240 — broken relative link; target exists at docs/orchestrator-routing-algorithm.md.
- missing-path: "./task-classification-guide.md" — docs/diagrams/routing-flowchart.md:241 — broken relative link; target exists at docs/task-classification-guide.md.
- missing-path: "../.agents/governance/agent-interview-protocol.md" — docs/diagrams/routing-flowchart.md:242 — broken relative link; target exists at .agents/governance/agent-interview-protocol.md.

## Observations
- Contains seven detailed Mermaid diagrams specifying orchestrator behavior: main flow, task type classification, complexity assessment, risk level, agent selection, execution strategy, conflict resolution, and a historical CWE-78 remediation walk-through.
- Formalizes conflict resolution priority order: security > architect > critic > escalate to human/architecture authority.

## Context cost
7,205 bytes. Approximately 1,800 tokens.
