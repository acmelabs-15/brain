---
package: rjm
name: get_spec_subdir
slug: get-spec-subdir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_spec_subdir

## Definition — verbatim
(used, not defined)

> "def get_spec_subdir(spec_id: str) -> str:" — scripts/traceability/spec_utils.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 38 | defined here | Utility function looking up the directory name associated with a specification identifier. |

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
defects: script-bug, missing-path

## Design notes
A helper function resolving the appropriate storage subdirectory for a given specification ID, classified as `name-only` per D-023.
