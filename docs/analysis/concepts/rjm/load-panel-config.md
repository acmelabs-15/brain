---
package: rjm
name: load_panel_config
slug: load-panel-config
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

# load_panel_config

## Definition — verbatim
(used, not defined)

> "def load_panel_config(text: str, *, known_providers: set[str] | None = None) -> Panel:" — scripts/eval/_model_panel_core.py:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_panel_core.py | 312 | defined here | Parsing function decoding and validating a JSON panel configuration string into a Panel object. |
| scripts/eval/eval-model-panel.py | 42 | used here | Imported to load and validate user-supplied panel configuration files. |

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
load_panel_config is a configuration loader function in `_model_panel_core.py` parsing JSON panel definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
