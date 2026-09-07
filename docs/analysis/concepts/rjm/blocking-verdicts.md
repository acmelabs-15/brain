---
package: rjm
name: BLOCKING_VERDICTS
slug: blocking-verdicts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/check_design_review_gate.py, sha256: f42c9b74de25301caed2e74b38deaacd36b3491b6d7a5e1708f56dc595d08579}
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCKING_VERDICTS

## Definition — verbatim
(used, not defined)

> "BLOCKING_VERDICTS = frozenset({" — .github/scripts/check_design_review_gate.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/check_design_review_gate.py | 31 | defined here | Constant set defining review outcomes (`NEEDS_CHANGES`, `FAIL`, `REJECTED`) that fail the design review gate. |
| scripts/ci/parse_ai_review_output.py | 28 | defined here | Set defining review verdicts that block PR progression in CI. |
| scripts/quality_gate/check_critical_failures.py | 55 | defined here | Frozenset combining failure verdicts with `UNKNOWN` and `DID_NOT_RUN` to block CI quality gate. |

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
defects: script-bug, other, orphan

## Design notes
BLOCKING_VERDICTS is a script constant identifier defining sets of review failure statuses rather than an independent lifecycle concept.
