---
package: rjm
name: has_uncommitted_changes
slug: has-uncommitted-changes
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

# has_uncommitted_changes

## Definition — verbatim
(used, not defined)

> "def has_uncommitted_changes(path: str) -> bool:" — scripts/maintenance/gc_worktrees.py:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 146 | defined here | Helper querying git status porcelain to detect uncommitted staged or unstaged changes. |

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
has_uncommitted_changes is a Python helper querying git status to check worktree cleanliness rather than an SDLC lifecycle concept, classified as name-only per D-023.
