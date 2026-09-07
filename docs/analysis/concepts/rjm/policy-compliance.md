---
package: rjm
name: Policy Compliance
slug: policy-compliance
kind: technique
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

# Policy Compliance

## Definition — verbatim
(used, not defined)
> "Policy Compliance" — .agents/metrics/dashboard-template.md:18

## Also called — verbatim
"Compliance with Agent Policies" — docs/agent-metrics.md:215

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/dashboard-template.md | 18 | used here | Executive summary table row measuring overall adherence to mandatory agent governance policies against a 90% target. |

## Consumes
Policy audit findings and commit checklist verifications.

## Produces
Overall policy adherence rate percentage for executive tracking.

## When applied
Reported in periodic dashboard reviews.

## Sub-concepts
none

## Part of
agent-metrics-dashboard

## Implementation status
clean

## Design notes
Policy Compliance is the concise summary label used in executive dashboards for Compliance with Agent Policies, tracking organizational adherence to mandated agent workflows and security standards.
