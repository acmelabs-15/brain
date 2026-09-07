---
package: rjm
name: scanned_files_by_root
slug: scanned-files-by-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scanned_files_by_root

## Definition — verbatim
(used, not defined)

> "def scanned_files_by_root(repo_root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_exec_portability.py:299

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 299 | defined here | Returns a mapping of scan root names to the number of examined skill files. |

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
defects: other

## Design notes
A Python helper function identifier returning scanned file counts grouped by root directory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
