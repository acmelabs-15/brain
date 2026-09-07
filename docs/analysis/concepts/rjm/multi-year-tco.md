---
package: rjm
name: Multi-year TCO
slug: multi-year-tco
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-year TCO

## Definition — verbatim
(used, not defined)
> "#### 9.2 Multi-year TCO: delegate" — .claude/skills/programming-advisor/SKILL.md:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 224 | used here | Identifies multi-year TCO and NPV calculations as an out-of-scope strategic analysis delegated to buy-vs-build-framework. |

## Consumes
Multi-year projection horizons (Year 1/3/5), discount rates, break-even targets, and ongoing operational maintenance estimates.

## Produces
Net Present Value (NPV) and Total Cost of Ownership models calculated via `calculate_tco.py`.

## When applied
Applied when architectural choices involve strategic, capital-intensive investments with long-term financial commitments exceeding simple tactical evaluation.

## Sub-concepts
none

## Part of
cost-analysis, programming-advisor

## Implementation status
clean

## Design notes
Multi-year TCO represents comprehensive lifecycle financial modeling encompassing upfront build costs, cloud infrastructure, recurring licenses, maintenance overhead, and capital depreciation over multiple years. In programming-advisor, it defines the threshold where lightweight tactical evaluations defer to formal quantitative models in buy-vs-build-framework.
