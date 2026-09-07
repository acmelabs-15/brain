---
package: rjm
name: resolve_repo_root
slug: resolve-repo-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_repo_root

## Definition — verbatim
(used, not defined)

> "def resolve_repo_root(" — scripts/github_core/repo.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 61 | used here | Re-exported in the public module interface. |
| scripts/github_core/repo.py | 24 | defined here | Function discovering git worktree root and returning status outcome tuple. |
| scripts/github_core/validation.py | 72 | used here | Imported and called to determine repository boundary for path traversal checks. |
| scripts/validation/check_skill_skip_clauses.py | 221 | defined here | Internal helper resolving repo root from path parameter or fallback. |
| scripts/validation/validate_skill_shells.py | 61 | defined here | Internal helper resolving repo root by checking for `.claude/skills` directory. |

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
defects: script-bug

## Design notes
`resolve_repo_root` is a Python utility function identifier resolving git worktree root directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
