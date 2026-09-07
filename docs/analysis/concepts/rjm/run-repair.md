---
package: rjm
name: run_repair
slug: run-repair
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

# run_repair

## Definition — verbatim
(used, not defined)

> "def run_repair(root: Path) -> None:" — scripts/maintenance/repair_worktree_venv.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 189 | defined here | Function executing `uv sync --frozen --extra dev --reinstall` to recreate the virtual environment. |

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
An execution function identifier in `repair_worktree_venv.py` invoking the uv repair command rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
