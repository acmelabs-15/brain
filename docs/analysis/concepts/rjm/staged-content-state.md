---
package: rjm
name: staged_content_state
slug: staged-content-state
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# staged_content_state

## Definition — verbatim
(used, not defined)

> "def staged_content_state(admin: Path, head: str, repo_dir: str, timeout: float) -> str:" — scripts/maintenance/_gc_stale.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 88 | defined here | Function checking whether an orphaned worktree index holds uncommitted staged content compared to HEAD. |

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
`staged_content_state` is a Python function in maintenance diagnostics probing git worktree index state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
