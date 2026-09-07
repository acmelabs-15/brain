---
package: rjm
name: unresolved
slug: unresolved
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# unresolved

## Definition — verbatim
(used, not defined)

> "``unresolved``" — scripts/validation/check_adr_links.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 10 | used here | Baseline comment noting that allowances track both absolute and unresolved link defect categories. |
| scripts/validation/check_adr_links.py | 25 | defined here | Violation class docstring defining link targets that do not resolve to tracked files via git ls-files. |

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
`unresolved` is a link validator violation class identifier in check_adr_links.py rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
