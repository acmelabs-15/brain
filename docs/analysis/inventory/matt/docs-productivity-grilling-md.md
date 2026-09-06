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
verified: 2026-09-06 quote-check+coverage
---

# docs/productivity/grilling.md

## Purpose — required, verbatim
> "`grilling` is the interview loop that stress-tests a plan, a decision, or an idea before anyone acts on it." — docs/productivity/grilling.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-grilling` and `docs/productivity/grilling.md`) defining the foundational `grilling` primitive. Formulates the core mechanism for conversational inquiry across the entire skill ecosystem: modeling the problem as a design tree, grouping unblocked questions into rounds along the frontier of already-settled decisions, providing numbered questions with recommended answers on separate lines, and enforcing a strict separation between factual inquiries (investigated autonomously by sub-agents) and human decision-making. Acts as the underlying engine wrapped by `grill-me`, `grill-with-docs`, `wayfinder`, `triage`, and `improve-codebase-architecture`.

## Phase — required
matt:Productivity

## Inputs — required
- Model invocation via `/grilling` or autonomous delegation from wrapper skills (`grill-me`, `grill-with-docs`, `wayfinder`, `triage`, `improve-codebase-architecture`).
- Proposed plan, decision, or conceptual topic to be stress-tested.
- Human answers to frontier rounds; factual evidence retrieved from environment/codebase by sub-agents.

## Outputs — required
- Conversational shared understanding settled across the decision tree.
- Downstream artifacts depending on calling wrapper (`CONTEXT.md`, ADRs, decision tickets, or direct specification handover).

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
- `interview loop` — docs/productivity/grilling.md:3 — defined here
- `design tree` — docs/productivity/grilling.md:3 — defined here
- `round` — docs/productivity/grilling.md:5 — defined here
- `frontier` — docs/productivity/grilling.md:5 — defined here
- `agent` — docs/productivity/grilling.md:9 — used here
- `skill` — docs/productivity/grilling.md:9 — used here
- `session` — docs/productivity/grilling.md:15 — used here
- `grill-me` — docs/productivity/grilling.md:15 — used here
- `grill-with-docs` — docs/productivity/grilling.md:16 — used here
- `CONTEXT.md` — docs/productivity/grilling.md:16 — used here
- `ADRs` — docs/productivity/grilling.md:16 — used here
- `wayfinder` — docs/productivity/grilling.md:17 — used here
- `decision tickets` — docs/productivity/grilling.md:17 — used here
- `prototype` — docs/productivity/grilling.md:18 — used here
- `environment` — docs/productivity/grilling.md:29 — used here
- `sub-agent` — docs/productivity/grilling.md:29 — used here
- `facts vs decisions` — docs/productivity/grilling.md:39 — defined here
- `batch-grill-me` — docs/productivity/grilling.md:54 — used here
- `models` — docs/productivity/grilling.md:61 — used here
- `domain-modeling` — docs/productivity/grilling.md:70 — used here
- `harnesses` — docs/productivity/grilling.md:73 — used here
- `primitive` — docs/productivity/grilling.md:87 — defined here
- `to-spec` — docs/productivity/grilling.md:87 — used here
- `triage` — docs/productivity/grilling.md:87 — used here
- `improve-codebase-architecture` — docs/productivity/grilling.md:87 — used here
- `ask-matt` — docs/productivity/grilling.md:87 — used here

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
- doc-drift — docs/productivity/grilling.md:27 — Question formatting has a rough edge where the recommendation line sometimes argues against the question as worded, making agreement invert the yes/no answer.
- doc-drift — docs/productivity/grilling.md:61 — Lower-effort or non-frontier models break the confirmation gate by collapsing inquiry into brief outlines and executing code without permission.
- internal-contradiction — docs/productivity/grilling.md:64 — Models running grilling inside ticket-resolution tasks answer their own decision questions instead of waiting for human input.
- missing-path — docs/productivity/grilling.md:73 — Cross-skill invocation failure where grill-with-docs mentioning grilling and domain-modeling fails to reliably cause those prerequisite skills to be loaded by harnesses.

## Observations
Defines the round and frontier mechanics: rounds group non-dependent questions so a user can answer in batch (e.g. 13 questions in 3 rounds) while guaranteeing downstream questions adapt to prior answers. Establishes the rule separating facts from decisions: agents dispatch background sub-agents to discover facts rather than interrogating humans on verifiable code state, while strictly holding execution at a confirmation gate before implementing decisions. Notes that round-based batch questioning subsumed the earlier `/batch-grill-me` skill while supporting a user opt-out back to sequential one-at-a-time questioning via `CLAUDE.md`.

## Context cost
10413 bytes, approximately 2400 tokens. Standalone doc; loads no secondary references.
