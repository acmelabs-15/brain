---
package: rjm
name: KNOWN_DUPLICATES_ISSUE_2228
slug: known-duplicates-issue-2228
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KNOWN_DUPLICATES_ISSUE_2228

## Definition — verbatim
(used, not defined)

> "KNOWN_DUPLICATES_ISSUE_2228: frozenset[int] = frozenset()" — scripts/validation/check_adr_uniqueness.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 43 | defined here | Constant frozenset representing the historical ADR duplicates allowlist, maintained as empty. |

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
`KNOWN_DUPLICATES_ISSUE_2228` is a Python constant identifier in `check_adr_uniqueness.py` recording resolved historical duplicate ADR numbers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
