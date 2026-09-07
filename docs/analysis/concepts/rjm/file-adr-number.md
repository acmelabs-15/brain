---
package: rjm
name: FILE_ADR_NUMBER
slug: file-adr-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FILE_ADR_NUMBER

## Definition — verbatim
(used, not defined)

> "FILE_ADR_NUMBER = re.compile(r\"^ADR-(?P<number>\d+)\", re.IGNORECASE)" — scripts/validation/check_adr_links.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 141 | defined here | Compiled regular expression matching the leading ADR number prefix in ADR filenames. |

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
`FILE_ADR_NUMBER` is a Python regular expression identifier in `check_adr_links.py` extracting ADR number prefixes from target filenames rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
