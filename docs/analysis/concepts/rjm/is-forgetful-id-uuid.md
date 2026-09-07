---
package: rjm
name: _is_forgetful_id_uuid
slug: is-forgetful-id-uuid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_forgetful_id_uuid

## Definition — verbatim
(used, not defined)

> "def _is_forgetful_id_uuid(line: str, match: re.Match[str]) -> bool:" — scripts/review_memory_export_security.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 86 | defined here | Predicate checking if a generic secret pattern match corresponds to a legitimate Forgetful UUID field. |

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
clean

## Design notes
`_is_forgetful_id_uuid` is an internal helper function filtering benign UUIDs in Forgetful exports rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
