---
package: rjm
name: should_use_fallback
slug: should-use-fallback
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# should_use_fallback

## Definition — verbatim
(used, not defined)

> "Check if LLM fallback should be used for this heuristic score." — scripts/llm_classification/classifier.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 144 | defined here | Method checking whether a heuristic confidence score falls into the configured fallback threshold range. |

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
`should_use_fallback` is a predicate method in `LLMClassifier` deciding when low-confidence heuristic scores warrant LLM evaluation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
