---
package: rjm
name: scan_skill_scripts
slug: scan-skill-scripts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_skill_scripts

## Definition — verbatim
(used, not defined)

> "def scan_skill_scripts(skills_dir: Path) -> dict[str, int]:" — scripts/validation/check_skill_portability.py:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 216 | defined here | Function returning mapping of script paths to counts of upstream path references. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier in `check_skill_portability.py`, classified as name-only per D-023.
