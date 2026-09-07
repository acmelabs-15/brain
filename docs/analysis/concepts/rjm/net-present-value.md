---
package: rjm
name: Net Present Value
slug: net-present-value
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

# Net Present Value

## Definition — verbatim
> "Calculate Net Present Value (what you actually pay in today's dollars)." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 84 | defined here | Function docstring defining the discounted cash flow formula converting future expenses to present value. |

## Consumes
Upfront initial expenses, recurring annual operating costs, discount rate, and multi-year projection horizon.

## Produces
Normalized total cost in current dollars, enabling fair economic comparison across asymmetric multi-year expenditure profiles.

## When applied
Calculated in Phase 2 (Analyze) to quantify total cost of ownership across build, buy, and partner options.

## Sub-concepts
none

## Part of
total-cost-of-ownership

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Net Present Value (NPV) provides the financial foundation for rjm's total cost of ownership modeling. By discounting future recurring maintenance, licensing, and integration expenses to present value, it ensures that long-term recurring SaaS subscriptions are fairly compared against upfront in-house software development investments.
