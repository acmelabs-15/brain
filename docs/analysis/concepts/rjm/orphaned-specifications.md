---
package: rjm
name: orphaned specifications
slug: orphaned-specifications
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
---

# orphaned specifications

## Definition — verbatim
> "Scans the traceability graph to find orphaned specifications:" — scripts/traceability/resolve_orphaned_specs.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 4 | used here | Characterizes specifications in the traceability graph lacking required upstream or downstream references. |

## Consumes
Parsed specification collections categorized into requirements, designs, and tasks.

## Produces
Classified lists of orphaned specifications flagged for review, archival, or deletion.

## When applied
Enforced during traceability auditing and lifecycle maintenance checks.

## Sub-concepts
none

## Part of
traceability-graph

## Implementation status
defects: orphan

## Design notes
Orphaned specifications represents the anti-pattern where requirements lack design coverage, designs lack requirements or tasks, or tasks lack design links in rjm's traceability architecture.
