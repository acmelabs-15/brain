---
package: rjm
name: MemoryReference
slug: memoryreference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MemoryReference

## Definition — verbatim
(used, not defined)

> "class MemoryReference:" — scripts/validation/check_skill_memory_references.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 129 | defined here | Dataclass representing a single extracted literal memory reference with file location and operation. |

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
`MemoryReference` is a Python dataclass identifier representing parsed memory reference data rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
