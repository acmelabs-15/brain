---
package: rjm
name: _GENERATED_ARTIFACTS
slug: generated-artifacts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _GENERATED_ARTIFACTS

## Definition — verbatim
(used, not defined)

> "_GENERATED_ARTIFACTS: frozenset[str] = frozenset(" — scripts/validation/check_skill_md_drift.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 34 | defined here | Exempts build-generated artifact paths mentioned in prose from checkout existence failure. |

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
A path set constant in `scripts/validation/check_skill_md_drift.py` defining known generated build artifacts, classified as `name-only` per D-023.
