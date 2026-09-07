---
package: rjm
name: STATUS_STALE
slug: status-stale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# STATUS_STALE

## Definition — verbatim
(used, not defined)

> "STATUS_STALE = \"STALE\"" — scripts/quality_gate/resolve_pytest_signal.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 54 | defined here | Constant identifying a stale test execution status where workflow runs correspond to an outdated commit SHA. |

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
defects: orphan

## Design notes
STATUS_STALE is a string constant identifier in resolve_pytest_signal.py indicating an out-of-date workflow run relative to the pull request head commit rather than an autonomous lifecycle concept.
