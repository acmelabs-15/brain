---
package: rjm
name: VALID_VERDICTS
slug: valid-verdicts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
  - {path: scripts/validate_quality_gate_output.py, sha256: db9a15f636b9951529468e3f6573531aa337ebb2f1a6071184a6eb2341595fb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_VERDICTS

## Definition — verbatim
(used, not defined)

> "VALID_VERDICTS = {" — scripts/ci/parse_ai_review_output.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_ai_review_output.py | 15 | defined here | Constant set of permitted verdict strings for AI review parsing. |
| scripts/validate_quality_gate_output.py | 27 | defined here | Frozenset constant of recognized quality gate verdict outcomes ("PASS", "WARN", "CRITICAL_FAIL"). |

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
`VALID_VERDICTS` is a Python set constant in quality gate and review parsing scripts defining recognized verdict strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
