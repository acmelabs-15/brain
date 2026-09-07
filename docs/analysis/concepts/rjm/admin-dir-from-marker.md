---
package: rjm
name: admin_dir_from_marker
slug: admin-dir-from-marker
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

# admin_dir_from_marker

## Definition — verbatim
(used, not defined)

> "def admin_dir_from_marker(path: str) -> Path | None:" — scripts/maintenance/_gc_stale.py:300

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 300 | defined here | Fast lookup function resolving a worktree's admin directory directly by reading its .git marker file without subprocess execution. |

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
`admin_dir_from_marker` is a Python helper function in maintenance diagnostics resolving admin directories from checkout marker files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
