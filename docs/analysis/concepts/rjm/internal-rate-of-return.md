---
package: rjm
name: "Internal Rate of Return"
slug: internal-rate-of-return
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

# Internal Rate of Return

## Definition — verbatim
> "Calculate Internal Rate of Return using binary search." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 108 | defined here | Function docstring defining binary search calculation of the discount rate where NPV equals zero. |

## Consumes
Upfront capital expenditures, annual recurring costs, and multi-year horizon parameters.

## Produces
The implied rate of return percentage for capital allocated to building software rather than purchasing.

## When applied
Evaluated during Phase 2 (Analyze) as a secondary financial metric alongside NPV.

## Sub-concepts
none

## Part of
total-cost-of-ownership

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Internal Rate of Return (IRR) is a capital budgeting technique implemented via binary search in `calculate_tco.py` to calculate the annualized effective return of internal software investments compared to external procurement, helping finance leaders assess opportunity cost.
