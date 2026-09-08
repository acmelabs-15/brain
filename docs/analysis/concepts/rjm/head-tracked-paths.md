---
package: rjm
name: _head_tracked_paths
slug: head-tracked-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/citation_head_state.py, sha256: 5fef428b3fc73e7fe6182283c6724ec4ada2cb6ca53e25a72fc05f480b005cf7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _head_tracked_paths

## Definition — verbatim
(used, not defined)

> "def _head_tracked_paths(repo_root: Path) -> set[str] | None:" — scripts/validation/citation_head_state.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/citation_head_state.py | 42 | defined here | Helper function running git ls-tree to return the set of repository paths tracked at HEAD. |

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
A helper function identifier in citation_head_state.py, classified as name-only per D-023.
