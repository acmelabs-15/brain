---
package: rjm
name: Layer 3
slug: layer-3
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Layer 3

## Definition — verbatim
(used, not defined)

> "Layer 3 stays in `burstiness.py`, Layer 4 stays with the agent." — .claude/skills/prose-self-check/scripts/prose_lint.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 23 | used here | Cited in module docstring as the distributional proxy layer implemented in `burstiness.py`. |

## Consumes
Target prose artifact text.

## Produces
Sentence-length distribution metrics, coefficient of variation calculations, and concreteness counts.

## When applied
Applied during the second automated stage of prose self-check.

## Sub-concepts
burstiness, concreteness

## Part of
prose-self-check

## Implementation status
clean

## Design notes
In prose-self-check, Layer 3 serves as a distributional proxy layer calculating sentence length variance and concreteness counts, alerting authors to monotone cadence and abstract fluff before human or semantic review.
