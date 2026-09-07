---
package: rjm
name: iter_instruction_files
slug: iter-instruction-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# iter_instruction_files

## Definition — verbatim
(used, not defined)

> "def iter_instruction_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_skill_memory_references.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 146 | defined here | Scans and yields all markdown files across present corpus root directories. |

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
defects: doc-drift

## Design notes
`iter_instruction_files` is a Python generator function identifier discovering instruction markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
