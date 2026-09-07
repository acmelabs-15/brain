---
package: rjm
name: Reach
slug: reach
kind: reference
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reach

## Definition — verbatim
> "Reach: users affected per quarter" — .claude/agents/roadmap.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 35 | defined here | Primary multiplier variable in the RICE formula measuring quarterly user impact. |

## Consumes
Product analytics, user traffic estimates, and quarterly active user projections.

## Produces
Quantitative numerical input measuring the scope of users affected per quarter for RICE calculation.

## When applied
Calculated when computing RICE scores for candidate features.

## Sub-concepts
none

## Part of
rice

## Implementation status
clean

## Design notes
Reach anchors the RICE prioritization formula in empirical user metrics. By quantifying exactly how many users will experience or benefit from a feature in a given quarter, it prevents niche edge-case features from absorbing disproportionate engineering investment.
