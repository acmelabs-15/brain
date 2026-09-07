---
package: rjm
name: SPEC_ID_PATTERN
slug: spec-id-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SPEC_ID_PATTERN

## Definition — verbatim
(used, not defined)

> "SPEC_ID_PATTERN = re.compile(" — scripts/traceability/spec_utils.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 19 | defined here | Regular expression constant defining the valid pattern for specification IDs (REQ-, DESIGN-, or TASK-). |

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
A compiled regular expression constant in `spec_utils.py` defining valid specification identifier syntax, classified as `name-only` per D-023.
