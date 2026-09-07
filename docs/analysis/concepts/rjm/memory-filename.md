---
package: rjm
name: MEMORY_FILENAME
slug: memory-filename
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MEMORY_FILENAME

## Definition — verbatim
(used, not defined)

> "MEMORY_FILENAME = \"pr-branch-mapping.md\"" — scripts/pr_branch_mapping.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 32 | defined here | Module constant specifying the markdown filename storing persistent PR-to-branch mappings. |

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
`MEMORY_FILENAME` is a Python string constant identifier designating the storage file name for PR branch mappings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
