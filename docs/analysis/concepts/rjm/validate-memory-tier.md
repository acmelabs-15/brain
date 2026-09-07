---
package: rjm
name: validate_memory_tier
slug: validate-memory-tier
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_memory_tier

## Definition — verbatim
(used, not defined)

> "def validate_memory_tier(memories_dir: Path) -> ValidationResult:" — scripts/validate_memory_tier.py:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 207 | defined here | Orchestration function executing all ADR-017 memory tier validation checks. |

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
A Python function identifier orchestrating memory tier checks rather than an agent lifecycle concept.
