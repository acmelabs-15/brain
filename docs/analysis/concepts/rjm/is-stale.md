---
package: rjm
name: is_stale
slug: is-stale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_stale

## Definition — verbatim
(used, not defined)

> "Return True when the issue has not been updated within ``stale_days``." — scripts/issue_triage.py:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 226 | defined here | Function evaluating whether an issue has received no updates within a specified threshold of days. |
| scripts/maintenance/_gc_stale.py | 397 | defined here | Predicate checking whether a git worktree's directory is gone according to git prunable status or filesystem stat. |
| scripts/maintenance/repair_worktree_venv.py | 142 | defined here | Helper verifying whether a virtual environment launcher shebang path is obsolete or points outside the worktree. |

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
`is_stale` is a Python function identifier used across multiple maintenance and triage utilities to detect elapsed activity watermarks, deleted worktrees, or invalid shebang paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
