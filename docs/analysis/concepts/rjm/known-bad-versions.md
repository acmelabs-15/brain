---
package: rjm
name: KNOWN_BAD_VERSIONS
slug: known-bad-versions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KNOWN_BAD_VERSIONS

## Definition — verbatim
(used, not defined)

> "KNOWN_BAD_VERSIONS: frozenset[str] = frozenset({\"0.0.397\"})" — scripts/validation/check_copilot_version_pin.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 46 | defined here | Frozenset constant tracking versions known to break AI steps. |

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
A Python constant in `check_copilot_version_pin.py` containing known defective versions of the Copilot CLI, classified as name-only per D-023.
