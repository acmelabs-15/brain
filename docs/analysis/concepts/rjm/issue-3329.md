---
package: rjm
name: Issue #3329
slug: issue-3329
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Issue #3329

## Definition — verbatim
(used, not defined)

> "Call sites, because a guard with none protects nothing (Issue #3329):" — scripts/validation/check_ci_dependency_pins.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 35 | used here | Cited in docstring establishing the requirement that validation guards must have binding call sites in tests and CI. |

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
Issue #3329 is a GitHub issue tracker ticket identifier formulating the principle that guards without call sites protect nothing rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
