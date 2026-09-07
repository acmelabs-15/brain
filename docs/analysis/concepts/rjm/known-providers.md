---
package: rjm
name: _known_providers
slug: known-providers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _known_providers

## Definition — verbatim
(used, not defined)

> "def _known_providers() -> set[str] | None:" — scripts/eval/eval-model-panel.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-panel.py | 182 | defined here | Helper function discovering available LLM provider integrations supported by the transport layer. |

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
An internal Python helper function (`_known_providers`) in `eval-model-panel.py` inspecting available provider names, classified as `name-only` per D-023.
