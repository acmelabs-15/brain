---
package: rjm
name: "Time Horizon"
slug: time-horizon
kind: technique
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

# Time Horizon

## Definition — verbatim
> "### 11. Time Horizon" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 119 | defined here | Temporal evaluation model categorizing needs into short, medium, and long-term horizons to guide sourcing. |

## Consumes
Urgency of business requirements, delivery schedules, and strategic capability roadmaps.

## Produces
Time-window classification (<6 months, 6-24 months, >24 months) driving build vs buy recommendations.

## When applied
Applied at the outset of sourcing evaluations to determine whether delivery deadlines override long-term architectural preferences.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A temporal framework that calibrates build versus buy decisions against delivery urgency. In rjm, near-term horizons (<6 months) strongly favor commercial solutions due to immediate time-to-value, whereas longer time horizons (>2 years) permit strategic in-house investments to mature and deliver compounding returns.
