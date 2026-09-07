---
package: rjm
name: resolve_common_git_dir
slug: resolve-common-git-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/repair_packed_refs.py, sha256: c0e763bf8c2cc05cf4c726dc8efc6fc169cbc3330fbc39cae78bb5aceb3b6e14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_common_git_dir

## Definition — verbatim
(used, not defined)

> "def resolve_common_git_dir(worktree_root: Path) -> Path:" — scripts/maintenance/repair_packed_refs.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 47 | defined here | Function resolving the common git directory for standard repositories and linked worktrees. |

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
A git directory resolution utility function identifier in `repair_packed_refs.py` rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
