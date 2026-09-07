---
package: rjm
name: break-even point
slug: break-even-point
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# break-even point

## Definition — verbatim
> "Calculate break-even point in years." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 128 | defined here | Function docstring defining the calculation of the year when cumulative build costs become cheaper than buy costs. |

## Consumes
Initial upfront costs and annual recurring ongoing expenses for both build and buy options, plus the discount rate.

## Produces
The specific point in time (in fractional years) at which initial build investments amortize sufficiently to beat commercial subscription fees.

## When applied
Calculated in Phase 2 (Analyze) to give stakeholders a temporal benchmark for investment recovery.

## Sub-concepts
none

## Part of
total-cost-of-ownership

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Break-even point analysis identifies the exact temporal cross-over point where the cumulative present-value expenditure of custom in-house software development drops below the ongoing licensing fees of an off-the-shelf product, giving leadership an intuitive time horizon for ROI.
