---
package: rjm
name: _dry_run_report
slug: dry-run-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _dry_run_report

## Definition — verbatim
(used, not defined)

> "def _dry_run_report(panel: Panel, units: list[str], n_runs: int) -> str:" — scripts/eval/eval-model-panel.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-model-panel.py | 194 | defined here | Formats dry-run execution plan lines for multi-model panel sweep with zero spend. |
| scripts/eval/eval-oneshot-vs-shipped.py | 195 | defined here | Formats dry-run execution plan lines for one-shot benchmark fixtures with zero spend. |

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
An internal helper function identifier across evaluation CLI scripts for generating zero-spend dry-run execution reports, classified as name-only per D-023.
