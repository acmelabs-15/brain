---
package: rjm
name: report_drift_ratchet
slug: report-drift-ratchet
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# report_drift_ratchet

## Definition — verbatim
(used, not defined)

> "def report_drift_ratchet(" — scripts/validation/check_skill_md_drift.py:390

## Also called — verbatim
`_report_drift_ratchet` — scripts/validation/check_skill_md_portability.py:104

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 390 | defined here | Function reporting drift ratchet regressions and improvements to standard output. |
| scripts/validation/check_skill_md_portability.py | 104 | used here | Imported as an aliased helper to emit drift ratchet status during portability checks. |

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
An internal reporting function outputting drift ratchet diff results rather than an agent lifecycle concept.
