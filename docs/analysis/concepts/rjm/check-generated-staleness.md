---
package: rjm
name: check_generated_staleness
slug: check-generated-staleness
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_generated_staleness

## Definition — verbatim
(used, not defined)

> "def check_generated_staleness(repo_root: Path) -> _Status:" — scripts/validation/check_generated_staleness.py:302

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 302 | defined here | Core execution function checking generator scripts in sequence and returning detailed _Status enum outcomes. |

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
check_generated_staleness is a Python gate function identifier returning an exit status enum rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
