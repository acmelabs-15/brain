---
package: rjm
name: REQUIRED_EXTRA_ROOTS
slug: required-extra-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REQUIRED_EXTRA_ROOTS

## Definition — verbatim
(used, not defined)

> "REQUIRED_EXTRA_ROOTS: frozenset[str] = frozenset(" — scripts/validation/check_skill_md_portability.py:326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 326 | defined here | Configuration frozenset defining mandatory extra scan roots whose absence fails the portability check. |

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
defects: doc-drift

## Design notes
`REQUIRED_EXTRA_ROOTS` is a Python configuration constant identifier defining mandatory extra scan roots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
