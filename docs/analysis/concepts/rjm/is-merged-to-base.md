---
package: rjm
name: is_merged_to_base
slug: is-merged-to-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_merged_to_base

## Definition — verbatim
(used, not defined)

> "def is_merged_to_base(path: str, base_ref: str) -> bool:" — scripts/maintenance/gc_worktrees.py:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 165 | defined here | Helper executing git merge-base --is-ancestor to verify branch integration with base_ref. |

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
clean

## Design notes
is_merged_to_base is a Python helper testing merge ancestry of a worktree against a base branch rather than an SDLC lifecycle concept, classified as name-only per D-023.
