---
package: rjm
name: _REPAIR_COMMAND
slug: repair-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _REPAIR_COMMAND

## Definition — verbatim
(used, not defined)

> "_REPAIR_COMMAND = \"uv sync --frozen --extra dev --reinstall\"" — scripts/maintenance/repair_worktree_venv.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 52 | defined here | Module constant defining the command string for recreating the virtual environment. |
| scripts/maintenance/repair_worktree_venv.py | 73 | defined here | Accessor function returning the `_REPAIR_COMMAND` string. |

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
A module constant identifier in `repair_worktree_venv.py` specifying the uv invocation for environment recreation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
