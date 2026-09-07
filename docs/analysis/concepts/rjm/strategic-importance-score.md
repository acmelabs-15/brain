---
package: rjm
name: Strategic importance score
slug: strategic-importance-score
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

# Strategic importance score

## Definition — verbatim
> "2. Strategic importance score (1-10)" — .claude/skills/buy-vs-build-framework/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 97 | defined here | Phase 1 deliverable requirement scoring capability strategic value on a 1-10 scale. |

## Consumes
Business strategy documents, differentiation objectives, and competitive threat assessments.

## Produces
Integer score (1-10) quantifying how critical a technical capability is to organizational survival and competitive advantage.

## When applied
Applied during Phase 1 (Strategic Classification) of the buy-vs-build framework.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: missing-path, doc-drift

## Design notes
Strategic importance score is a calibrated 1-10 metric assessing the degree to which a software capability delivers proprietary market differentiation. High scores (8-10) mandate internal ownership and full control, whereas lower scores indicate standard utility capabilities suitable for off-the-shelf purchase.
