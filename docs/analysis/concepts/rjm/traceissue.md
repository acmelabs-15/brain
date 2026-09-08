---
package: rjm
name: TraceIssue
slug: traceissue
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

# TraceIssue

## Definition — verbatim
(used, not defined)

> "class TraceIssue:" — scripts/validation/traceability.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/traceability.py | 56 | defined here | Dataclass representing an individual traceability rule violation or warning. |

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
A Python dataclass structure identifier in `traceability.py` representing a traceability finding, classified as name-only per D-023.
