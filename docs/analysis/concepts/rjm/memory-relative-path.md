---
package: rjm
name: MEMORY_RELATIVE_PATH
slug: memory-relative-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/pr_branch_mapping.py, sha256: ef68513a8490b248236707bb35a76c73fa2d9f58999d1f43b973d7cf72fe4340}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MEMORY_RELATIVE_PATH

## Definition — verbatim
(used, not defined)

> "MEMORY_RELATIVE_PATH = f\".serena/memories/{MEMORY_FILENAME}\"" — scripts/pr_branch_mapping.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 33 | defined here | Module constant specifying the relative repository path to the Serena memory file storing PR mappings. |

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
defects: orphan

## Design notes
`MEMORY_RELATIVE_PATH` is a Python string constant identifier designating the relative file path for PR branch mappings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
