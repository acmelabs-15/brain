---
package: rjm
name: Exploratory spike
slug: exploratory-spike
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exploratory spike

## Definition — verbatim
> "Exploratory spike" — docs/when-to-use.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 32 | defined here | Task shape for research and architectural feasibility investigations, stopping before implementation. |

## Consumes
Architectural questions, open-ended feasibility proposals, or technology evaluation queries.

## Produces
Problem framing and prior art search via /spec, optionally architectural sketches via /plan.

## When applied
Applied when investigating questions where the answer or approach is initially unknown.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
A research-oriented task shape in rjm that limits execution to /spec and /plan while forbidding premature /build execution until core questions are definitively resolved.
