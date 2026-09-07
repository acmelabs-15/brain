---
package: rjm
name: is_git_commit_command
slug: is-git-commit-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_git_commit_command

## Definition — verbatim
(used, not defined)

> "def is_git_commit_command(" — scripts/hook_utilities/utilities.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 20 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 127 | defined here | Checks whether an intercepted command string executes git commit or git ci via regex matching. |

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
A Python utility function matching git commit CLI commands in hook scripts, classified as name-only per D-023.
