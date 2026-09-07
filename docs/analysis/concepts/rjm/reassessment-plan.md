---
package: rjm
name: reassessment-plan
slug: reassessment-plan
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# reassessment-plan

## Definition — verbatim
> "<reassessment-plan>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:247

## Also called — verbatim
`Reassessment plan` — .claude/skills/buy-vs-build-framework/SKILL.md:55

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 247 | defined here | XML specification element declaring the reassessment plan structure, drift detection script, and trigger conditions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 55 | defined here | Phase 4 output deliverable produced alongside the final decision and Architecture Decision Record. |

## Consumes
Initial ADR baseline assumptions, drift detection script parameters, and operational monitoring schedules.

## Produces
Documented trigger thresholds and automated script configurations for revisiting the sourcing decision.

## When applied
Formulated during Phase 4 (Decide) as a required companion deliverable to the Architecture Decision Record.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc, missing-path

## Design notes
An architectural deliverable produced in Phase 4 of the buy-vs-build framework that binds a sourcing decision to explicit assumption drift monitoring, ensuring decisions are proactively revisited if cost, timeline, capacity, or market assumptions deviate beyond defined thresholds.
