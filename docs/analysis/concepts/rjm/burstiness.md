---
package: rjm
name: burstiness
slug: burstiness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/burstiness.py, sha256: c6c1c60b5f3e1cdf84bf8d1c3615c8ab4a6d7334a8ba082e1d73db85a5096b06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# burstiness

## Definition — verbatim
> "Computes sentence-length variance (burstiness) and a concreteness count" — .claude/skills/prose-self-check/scripts/burstiness.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/burstiness.py | 4 | defined here | Defined in the module docstring as sentence-length variance measured as a statistical proxy for prose rhythm. |

## Consumes
Target prose artifact text.

## Produces
Sentence-length variance statistics and coefficient of variation (CV) metrics to flag monotone cadence.

## When applied
Applied during Layer 3 distributional analysis of prose-self-check.

## Sub-concepts
mean_sentence_length, stddev_sentence_length, coefficient_of_variation, flat_rhythm_warning

## Part of
prose-self-check

## Implementation status
clean

## Design notes
In prose-self-check, burstiness serves as a statistical proxy measuring sentence-length variation to catch flat, monotone sentence rhythms that represent the second most common reader tell of AI-generated prose.
