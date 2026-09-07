---
package: rjm
name: get_spec_type
slug: get-spec-type
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_spec_type

## Definition — verbatim
(used, not defined)

> "def get_spec_type(spec_id: str) -> str:" — scripts/traceability/spec_utils.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 33 | defined here | Utility function extracting the type prefix (e.g., REQ, DESIGN, TASK) from a specification identifier. |

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
A helper function extracting the type prefix from a formatted specification identifier string, classified as `name-only` per D-023.
