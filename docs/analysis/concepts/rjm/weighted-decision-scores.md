---
package: rjm
name: "weighted decision scores"
slug: weighted-decision-scores
kind: technique
package_phase: rjm:plan
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

# weighted decision scores

## Definition — verbatim
> "Calculate weighted decision scores with sensitivity analysis." — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 3 | defined here | Script module docstring declaring normalized multi-criteria scoring across options. |

## Consumes
Normalized criteria category weights (summing to 100%) and individual criterion scores (1-10 scale) for build, buy, and partner options.

## Produces
Composite weighted scores, option rankings, margin-of-victory confidence ratings, and automated tie-breaker flags.

## When applied
Executed in Phase 3 (Evaluate) to synthesize multi-stakeholder criteria into an objective ranking.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
A quantitative multi-attribute utility technique in `score_decision.py` that normalizes subjective assessments across strategic, operational, and risk categories, computing composite weighted totals and flagging ties (<10% score gap) for explicit human tie-breaking.
