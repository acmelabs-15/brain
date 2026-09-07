---
package: rjm
name: cohens_d
slug: cohens-d
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cohens_d

## Definition — verbatim
(used, not defined)

> "def cohens_d(winner: ModelResult, default: ModelResult, ids: list[str]) -> float:" — scripts/eval/_model_sweep_core.py:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 245 | defined here | Function implementing paired Cohen's d_z effect size calculation over shared fixture pass rates. |

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
cohens_d is a Python helper function in _model_sweep_core.py calculating secondary effect size statistics rather than an SDLC lifecycle concept, classified as name-only per D-023.
