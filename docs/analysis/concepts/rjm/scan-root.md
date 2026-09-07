---
package: rjm
name: scan_root
slug: scan-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_root

## Definition — verbatim
(used, not defined)

> "def scan_root(root: Path, repo_root: Path) -> tuple[list[Finding], int]:" — scripts/validation/check_shipped_skill_routes.py:525

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 525 | defined here | Scans all markdown documents within a plugin root to validate skill route references. |

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
A root scanning function in `scripts/validation/check_shipped_skill_routes.py` that checks skill routes across markdown files, classified as `name-only` per D-023.
