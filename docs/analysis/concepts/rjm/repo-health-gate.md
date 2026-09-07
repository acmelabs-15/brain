---
package: rjm
name: repo-health gate
slug: repo-health-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# repo-health gate

## Definition — verbatim
> "What the repo-health gate tells the reader, and the verdict it says it about." — scripts/validation/check_repo_health_report.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 1 | defined here | Module docstring introducing the reporting and diagnosis layer of the repo-health validation gate. |

## Consumes
Git configuration across all scopes, worktree metadata, and index state.

## Produces
Diagnostic failure messages to stderr or health summaries with inspected scope counts to stdout, alongside process exit codes.

## When applied
Executed first in `pre-commit` and `pre-push` Git hooks ahead of other validation jobs, or invoked manually to diagnose repository corruption.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The repo-health gate verifies that Git configuration scopes do not flag a repository as bare when a working tree exists, diagnosing `core.bare` corruption early to prevent silent tool failures across git hooks and linked worktrees.
