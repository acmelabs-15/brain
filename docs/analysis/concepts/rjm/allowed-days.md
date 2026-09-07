---
package: rjm
name: ALLOWED_DAYS
slug: allowed-days
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr015_workflow_retention.py, sha256: ea1ff3ec4f548f42dcfd873ced6cc7d190001358013923d863745b84b9256325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ALLOWED_DAYS

## Definition — verbatim
(used, not defined)

> "ALLOWED_DAYS: frozenset[int] = frozenset({1, 7})" — scripts/ci/adr015_workflow_retention.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr015_workflow_retention.py | 47 | defined here | Constant frozenset defining the only permitted artifact retention durations under ADR-015. |

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
`ALLOWED_DAYS` is a policy constant set in `scripts/ci/adr015_workflow_retention.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
