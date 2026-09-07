---
package: rjm
name: _has_scan_root
slug: has-scan-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_scan_root

## Definition — verbatim
(used, not defined)

> "def _has_scan_root(root: Path) -> bool:" — scripts/validation/check_skill_md_exec_portability.py:505

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 505 | defined here | Checks whether at least one configured scan root directory exists within the repository. |

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
An internal Python helper function identifier verifying the existence of configured scan root directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
