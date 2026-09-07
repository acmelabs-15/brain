---
package: rjm
name: pre-push suite
slug: pre-push-suite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# pre-push suite

## Definition — verbatim
(used, not defined)

> "jobs (markdown lint, ruff, etc.) and start its pre-push suite before `git" — scripts/validation/check_push_lock_before_commit.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 34 | used here | Describes the sequence of automated checks executed by git pre-push hooks while holding the push lock. |

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
`pre-push suite` is an informal descriptive phrase in `check_push_lock_before_commit.py` referring to the collection of pre-push git hook validations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
