---
package: rjm
name: _FORGETFUL_ID_UUID
slug: forgetful-id-uuid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _FORGETFUL_ID_UUID

## Definition — verbatim
(used, not defined)

> "_FORGETFUL_ID_UUID = re.compile(" — scripts/review_memory_export_security.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 26 | defined here | Compiled regular expression matching JSON id and user_id fields with UUID values for Forgetful exports. |

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
`_FORGETFUL_ID_UUID` is a compiled regular expression constant in a security review script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
