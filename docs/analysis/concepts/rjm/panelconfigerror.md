---
package: rjm
name: PanelConfigError
slug: panelconfigerror
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

# PanelConfigError

## Definition — verbatim
(used, not defined)

> "class PanelConfigError(ValueError):" — scripts/eval/_model_panel_core.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 40 | defined here | Custom ValueError subclass raised when a panel configuration is malformed or names an unknown provider. |
| scripts/eval/eval-model-panel.py | 38 | used here | Caught during CLI configuration loading to emit formatted error messages and exit code 2. |

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
PanelConfigError is a Python exception class in `_model_panel_core.py` signaling invalid panel configurations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
