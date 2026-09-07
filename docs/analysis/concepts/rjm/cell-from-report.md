---
package: rjm
name: cell_from_report
slug: cell-from-report
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

# cell_from_report

## Definition — verbatim
(used, not defined)

> "def cell_from_report(unit: str, tier: str, report: dict[str, Any]) -> CellResult:" — scripts/eval/_model_panel_core.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 177 | defined here | Function extracting effect size and confidence intervals from an evaluation report JSON object into a CellResult. |
| scripts/eval/eval-model-panel.py | 40 | used here | Imported and called to convert child harness execution reports into structured cell results. |

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
cell_from_report is a parser function in `_model_panel_core.py` extracting metrics from evaluation report payloads rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
