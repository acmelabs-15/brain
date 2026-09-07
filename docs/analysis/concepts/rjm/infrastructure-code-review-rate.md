---
package: rjm
name: Infrastructure Code Review Rate
slug: infrastructure-code-review-rate
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

# Infrastructure Code Review Rate

## Definition — verbatim
> "Percentage of infrastructure changes that received security agent review." — docs/agent-metrics.md:102

## Also called — verbatim
"Infrastructure Review Rate" — .agents/metrics/dashboard-template.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 74 | defined here | Baseline report section reviewing unreviewed infrastructure changes prior to Issue #9 security incidents. |
| .agents/metrics/dashboard-template.md | 92 | used here | Dashboard section detailing reviewed vs unreviewed infrastructure commits across workflows, Dockerfiles, and hook policies. |
| docs/agent-metrics.md | 100 | defined here | Canonical metric definition specifying target of 100% security agent review on infrastructure code. |

## Consumes
File path filters matching infrastructure patterns (`.github/workflows/*`, `lefthook.yml`, `Dockerfile*`, `*.tf`) and security review commit records.

## Produces
Percentage of infrastructure-touching commits reviewed by security agents.

## When applied
Enforced continuously and measured during audit intervals.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Infrastructure Code Review Rate mandates comprehensive security agent oversight for changes impacting CI/CD workflows, Git hooks, container definitions, and infrastructure configuration to prevent bypasses and privilege escalation.
