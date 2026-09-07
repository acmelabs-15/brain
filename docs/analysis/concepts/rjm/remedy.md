---
package: rjm
name: REMEDY
slug: remedy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REMEDY

## Definition — verbatim
(used, not defined)

> "REMEDY = \"uv run --frozen lefthook install --reset-hooks-path\"" — scripts/validation/check_git_hook_health.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 74 | defined here | Constant command string providing the base remediation command to install lefthook hooks. |
| scripts/validation/check_git_hook_health.py | 165 | defined here | Helper function returning scope-aware repair commands using REMEDY. |

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
REMEDY is a Python constant and helper function identifier for repairing git hook installations rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
