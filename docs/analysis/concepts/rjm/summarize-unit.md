---
package: rjm
name: summarize_unit
slug: summarize-unit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summarize_unit

## Definition — verbatim
(used, not defined)

> "def summarize_unit(" — scripts/eval/_model_panel_core.py:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 215 | defined here | Aggregation function classifying a single unit's degradation across panel tiers into a UnitVerdict. |

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
summarize_unit is an aggregation function in `_model_panel_core.py` determining unit robustness across model tiers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
