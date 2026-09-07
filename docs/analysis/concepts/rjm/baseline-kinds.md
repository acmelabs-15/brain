---
package: rjm
name: BASELINE_KINDS
slug: baseline-kinds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BASELINE_KINDS

## Definition — verbatim
(used, not defined)

> "BASELINE_KINDS = frozenset({\"unresolved\", \"absolute\", \"malformed\", \"number-mismatch\"})" — scripts/validation/check_adr_links.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 159 | defined here | Frozenset enumerating the four valid violation classes permitted in baseline exemption entries. |

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
`BASELINE_KINDS` is a Python frozenset constant identifier in `check_adr_links.py` defining permitted baseline finding categories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
