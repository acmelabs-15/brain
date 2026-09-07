---
package: rjm
name: set_cached_spec
slug: set-cached-spec
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/traceability/traceability_cache.py, sha256: a39ea339fe938a368bf4adfe6b666ef68e7c110e44bac6e2e71cac74d0dfd19c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# set_cached_spec

## Definition — verbatim
(used, not defined)

> "def set_cached_spec(" — scripts/traceability/traceability_cache.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 16 | used here | Imported to store newly parsed specification frontmatter into the cache. |
| scripts/traceability/traceability_cache.py | 86 | defined here | Cache storage function saving parsed specification frontmatter to both in-memory dictionary and on-disk JSON file. |

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
defects: script-bug, missing-path, other

## Design notes
A caching utility function storing parsed specification data into memory and persistent disk caches, classified as `name-only` per D-023.
