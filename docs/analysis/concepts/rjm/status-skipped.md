---
package: rjm
name: STATUS_SKIPPED
slug: status-skipped
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# STATUS_SKIPPED

## Definition — verbatim
(used, not defined)

> "STATUS_SKIPPED = \"SKIPPED\"" — scripts/quality_gate/resolve_pytest_signal.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 52 | defined here | Constant identifying a skipped pytest execution status in the shadow signal resolution state machine. |

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
STATUS_SKIPPED is a string constant identifier in resolve_pytest_signal.py representing a skipped test execution outcome rather than an autonomous lifecycle concept.
