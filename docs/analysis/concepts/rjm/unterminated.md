---
package: rjm
name: UNTERMINATED
slug: unterminated
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UNTERMINATED

## Definition — verbatim
(used, not defined)

> "UNTERMINATED = re.compile" — scripts/validation/check_adr_links.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 115 | defined here | Compiled regular expression detecting unclosed inline markdown link syntax. |

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
`UNTERMINATED` is a Python regular expression constant identifier in `check_adr_links.py` detecting unterminated inline link destinations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
