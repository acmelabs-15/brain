---
package: rjm
name: validate_filename_number
slug: validate-filename-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_filename_number

## Definition — verbatim
(used, not defined)

> "def validate_filename_number(" — scripts/validate_session_json.py:1330

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 1330 | defined here | Defined as a validation function checking that session.number matches the filename number stem. |

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
`validate_filename_number` is a Python function identifier in `scripts/validate_session_json.py` enforcing agreement between the session log's internal session.number property and its filename rather than an independent lifecycle concept.
