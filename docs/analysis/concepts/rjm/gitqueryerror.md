---
package: rjm
name: GitQueryError
slug: gitqueryerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GitQueryError

## Definition — verbatim
(used, not defined)

> "class GitQueryError(RuntimeError):" — scripts/validation/tracked_paths.py:38

## Also called — verbatim
`from scripts.validation.tracked_paths import GitQueryError` — scripts/validation/check_skill_md_portability.py:128

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 128 | used here | Imported to catch and handle git query operational failures during validation. |
| scripts/validation/tracked_paths.py | 38 | defined here | Custom exception raised when git command execution fails within a repository. |

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
`GitQueryError` is a Python exception class identifier representing git query execution failures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
