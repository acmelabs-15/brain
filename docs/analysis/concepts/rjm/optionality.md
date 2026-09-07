---
package: rjm
name: Optionality
slug: optionality
kind: technique
package_phase: rjm:plan
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

# Optionality

## Definition — verbatim
> "### 8. Optionality" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 99 | defined here | Thinking model rating decision options on reversibility and valuing deferral to keep future paths open. |

## Consumes
Proposed architecture commitments, switching costs, and contractual or architectural lock-in factors.

## Produces
Reversibility ratings and recommendation scores prioritizing solutions that preserve future strategic choices.

## When applied
Applied when assessing high-stakes architectural or vendor commitments with uncertain requirements.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
An architectural valuation model in rjm that treats future adaptability as an explicit asset. By scoring choices on reversibility and recognizing 'defer' as an active strategic choice, optionality prevents premature architectural lock-in and protects systems from irreversible commitments under high uncertainty.
