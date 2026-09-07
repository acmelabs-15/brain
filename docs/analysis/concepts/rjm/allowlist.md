---
package: rjm
name: allowlist
slug: allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# allowlist

## Definition — verbatim
(used, not defined)

> "the next free number (069, 070, 071). The allowlist is therefore empty: the" — scripts/validation/check_adr_uniqueness.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 15 | used here | Described in module docstring as an empty exemption list that enforces ADR uniqueness with zero exceptions. |

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
`allowlist` is a parameter and exemption mechanism identifier in `check_adr_uniqueness.py` tracking duplicate ADR exemptions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
