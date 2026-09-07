---
package: rjm
name: memory-index.md
slug: memory-index-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# memory-index.md

## Definition — verbatim
(used, not defined)

> "1. All memories referenced in memory-index.md exist on disk" — scripts/validate_memory_tier.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 5 | used here | Root memory index markdown file checked for valid references to domain memory stores. |

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
A specific filesystem document name for the root memory index rather than an agent lifecycle concept.
