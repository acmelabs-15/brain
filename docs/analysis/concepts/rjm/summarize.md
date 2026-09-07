---
package: rjm
name: summarize
slug: summarize
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summarize

## Definition — verbatim
(used, not defined)

> "def summarize(" — scripts/eval/_model_panel_core.py:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 257 | defined here | High-level function grouping cell results by unit and generating classified UnitVerdict summaries in deterministic order. |
| scripts/eval/eval-model-panel.py | 43 | used here | Imported to generate final unit verdicts across the swept matrix of model tiers. |

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
summarize is an aggregation function in `_model_panel_core.py` consolidating panel sweep cell results into unit verdicts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
