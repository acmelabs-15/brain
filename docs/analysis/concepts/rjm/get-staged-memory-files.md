---
package: rjm
name: get_staged_memory_files
slug: get-staged-memory-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_format.py, sha256: 4d8c399c6ce129fb80fef18d4e6a864284b5566ad91c4c6c3c22c8ccb8621508}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_staged_memory_files

## Definition — verbatim
(used, not defined)

> "def get_staged_memory_files() -> list[str]:" — scripts/validate_skill_format.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 28 | defined here | Function querying git diff for cached staged markdown files in .serena/memories/. |

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
defects: script-bug, orphan

## Design notes
`get_staged_memory_files` is a Python utility function identifier retrieving staged git files for pre-commit validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
