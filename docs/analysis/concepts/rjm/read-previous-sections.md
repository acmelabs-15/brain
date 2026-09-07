---
package: rjm
name: read_previous_sections
slug: read-previous-sections
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# read_previous_sections

## Definition — verbatim
(used, not defined)

> "def read_previous_sections(" — scripts/validation/portability_floor.py:179

## Also called — verbatim
`_read_previous_sections` — scripts/validation/check_skill_md_portability.py:126

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 34 | used here | Imported to read existing baseline sections before verifying or updating exec portability baselines. |
| scripts/validation/check_skill_md_portability.py | 126 | used here | Imported as an aliased helper to retrieve predecessor baseline counts during portability checks. |
| scripts/validation/portability_baseline.py | 50 | used here | Exported in `__all__` and invoked to inspect prior baseline counts before atomic writes. |
| scripts/validation/portability_floor.py | 179 | defined here | Function reading counted baseline sections from disk and git committed state to establish ratchet floors. |

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
clean in scripts/validation/portability_floor.py, scripts/validation/portability_baseline.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
A Python helper reading baseline sections from git and filesystem state rather than an agent lifecycle concept.
