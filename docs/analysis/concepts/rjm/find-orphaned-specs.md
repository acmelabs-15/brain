---
package: rjm
name: find_orphaned_specs
slug: find-orphaned-specs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_orphaned_specs

## Definition — verbatim
(used, not defined)

> "def find_orphaned_specs(specs: dict[str, Any]) -> dict[str, list[dict[str, Any]]]:" — scripts/traceability/resolve_orphaned_specs.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 38 | defined here | Core detection function analyzing specification reference relationships to identify orphaned specifications. |

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
A Python analysis function in `resolve_orphaned_specs.py` detecting unreferenced specifications across tiers, classified as `name-only` per D-023.
