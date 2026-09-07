---
package: rjm
name: is_known_bad
slug: is-known-bad
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_known_bad

## Definition — verbatim
(used, not defined)

> "def is_known_bad(version: str) -> bool:" — scripts/validation/check_copilot_version_pin.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 77 | defined here | Predicate checking if a version string is listed in `KNOWN_BAD_VERSIONS`. |

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
A Python helper predicate in `check_copilot_version_pin.py` checking version strings against known broken versions, classified as name-only per D-023.
