---
package: rjm
name: drift_counts_from_failures
slug: drift-counts-from-failures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# drift_counts_from_failures

## Definition — verbatim
(used, not defined)

> "def drift_counts_from_failures(drift_failures: list[str]) -> dict[str, int]:" — scripts/validation/check_skill_md_drift.py:380

## Also called — verbatim
`_drift_counts_from_failures` — scripts/validation/check_skill_md_portability.py:98

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 380 | defined here | Function aggregating drift failure strings into per-file count mappings for baseline tracking. |
| scripts/validation/check_skill_md_portability.py | 98 | used here | Imported as an aliased helper to aggregate path drift failures during portability validation. |

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
An internal data transformation function aggregating failure messages into counts rather than an agent lifecycle concept.
