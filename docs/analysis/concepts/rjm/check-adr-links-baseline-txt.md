---
package: rjm
name: check_adr_links_baseline.txt
slug: check-adr-links-baseline-txt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_adr_links_baseline.txt

## Definition — verbatim
(used, not defined)

> "``scripts/validation/check_adr_links_baseline.txt`` records pre-existing" — scripts/validation/check_adr_links.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 63 | used here | Cited in module docstring as the baseline file recording pre-existing defects. |

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
`check_adr_links_baseline.txt` is the file path of the committed baseline allowance file used by `check_adr_links.py` rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
