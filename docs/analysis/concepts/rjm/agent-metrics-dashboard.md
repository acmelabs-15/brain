---
package: rjm
name: Agent Metrics Dashboard
slug: agent-metrics-dashboard
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Metrics Dashboard

## Definition — verbatim
(used, not defined)
> "# Agent Metrics Dashboard" — .agents/metrics/dashboard-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/dashboard-template.md | 1 | defined here | Document title of the reporting template structuring metrics for executive summary and detailed metric breakdowns. |

## Consumes
Collected telemetry across all 8 agent metrics.

## Produces
A formatted periodic markdown report summarizing agent health, adoption, and effectiveness.

## When applied
Used for weekly and monthly reviews of agent adoption and operational effectiveness.

## Sub-concepts
agent-coverage, shift-left-effectiveness, infrastructure-review-rate, policy-compliance, invocation-rate-by-agent, shift-left-score

## Part of
measurement-plan

## Implementation status
clean

## Design notes
Agent Metrics Dashboard provides an executive summary and detailed section template for tracking the 8 core agent metrics across reporting periods, highlighting target progress and operational trends.
