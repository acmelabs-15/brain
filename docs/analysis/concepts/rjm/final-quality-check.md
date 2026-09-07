---
package: rjm
name: final_quality_check
slug: final-quality-check
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# final_quality_check

## Definition — verbatim
> "<final_quality_check>" — .claude/skills/analyze/scripts/analyze.py:385

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 385 | defined here | Pre-presentation verification checklist in analyze.py ensuring completeness and actionable recommendations. |

## Consumes
Draft final synthesis report and prioritized recommendations.

## Produces
Quality gate confirmation ensuring critical/high issues have citations, recommendations are actionable, and no earlier findings were dropped.

## When applied
Evaluated at the end of Phase 6 (Synthesis) immediately before presenting findings to the user.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`final_quality_check` serves as the outbound safety gate for `analyze.py`, forcing the model to self-audit against specific criteria (code quotes, impact-ordered presentation, concrete recommendations) before returning the analysis to the user.
