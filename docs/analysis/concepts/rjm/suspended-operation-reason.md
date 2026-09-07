---
package: rjm
name: suspended_operation_reason
slug: suspended-operation-reason
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# suspended_operation_reason

## Definition — verbatim
(used, not defined)

> "def suspended_operation_reason(operation: str) -> str:" — scripts/maintenance/_gc_reasons.py:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 246 | defined here | Function returning an explanation string describing why a worktree undergoing a suspended git operation must not have its admin directory deleted. |

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
`suspended_operation_reason` is a Python helper function in maintenance scripts formatting warnings for active or suspended git operations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
