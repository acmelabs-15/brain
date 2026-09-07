---
package: rjm
name: FLAKINESS_VARIANCE_THRESHOLD
slug: flakiness-variance-threshold
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FLAKINESS_VARIANCE_THRESHOLD

## Definition — verbatim
(used, not defined)

> "FLAKINESS_VARIANCE_THRESHOLD = 1.0" — scripts/eval/_eval_common.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 19 | defined here | Constant threshold (1.0) above which score variance across runs flags an evaluation scenario as flaky. |

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
FLAKINESS_VARIANCE_THRESHOLD is a numeric threshold constant in `_eval_common.py` used in ADR-057 flakiness detection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
