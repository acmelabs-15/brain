---
package: rjm
name: Risk Rating
slug: risk-rating
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Rating

## Definition — verbatim
> "### 3.1 Risk Rating" — .claude/skills/threat-modeling/SKILL.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 213 | defined here | Methodology section introducing threat risk calculation via the formula Risk = Likelihood x Impact. |

## Consumes
Identified threats, exploit likelihood ratings, and business/technical impact assessments.

## Produces
Calculated composite risk ratings (Critical, High, Medium, Low) for prioritizing mitigation roadmaps.

## When applied
Applied during Phase 3 (Mitigation Strategy) to calculate relative severity for every threat in the threat matrix.

## Sub-concepts
likelihood, impact

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Risk Rating` is a quantitative prioritization technique in `rjm` that calculates overall threat severity by cross-referencing exploit Likelihood against system Impact to focus engineering effort on Critical and High risks.
