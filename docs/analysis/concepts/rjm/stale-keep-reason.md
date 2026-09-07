---
package: rjm
name: stale_keep_reason
slug: stale-keep-reason
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stale_keep_reason

## Definition — verbatim
(used, not defined)

> "def stale_keep_reason(worktree: Worktree, main_path: str, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_reasons.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 71 | defined here | Function generating aggregate retention advice and rescue commands across HEAD, staged content, and admin reflog loss channels. |

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
`stale_keep_reason` is a Python function identifier aggregating loss warnings and retention commands for stale worktrees rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
