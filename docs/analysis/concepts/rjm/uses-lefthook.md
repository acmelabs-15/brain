---
package: rjm
name: _uses_lefthook
slug: uses-lefthook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _uses_lefthook

## Definition — verbatim
(used, not defined)

> "def _uses_lefthook(repo_root: Path) -> bool:" — scripts/validation/check_git_hook_health.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 124 | defined here | Helper function checking whether the repository contains any recognized lefthook configuration file. |

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
_uses_lefthook is an internal Python helper function identifier checking for lefthook config files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
