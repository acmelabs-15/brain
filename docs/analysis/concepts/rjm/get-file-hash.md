---
package: rjm
name: get_file_hash
slug: get-file-hash
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
