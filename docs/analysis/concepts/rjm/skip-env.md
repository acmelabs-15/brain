---
package: rjm
name: SKIP_ENV
slug: skip-env
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKIP_ENV

## Definition — verbatim
(used, not defined)

> "SKIP_ENV = \"SKIP_PUSH_LOCK_COMMIT_GUARD\"" — scripts/validation/check_push_lock_before_commit.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 71 | defined here | Constant defining the environment variable key used to bypass the push-lock pre-commit guard. |

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
`SKIP_ENV` is a Python constant identifier in `check_push_lock_before_commit.py` storing the bypass environment variable name rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
