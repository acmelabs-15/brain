---
package: rjm
name: push-lock
slug: push-lock
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# push-lock

## Definition — verbatim
> "Fail when a tracked prescription names a push-lock path that is not canonical." — scripts/validation/check_push_lock_paths.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 2 | defined here | Module docstring defines the gate preventing non-canonical push-lock path prescriptions in markdown files. |

## Consumes
Git branch name, canonical lock file path (`$HOME/src/scratch/locks/push-lock-<slug>.lock`).

## Produces
Serialized process execution ensuring git push operations to a branch do not run concurrently.

## When applied
Applied whenever executing a branch push or validating tracked prescription blocks across the codebase.

## Sub-concepts
flock, canonical-lock-path

## Part of
none

## Implementation status
clean

## Design notes
A concurrency control pattern in rjm ensuring that concurrent git push operations to the same branch across different worktrees or agents are serialized using a single canonical lockfile path per branch.
