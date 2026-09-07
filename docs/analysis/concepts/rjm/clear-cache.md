---
package: rjm
name: clear_cache
slug: clear-cache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/traceability_cache.py, sha256: a39ea339fe938a368bf4adfe6b666ef68e7c110e44bac6e2e71cac74d0dfd19c}
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# clear_cache

## Definition — verbatim
(used, not defined)

> "def clear_cache() -> None:" — scripts/traceability/traceability_cache.py:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 112 | defined here | Defines function resetting in-memory dictionary and unlinking cached JSON files on disk. |
| scripts/traceability/update_spec_references.py | 35 | used here | Imported to invalidate traceability cache after modifying specification references. |

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
defects: other, script-bug, orphan

## Design notes
A Python utility function identifier for cache eviction rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
