---
package: rjm
name: to_human
slug: to-human
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# to_human

## Definition — verbatim
(used, not defined)

> "def to_human(panel: Panel, verdicts: list[UnitVerdict]) -> str:" — scripts/eval/_model_panel_core.py:291

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 291 | defined here | Formatting function rendering model panel sweep verdicts into human-readable text. |
| scripts/eval/eval-model-panel.py | 44 | used here | Imported to render console summary text of model panel sweep results. |
| scripts/skill_description_budget.py | 158 | defined here | Formatting function rendering skill description budget reports into human-readable CLI output. |

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
defects: missing-path

## Design notes
to_human is a CLI formatting helper function across evaluation and budget scripts rendering reports into human-readable strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
