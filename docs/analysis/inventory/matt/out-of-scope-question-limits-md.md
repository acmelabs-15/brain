---
package: matt
path: .out-of-scope/question-limits.md
type: doc
bytes: 1259
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .out-of-scope/question-limits.md

## Purpose — required, verbatim
> "The `/grill-me` skill (and grilling sessions inside other skills) does not enforce a maximum number of questions. Requests to add a configurable cap or hard ceiling are out of scope." — .out-of-scope/question-limits.md:3

## Design intent — required
Establishes the architectural philosophy that grilling sessions in `/grill-me` and other skills must remain open-ended rather than constrained by artificial question counters or limits. It explains that decision trees require variable depth, and that prompt quality and natural-language user steering ("wrap up, summarise, and move on") are the appropriate control mechanisms rather than numeric question ceilings. Without this policy, grilling workflows would prematurely terminate complex requirements discovery or degrade into arbitrary questioning cutoffs.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — .out-of-scope/question-limits.md:1 — used here
- `grill-me` — .out-of-scope/question-limits.md:3 — used here
- `decision tree` — .out-of-scope/question-limits.md:7 — used here

## Structure
- # Hard limits on the number of questions during grilling
- ## Why this is out of scope
- ## Prior requests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Articulates a fundamental design tenet of Matt Pocock's skills: conversational steering over programmatic limits. Outlines the distinction between genuine under-specification (which requires deep questioning) and redundant questions (which requires prompt tuning, not a counter).

## Context cost
1259 bytes, approximately 300 tokens.
