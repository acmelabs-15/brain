---
package: rjm
name: _load_drift_baseline
slug: load-drift-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _load_drift_baseline

## Definition — verbatim
(used, not defined)

> "def _load_drift_baseline(path: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_drift.py:334

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 334 | defined here | Function loading the drift_files section from the baseline JSON file. |
| scripts/validation/check_skill_md_portability.py | 95 | used here | Imported to read baseline drift file thresholds during portability validation. |

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
An internal deserialization helper loading drift baseline data from JSON rather than an agent lifecycle concept.
