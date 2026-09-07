---
package: rjm
name: thrash_fraction
slug: thrash-fraction
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
  - {path: scripts/eval/analyze-pr-churn.py, sha256: caa76d02bf3e72c1e40110bd99569504f7e255f07b16ae36304f42a651c507e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# thrash_fraction

## Definition — verbatim
(used, not defined)

> "def thrash_fraction(headlines: Sequence[str]) -> float:" — scripts/eval/_pr_churn.py:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_pr_churn.py | 155 | defined here | Calculation function computing the non-progress share of commits rounded to three decimal places. |
| scripts/eval/analyze-pr-churn.py | 44 | used here | Imported helper function evaluating process thrash across pull request cohorts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
thrash_fraction is a Python calculation function measuring the proportion of non-progress commits in pull request cohorts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
