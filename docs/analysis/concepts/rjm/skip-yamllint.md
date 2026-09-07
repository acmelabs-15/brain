---
package: rjm
name: SKIP_YAMLLINT
slug: skip-yamllint
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKIP_YAMLLINT

## Definition — verbatim
(used, not defined)

> "matching the ``SKIP_YAMLLINT``/``FORCE_PUSH_OK`` escape-hatch convention in" — scripts/validation/check_push_lock_before_commit.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 46 | used here | Cited as precedent for git hook bypass environment variable conventions in git_hook_policy.py. |

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
`SKIP_YAMLLINT` is an environment variable bypass flag identifier cited as policy precedent rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
