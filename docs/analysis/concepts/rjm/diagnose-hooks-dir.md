---
package: rjm
name: _diagnose_hooks_dir
slug: diagnose-hooks-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _diagnose_hooks_dir

## Definition — verbatim
(used, not defined)

> "def _diagnose_hooks_dir(repo_root: Path, hooks_dir: Path) -> str | None:" — scripts/validation/check_git_hook_health.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 205 | defined here | Helper function that diagnoses whether the resolved hooks directory contains an executable probe hook without querying git again. |

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
`_diagnose_hooks_dir` is a private Python helper function in `scripts/validation/check_git_hook_health.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
