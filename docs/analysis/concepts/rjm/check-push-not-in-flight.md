---
package: rjm
name: check_push_not_in_flight
slug: check-push-not-in-flight
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_push_not_in_flight

## Definition — verbatim
(used, not defined)

> "def check_push_not_in_flight(repo_root: Path) -> tuple[bool, str]:" — scripts/validation/check_push_lock_before_commit.py:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 148 | defined here | Primary check function determining whether a push is currently in flight for the branch, returning allowed boolean and message. |

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
`check_push_not_in_flight` is a Python function entrypoint identifier implementing the commit-time push lock probe rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
