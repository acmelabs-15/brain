---
package: rjm
name: Issue #2761
slug: issue-2761
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Issue #2761

## Definition — verbatim
(used, not defined)

> "Issue #2761 recorded 113 worktrees totalling 10.6G on one machine, which" — scripts/maintenance/gc_worktrees.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 15 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/_gc_parse.py | 22 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/_gc_reasons.py | 17 | used here | Cited in module docstring regarding worktree accumulation starving the markdown LSP. |
| scripts/maintenance/gc_worktrees.py | 6 | used here | Cited in tool docstring describing worktree accumulation problem starving markdown LSP. |

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
Issue #2761 is a GitHub issue tracking identifier for worktree accumulation starvation rather than a lifecycle concept.
