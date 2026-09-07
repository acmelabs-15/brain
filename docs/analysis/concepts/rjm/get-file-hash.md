---
package: rjm
name: get_file_hash
slug: get-file-hash
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

# get_file_hash

## Definition — verbatim
(used, not defined)

> "def get_file_hash(file_path: str | Path) -> str | None:" — scripts/traceability/traceability_cache.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 15 | used here | Imported to obtain fast modification hashes when validating cached specification files. |
| scripts/traceability/traceability_cache.py | 42 | defined here | Utility function computing a composite file modification time and size string for cache validation. |

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
A utility function generating a quick file fingerprint from mtime and file size for cache invalidation, classified as `name-only` per D-023.
