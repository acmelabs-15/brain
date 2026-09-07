---
package: rjm
name: SHORTCUT_LINK
slug: shortcut-link
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SHORTCUT_LINK

## Definition — verbatim
(used, not defined)

> "SHORTCUT_LINK = re.compile" — scripts/validation/check_adr_links.py:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 137 | defined here | Compiled regular expression matching shortcut markdown reference links. |

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
`SHORTCUT_LINK` is a Python regular expression constant identifier in `check_adr_links.py` matching shortcut markdown reference links rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
