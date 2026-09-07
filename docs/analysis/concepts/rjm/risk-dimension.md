---
package: rjm
name: "risk-dimension"
slug: risk-dimension
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# risk-dimension

## Definition — verbatim
> "<risk-dimension weight=\"30%\">" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 196 | defined here | XML decision criteria group weighted at 30% evaluating vendor risk, execution risk, regulatory risk, and lock-in risk. |

## Consumes
Vendor financial viability assessments, internal delivery feasibility evaluations, compliance obligations, and switching cost projections.

## Produces
Weighted risk evaluation scores (1-10 scale) contributing 30% of the composite decision matrix score.

## When applied
Evaluated during Phase 3 (Evaluate) of the buy-vs-build framework when scoring candidate options.

## Sub-concepts
none

## Part of
decision-criteria

## Implementation status
defects: doc-drift, missing-path

## Design notes
A 30% weighted evaluation dimension in rjm's buy-vs-build decision matrix that evaluates downside exposure across vendor stability, internal execution capacity, regulatory compliance, and vendor lock-in, ensuring that high-risk options are not selected based solely on strategic or operational optimism.
