---
package: rjm
name: skills_dirs
slug: skills-dirs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# skills_dirs

## Definition — verbatim
(used, not defined)

> "def skills_dirs(root: Path) -> list[Path]:" — scripts/validation/check_skill_md_portability.py:507

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 507 | defined here | Locates all existing skills directories across declared plugin roots while refusing escaping symlinks. |

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
`skills_dirs` is a Python helper function identifier resolving skills directory paths across plugin roots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
