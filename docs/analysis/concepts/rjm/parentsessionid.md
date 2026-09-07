---
package: rjm
name: parentSessionId
slug: parentsessionid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parentSessionId

## Definition — verbatim
(used, not defined)

> "(traceId, parentSessionId) and reconstructs the full delegation tree." — scripts/traceability/reconstruct_trace.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 5 | used here | Metadata link in session logs pointing to the parent session that delegated the execution. |

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
A session log metadata identifier pointing to the parent session that delegated a task, classified as `name-only` per D-023.
