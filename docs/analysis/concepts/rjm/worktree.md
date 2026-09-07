---
package: rjm
name: Worktree
slug: worktree
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Worktree

## Definition — verbatim
(used, not defined)

> "class Worktree:" — scripts/maintenance/worktree_report.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 2 | used here | Referenced in module docstring describing parsing of porcelain output into Worktree records. |
| scripts/maintenance/_gc_reasons.py | 43 | used here | Imported from worktree_report for type annotations in stale entry explanation functions. |
| scripts/maintenance/_gc_stale.py | 19 | used here | Imported from worktree_report for typing worktree evaluation helpers. |
| scripts/maintenance/gc_worktrees.py | 101 | used here | Imported and utilized across garbage collection decision and reporting pipelines. |
| scripts/maintenance/worktree_report.py | 42 | defined here | Dataclass definition representing a single registered git worktree parsed from porcelain output. |

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
`Worktree` is a Python dataclass identifier representing parsed git worktree porcelain records in maintenance scripts rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
