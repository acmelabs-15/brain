---
package: rjm
name: _EXTRA_HISTORICAL_ROOTS
slug: extra-historical-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _EXTRA_HISTORICAL_ROOTS

## Definition — verbatim
(used, not defined)

> "_EXTRA_HISTORICAL_ROOTS = (\".agents/memory/\",)" — scripts/validation/check_citation_freshness.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 78 | defined here | Constant tuple specifying historical directories exempted from citation freshness checks beyond the shared stale_script_refs list. |

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
A Python constant identifier in `check_citation_freshness.py` listing historical directory prefixes exempt from validation, classified as `name-only` per D-023.
