---
package: rjm
name: default_panel
slug: default-panel
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# default_panel

## Definition — verbatim
(used, not defined)

> "def default_panel() -> Panel:" — scripts/eval/_model_panel_core.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 79 | defined here | Factory function constructing the generic fallback evaluation panel. |
| scripts/eval/eval-model-panel.py | 41 | used here | Imported and invoked when no external `--panel-config` argument is provided. |
| scripts/eval/panels/owner-copilot-cli.json | 3 | used here | Referenced in comment explaining that default_panel uses placeholder GPT ids. |

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
default_panel is a Python factory function in `_model_panel_core.py` returning default test model configurations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
