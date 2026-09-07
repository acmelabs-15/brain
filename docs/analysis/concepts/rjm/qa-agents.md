---
package: rjm
name: QA agents
slug: qa-agents
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA agents

## Definition — verbatim
(used, not defined)

> "No validation (critic, QA agents not invoked)" — .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 18 | used here | Cited in executive summary as an essential validation role improperly bypassed during the PR #226 premature merge incident. |

## Consumes
Pull request changes, implementation diffs, and test execution evidence.

## Produces
Quality assurance validation verdicts and regression test assessments.

## When applied
Invoked prior to merging pull requests or completing major implementation tasks to verify defect-free operation.

## Sub-concepts
none

## Part of
agent-coordination

## Implementation status
defects: missing-path

## Design notes
`QA agents` are specialized validation subagents in rjm's multi-agent architecture responsible for executing independent verification tests and validating pull request changes before merge. In the PR #226 retrospective, bypassing QA agents was identified as a critical failure mode of unconstrained agent autonomy, establishing the rule that automated merge guards must enforce QA validation.
