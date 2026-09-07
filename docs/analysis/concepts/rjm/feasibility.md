---
package: rjm
name: Feasibility
slug: feasibility
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Feasibility

## Definition — verbatim
> "Timeline credible. Dependencies real. Resources available." — .claude/agents/critic.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 21 | used here | Evaluated as an 8/10 score in the plan critique, noting reasonable effort estimates but complexity in PowerShell conversion. |
| .claude/agents/critic.md | 118 | defined here | Defined as one of six mandatory review axes checking that timelines are credible, dependencies are real, and resources are available. |
| templates/agents/critic.shared.md | 122 | defined here | Mirrors the feasibility review axis definition and red flag patterns across shared critic agent prompt templates. |

## Consumes
Plans, task schedules, resource allocations, and dependency graphs.

## Produces
Numerical scores (1-5 or 1-10) and identified red flags regarding optimistic estimates, handwaved complexity, and ignored prerequisites.

## When applied
During plan critique, PR readiness evaluation, and adversarial architecture review.

## Sub-concepts
none

## Part of
evaluation-criteria, review-axes

## Implementation status
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); missing-path (.claude/agents/critic.md:115); clean in templates/agents/critic.shared.md

## Design notes
`Feasibility` serves as a core review axis in rjm's critique discipline, guarding against overly optimistic timelines and handwaved engineering complexity by validating that prerequisites and execution dependencies are realistic before approving implementation plans.
