---
package: rjm
name: check_drift
slug: check-drift
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# check_drift

## Definition — verbatim
(used, not defined)

> "def check_drift(" — scripts/validation/check_ruleset_params_drift.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ruleset_params_drift.py | 92 | defined here | Function comparing baseline parameters against live values and returning formatted drift messages. |

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
defects: exit-code-mismatch, orphan

## Design notes
A Python function identifier comparing baseline ruleset parameters against live GitHub API responses rather than an agent lifecycle concept.
