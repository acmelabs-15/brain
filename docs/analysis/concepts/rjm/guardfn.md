---
package: rjm
name: GuardFn
slug: guardfn
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GuardFn

## Definition — verbatim
(used, not defined)

> "GuardFn = Callable[[str], list[int]]" — scripts/guard_diff.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/guard_diff.py | 51 | defined here | Type alias defining the signature of a guard callable mapping source code text to flagged line numbers. |

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
defects: orphan

## Design notes
A Python type alias representing a guard callable that maps source text to a list of detected line numbers, classified as name-only per D-023.
