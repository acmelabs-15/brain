---
package: rjm
name: SYSTEM_REMEDY
slug: system-remedy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SYSTEM_REMEDY

## Definition — verbatim
(used, not defined)

> "SYSTEM_REMEDY = f\"git config --system --unset-all core.hooksPath && {REMEDY}\"" — scripts/validation/check_git_hook_health.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 77 | defined here | Constant command string to unset system-scoped core.hooksPath and reinstall lefthook. |

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
SYSTEM_REMEDY is a Python constant identifier for unsetting system-scoped git configuration rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
