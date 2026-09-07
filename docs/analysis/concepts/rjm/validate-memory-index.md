---
package: rjm
name: validate_memory_index
slug: validate-memory-index
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_memory_index

## Definition — verbatim
(used, not defined)

> "def validate_memory_index(memories_dir: Path, result: ValidationResult) -> list[str]:" — scripts/validate_memory_tier.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 83 | defined here | Function validating the root memory-index.md file and returning referenced domain indexes. |

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
A Python function identifier for root index verification rather than an agent lifecycle concept.
