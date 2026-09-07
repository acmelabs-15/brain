---
package: rjm
name: UnreadableCoreBareError
slug: unreadablecorebareerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UnreadableCoreBareError

## Definition — verbatim
(used, not defined)

> "class UnreadableCoreBareError(RuntimeError):" — scripts/validation/check_repo_health.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 159 | defined here | Exception class raised when core.bare holds an unparseable non-boolean value. |

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
`UnreadableCoreBareError` is an internal Python exception raised when `core.bare` contains an invalid boolean value that prevents Git commands from executing, classified as `kind: name-only` per D-023.
