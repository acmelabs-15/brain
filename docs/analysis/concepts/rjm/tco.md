---
package: rjm
name: TCO
slug: tco
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TCO

## Definition — verbatim
> "Calculate Total Cost of Ownership (TCO) for Build/Buy/Partner decisions." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3

## Also called — verbatim
`Total Cost of Ownership` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 96 | used here | Contrasted as a sourcing optimization framework that should only run after customer problem validation. |
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 3 | defined here | Implemented in Python calculator script modeling NPV, IRR, break-even horizons, and engineering overhead. |

## Consumes
Upfront capital costs, annual engineering salary, maintenance overhead hours, code churn drag, and discount rate.

## Produces
Comparative multi-year cost model across Build, Buy, and Partner sourcing alternatives.

## When applied
When evaluating whether to engineer an in-house solution, purchase commercial off-the-shelf software, or partner.

## Sub-concepts
npv, irr, breakeven

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Total Cost of Ownership (TCO) evaluates the complete multi-year financial impact of engineering solutions, factoring in hidden ongoing expenses like code churn and maintenance growth alongside upfront build or purchase prices. In rjm, it provides financial rigor to build-vs-buy decisions, while four-steps clarifies that TCO calculations must never precede problem validation.
