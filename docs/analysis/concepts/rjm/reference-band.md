---
package: rjm
name: reference band
slug: reference-band
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

# reference band

## Definition — verbatim
(used, not defined)

> "reference band is the mean recall_delta over the frontier tiers; a probe tier" — scripts/eval/_model_panel_core.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 5 | used here | Documented as the frontier tier pass/fail benchmark against which probe tiers are compared. |
| scripts/eval/eval-model-panel.py | 8 | used here | Documented in CLI docstring as setting the reference band from two frontier tiers. |

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
reference band is an evaluation metric concept in `_model_panel_core.py` calculating the mean frontier tier recall delta to detect probe degradation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
