---
package: rjm
name: traceId
slug: traceid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# traceId

## Definition — verbatim
(used, not defined)

> "(traceId, parentSessionId) and reconstructs the full delegation tree." — scripts/traceability/reconstruct_trace.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 5 | used here | Correlation field in session log files used to group related sessions across delegation trees. |

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
A session log metadata identifier used to correlate multi-agent session trees under a single trace, classified as `name-only` per D-023.
