---
package: rjm
name: Agent Coverage
slug: agent-coverage
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

# Agent Coverage

## Definition — verbatim
> "Percentage of commits that involved agent review." — docs/agent-metrics.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 43 | defined here | Baseline report section assessing initial agent coverage across Git commits. |
| .agents/metrics/dashboard-template.md | 15 | used here | Executive dashboard summary table entry tracking coverage progress against a 50% target. |
| docs/agent-metrics.md | 37 | defined here | Canonical metric definition specifying the commit coverage formula, data collection via git log, and targets. |

## Consumes
Git commit history, PR review logs, and agent participation metadata.

## Produces
Percentage ratio of agent-assisted commits to total repository commits.

## When applied
Evaluated during weekly or monthly engineering metrics reviews.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Agent Coverage measures the proportion of changes receiving agent review prior to merge, ensuring agent assistance is systematically integrated across engineering workflows rather than used sporadically.
