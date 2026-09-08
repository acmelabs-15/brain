---
package: rjm
name: clear_tracked_path_cache
slug: clear-tracked-path-cache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/tracked_paths.py, sha256: 2d9d92b4577f09a636d93a061b26cd143389eb6153519e0ba1b195fe9b0d9afc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# clear_tracked_path_cache

## Definition — verbatim
(used, not defined)

> "def clear_tracked_path_cache() -> None:" — scripts/validation/tracked_paths.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/tracked_paths.py | 110 | defined here | Cache invalidation function clearing the lru_cache for tracked repository path snapshots. |

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
A module cache invalidation function identifier in scripts/validation/tracked_paths.py, classified as name-only per D-023.
