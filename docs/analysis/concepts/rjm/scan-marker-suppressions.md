---
package: rjm
name: scan_marker_suppressions
slug: scan-marker-suppressions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_marker_suppressions

## Definition — verbatim
(used, not defined)

> "def scan_marker_suppressions(repo_root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_exec_portability.py:305

## Also called — verbatim
`def scan_marker_suppressions(root: Path) -> dict[str, int]:` — scripts/validation/check_skill_md_portability.py:709

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 305 | defined here | Scans and returns counts of executable invocations suppressed by vendor-portability-exec markers. |
| scripts/validation/check_skill_md_portability.py | 709 | defined here | Scans and returns counts of path references suppressed by vendor-portability markers across roots. |

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
defects: other, doc-drift

## Design notes
A Python helper function identifier scanning for marker-suppressed portability violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
