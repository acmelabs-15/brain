---
package: rjm
name: failed_files
slug: failed-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# failed_files

## Definition — verbatim
(used, not defined)

> "    failed_files: list[str] = []" — scripts/modules/slash_command_validator.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/slash_command_validator.py | 58 | defined here | List variable accumulating filenames of slash commands that failed frontmatter validation. |

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
defects: orphan

## Design notes
A local list variable identifier (`failed_files`) tracking failed validation targets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
