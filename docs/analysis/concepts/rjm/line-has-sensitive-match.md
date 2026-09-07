---
package: rjm
name: _line_has_sensitive_match
slug: line-has-sensitive-match
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _line_has_sensitive_match

## Definition — verbatim
(used, not defined)

> "def _line_has_sensitive_match(" — scripts/review_memory_export_security.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 95 | defined here | Checks whether an export file line matches sensitive patterns while accounting for Forgetful export exemptions. |

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
`_line_has_sensitive_match` is an internal pattern matching helper function in a security scanner rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
