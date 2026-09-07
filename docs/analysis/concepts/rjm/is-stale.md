---
package: rjm
name: is_stale
slug: is-stale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_stale

## Definition — verbatim
(used, not defined)

> "Return True when the issue has not been updated within ``stale_days``." — scripts/issue_triage.py:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 226 | defined here | Function evaluating whether an issue has received no updates within a specified threshold of days. |
| scripts/maintenance/_gc_stale.py | 397 | defined here | Predicate checking whether a git worktree's directory is gone according to git prunable status or filesystem stat. |
| scripts/maintenance/repair_worktree_venv.py | 142 | defined here | Helper verifying whether a virtual environment launcher shebang path is obsolete or points outside the worktree. |

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
defects: orphan

## Design notes
`is_stale` is a Python function identifier used across multiple maintenance and triage utilities to detect elapsed activity watermarks, deleted worktrees, or invalid shebang paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
