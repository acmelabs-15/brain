---
package: rjm
name: Decision Matrix Scores
slug: decision-matrix-scores
kind: artifact
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Matrix Scores

## Definition — verbatim
> "print(\"Decision Matrix Scores\")" — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 177 | defined here | Header printed to stdout introducing the structured ranking, confidence rating, and sensitivity output. |

## Consumes
Validated criteria JSON specifying category weights and candidate option ratings across strategic, operational, and risk dimensions.

## Produces
Ranked list of weighted scores, winning option identification, confidence determination, and sensitivity analysis table.

## When applied
Output when running score_decision.py to evaluate build, buy, or partner options.

## Sub-concepts
scores, winner, weights, options

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
Decision Matrix Scores is the primary console artifact produced by the multi-criteria evaluation engine in the buy-vs-build framework. It presents an objective, weighted numerical synthesis of architectural alternatives alongside sensitivity bounds, ensuring that selection decisions are grounded in transparent quantitative analysis rather than executive bias or subjective impressions.
