---
package: rjm
name: "Decision Matrix Scorer"
slug: decision-matrix-scorer
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Matrix Scorer

## Definition — verbatim
> "**Decision Matrix Scorer**" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 136 | defined here | Automation script concept calculating weighted scores across criteria and running sensitivity analyses. |

## Consumes
Weighted criteria (strategic, operational, risk) and individual option scores on a 1-10 scale.

## Produces
Weighted composite scores, margin-of-victory metrics, and sensitivity analysis determining ranking stability.

## When applied
Executed during Phase 3 (Evaluate) of buy-vs-build evaluation to rank candidates and identify ties requiring human review.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
An analytical scoring tool concept in rjm designed to eliminate subjective bias from architectural trade-offs. By multiplying multidimensional criteria weights against scored options, it determines whether a clear winner exists (>20% margin) or whether a tie mandates human intervention.
