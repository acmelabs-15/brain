---
package: rjm
name: Pin
slug: pin
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pin

## Definition — verbatim
(used, not defined)

> "class Pin:" — scripts/validation/check_ci_dependency_pins.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 85 | defined here | Dataclass representing a package version pin discovered in a CI workflow file. |

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
`Pin` is a Python dataclass identifier in `check_ci_dependency_pins.py` encapsulating package pin metadata rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
