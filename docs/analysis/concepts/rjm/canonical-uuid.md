---
package: rjm
name: _CANONICAL_UUID
slug: canonical-uuid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _CANONICAL_UUID

## Definition — verbatim
(used, not defined)

> "_CANONICAL_UUID = re.compile(" — scripts/review_memory_export_security.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 30 | defined here | Compiled regular expression validating standard 8-4-4-4-12 hex UUID formats. |

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
`_CANONICAL_UUID` is a compiled regular expression constant in a security review script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
