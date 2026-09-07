---
package: rjm
name: write_memory
slug: write-memory
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_memory

## Definition — verbatim
(used, not defined)

> "``edit_memory`` calls with a literal name. ``write_memory`` is excluded on" — scripts/validation/check_skill_memory_references.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 53 | used here | Cited as deliberately excluded from validation because creating a new memory naturally specifies an unresolvable name. |

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
out-of-scope

## Design notes
`write_memory` is an MCP tool identifier for creating Serena memories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
