---
package: rjm
name: agent-metrics.yml
slug: agent-metrics-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-metrics.yml

## Definition — verbatim
(used, not defined)

> "step in agent-metrics.yml (issue #3531)." — scripts/ci/collect_metrics_and_report.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/collect_metrics_and_report.py | 6 | used here | Workflow file cited whose inline "Collect metrics" step is replaced. |
| scripts/ci/write_metrics_threshold_summary.py | 6 | used here | Workflow file cited whose inline summary reporting step is replaced. |

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
defects: orphan, exit-code-mismatch

## Design notes
`agent-metrics.yml` is a GitHub Actions CI workflow filename rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
