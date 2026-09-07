---
package: rjm
name: get_cached_spec
slug: get-cached-spec
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_cached_spec

## Definition — verbatim
(used, not defined)

> "def get_cached_spec(" — scripts/traceability/traceability_cache.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 14 | used here | Imported to look up cached specification metadata during YAML parsing. |
| scripts/traceability/traceability_cache.py | 54 | defined here | Cache lookup function returning parsed specification frontmatter if cached hash matches current hash. |

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
A caching utility function in `traceability_cache.py` retrieving cached frontmatter metadata, classified as `name-only` per D-023.
