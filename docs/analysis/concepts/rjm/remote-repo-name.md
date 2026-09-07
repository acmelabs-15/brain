---
package: rjm
name: _remote_repo_name
slug: remote-repo-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _remote_repo_name

## Definition — verbatim
(used, not defined)

> "def _remote_repo_name(" — scripts/hook_utilities/guards.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/guards.py | 36 | defined here | Queries git remote get-url origin with a strict 1-second timeout and extracts the repository name segment. |

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
A private helper function extracting the repository name from git remote configuration, classified as name-only per D-023.
