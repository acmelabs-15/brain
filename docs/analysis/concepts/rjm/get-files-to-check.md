---
package: rjm
name: get_files_to_check
slug: get-files-to-check
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

# get_files_to_check

## Definition — verbatim
(used, not defined)

> "def get_files_to_check(" — scripts/validate_skill_format.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_format.py | 47 | defined here | Resolves candidate file paths for format validation based on CLI flags and git status. |

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
`get_files_to_check` is a Python function identifier resolving target paths to check for skill formatting rules rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
