---
package: rjm
name: Agent Review Turnaround Time
slug: agent-review-turnaround-time
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Review Turnaround Time

## Definition — verbatim
> "How long agent review takes." — docs/agent-metrics.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 111 | defined here | Baseline report section estimating turnaround durations across interactive and CI agent reviews. |
| .agents/metrics/dashboard-template.md | 132 | used here | Dashboard reporting section tracking average turnaround time against SLAs (<5 min interactive, <10 min CI). |
| docs/agent-metrics.md | 158 | defined here | Canonical metric definition specifying formula (Completion Timestamp - Request Timestamp) and target latency thresholds. |

## Consumes
Agent execution timestamps, request timestamps, and completion timestamps.

## Produces
Average and 95th-percentile turnaround time metrics for agent reviews.

## When applied
Monitored continuously to ensure agent reviews do not create developer productivity bottlenecks.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Agent Review Turnaround Time measures the latency between initiating an agent review request and receiving completed feedback, maintaining developer velocity while ensuring review thoroughness.
