---
package: rjm
name: ClassificationCache
slug: classificationcache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
