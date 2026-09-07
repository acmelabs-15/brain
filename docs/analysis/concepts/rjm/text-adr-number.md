---
package: rjm
name: TEXT_ADR_NUMBER
slug: text-adr-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TEXT_ADR_NUMBER

## Definition — verbatim
(used, not defined)

> "TEXT_ADR_NUMBER = re.compile(r\"\bADR[-\s]?(?P<number>\d{1,4})\b\", re.IGNORECASE)" — scripts/validation/check_adr_links.py:140

## Also called — verbatim
`text_adr_number` — scripts/validation/check_adr_links.py:453

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 140 | defined here | Compiled regular expression matching ADR numbers in link anchor text. |
| scripts/validation/check_adr_links.py | 453 | defined here | Function extracting the first ADR integer number named in link text using `TEXT_ADR_NUMBER`. |

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
`TEXT_ADR_NUMBER` is a Python regular expression identifier and helper function in `check_adr_links.py` extracting numeric ADR references from link text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
