---
package: rjm
name: _child_report_path
slug: child-report-path
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

# _child_report_path

## Definition — verbatim
(used, not defined)

> "def _child_report_path(unit: str, run_id: str) -> Path:" — scripts/eval/eval-model-panel.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-panel.py | 69 | defined here | Helper function resolving the path to child evaluation JSON report artifacts. |
| scripts/eval/eval-model-sweep.py | 187 | defined here | Function calculating destination file paths for child model evaluation reports. |

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
A Python path resolution helper function (`_child_report_path` / `child_report_path`) in evaluation runners, classified as `name-only` per D-023.
