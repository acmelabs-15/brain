---
package: rjm
name: TYPE_TO_SUBDIR
slug: type-to-subdir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TYPE_TO_SUBDIR

## Definition — verbatim
(used, not defined)

> "TYPE_TO_SUBDIR = {" — scripts/traceability/spec_utils.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 21 | defined here | Mapping table associating specification type prefixes with their respective subdirectory locations under `.agents/specs`. |

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
A Python dictionary mapping specification types to their storage subdirectories, classified as `name-only` per D-023.
