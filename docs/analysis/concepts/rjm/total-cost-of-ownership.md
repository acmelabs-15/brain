---
package: rjm
name: Total Cost of Ownership
slug: total-cost-of-ownership
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
  - {path: .claude/skills/programming-advisor/references/pricing-data.md, sha256: 38003bd67a1ad7fdf4bcd848adc868a3538034a44c889ac7d2ee2190555d48b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Total Cost of Ownership

## Definition — verbatim
> "Calculate Total Cost of Ownership (TCO) for Build/Buy/Partner decisions." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3

## Also called — verbatim
`total cost of ownership` — .claude/skills/programming-advisor/references/pricing-data.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 3 | defined here | Script module docstring declaring the calculation of multi-year discounted total cost of ownership. |
| .claude/skills/programming-advisor/references/pricing-data.md | 3 | used here | Reference pricing dataset specifying commercial SaaS cost baselines for calculating TCO comparisons. |

## Consumes
Initial development or licensing costs, recurring annual operational costs, engineer compensation, maintenance growth rates, code churn rates, and discount rates.

## Produces
Comparative net present value calculations, break-even timelines, and sensitivity analyses across build, buy, and partner sourcing strategies.

## When applied
Applied during Phase 2 (Analyze) of the buy-vs-build framework and during architecture spike evaluation in programming-advisor.

## Sub-concepts
net-present-value, internal-rate-of-return, break-even-point, sensitivity-analysis

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Total Cost of Ownership (TCO) is a foundational economic evaluation technique in rjm that aggregates all direct and indirect expenses—including ongoing maintenance growth, engineer overhead, and code churn—across multi-year horizons to ensure build, buy, and partner options are evaluated on true lifetime cost rather than upfront sticker price.
