---
package: rjm
name: _failed_condition
slug: failed-condition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _failed_condition

## Definition — verbatim
(used, not defined)

> "def _failed_condition(repo_root: Path, hooks_dir: Path) -> str:" — scripts/validation/check_git_hook_health.py:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 179 | defined here | Helper function generating human-readable diagnostic descriptions of why git hooks are inactive or broken. |

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
_failed_condition is an internal Python helper function identifier describing git hook failure causes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
