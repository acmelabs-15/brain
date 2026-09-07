---
package: rjm
name: VersionPinError
slug: versionpinerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VersionPinError

## Definition — verbatim
(used, not defined)

> "class VersionPinError(ValueError):" — scripts/validation/check_copilot_version_pin.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 68 | defined here | Exception raised when no `COPILOT_VERSION` pin is located in an action file. |

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
A Python exception class raised when a GitHub Action file is missing its required Copilot version pin, classified as name-only per D-023.
