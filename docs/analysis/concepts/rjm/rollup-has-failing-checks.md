---
package: rjm
name: rollup_has_failing_checks
slug: rollup-has-failing-checks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# rollup_has_failing_checks

## Definition — verbatim
(used, not defined)

> "def rollup_has_failing_checks(" — scripts/pr_maintenance_rollup.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 158 | defined here | Function evaluating whether a status check rollup fails or is incomplete. |

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
`rollup_has_failing_checks` is a Python function identifier evaluating whether a PR commit rollup contains failing or incomplete checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
