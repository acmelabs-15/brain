---
package: rjm
name: MEMORIES_ROOT
slug: memories-root
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

# MEMORIES_ROOT

## Definition — verbatim
(used, not defined)

> "MEMORIES_ROOT = Path(\".serena\") / \"memories\"" — scripts/validation/check_skill_memory_references.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 96 | defined here | Constant path pointing to the default directory root where Serena memory files reside. |

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
`MEMORIES_ROOT` is a Python filesystem path constant identifier pointing to the excluded Serena memories directory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
