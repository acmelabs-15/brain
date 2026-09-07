---
package: rjm
name: iter_instruction_files
slug: iter-instruction-files
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

# iter_instruction_files

## Definition — verbatim
(used, not defined)

> "def iter_instruction_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_skill_memory_references.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 146 | defined here | Scans and yields all markdown files across present corpus root directories. |

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
`iter_instruction_files` is a Python generator function identifier discovering instruction markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
