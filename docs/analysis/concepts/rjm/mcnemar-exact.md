---
package: rjm
name: mcnemar_exact
slug: mcnemar-exact
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mcnemar_exact

## Definition — verbatim
> "Return ``(b, c, p)`` for a one-sided exact McNemar test." — scripts/eval/_optimizer_core.py:549

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 544 | defined here | Pure function computing discordant pair counts and one-sided exact binomial p-value for paired evaluation scores. |
| scripts/eval/optimize-artifact.py | 96 | used here | Imported and invoked during held-out gating to evaluate candidate score improvement against the incumbent. |

## Consumes
Paired boolean evaluation results for incumbent and candidate models across a sequence of task IDs.

## Produces
Tuple `(b, c, p)` of fail-to-pass transitions, pass-to-fail regressions, and exact one-sided p-value.

## When applied
Invoked during held-out gate evaluation to determine whether an observed performance improvement is statistically significant.

## Sub-concepts
none

## Part of
gate

## Implementation status
clean (scripts/eval/_optimizer_core.py); defects: doc-drift (scripts/eval/optimize-artifact.py)

## Design notes
`mcnemar_exact` performs an exact one-sided McNemar test on paired evaluation outcomes in rjm's gating system. Because sample sizes in agent evaluations are often small, it uses exact binomial tail probabilities rather than asymptotic chi-squared approximations, exposing hard resolution limits and preventing spurious prompt acceptances.
