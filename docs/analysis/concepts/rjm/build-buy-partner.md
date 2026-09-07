---
package: rjm
name: "Build/Buy/Partner"
slug: build-buy-partner
kind: pattern
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

# Build/Buy/Partner

## Definition — verbatim
> "Calculate Total Cost of Ownership (TCO) for Build/Buy/Partner decisions." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 3 | used here | Tripartite strategic sourcing classification governing total cost of ownership calculations. |

## Consumes
Architectural capability requirements, internal engineering skills, market vendor availability, and strategic differentiation objectives.

## Produces
Comparative evaluation across three alternative sourcing pathways to identify the optimal delivery model.

## When applied
Invoked whenever an organization evaluates strategic sourcing for software components or infrastructure.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
The core tripartite strategic sourcing taxonomy in rjm's buy-vs-build framework that frames decision-making around three distinct implementation paths: developing custom solutions in-house (Build), licensing off-the-shelf products (Buy), or entering joint value creation and revenue-share arrangements (Partner).
