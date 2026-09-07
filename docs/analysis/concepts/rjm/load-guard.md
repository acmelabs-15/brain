---
package: rjm
name: load_guard
slug: load-guard
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_guard

## Definition — verbatim
(used, not defined)

> "def load_guard(" — scripts/guard_diff.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/guard_diff.py | 54 | defined here | Dynamically loads a guard callable from a Python source file under a unique module namespace. |

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
A Python utility function that dynamically loads a guard callable from a file path using importlib, classified as name-only per D-023.
