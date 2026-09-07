---
package: rjm
name: GLOBAL_REMEDY
slug: global-remedy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GLOBAL_REMEDY

## Definition — verbatim
(used, not defined)

> "GLOBAL_REMEDY = f\"git config --global --unset-all core.hooksPath && {REMEDY}\"" — scripts/validation/check_git_hook_health.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 76 | defined here | Constant command string to unset global-scoped core.hooksPath and reinstall lefthook. |

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
GLOBAL_REMEDY is a Python constant identifier for unsetting global-scoped git configuration rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
