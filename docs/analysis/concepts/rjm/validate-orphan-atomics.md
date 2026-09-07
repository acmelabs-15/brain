---
package: rjm
name: validate_orphan_atomics
slug: validate-orphan-atomics
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_orphan_atomics

## Definition — verbatim
(used, not defined)

> "def validate_orphan_atomics(" — scripts/validate_memory_tier.py:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 154 | defined here | Function detecting atomic markdown memory documents not linked by any domain index table. |

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
A Python function identifier identifying unindexed atomic markdown files rather than an agent lifecycle concept.
