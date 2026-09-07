---
package: rjm
name: IGNORE_MARKER
slug: ignore-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# IGNORE_MARKER

## Definition — verbatim
(used, not defined)

> "IGNORE_MARKER = \"citation-freshness: ignore\"" — scripts/validation/check_citation_freshness.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 70 | defined here | Constant string defining the comment marker text used to exempt citations from freshness validation. |

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
A Python constant identifier in `check_citation_freshness.py` defining the citation exemption marker string, classified as `name-only` per D-023.
