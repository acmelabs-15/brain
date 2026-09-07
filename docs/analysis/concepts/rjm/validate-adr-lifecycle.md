---
package: rjm
name: validate_adr_lifecycle
slug: validate-adr-lifecycle
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_adr_lifecycle

## Definition — verbatim
(used, not defined)

> "def validate_adr_lifecycle(repo_root: Path) -> bool:" — scripts/validation/check_adr_lifecycle.py:1273

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 1273 | defined here | Pre-PR gate adapter function returning True when no check exceeds its baseline and False on violation or configuration error. |

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
`validate_adr_lifecycle` is a Python pre-PR gate adapter function in check_adr_lifecycle.py rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
