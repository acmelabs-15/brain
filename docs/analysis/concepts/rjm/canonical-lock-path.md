---
package: rjm
name: canonical lock path
slug: canonical-lock-path
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# canonical lock path

## Definition — verbatim
> "flock recipe names no canonical lock path in this block" — scripts/validation/check_push_lock_paths.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 62 | defined here | Error message template enforcing that all flock recipes name the single prescribed canonical lock path. |

## Consumes
Branch name ($SLUG) and user home directory path ($HOME).

## Produces
Standardized lock path (`$HOME/src/scratch/locks/push-lock-<slug>.lock`) for cross-process synchronization.

## When applied
Applied whenever writing or checking shell commands that acquire locks for git push operations.

## Sub-concepts
flock

## Part of
push-lock

## Implementation status
clean

## Design notes
A standardized filesystem path format in rjm ensuring all local processes and worktrees contend for the exact same lockfile during branch pushes, preventing split-brain lock collisions.
