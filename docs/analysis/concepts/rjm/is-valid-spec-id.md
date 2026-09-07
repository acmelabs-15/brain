---
package: rjm
name: is_valid_spec_id
slug: is-valid-spec-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_valid_spec_id

## Definition — verbatim
(used, not defined)

> "def is_valid_spec_id(spec_id: str) -> bool:" — scripts/traceability/spec_utils.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 27 | used here | Imported to validate root specification ID parameter format. |
| scripts/traceability/spec_utils.py | 28 | defined here | Function verifying whether a spec ID conforms to the TYPE-ID regex pattern. |
| scripts/traceability/update_spec_references.py | 31 | used here | Imported to validate source and target spec IDs before updating references. |

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
defects: script-bug, missing-path, orphan

## Design notes
A Python validation function in `spec_utils.py` verifying that specification IDs follow expected prefixes and formats, classified as `name-only` per D-023.
