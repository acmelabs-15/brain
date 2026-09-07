---
package: rjm
name: flock
slug: flock
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
  - {path: scripts/validation/check_push_lock_paths.py, sha256: 62161c502e0452a137d97f1f04b7777353fb9ed170994965ff1a78fa03e8473e}
  - {path: scripts/validation/push_lock_resolver.py, sha256: cbcf36abd98c9e7c96218617dea00872bc94ce3216d14c802558074a0d514503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
