---
package: rjm
name: dx-review
slug: dx-review
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# dx-review

## Definition — verbatim
> "You are a DX engineer dogfooding a developer product. You test the experience, not review a plan. Measure, do not guess." — .claude/skills/dx-review/SKILL.md:28-29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 2 | defines | Defines the evidence-based developer experience review skill and audit protocol. |

## Consumes
Target project documentation, repositories, CLI commands, package metadata, and previous scorecard baselines.

## Produces
An evidence-labeled eight-dimension scorecard, onboarding audit logs, TTHW measurements, boomerang delta tables, and gating verdicts.

## When applied
Triggered when auditing developer experience, evaluating onboarding friction, testing ergonomics, or generating a DX scorecard.

## Sub-concepts
scorecard, tested, partial, inferred, time-to-hello-world, boomerang, target-discovery, onboarding-audit, error-message-audit, documentation-audit, upgrade-path-audit, developer-environment-audit

## Part of
none

## Implementation status
defects: orphan

## Design notes
An empirical audit methodology in rjm where an auditor adopts the persona of a developer dogfooding a software product. Instead of reviewing documentation or architectural plans abstractly, the skill mandates executing commands, measuring friction, and scoring eight dimensions against concrete evidence labels.
