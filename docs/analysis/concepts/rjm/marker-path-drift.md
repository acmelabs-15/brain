---
package: rjm
name: marker_path_drift
slug: marker-path-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# marker_path_drift

## Definition — verbatim
(used, not defined)

> "def marker_path_drift(" — scripts/validation/check_skill_md_drift.py:227

## Also called — verbatim
`_drift_marker_path_drift` — scripts/validation/check_skill_md_portability.py:101

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 227 | defined here | Function evaluating marker declarations against prose references to detect drift violations. |
| scripts/validation/check_skill_md_portability.py | 101 | used here | Imported as an aliased helper to integrate marker path drift checking into portability validation. |

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
A Python validation function detecting discrepancies between declared and referenced paths rather than an agent lifecycle concept.
