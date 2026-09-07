---
package: rjm
name: Invocation Rate by Agent
slug: invocation-rate-by-agent
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

# Invocation Rate by Agent

## Definition — verbatim
> "How often each agent is used relative to others." — docs/agent-metrics.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 25 | defined here | Baseline report section analyzing estimated invocation frequency across orchestrator, code-reviewer, and specialized agents. |
| .agents/metrics/dashboard-template.md | 22 | used here | Reporting template section tracking per-agent invocation counts, percentages of total, and trends. |
| docs/agent-metrics.md | 9 | defined here | Canonical metric definition specifying formula, data collection method, and target thresholds. |

## Consumes
Agent invocation event logs and session execution records.

## Produces
Per-agent invocation counts and percentage share distributions.

## When applied
Computed during periodic metrics reporting and agent utilization audits.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Invocation Rate by Agent tracks agent utilization across sessions to measure whether specialist agents are being actively employed or if the system remains dependent on the coordinator.
