---
package: rjm
name: has_unpushed_commits
slug: has-unpushed-commits
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

# has_unpushed_commits

## Definition — verbatim
(used, not defined)

> "def has_unpushed_commits(path: str) -> bool:" — scripts/maintenance/gc_worktrees.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 151 | defined here | Helper running git log to detect local commits not present on remote tracking branches. |

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
has_unpushed_commits is a Python helper checking for unpushed Git commits in a worktree rather than an SDLC lifecycle concept, classified as name-only per D-023.
