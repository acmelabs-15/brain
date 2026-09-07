---
package: rjm
name: _hooks_dir
slug: hooks-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _hooks_dir

## Definition — verbatim
(used, not defined)

> "def _hooks_dir(repo_root: Path) -> Path:" — scripts/validation/check_git_hook_health.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 128 | defined here | Helper function resolving the active hooks directory path via git rev-parse --git-path hooks. |

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
_hooks_dir is an internal Python helper function identifier resolving git hooks directory paths rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
