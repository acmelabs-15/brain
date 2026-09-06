---
package: rjm
path: docs/task-classification-guide.md
type: doc
bytes: 9276
unit: inv-rjm-193
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/task-classification-guide.md

## Purpose — required, verbatim
> "This guide provides a systematic approach to classifying tasks for optimal agent routing. Accurate classification ensures tasks are routed to agents with the right capabilities." — docs/task-classification-guide.md:5

## Design intent — required
Defines a systematic three-dimensional classification framework for routing software tasks to appropriate specialized agent sequences. Classifies tasks across Task Type (9 categories), Complexity Level (Simple, Multi-Step, Multi-Domain), and Risk Level (Low, Medium, High, Critical), providing trigger indicators, routing paths, concrete worked examples, and a decision flowchart for orchestrator routing.

## Phase — required
cross-phase

## Inputs — required
- "request" — docs/task-classification-guide.md:26
- "Error messages or stack traces" — docs/task-classification-guide.md:35
- "Package or library URLs" — docs/task-classification-guide.md:113
- "GitHub issues" — docs/task-classification-guide.md:115

## Outputs — required
- "Agent Sequence" — docs/task-classification-guide.md:28
- "Quick Classification Matrix" — docs/task-classification-guide.md:245
- "Decision Flowchart" — docs/task-classification-guide.md:328

## Invokes — required
- agent analyst — docs/task-classification-guide.md:28
- agent architect — docs/task-classification-guide.md:28
- agent milestone-planner — docs/task-classification-guide.md:28
- agent critic — docs/task-classification-guide.md:28
- agent implementer — docs/task-classification-guide.md:28
- agent qa — docs/task-classification-guide.md:28
- agent devops — docs/task-classification-guide.md:51
- agent security — docs/task-classification-guide.md:51
- agent roadmap — docs/task-classification-guide.md:74
- agent explainer — docs/task-classification-guide.md:96
- agent high-level-advisor — docs/task-classification-guide.md:120
- agent independent-thinker — docs/task-classification-guide.md:120
- agent task-decomposer — docs/task-classification-guide.md:120
- doc when-to-use.md — docs/task-classification-guide.md:382
- doc orchestrator-routing-algorithm.md — docs/task-classification-guide.md:383
- doc routing-flowchart.md — docs/task-classification-guide.md:384
- doc agent-interview-protocol.md — docs/task-classification-guide.md:385

## Invoked by — required
- doc when-to-use.md — docs/when-to-use.md:14
- doc orchestrator-routing-algorithm.md — docs/orchestrator-routing-algorithm.md:636
- doc routing-flowchart.md — docs/diagrams/routing-flowchart.md:241

## Concepts named — required, verbatim
- `Task Classification Guide` — docs/task-classification-guide.md:1 — defined here
- `Classification Dimensions` — docs/task-classification-guide.md:7 — defined here
- `Task Type` — docs/task-classification-guide.md:11 — defined here
- `Complexity Level` — docs/task-classification-guide.md:12 — defined here
- `Risk Level` — docs/task-classification-guide.md:13 — defined here
- `Feature Development` — docs/task-classification-guide.md:19 — defined here
- `Bug Fix` — docs/task-classification-guide.md:30 — defined here
- `Infrastructure` — docs/task-classification-guide.md:41 — defined here
- `Strategic/Planning` — docs/task-classification-guide.md:65 — defined here
- `Research/Investigation` — docs/task-classification-guide.md:76 — defined here
- `Refactoring` — docs/task-classification-guide.md:98 — defined here
- `Ideation` — docs/task-classification-guide.md:109 — defined here
- `Quick Classification Matrix` — docs/task-classification-guide.md:245 — defined here
- `Decision Flowchart` — docs/task-classification-guide.md:328 — defined here

## Structure
- # Task Classification Guide — docs/task-classification-guide.md:1
- ## Purpose — docs/task-classification-guide.md:3
- ## Classification Dimensions — docs/task-classification-guide.md:7
- ## Dimension 1: Task Type — docs/task-classification-guide.md:17
- ### Feature Development — docs/task-classification-guide.md:19
- ### Bug Fix — docs/task-classification-guide.md:30
- ### Infrastructure — docs/task-classification-guide.md:41
- ### Security — docs/task-classification-guide.md:53
- ### Strategic/Planning — docs/task-classification-guide.md:65
- ### Research/Investigation — docs/task-classification-guide.md:76
- ### Documentation — docs/task-classification-guide.md:87
- ### Refactoring — docs/task-classification-guide.md:98
- ### Ideation — docs/task-classification-guide.md:109
- ## Dimension 2: Complexity Level — docs/task-classification-guide.md:126
- ### Simple — docs/task-classification-guide.md:128
- ### Multi-Step — docs/task-classification-guide.md:149
- ### Multi-Domain — docs/task-classification-guide.md:168
- ## Dimension 3: Risk Level — docs/task-classification-guide.md:189
- ### Low Risk — docs/task-classification-guide.md:191
- ### Medium Risk — docs/task-classification-guide.md:204
- ### High Risk — docs/task-classification-guide.md:216
- ### Critical Risk — docs/task-classification-guide.md:229
- ## Quick Classification Matrix — docs/task-classification-guide.md:245
- ## Classification Examples — docs/task-classification-guide.md:264
- ### Example 1: CWE-78 Shell Injection Fix — docs/task-classification-guide.md:266
- ### Example 2: Add Logout Button — docs/task-classification-guide.md:278
- ### Example 3: Fix Typo in README — docs/task-classification-guide.md:290
- ### Example 4: New OAuth Integration — docs/task-classification-guide.md:302
- ### Example 5: CI Pipeline Optimization — docs/task-classification-guide.md:314
- ## Decision Flowchart — docs/task-classification-guide.md:328
- ## Related Documents — docs/task-classification-guide.md:380

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides explicit agent sequence chains based on task characteristics, such as routing Security tasks through `analyst -> security -> architect -> critic -> implementer -> qa` and Ideation tasks through an 11-agent pipeline. Establishes risk floors, requiring QA validation for Medium risk and mandatory Security agent involvement for Critical risk.

## Context cost
9276 bytes, approximately 2300 tokens.
