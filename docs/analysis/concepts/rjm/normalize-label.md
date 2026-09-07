---
package: rjm
name: normalize_label
slug: normalize-label
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# normalize_label

## Definition — verbatim
(used, not defined)

> "def normalize_label(label: str) -> str:" — scripts/validation/check_adr_links.py:459

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 459 | defined here | Function implementing CommonMark link label normalization via whitespace collapsing and Unicode case folding. |

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
`normalize_label` is a Python helper function identifier in `check_adr_links.py` normalizing Markdown reference labels rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
