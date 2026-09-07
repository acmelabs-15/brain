---
package: rjm
name: CacheEntry
slug: cacheentry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CacheEntry

## Definition — verbatim
(used, not defined)

> "A cached classification result with hit tracking." — scripts/llm_classification/cache.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/cache.py | 16 | defined here | Dataclass holding a cached classification result and its hit count. |

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
`CacheEntry` is an internal Python dataclass representing a cached result with access counters rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
