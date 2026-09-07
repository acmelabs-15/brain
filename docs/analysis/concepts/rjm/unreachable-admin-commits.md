---
package: rjm
name: unreachable_admin_commits
slug: unreachable-admin-commits
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# unreachable_admin_commits

## Definition — verbatim
(used, not defined)

> "def unreachable_admin_commits(admin: Path, repo_dir: str, timeout: float) -> list[str] | None:" — scripts/maintenance/_gc_stale.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 133 | defined here | Function identifying commits anchored solely in a worktree's admin directory (reflog or per-worktree refs) that would become unreachable if pruned. |

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
`unreachable_admin_commits` is a Python function in maintenance diagnostics identifying reflog- or worktree-ref-anchored commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
