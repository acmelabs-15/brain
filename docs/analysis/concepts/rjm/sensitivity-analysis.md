---
package: rjm
name: sensitivity analysis
slug: sensitivity-analysis
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# sensitivity analysis

## Definition — verbatim
> "Calculate weighted decision scores with sensitivity analysis." — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:3

## Also called — verbatim
`Sensitivity analysis` — .claude/skills/buy-vs-build-framework/SKILL.md:140

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py | 447 | defined here | Section comment and function call evaluating ±20% variation in discount rate and ongoing costs. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 3 | defined here | Script module docstring declaring weighted scoring coupled with category weight perturbation analysis. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 140 | used here | Exit criteria check requiring sensitivity analysis to identify the top 3 cost drivers before decision matrix evaluation. |

## Consumes
Baseline financial model parameters (discount rate, ongoing costs) or decision matrix category weights (strategic, operational, risk).

## Produces
Projected outcome swings under ±20% input perturbations, identifying the volatility and robustness of the winning option.

## When applied
Applied during Phase 2 (Analyze) for cost drivers and Phase 3 (Evaluate) for decision weight robustness.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc, missing-path, script-bug

## Design notes
Sensitivity analysis tests the resilience of strategic recommendations against estimation error by perturbing financial inputs and criteria weights by ±20%. It ensures decisions do not rest on fragile point estimates, revealing whether small shifts in discount rates or operational costs would flip the preferred option.
