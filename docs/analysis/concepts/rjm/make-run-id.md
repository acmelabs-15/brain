---
package: rjm
name: _make_run_id
slug: make-run-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _make_run_id

## Definition — verbatim
(used, not defined)

> "def _make_run_id(unit: str, tier_label: str) -> str:" — scripts/eval/eval-model-panel.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-panel.py | 62 | defined here | Helper function generating unique execution run IDs for model panel evaluation cells. |
| scripts/eval/eval-model-sweep.py | 140 | defined here | Function generating path-safe, per-model run IDs for candidate model sweep evaluations. |

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
A Python helper function identifier (`_make_run_id` / `make_run_id`) generating run identifiers in evaluation scripts, classified as `name-only` per D-023.
