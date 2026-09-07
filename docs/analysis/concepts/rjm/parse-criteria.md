---
package: rjm
name: parse_criteria
slug: parse-criteria
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_criteria

## Definition — verbatim
(used, not defined)

> "def parse_criteria(body: str) -> list[Criterion]:" — scripts/external_signals/acceptance_criteria.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/acceptance_criteria.py | 86 | defines | Parses Markdown task-list checkbox items under an acceptance heading into a list of Criterion objects. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`parse_criteria` is a Python helper function that parses acceptance-criteria checkboxes from a Markdown string rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
