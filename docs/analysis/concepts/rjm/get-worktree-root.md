---
package: rjm
name: _get_worktree_root
slug: get-worktree-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _get_worktree_root

## Definition — verbatim
(used, not defined)

> "def _get_worktree_root() -> Path | None:" — .claude/skills/context-optimizer/scripts/path_validation.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/path_validation.py | 43 | defined here | Private helper function executing git to identify active worktree root directory. |

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
defects: doc-drift

## Design notes
_get_worktree_root is a private Python helper function identifier in path_validation.py executing git commands rather than an operational lifecycle concept, classified as name-only per D-023.
