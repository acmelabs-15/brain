---
package: rjm
name: _check_lifecycle_rules
slug: check-lifecycle-rules
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_lifecycle_rules

## Definition — verbatim
(used, not defined)

> "def _check_lifecycle_rules(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:658

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 89 | defined here | Referenced in module docstring for the full rationale on why `implemented-implies-decided` was removed. |
| scripts/validation/check_adr_lifecycle.py | 658 | defined here | Defined as function evaluating record-level lifecycle rules such as `proposed-cannot-supersede`. |

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
clean

## Design notes
A Python function identifier in `check_adr_lifecycle.py` executing rule checks over individual ADR records, classified as `name-only` per D-023 because it is a code function identifier rather than a development lifecycle concept.
