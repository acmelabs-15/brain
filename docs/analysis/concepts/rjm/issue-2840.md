---
package: rjm
name: Issue #2840
slug: issue-2840
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Issue #2840

## Definition — verbatim
(used, not defined)

> "\"\"\"Model-sweep comparison core for eval-model-sweep.py (Issue #2840)." — scripts/eval/_model_sweep_core.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 1 | used here | Cited in module docstring header tracking the model-sweep comparison feature requirement. |
| scripts/eval/eval-model-sweep.py | 2 | used here | Cited in CLI runner docstring as the tracking issue for acceptance criterion 2. |

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
defects: missing-path, doc-drift

## Design notes
Issue #2840 is a GitHub issue identifier tracking requirements for model sweep evaluation tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
