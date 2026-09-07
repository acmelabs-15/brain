---
package: rjm
name: citation-freshness: ignore
slug: citation-freshness-ignore
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# citation-freshness: ignore

## Definition — verbatim
(used, not defined)

> "hatch: ``citation-freshness: ignore`` (with a reason) on the citing line" — scripts/validation/check_citation_freshness.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 24 | defined here | Documented inline directive comment used as an escape hatch to exempt specific citations from freshness validation. |

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
An in-source directive marker string (`citation-freshness: ignore`) used to suppress freshness checks on specific lines, classified as `name-only` per D-023.
