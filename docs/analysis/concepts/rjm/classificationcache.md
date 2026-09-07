---
package: rjm
name: ClassificationCache
slug: classificationcache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ClassificationCache

## Definition — verbatim
(used, not defined)

> "LRU cache for LLM classification results." — scripts/llm_classification/cache.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/cache.py | 23 | defined here | LRU cache class storing classification results with fuzzy comment fingerprinting. |
| scripts/llm_classification/classifier.py | 15 | used here | Imported and instantiated to provide result caching for comment classification. |

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
`ClassificationCache` is an in-memory LRU cache class for comment classification results rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
