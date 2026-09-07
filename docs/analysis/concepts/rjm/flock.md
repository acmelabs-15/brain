---
package: rjm
name: flock
slug: flock
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# flock

## Definition — verbatim
> "``flock`` excludes only processes that open the same path, so a second lock name" — scripts/validation/check_push_lock_paths.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 9 | used here | Cited in docstring explaining that pre-push recipes serialize concurrent pushes to a single branch behind flock. |
| scripts/validation/check_push_lock_paths.py | 4 | used here | Explains that file locking only excludes processes opening the identical path, mandating canonical lock paths. |
| scripts/validation/push_lock_resolver.py | 26 | defined here | Compiles the regular expression pattern identifying flock invocation statements in shell code. |

## Consumes
File descriptor and lockfile path target.

## Produces
Advisory process exclusion serializing shell command execution.

## When applied
Applied during git push executions to prevent concurrent push races and in commit guards probing active push locks.

## Sub-concepts
none

## Part of
push-lock

## Implementation status
clean

## Design notes
Advisory file locking technique employed in rjm shell recipes and validation hooks to enforce mutual exclusion across parallel worktrees and agent executions targeting the same git branch.
