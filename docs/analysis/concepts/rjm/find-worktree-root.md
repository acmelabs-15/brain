---
package: rjm
name: find_worktree_root
slug: find-worktree-root
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

# find_worktree_root

## Definition — verbatim
(used, not defined)

> "def find_worktree_root(start_path: Path) -> Path | None:" — scripts/maintenance/repair_packed_refs.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 35 | defined here | Function resolving the nearest ancestor directory containing a `.git` marker. |

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
A helper function identifier in `repair_packed_refs.py` that locates git worktree roots rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
