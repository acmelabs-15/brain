---
package: rjm
name: _refuses_to_mutate
slug: refuses-to-mutate
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _refuses_to_mutate

## Definition — verbatim
(used, not defined)

> "def _refuses_to_mutate(report: GcReport, errors: list[str], label: str) -> bool:" — scripts/maintenance/_gc_apply.py:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 209 | defined here | Safety guard function checking whether unreadable /proc or unevaluated worktrees preclude mutations. |

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
Safety check function identifying blocking conditions that forbid applying worktree garbage collection mutations, classified as name-only per D-023.
