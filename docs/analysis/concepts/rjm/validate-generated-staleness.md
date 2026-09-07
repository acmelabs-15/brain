---
package: rjm
name: validate_generated_staleness
slug: validate-generated-staleness
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_generated_staleness

## Definition — verbatim
(used, not defined)

> "def validate_generated_staleness(repo_root: Path) -> bool:" — scripts/validation/check_generated_staleness.py:384

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 384 | defined here | Registry adapter entry point returning boolean status for pre_pr_sequence validation runner. |

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
validate_generated_staleness is a Python registry adapter function identifier returning a boolean rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
