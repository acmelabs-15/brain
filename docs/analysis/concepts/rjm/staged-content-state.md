---
package: rjm
name: staged_content_state
slug: staged-content-state
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# staged_content_state

## Definition — verbatim
(used, not defined)

> "def staged_content_state(admin: Path, head: str, repo_dir: str, timeout: float) -> str:" — scripts/maintenance/_gc_stale.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 88 | defined here | Function checking whether an orphaned worktree index holds uncommitted staged content compared to HEAD. |

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
`staged_content_state` is a Python function in maintenance diagnostics probing git worktree index state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
