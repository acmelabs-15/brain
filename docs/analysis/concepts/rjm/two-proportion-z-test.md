---
package: rjm
name: two-proportion z-test
slug: two-proportion-z-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# two-proportion z-test

## Definition — verbatim
> "two-proportion z-test for the p-value. Report effect size." — scripts/eval/eval-reviewer-asymmetry.py:18

## Also called — verbatim
`two_proportion_z` — scripts/eval/eval-reviewer-asymmetry.py:242

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 18 | used here | Documented statistical test used alongside Fisher's exact test to calculate p-values. |

## Consumes
Pass and fail counts across control and treatment trial cohorts.

## Produces
Standard normal z-statistic and one-sided p-value for proportion comparison.

## When applied
Applied during reviewer asymmetry evaluations to measure differences in pass rates between conditions.

## Sub-concepts
two_proportion_z

## Part of
reviewer-asymmetry

## Implementation status
defects: doc-drift

## Design notes
A statistical testing technique that assesses whether differences in pass proportions between control and treatment cohorts are significant under a pooled standard error normal approximation.
