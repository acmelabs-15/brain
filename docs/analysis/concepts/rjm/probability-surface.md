---
package: rjm
name: probability surface
slug: probability-surface
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# probability surface

## Definition — verbatim
> "GPTZero measures the probability surface: how the model selects each token from its probability space." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 24 | defined here | Defined as the statistical token distribution space from which LLMs generate text, explaining why detectors reliably distinguish model output. |

## Consumes
Statistical token distributions generated during LLM sampling and inference.

## Produces
Foundational explanation for why surface-level style prompts cannot eliminate statistical machine signatures.

## When applied
When analyzing model token selection behavior, detection mechanisms, and prompt rule limitations.

## Sub-concepts
none

## Part of
ai-detection-cliff

## Implementation status
clean

## Design notes
Probability surface describes the underlying mathematical reality of LLM generation: models consistently pick high-probability tokens from their distribution space, creating a flat signature that detectors measure. Style instructions alter surface vocabulary but cannot wrinkle the underlying probability surface without model retraining.
