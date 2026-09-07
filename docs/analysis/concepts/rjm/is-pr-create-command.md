---
package: rjm
name: is_pr_create_command
slug: is-pr-create-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_pr_create_command

## Definition — verbatim
(used, not defined)

> "def is_pr_create_command(" — scripts/hook_utilities/utilities.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 22 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 141 | defined here | Checks whether an intercepted command string executes gh pr create via regex matching. |

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
A Python utility function matching GitHub pull request creation commands in hook scripts, classified as name-only per D-023.
