---
package: rjm
name: TCO Framework
slug: tco-framework
kind: technique
package_phase: rjm:spec
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

# TCO Framework

## Definition — verbatim
> "3. TCO Framework with three tiers (quick, standard, deep)" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 13 | defined here | Explicit requirement defining the three-tiered total cost of ownership evaluation model. |

## Consumes
Engineering build estimates, ongoing maintenance assumptions, vendor licensing tiers, and integration costs.

## Produces
Multi-year total cost of ownership calculation comparing build, buy, and partner options across quick, standard, or deep depths.

## When applied
Applied during Phase 2 (Analyze) of the buy-vs-build framework to calculate realistic lifecycle expenditures.

## Sub-concepts
tiered-depth, ongoing-maintenance-cost

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
A financial modeling framework in rjm's buy-vs-build skill. It enforces comprehensive multi-year total cost accounting—including initial development, integration, maintenance, infrastructure, and opportunity costs—tiered by decision magnitude to avoid under- or over-investing in financial analysis.
