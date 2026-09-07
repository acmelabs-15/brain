---
package: rjm
name: DEFAULT_REPO
slug: default-repo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_REPO

## Definition — verbatim
(used, not defined)

> "DEFAULT_REPO = \"rjmurillo/ai-agents\"" — scripts/validation/active_plan_closeout.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 16 | defined here | Module constant defining the default GitHub repository slug for active plan tracking issue queries. |

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
`DEFAULT_REPO` is a Python module constant in `active_plan_closeout.py` defining the target GitHub repository identifier rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
