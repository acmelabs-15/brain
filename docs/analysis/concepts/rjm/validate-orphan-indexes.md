---
package: rjm
name: validate_orphan_indexes
slug: validate-orphan-indexes
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_orphan_indexes

## Definition — verbatim
(used, not defined)

> "def validate_orphan_indexes(" — scripts/validate_memory_tier.py:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 139 | defined here | Function identifying domain index files that are not referenced in the root memory index. |

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
defects: always-failing-gate, doc-drift

## Design notes
A Python function identifier detecting unreferenced domain indexes rather than an agent lifecycle concept.
