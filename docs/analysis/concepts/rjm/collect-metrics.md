---
package: rjm
name: collect_metrics
slug: collect-metrics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/measure_context_retrieval_metrics.py, sha256: 02cfed6442a9a6f67c9374b9808c64b11b04ed0fb0791e1b287b90180ffe27ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# collect_metrics

## Definition — verbatim
(used, not defined)

> "Run collect_metrics.py and write to report_path. Return True on success." — scripts/ci/collect_metrics_and_report.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/collect_metrics_and_report.py | 30 | defined here | Defined to run `collect_metrics.py` and write output to a specified report path. |
| scripts/measure_context_retrieval_metrics.py | 179 | defined here | Defined to collect context-retrieval metrics from historical session log files. |

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
defects: orphan, doc-drift

## Design notes
`collect_metrics` is a Python function identifier in metrics extraction scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
