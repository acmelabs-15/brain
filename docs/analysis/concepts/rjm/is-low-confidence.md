---
package: rjm
name: is_low_confidence
slug: is-low-confidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/config.py, sha256: ad5524115256c40e875acc541ff9d413081f5a58ec8a602e947568d094a7ca5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_low_confidence

## Definition — verbatim
(used, not defined)

> "def is_low_confidence(self, score: float) -> bool:" — scripts/llm_classification/config.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/config.py | 38 | defined here | Method checking whether a heuristic confidence score falls within configured low-confidence boundaries. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Method identifier on LLMFallbackConfig checking heuristic score confidence bounds, classified as name-only per D-023.
