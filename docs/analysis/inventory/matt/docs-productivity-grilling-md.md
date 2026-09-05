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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/grilling.md

## Purpose — required, verbatim
> "`grilling` is the interview loop that stress-tests a plan, a decision, or an idea before anyone acts on it. It maps the subject as a **design tree**: every decision branches into the decisions that hang off it, and interviews you branch by branch until nothing is left silently assumed." — docs/productivity/grilling.md:3

## Design intent — required
Documentation page for the core `grilling` primitive skill in the matt package published on aihero.dev. Formalizes the theory and mechanics of the interview loop: structuring subjects as dependency graphs (design trees), batching independent questions into rounds along the frontier, formatting questions with recommendations on `➡️` lines, dividing labor between autonomous subagent exploration for facts and human evaluation for decisions, and requiring a confirmation gate before taking action.

## Phase — required
matt:productivity

## Inputs — required
Plan, decision, codebase architecture, or problem statement to stress-test; user answers settling frontier decisions; facts discovered by autonomous subagent research.

## Outputs — required
none

## Invokes — required
- skill grill-me — docs/productivity/grilling.md:15
- skill grill-with-docs — docs/productivity/grilling.md:16
- skill wayfinder — docs/productivity/grilling.md:17
- skill prototype — docs/productivity/grilling.md:18
- skill domain-modeling — docs/productivity/grilling.md:70
- skill to-spec — docs/productivity/grilling.md:87
- skill triage — docs/productivity/grilling.md:87
- skill improve-codebase-architecture — docs/productivity/grilling.md:87
- skill ask-matt — docs/productivity/grilling.md:87

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — docs/productivity/grilling.md:3 — defined here
- `design tree` — docs/productivity/grilling.md:3 — defined here
- `round` — docs/productivity/grilling.md:5 — defined here
- `frontier` — docs/productivity/grilling.md:5 — defined here
- `model-invoked` — docs/productivity/grilling.md:9 — defined here
- `sub-agent` — docs/productivity/grilling.md:29 — used here
- `shared understanding` — docs/productivity/grilling.md:29 — defined here
- `batch-grill-me` — docs/productivity/grilling.md:54 — defined here
- `confirmation gate` — docs/productivity/grilling.md:61 — defined here
- `primitive` — docs/productivity/grilling.md:87 — defined here
- `single source of truth` — docs/productivity/grilling.md:87 — defined here
- `user-invoked front doors` — docs/productivity/grilling.md:87 — defined here

## Structure
- What it does — docs/productivity/grilling.md:1
- When to reach for it — docs/productivity/grilling.md:7
- The round, the frontier, and who decides — docs/productivity/grilling.md:21
- What lives here and what lives in the wrappers — docs/productivity/grilling.md:33
- Common questions — docs/productivity/grilling.md:43
- It's working if — docs/productivity/grilling.md:75
- Where it fits — docs/productivity/grilling.md:85

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/productivity/grilling.md:73 — Skills naming other skills (`grill-with-docs` naming `grilling` and `domain-modeling`) do not reliably cause the harness to load them, leading to ungrounded interviews.

## Observations
Strictly partitions facts from decisions, prohibiting an executing agent from deciding its own questions ("An agent running `grilling` that answers its own decisions has broken the skill, not interpreted it liberally." — docs/productivity/grilling.md:29). Rejects asynchronous execution models to preserve human agency over architectural choices.

## Context cost
10413 bytes, ~2500 tokens.
