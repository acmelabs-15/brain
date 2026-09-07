---
package: rjm
name: _get_client
slug: get-client
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

# _get_client

## Definition — verbatim
(used, not defined)

> "Lazily initialize Anthropic client." — scripts/llm_classification/classifier.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 77 | defined here | Method lazily instantiating and caching the Anthropic SDK client using ANTHROPIC_API_KEY. |

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
`_get_client` is an internal helper method in `LLMClassifier` for lazy initialization of the Anthropic API client rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
