---
package: rjm
name: FLAKY_FIXTURE_HALT_FRACTION
slug: flaky-fixture-halt-fraction
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FLAKY_FIXTURE_HALT_FRACTION

## Definition — verbatim
(used, not defined)

> "FLAKY_FIXTURE_HALT_FRACTION = 0.30" — scripts/eval/_report_aggregator.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 41 | defined here | Constant defining the normative threshold fraction (0.30) of flaky fixtures that halts the evaluation methodology. |

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
FLAKY_FIXTURE_HALT_FRACTION is a module constant establishing the allowable proportion of flaky fixtures before halting evaluation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
