---
package: rjm
name: check_thresholds
slug: check-thresholds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_thresholds

## Definition — verbatim
(used, not defined)

> "def check_thresholds(metrics: dict[str, Any]) -> tuple[float, float, int, bool]:" — scripts/ci/check_metrics_thresholds.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_metrics_thresholds.py | 47 | defined here | Function validating collected latency, throughput, and error rates against configured thresholds. |

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
defects: exit-code-mismatch, orphan

## Design notes
A Python function identifier (`check_thresholds`) evaluating metrics against configured limits recorded during inventory analysis, classified as `name-only` per D-023.
