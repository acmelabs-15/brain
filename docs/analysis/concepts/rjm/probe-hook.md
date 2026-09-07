---
package: rjm
name: PROBE_HOOK
slug: probe-hook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PROBE_HOOK

## Definition — verbatim
(used, not defined)

> "PROBE_HOOK = \"pre-push\"" — scripts/validation/check_git_hook_health.py:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 72 | defined here | Constant identifying the probe hook name used to check git hook installation health. |

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
PROBE_HOOK is a Python constant identifier designating the pre-push hook as a canary probe rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
