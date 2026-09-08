---
package: rjm
name: _check_orphaned_requirements
slug: check-orphaned-requirements
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _check_orphaned_requirements

## Definition — verbatim
(used, not defined)

> "def _check_orphaned_requirements(results: TraceResults, index: _RefIndex) -> None:" — scripts/validation/traceability.py:264

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/traceability.py | 264 | defined here | Internal validation helper detecting requirement specifications lacking associated design document references. |

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
An internal validation helper function identifier in scripts/validation/traceability.py, classified as name-only per D-023.
