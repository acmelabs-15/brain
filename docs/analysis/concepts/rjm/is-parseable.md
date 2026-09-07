---
package: rjm
name: is_parseable
slug: is-parseable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_parseable

## Definition — verbatim
(used, not defined)

> "def is_parseable(version: str) -> bool:" — scripts/validation/check_copilot_version_pin.py:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 72 | defined here | Predicate checking if a version string conforms to accepted semver format. |

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
A Python helper predicate in `check_copilot_version_pin.py` testing semver regex validity, classified as name-only per D-023.
