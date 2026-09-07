---
package: rjm
name: _CACHE_DIR
slug: cache-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/traceability_cache.py, sha256: a39ea339fe938a368bf4adfe6b666ef68e7c110e44bac6e2e71cac74d0dfd19c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _CACHE_DIR

## Definition — verbatim
(used, not defined)

> "_CACHE_DIR = Path(__file__).resolve().parent.parent.parent" — scripts/traceability/traceability_cache.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 28 | defined here | Constant defining persistent disk directory path for traceability JSON cache files. |

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
defects: other

## Design notes
A filesystem path constant identifier for disk caching rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
