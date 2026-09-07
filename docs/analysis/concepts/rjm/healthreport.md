---
package: rjm
name: HealthReport
slug: healthreport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_memory_health_results.py, sha256: 8aabd1dc6bcc49af67108b9fcab14c8d5e3e147a4f6efa7e93eb02c41a516963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HealthReport

## Definition — verbatim
(used, not defined)

> "The citation-count sum is one of the invariants ``HealthReport`` enforces at" — scripts/ci/parse_memory_health_results.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_memory_health_results.py | 78 | used here | References the HealthReport class whose construction-time citation count invariants are re-verified by the parser. |

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
`HealthReport` is a Python class identifier enforcing memory citation invariant constraints rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
