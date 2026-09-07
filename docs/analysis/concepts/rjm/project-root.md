---
package: rjm
name: _PROJECT_ROOT
slug: project-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PROJECT_ROOT

## Definition — verbatim
(used, not defined)

> "_PROJECT_ROOT = Path(__file__).resolve().parents[2]" — scripts/validation/check_skill_portability.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 50 | defined here | Constant Path resolving the repository root from the script file location. |

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
A module-level constant identifier in `check_skill_portability.py`, classified as name-only per D-023.
