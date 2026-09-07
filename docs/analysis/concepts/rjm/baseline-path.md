---
package: rjm
name: _BASELINE_PATH
slug: baseline-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _BASELINE_PATH

## Definition — verbatim
(used, not defined)

> "_BASELINE_PATH = Path(__file__).with_name(\"adr_lifecycle_baseline.json\")" — scripts/validation/check_adr_lifecycle.py:185

## Also called — verbatim
`BASELINE_PATH` — scripts/validation/check_ruleset_params_drift.py:34
`baseline_path` — scripts/validation/check_vendor_portability.py:157

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 185 | defined here | Path constant locating the ADR lifecycle baseline JSON file. |
| scripts/validation/check_ruleset_params_drift.py | 34 | defined here | Path constant locating the ruleset parameter baseline JSON file. |
| scripts/validation/check_vendor_portability.py | 157 | defined here | Function returning the baseline path for vendor portability checks. |

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
defects: exit-code-mismatch, orphan, doc-drift

## Design notes
A configuration constant and helper function identifier across validation scripts pointing to baseline data files, classified as `name-only` per D-023 because it is a code identifier rather than a development lifecycle concept.
