---
package: rjm
name: extra_scan_dirs
slug: extra-scan-dirs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# extra_scan_dirs

## Definition — verbatim
(used, not defined)

> "def extra_scan_dirs(root: Path) -> list[Path]:" — scripts/validation/check_skill_md_portability.py:543

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 543 | defined here | Resolves existing non-skills source directories that ship to consumers or generate shipped output. |

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
`extra_scan_dirs` is a Python helper function identifier discovering extra scan directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
