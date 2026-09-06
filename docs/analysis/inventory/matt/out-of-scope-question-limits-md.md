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
verified: 2026-09-06 quote-check+coverage
---

# .out-of-scope/question-limits.md

## Purpose — required, verbatim
> "The `/grill-me` skill (and grilling sessions inside other skills) does not enforce a maximum number of questions. Requests to add a configurable cap or hard ceiling are out of scope." — .out-of-scope/question-limits.md:3

## Design intent — required
Establishes the design principle rejecting numeric question limits or caps during conversational grilling sessions (in `/grill-me` and embedded grilling workflows). Explains that grilling depth must scale dynamically with problem complexity, and that conversational steering (user prompting the model to wrap up or stop) is the appropriate control surface rather than arbitrary numeric ceilings. Furthermore, clarifies that low-value questioning represents a prompt-quality defect rather than a question count issue.

## Phase — required
none

## Inputs — required
User feedback and feature requests regarding grilling session length (such as issue #44: "Codex just asked me 200 questions").

## Outputs — required
Architectural policy rejecting configurable or hard question limits in grilling skills.

## Invokes — required
- skill grill-me — .out-of-scope/question-limits.md:3

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grill-me` — .out-of-scope/question-limits.md:3 — used here
- `grilling` — .out-of-scope/question-limits.md:3 — used here
- `out of scope` — .out-of-scope/question-limits.md:3 — defined here
- `decision tree` — .out-of-scope/question-limits.md:7 — defined here
- `escape hatches` — .out-of-scope/question-limits.md:9 — defined here
- `natural-language steering` — .out-of-scope/question-limits.md:12 — defined here
- `failure modes` — .out-of-scope/question-limits.md:14 — defined here
- `prompt-quality` — .out-of-scope/question-limits.md:14 — defined here
- `Codex` — .out-of-scope/question-limits.md:18 — used here

## Structure
- Hard limits on the number of questions during grilling
- Why this is out of scope
- Prior requests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides foundational lifecycle philosophy on the interactive role of grilling: open-ended exploration driven by decision-tree branching rather than artificial numerical constraints, prioritizing prompt engineering and user agency over counter-based termination.

## Context cost
1259 bytes, ~310 tokens. Loads no external files.
