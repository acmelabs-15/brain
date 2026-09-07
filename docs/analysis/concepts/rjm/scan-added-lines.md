---
package: rjm
name: _scan_added_lines
slug: scan-added-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _scan_added_lines

## Definition — verbatim
(used, not defined)

> "def _scan_added_lines(" — scripts/validation/check_citation_freshness.py:303

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 303 | defined here | Helper function iterating over added diff lines to detect and validate citations. |

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
An internal Python helper function identifier in `check_citation_freshness.py` scanning git diff additions for citations, classified as `name-only` per D-023.
