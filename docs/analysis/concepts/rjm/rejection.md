---
package: rjm
name: rejection
slug: rejection
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# rejection

## Definition — verbatim
(used, not defined)

> "def rejection(value: str, kind: str, choices: list[str]) -> str | None:" — scripts/workflows/resolve_dispatch_input.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflows/resolve_dispatch_input.py | 46 | defined here | Function evaluating input values against integer and choice constraints, returning error messages when invalid. |

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
A Python validation function in `scripts/workflows/resolve_dispatch_input.py` that evaluates input values against type constraints, classified as name-only per D-023.
