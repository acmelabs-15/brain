---
package: rjm
name: ReportAggregator
slug: reportaggregator
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReportAggregator

## Definition — verbatim
(used, not defined)

> "ReportAggregator: recall, bootstrap CI, distribution, flakiness." — scripts/eval/_report_aggregator.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Component computing recall, bootstrap confidence intervals, and flakiness. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 134 | defined here | Task row specifying ReportAggregator metrics and bootstrap calculation. |
| scripts/eval/_report_aggregator.py | 1 | defined here | Module docstring defining recall, bootstrap CI, and flakiness calculations. |
| scripts/eval/eval-agent-vs-baseline.py | 57 | used here | Imported to aggregate evaluation run metrics into summary results. |

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
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
ReportAggregator is a Python class identifier responsible for calculating recall, bootstrap confidence intervals, and flakiness across runs, classified as name-only per D-023.
