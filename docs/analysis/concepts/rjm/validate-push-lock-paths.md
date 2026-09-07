---
package: rjm
name: validate_push_lock_paths
slug: validate-push-lock-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_push_lock_paths

## Definition — verbatim
(used, not defined)

> "def validate_push_lock_paths(repo_root: Path) -> bool:" — scripts/validation/check_push_lock_paths.py:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 258 | defined here | Main validation function verifying that all tracked Markdown prescriptions name the canonical lock path. |

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
`validate_push_lock_paths` is a Python validator function entrypoint identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
