---
package: rjm
name: break-even timeline
slug: break-even-timeline
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

# break-even timeline

## Definition — verbatim
> "Calculate NPV, IRR, break-even timeline for build/buy/partner options." — .claude/skills/buy-vs-build-framework/SKILL.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 204 | defined here | Output metric calculated by calculate_tco.py determining the payback horizon for in-house development. |

## Consumes
Initial development expenditures, ongoing operational maintenance budgets, and third-party licensing fees.

## Produces
Projected calendar date or milestone when cumulative build costs become lower than cumulative buy costs.

## When applied
Calculated during financial feasibility modeling in Phase 2 of buy-vs-build evaluation.

## Sub-concepts
none

## Part of
tco-analysis, tiered-tco-analysis

## Implementation status
defects: missing-path, doc-drift

## Design notes
break-even timeline identifies the temporal intersection where the upfront capital investment of an internal build is fully amortized by eliminating recurring vendor licensing fees. If break-even exceeds the anticipated technical lifecycle of the solution, the framework steers leadership away from building.
