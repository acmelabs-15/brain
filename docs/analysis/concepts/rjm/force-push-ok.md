---
package: rjm
name: FORCE_PUSH_OK
slug: force-push-ok
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FORCE_PUSH_OK

## Definition — verbatim
(used, not defined)

> "matching the ``SKIP_YAMLLINT``/``FORCE_PUSH_OK`` escape-hatch convention in" — scripts/validation/check_push_lock_before_commit.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 46 | used here | Cited as precedent for valid escape-hatch environment variable conventions in git hook policies. |

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
`FORCE_PUSH_OK` is an environment variable bypass identifier cited as precedent rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
