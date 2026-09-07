---
package: rjm
name: AggregateResult
slug: aggregateresult
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AggregateResult

## Definition — verbatim
> "Output of ReportAggregator. Consumed by ReportWriter." — scripts/eval/_report_aggregator.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 92 | defined here | Dataclass encapsulating aggregated recall metrics, bootstrap confidence intervals, and flakiness metrics. |
| scripts/eval/_report_writer.py | 21 | used here | Imported data structure passed into ReportWriter to render markdown and JSON evaluation reports. |

## Consumes
Collections of RunRecord instances from evaluated agent and baseline prompt executions.

## Produces
Summary metrics including agent and baseline recall, signed delta, paired bootstrap confidence intervals, cost basis, and flakiness flags.

## When applied
Produced by ReportAggregator.aggregate() upon completing benchmark execution across test fixtures.

## Sub-concepts
none

## Part of
reportaggregator, reportwriter

## Implementation status
clean

## Design notes
AggregateResult is an in-memory evaluation artifact capturing aggregated statistical metrics, confidence intervals, and cost tracking across prompt evaluation runs to feed report generation.
