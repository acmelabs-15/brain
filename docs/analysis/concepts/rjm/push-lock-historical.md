---
package: rjm
name: push-lock-historical
slug: push-lock-historical
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# push-lock-historical

## Definition — verbatim
(used, not defined)

> "carrying the token ``push-lock-historical`` on a line inside it." — scripts/validation/check_push_lock_paths.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 16 | defined here | Opt-out marker token allowing retrospective or audit prose to quote obsolete push-lock recipes without triggering validation errors. |

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
`push-lock-historical` is an opt-out marker token string used in Markdown blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
