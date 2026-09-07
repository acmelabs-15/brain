---
package: rjm
name: Pseudo-Accuracy
slug: pseudo-accuracy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pseudo-Accuracy

## Definition — verbatim
> "Quantitative scoring where qualities cannot be measured discretely" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 131 | defines | Tabulated under Magic Tricks anti-patterns as using quantitative scoring matrices where qualitative attributes cannot be measured discretely. |

## Consumes
Weighted decision matrices, arbitrary numerical scores, and mathematical evaluation models in an ADR.

## Produces
Critique demanding the replacement of arbitrary numerical ratings with transparent qualitative trade-off arguments.

## When applied
Flagged during review when an author employs arbitrary point scores and weightings to simulate mathematical objectivity.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Pseudo-Accuracy is the practice of dressing subjective architectural preferences in mathematical trappings, such as multi-attribute weighting matrices that sum arbitrary scores to declare a winner. In rjm, this false rigor is recognized as deceptive because adjusting arbitrary weights allows any pre-determined choice to win; clear qualitative reasoning is preferred over synthetic arithmetic.
