---
package: rjm
name: extract_destination
slug: extract-destination
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# extract_destination

## Definition — verbatim
(used, not defined)

> "def extract_destination(rest: str) -> str | None:" — scripts/validation/check_worktree_recipes.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_worktree_recipes.py | 146 | defined here | Helper function extracting the target destination path argument from a git worktree add command line. |

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
defects: exit-code-mismatch

## Design notes
`extract_destination` is a Python helper function in `check_worktree_recipes.py` parsing the path argument from `git worktree add` commands rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
