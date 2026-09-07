---
package: rjm
name: get_files_to_check
slug: get-files-to-check
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_files_to_check

## Definition — verbatim
(used, not defined)

> "def get_files_to_check(" — scripts/validate_skill_format.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 47 | defined here | Resolves candidate file paths for format validation based on CLI flags and git status. |

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
defects: script-bug, orphan

## Design notes
`get_files_to_check` is a Python function identifier resolving target paths to check for skill formatting rules rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
