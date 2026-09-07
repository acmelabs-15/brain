---
package: rjm
name: _relocation_hint
slug: relocation-hint
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _relocation_hint

## Definition — verbatim
(used, not defined)

> "def _relocation_hint(anchors: list[str], cited_lines: list[str]) -> str:" — scripts/validation/check_citation_freshness.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 174 | defined here | Helper function scanning cited files for moved anchor text to provide corrected line hints. |

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
An internal Python helper function identifier in `check_citation_freshness.py` locating shifted anchor text to suggest updated line citations, classified as `name-only` per D-023.
