---
package: rjm
name: MemoryReference
slug: memoryreference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
