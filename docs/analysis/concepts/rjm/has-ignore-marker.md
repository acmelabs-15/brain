---
package: rjm
name: _has_ignore_marker
slug: has-ignore-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_ignore_marker

## Definition — verbatim
(used, not defined)

> "def _has_ignore_marker(citing_lines: list[str] | None, line_number: int, line_text: str) -> bool:" — scripts/validation/check_citation_freshness.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 106 | defined here | Helper function checking if the citing line or preceding line contains an ignore marker with reason. |

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
An internal Python helper function identifier in `check_citation_freshness.py` detecting inline ignore directives, classified as `name-only` per D-023.
