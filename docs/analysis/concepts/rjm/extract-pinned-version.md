---
package: rjm
name: extract_pinned_version
slug: extract-pinned-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# extract_pinned_version

## Definition — verbatim
(used, not defined)

> "def extract_pinned_version(action_path: Path) -> str:" — scripts/validation/check_copilot_version_pin.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_copilot_version_pin.py | 82 | defined here | Function parsing an action file to extract its pinned `COPILOT_VERSION`. |

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
A Python helper function in `check_copilot_version_pin.py` extracting pinned version strings from action definitions, classified as name-only per D-023.
