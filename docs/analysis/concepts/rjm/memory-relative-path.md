---
package: rjm
name: MEMORY_RELATIVE_PATH
slug: memory-relative-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MEMORY_RELATIVE_PATH

## Definition — verbatim
(used, not defined)

> "MEMORY_RELATIVE_PATH = f\".serena/memories/{MEMORY_FILENAME}\"" — scripts/pr_branch_mapping.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 33 | defined here | Module constant specifying the relative repository path to the Serena memory file storing PR mappings. |

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
`MEMORY_RELATIVE_PATH` is a Python string constant identifier designating the relative file path for PR branch mappings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
