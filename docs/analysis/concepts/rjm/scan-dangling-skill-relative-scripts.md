---
package: rjm
name: scan_dangling_skill_relative_scripts
slug: scan-dangling-skill-relative-scripts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_dangling_skill_relative_scripts

## Definition — verbatim
(used, not defined)

> "def scan_dangling_skill_relative_scripts(repo_root: Path) -> list[tuple[str, str]]:" — scripts/validation/check_skill_md_exec_portability.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 134 | defined here | Traversal function identifying dangling relative script references across all scanned skill trees. |

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
A filesystem traversal function identifying dangling script references rather than an agent lifecycle concept.
