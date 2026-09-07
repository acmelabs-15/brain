---
package: rjm
name: TCO analysis
slug: tco-analysis
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

# TCO analysis

## Definition — verbatim
> "- Need structured TCO analysis to justify budget allocation" — .claude/skills/buy-vs-build-framework/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 31 | defined here | Identified condition and trigger for conducting multi-year total cost of ownership evaluations to justify budget allocations. |

## Consumes
Development resource costs, maintenance estimates, software licensing fees, and infrastructure projections.

## Produces
Quantitative total cost models, net present value calculations, and capital allocation justifications.

## When applied
Applied when choosing between software construction, licensing, or outsourcing.

## Sub-concepts
tiered-tco-analysis, break-even-timeline

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
TCO analysis provides a quantitative financial foundation for technical architecture decisions. By tallying both upfront build/purchase fees and ongoing maintenance, infrastructure, and operational drag over 3-10 years, it exposes the true multi-year cost of software solutions.
