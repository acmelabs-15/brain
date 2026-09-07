---
package: rjm
name: violations
slug: violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr015_workflow_retention.py, sha256: ea1ff3ec4f548f42dcfd873ced6cc7d190001358013923d863745b84b9256325}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# violations

## Definition — verbatim
(used, not defined)

> "Return the subset of *entries* that violate ADR-015." — scripts/ci/adr015_workflow_retention.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr015_workflow_retention.py | 129 | defined here | Filters retention entries to those violating ADR-015 duration rules. |
| scripts/validation/check_ci_dependency_pins.py | 222 | defined here | Filters discovered pins to those contradicting declared constraints in pyproject.toml. |

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
defects: orphan

## Design notes
`violations` represents validation helper functions in `scripts/ci/adr015_workflow_retention.py` and `scripts/validation/check_ci_dependency_pins.py` returning non-conforming items rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
