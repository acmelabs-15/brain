---
package: rjm
name: is_adr_target
slug: is-adr-target
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_adr_target

## Definition — verbatim
(used, not defined)

> "def is_adr_target(path: str) -> bool:" — scripts/validation/check_adr_links.py:420

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 420 | defined here | Predicate function returning whether a link destination targets an internal ADR markdown file. |

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
`is_adr_target` is a Python predicate function identifier in `check_adr_links.py` identifying ADR link destinations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
