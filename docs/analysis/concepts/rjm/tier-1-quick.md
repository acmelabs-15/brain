---
package: rjm
name: "Tier 1: Quick"
slug: tier-1-quick
kind: pattern
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

# Tier 1: Quick

## Definition — verbatim
> "### Tier 1: Quick (1-2 hours)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 159 | defined here | Lightweight analysis tier for decisions under $50K with low strategic impact and high reversibility. |

## Consumes
Initial proposal details for decisions under $50K budget.

## Produces
Core vs Context classification, simple TCO calculation, and immediate Go/No-go recommendation.

## When applied
Triggered when decision budget is below $50,000, strategic impact is low, and choices are readily reversible.

## Sub-concepts
none

## Part of
tiered-depth-analysis

## Implementation status
defects: doc-drift

## Design notes
The lightweight execution tier within rjm's tiered depth framework. Designed to complete in 1 to 2 hours, Tier 1 prevents bureaucratic delays on minor, easily reversible technical choices by limiting overhead to a basic Core vs Context check and simple total cost calculation.
