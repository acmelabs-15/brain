---
package: rjm
name: Skill Retirement Criteria
slug: skill-retirement-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Retirement Criteria

## Definition — verbatim
> "## Skill Retirement Criteria" — .agents/governance/SKILL-CREATION-CRITERIA.md:351

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 351 | defined here | Specifies four objective criteria for deprecating and retiring obsolete or low-value skills. |

## Consumes
Skill usage metrics, success rate logs, maintenance incident reports, and alternative solutions.

## Produces
Deprecation and decommissioning decision for obsolete skills.

## When applied
Reviewed periodically during steering committee meetings and quarterly system health reviews.

## Sub-concepts
none

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
Formalized criteria for deprecating and deleting underperforming or obsolete skills. Triggers include invocation frequency under 1x/month over 3 months, success rates below 70%, maintenance exceeding value, or replacement by superior mechanisms.
