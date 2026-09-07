---
package: rjm
name: get_staged_memory_files
slug: get-staged-memory-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_staged_memory_files

## Definition — verbatim
(used, not defined)

> "def get_staged_memory_files() -> list[str]:" — scripts/validate_skill_format.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 28 | defined here | Function querying git diff for cached staged markdown files in .serena/memories/. |

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
`get_staged_memory_files` is a Python utility function identifier retrieving staged git files for pre-commit validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
