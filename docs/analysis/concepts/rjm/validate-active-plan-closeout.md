---
package: rjm
name: validate_active_plan_closeout
slug: validate-active-plan-closeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_active_plan_closeout

## Definition — verbatim
(used, not defined)

> "def validate_active_plan_closeout(repo_root: Path, *, repo: str = DEFAULT_REPO) -> bool:" — scripts/validation/active_plan_closeout.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 159 | defined here | Main validation function scanning active execution plans and warning when tracking issues are closed. |

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
`validate_active_plan_closeout` is a Python validation function verifying active execution plans against closed GitHub tracking issues rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
