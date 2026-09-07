---
package: rjm
name: Fisher's exact test
slug: fisher-s-exact-test
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

# Fisher's exact test

## Definition — verbatim
> "(treatment_pass, treatment_fail). Apply Fisher's exact test +" — scripts/eval/eval-reviewer-asymmetry.py:17

## Also called — verbatim
`fishers_exact_one_sided` — scripts/eval/eval-reviewer-asymmetry.py:204

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 17 | used here | Documented statistical test applied to 2x2 contingency tables to calculate one-sided p-values. |

## Consumes
2x2 contingency table counts of passes and failures across control and treatment conditions.

## Produces
Exact one-sided p-value for the hypothesis that treatment pass rate exceeds control.

## When applied
Applied during reviewer asymmetry evaluations to determine if template changes yield statistically significant behavioral improvements.

## Sub-concepts
fishers-exact-one-sided, alpha

## Part of
reviewer-asymmetry

## Implementation status
defects: doc-drift

## Design notes
A non-parametric statistical hypothesis testing technique computing exact hypergeometric probabilities for 2x2 categorical contingency tables, ensuring valid p-values without large-sample asymptotic approximations during agent behavioral evaluations.
