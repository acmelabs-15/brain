---
package: rjm
name: validate_references_exist
slug: validate-references-exist
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# validate_references_exist

## Definition — verbatim
(used, not defined)

> "def validate_references_exist(" — scripts/validate_memory_tier.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 65 | defined here | Function verifying that files referenced in memory index tables exist on disk. |

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
A Python validation function identifier checking filesystem existence of references rather than an agent lifecycle concept.
