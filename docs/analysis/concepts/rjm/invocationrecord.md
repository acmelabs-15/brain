---
package: rjm
name: InvocationRecord
slug: invocationrecord
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# InvocationRecord

## Definition — verbatim
> "class InvocationRecord:" — scripts/measure_context_retrieval_metrics.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/measure_context_retrieval_metrics.py | 25 | defined here | Dataclass representing a single context-retrieval auto-invocation or skip decision extracted from a session log. |

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
defects: doc-drift

## Design notes
`InvocationRecord` is a Python dataclass representing a single context-retrieval invocation or skip decision in session log analysis rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
