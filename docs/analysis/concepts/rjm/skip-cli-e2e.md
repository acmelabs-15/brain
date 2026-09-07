---
package: rjm
name: SKIP_CLI_E2E
slug: skip-cli-e2e
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKIP_CLI_E2E

## Definition — verbatim
(used, not defined)

> "a real bypass: ``SKIP_CLI_E2E=true`` is explicitly rejected" — scripts/validation/check_push_lock_before_commit.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 48 | used here | Cited as an example of an explicitly rejected bypass variable that cannot bypass required CLI E2E gates. |

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
`SKIP_CLI_E2E` is an environment variable identifier cited as an invalid bypass attempt rejected by policy rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
