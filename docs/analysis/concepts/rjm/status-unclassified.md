---
package: rjm
name: STATUS_UNCLASSIFIED
slug: status-unclassified
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# STATUS_UNCLASSIFIED

## Definition — verbatim
(used, not defined)

> "STATUS_UNCLASSIFIED = \"UNCLASSIFIED\"" — scripts/quality_gate/resolve_pytest_signal.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 57 | defined here | Constant identifying an unclassified pytest execution status where job steps could not be categorized. |

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
STATUS_UNCLASSIFIED is a string constant identifier in resolve_pytest_signal.py representing a workflow job that completed without matching recognizable step patterns rather than an autonomous lifecycle concept.
