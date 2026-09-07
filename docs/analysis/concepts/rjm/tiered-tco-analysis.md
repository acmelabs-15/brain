---
package: rjm
name: tiered TCO analysis
slug: tiered-tco-analysis
kind: technique
package_phase: rjm:Evaluate
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# tiered TCO analysis

## Definition — verbatim
> "description: Strategic framework for evaluating build, buy, partner, or defer decisions with four-phase process, tiered TCO analysis, and integration with decision quality tools." — .claude/skills/buy-vs-build-framework/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 4 | defined here | Highlighted as a core capability in the skill description for evaluating long-term costs across horizons. |

## Consumes
Initial development cost estimates, recurring licensing fees, infrastructure overhead, and maintenance projections.

## Produces
Multi-horizon (3, 5, 10 year) comparative cost models with sensitivity analyses.

## When applied
Applied during Phase 2 (Cost & Feasibility Analysis) of the buy-vs-build framework.

## Sub-concepts
tco-analysis, break-even-timeline

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
tiered TCO analysis is a structured financial modeling technique that evaluates Total Cost of Ownership across tiered time horizons (3, 5, and 10 years). By explicitly examining long-term maintenance drag, scaling costs, and infrastructure overhead alongside initial capital expense, it prevents short-sighted architectural choices.
