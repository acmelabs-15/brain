---
package: rjm
name: _refuse_partial_worktree
slug: refuse-partial-worktree
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _refuse_partial_worktree

## Definition — verbatim
(used, not defined)

> "def _refuse_partial_worktree(root: Path, scanned_by_root: Mapping[str, int]) -> bool:" — scripts/validation/portability_common.py:337

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_common.py | 337 | defined here | Internal refusal check validating git worktree completeness and unmerged status before writing baselines. |

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
A private helper function identifier in `portability_common.py`, classified as name-only per D-023.
