---
package: rjm
name: Buy
slug: buy
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Buy

## Definition — verbatim
> "| **Buy** | Context capability + viable vendors + faster time to value. Team lacks capacity OR skills. Commodity capability with mature market. |" — .claude/skills/buy-vs-build-framework/SKILL.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 15 | defined here | Sourcing decision matrix output option recommending commercial off-the-shelf procurement. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 220 | defined here | Option element in skill specification outlining conditions favoring commercial vendor acquisition. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 122 | used here | Sourcing alternative key in scoring script evaluating commercial vendor options. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 184 | defined here | Decision recommendation table entry specifying criteria for buying context or commodity solutions. |

## Consumes
Context capability requirements, vendor evaluations, pricing tiers, and SLA assessments.

## Produces
Procurement recommendation, vendor integration plan, and vendor lock-in mitigation strategy.

## When applied
Recommended when the capability is context (table stakes), viable commercial vendors exist, and faster time-to-value is required.

## Sub-concepts
vendor-evaluation

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc

## Design notes
A primary strategic outcome of the buy-vs-build framework in rjm. Choosing 'Buy' directs engineering resources away from reinventing commodity or context capabilities and toward procuring mature commercial solutions, preserving team bandwidth for core differentiators.
