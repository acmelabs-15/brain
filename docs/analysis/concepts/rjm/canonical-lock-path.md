---
package: rjm
name: canonical lock path
slug: canonical-lock-path
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_paths.py, sha256: 62161c502e0452a137d97f1f04b7777353fb9ed170994965ff1a78fa03e8473e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
