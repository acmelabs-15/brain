---
package: rjm
name: validate_must_item
slug: validate-must-item
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_must_item

## Definition — verbatim
(used, not defined)

> "def validate_must_item(" — scripts/validate_session_json.py:780

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 780 | defined here | Defined as a function enforcing completion, evidence, and non-contradiction for a single checklist item. |

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
defects: doc-drift, missing-path

## Design notes
`validate_must_item` is a Python function identifier in `scripts/validate_session_json.py` validating compliance rules and evidence integrity for individual checklist items rather than an independent lifecycle concept.
