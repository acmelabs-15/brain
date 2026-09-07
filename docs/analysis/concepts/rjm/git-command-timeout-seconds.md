---
package: rjm
name: GIT_COMMAND_TIMEOUT_SECONDS
slug: git-command-timeout-seconds
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# GIT_COMMAND_TIMEOUT_SECONDS

## Definition — verbatim
(used, not defined)

> "GIT_COMMAND_TIMEOUT_SECONDS = 30" — scripts/testing/mutation_workspace_git.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 14 | defined here | Constant defining the timeout limit in seconds for git subprocess operations. |

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
GIT_COMMAND_TIMEOUT_SECONDS is a Python constant identifier bounding git command execution duration rather than a lifecycle concept.
