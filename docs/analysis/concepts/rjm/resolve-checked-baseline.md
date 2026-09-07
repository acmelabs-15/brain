---
package: rjm
name: _resolve_checked_baseline
slug: resolve-checked-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_checked_baseline

## Definition — verbatim
(used, not defined)

> "def resolve_checked_baseline(" — scripts/validation/portability_common.py:201

## Also called — verbatim
`resolve_checked_baseline` — scripts/validation/portability_common.py:201

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 41 | used here | Imported under alias to locate and vet the baseline file path before running checks. |
| scripts/validation/portability_common.py | 201 | defined here | Function resolving and validating baseline file existence, repository containment, and git diffability. |

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
clean in scripts/validation/portability_common.py; defects: other in scripts/validation/check_skill_md_exec_portability.py

## Design notes
An internal baseline path resolution and security vetting helper rather than an agent lifecycle concept.
