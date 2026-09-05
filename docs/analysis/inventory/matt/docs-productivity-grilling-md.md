---
package: matt
path: docs/productivity/grilling.md
type: doc
bytes: 10413
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/grilling.md

## Purpose — required, verbatim
> "`grilling` is the interview loop that stress-tests a plan, a decision, or an idea before anyone acts on it. It maps the subject as a **design tree**: every decision branches into the decisions that hang off it, and interviews you branch by branch until nothing is left silently assumed." — docs/productivity/grilling.md:3

## Design intent — required
Defines the canonical, foundational interview primitive and execution loop for Matt Pocock's skills repository. Models subjects as hierarchical design trees and batches prerequisite-settled inquiries into frontier rounds with numbered questions and explicit agent recommendations, while autonomously dispatching background sub-agents to investigate factual questions and protecting human decision authority behind a mandatory shared-understanding gate.

## Phase — required
matt:productivity

## Inputs — required
A plan, decision, idea, ticket, or problem statement under investigation, and numbered human responses to questions posed in each frontier round.

## Outputs — required
Shared understanding, settled design tree branches, and interactive interview transcript.

## Invokes — required
- doc grill-me — docs/productivity/grilling.md:15
- doc grill-with-docs — docs/productivity/grilling.md:16
- doc wayfinder — docs/productivity/grilling.md:17
- doc prototype — docs/productivity/grilling.md:18
- doc to-spec — docs/productivity/grilling.md:87
- doc triage — docs/productivity/grilling.md:87
- doc improve-codebase-architecture — docs/productivity/grilling.md:87
- doc ask-matt — docs/productivity/grilling.md:87

## Invoked by — required
- doc grilling — docs/productivity/grill-me.md:74
- doc grilling — docs/productivity/handoff.md:20
- doc grilling — docs/productivity/teach.md:20
- doc grilling — docs/productivity/to-questionnaire.md:20
- doc grilling — docs/productivity/wait-what.md:36

## Concepts named — required, verbatim
- `grilling` — docs/productivity/grilling.md:3 — defined here
- `design tree` — docs/productivity/grilling.md:3 — defined here
- `round` — docs/productivity/grilling.md:5 — defined here
- `frontier` — docs/productivity/grilling.md:5 — defined here
- `agent` — docs/productivity/grilling.md:9 — used here
- `skill` — docs/productivity/grilling.md:9 — used here
- `session` — docs/productivity/grilling.md:15 — used here
- `environment` — docs/productivity/grilling.md:29 — used here
- `sub-agent` — docs/productivity/grilling.md:29 — used here
- `models` — docs/productivity/grilling.md:61 — used here
- `harnesses` — docs/productivity/grilling.md:73 — used here
- `primitive` — docs/productivity/grilling.md:87 — defined here

## Structure
- ## What it does — docs/productivity/grilling.md:1
- ## When to reach for it — docs/productivity/grilling.md:7
- ## The round, the frontier, and who decides — docs/productivity/grilling.md:21
- ## What lives here and what lives in the wrappers — docs/productivity/grilling.md:33
- ## Common questions — docs/productivity/grilling.md:43
- ## It's working if — docs/productivity/grilling.md:75
- ## Where it fits — docs/productivity/grilling.md:85

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · docs/productivity/grilling.md:73 notes that `grill-with-docs` naming `grilling` and `domain-modeling` does not reliably load them across harnesses/models, resulting in improvised flat interviews lacking recommendations.
- `internal-contradiction` · docs/productivity/grilling.md:27 notes that recommendation lines (`➡️`) occasionally argue against the wording of the question, forcing users to answer "no" to agree with the recommendation.
- `doc-drift` · docs/productivity/grilling.md:61 notes weaker models frequently ignore the final confirmation gate and start implementation without permission.

## Observations
Establishes the strict boundary between facts (which the agent must autonomously research via sub-agents or local file reads) and decisions (which belong exclusively to the user). Rejects question caps as harmful to complex plans and emphasizes that round count must stay low (typically ~3 rounds) while question count remains comprehensive (~13–46 questions).

## Context cost
10413 bytes (~2600 tokens).
