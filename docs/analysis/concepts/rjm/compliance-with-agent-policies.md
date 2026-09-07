---
package: rjm
name: Compliance with Agent Policies
slug: compliance-with-agent-policies
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Compliance with Agent Policies

## Definition — verbatim
> "Are agent usage policies being followed?" — docs/agent-metrics.md:217

## Also called — verbatim
"Policy Compliance" — .agents/metrics/dashboard-template.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 151 | defined here | Baseline report section establishing initial compliance measurement guidelines across agent policies. |
| docs/agent-metrics.md | 215 | defined here | Canonical metric definition specifying tracked policies, formula ((Compliant Commits / Total Commits) * 100), and target of 90%+. |

## Consumes
Commit metadata, PR checklists, security review logs, and ADR compliance audits.

## Produces
Adherence rate percentage across mandated agent governance policies.

## When applied
Evaluated during governance audits and periodic engineering compliance checks.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Compliance with Agent Policies assesses whether engineering teams and automated workflows adhere to established agent governance rules, such as mandatory reviews for infrastructure changes and ADR documentation standards.
