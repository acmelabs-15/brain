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
verified: 2026-09-04 quote-check+coverage
---

# .out-of-scope/question-limits.md

## Purpose — required, verbatim
> "The `/grill-me` skill (and grilling sessions inside other skills) does not enforce a maximum number of questions. Requests to add a configurable cap or hard ceiling are out of scope." — .out-of-scope/question-limits.md:3

## Design intent — required
Defines the architectural justification against placing numeric limits or hard caps on the number of grilling questions asked by `/grill-me` or embedded grilling phases: grilling explores branching decision trees to natural resolution, relying on conversational human steering ("wrap up", "summarise") to control length and treating excessive questioning as a prompt quality problem rather than an integer ceiling issue.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill /grill-me — .out-of-scope/question-limits.md:3

## Invoked by — required
none

## Concepts named — required, verbatim
- `/grill-me` — .out-of-scope/question-limits.md:3 — used here
- `grilling` — .out-of-scope/question-limits.md:3 — used here
- `decision tree` — .out-of-scope/question-limits.md:7 — used here

## Structure
# Hard limits on the number of questions during grilling
- ## Why this is out of scope — .out-of-scope/question-limits.md:5
- ## Prior requests — .out-of-scope/question-limits.md:16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes a core tenet of the grilling technique: requirements elicitation depth varies widely by problem complexity (from three to fifty questions); hard caps truncate essential exploration, whereas natural-language steering provides the appropriate control mechanism.

## Context cost
1259 bytes (~315 tokens). Scope boundary documentation.
