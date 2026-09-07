---
package: rjm
name: Completeness
slug: completeness
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Completeness

## Definition — verbatim
> "All requirements addressed" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 46 | defines | Listed as one of the four core dimensions of the evaluation rubric. |
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 20 | used here | Evaluated as a scoring criterion on the PR #60 remediation plan critique. |
| .claude/agents/critic.md | 116 | defines | Specified as a review axis verifying that every goal has acceptance criteria and every requirement maps to verification. |
| .claude/skills/autoplan/SKILL.md | 152 | defines | Defined as an execution default requiring fixes for all affected cases and comprehensive tests. |
| .claude/skills/skillforge/references/specification-template.md | 382 | defines | Included as a section in the specification validation checklist. |
| .claude/skills/slo-designer/references/slo-design-patterns.md | 106 | used here | Listed as a recommended pipeline SLI verifying all expected records are processed. |
| templates/agents/critic.shared.md | 120 | defines | Specified as a review axis verifying that every goal has acceptance criteria and every requirement maps to verification. |

## Consumes
Specifications, plans, requirement lists, test suites, and data pipelines.

## Produces
Evaluation scores and feedback identifying missing requirements, uncovered cases, or incomplete sections.

## When applied
During plan review, specification validation, quality rubric scoring, and pipeline SLI measurement.

## Sub-concepts
none

## Part of
evaluation-rubric

## Implementation status
clean

## Design notes
A quality criterion and review dimension measuring whether an artifact, plan, or pipeline accounts for all requirements, edge cases, and expected data without gaps or missing components.
