---
package: rjm
name: _call_llm
slug: call-llm
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

# _call_llm

## Definition — verbatim
(used, not defined)

> "Make an LLM API call to classify the comment." — scripts/llm_classification/classifier.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 88 | defined here | Method invoking the Anthropic messages API with retry logic and parsing JSON classification results. |

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
`_call_llm` is an internal method in `LLMClassifier` that handles network calls and response serialization for LLM inference rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
