---
package: rjm
name: _LEGACY_HANDOFF_FIELD
slug: legacy-handoff-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _LEGACY_HANDOFF_FIELD

## Definition — verbatim
(used, not defined)

> "_LEGACY_HANDOFF_FIELD = \"handoffNotUpdated\"" — scripts/validate_session_json.py:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 254 | defined here | Defined as a string constant referencing the legacy checklist field name handoffNotUpdated. |

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
`_LEGACY_HANDOFF_FIELD` is a private Python constant identifier in `scripts/validate_session_json.py` maintaining backward compatibility with legacy session logs rather than an independent lifecycle concept.
