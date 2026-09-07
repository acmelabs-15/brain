---
package: rjm
name: Force Balance
slug: force-balance
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Force Balance

## Definition — verbatim
> "### Force Balance" — .claude/skills/retrospective/references/frameworks.md:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 268 | defined here | Calculation section of Force Field Analysis summing driving versus restraining forces to determine net vector. |

## Consumes
Summed strength scores of Driving Forces and Restraining Forces.

## Produces
Net force calculation and recommended strategy (strengthen driving, reduce restraining, or accept uncontrollable).

## When applied
Applied in Force Field Analysis after rating all individual driving and restraining factors.

## Sub-concepts
none

## Part of
force-field-analysis

## Implementation status
clean

## Design notes
Force Balance provides a quantitative equilibrium assessment between forces supporting change and forces resisting it. By computing net balance (Driving minus Restraining), it informs whether an agent team should focus on amplifying enablers or dismantling blockers.
