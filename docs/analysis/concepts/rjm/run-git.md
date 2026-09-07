---
package: rjm
name: _run_git
slug: run-git
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
  - {path: scripts/ci/merge_tree_materialization.py, sha256: aeda3844a027c282ae04e33379a456f239d06f484aece396003e530861ba6b0a}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
  - {path: scripts/testing/mutation_workspace_git.py, sha256: 57a9d9dfa073c1d628afccce78bde4137748c564d5f6a1f4d9e0eb4720c708d9}
  - {path: scripts/validation/portability_git.py, sha256: 514b5c5a3541e4888e0b15440c04ec529e190db1a04714049ece5887b20c92b7}
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _run_git

## Definition — verbatim
(used, not defined)

> "def _run_git(args: list[str]) -> str:" — scripts/audit_orphaned_branches.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/audit_orphaned_branches.py | 62 | defined here | Helper executing git subprocess commands to inspect remote branches and diffs. |
| scripts/ci/merge_tree_materialization.py | 34 | defined here | Subprocess runner executing git commands without shell invocation during tree materialization. |
| scripts/maintenance/gc_worktrees.py | 124 | defined here | Internal helper executing git commands with output capture for worktree garbage collection. |
| scripts/normalize_line_endings.py | 22 | defined here | Subprocess helper running git commands during line ending normalization. |
| scripts/testing/mutation_workspace_git.py | 72 | defined here | Subprocess wrapper executing git commands within mutation testing workspaces. |
| scripts/validation/portability_git.py | 58 | defined here | Subprocess execution helper running git commands with local overrides stripped. |
| scripts/validation/test_docs_only_eligibility.py | 77 | defined here | Subprocess helper querying git diff paths to evaluate documentation-only eligibility. |
| scripts/validation/test_investigation_eligibility.py | 48 | defined here | Subprocess helper querying git change paths to verify investigation eligibility. |

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
defects: doc-drift, script-bug, orphan

## Design notes
_run_git is a Python utility function identifier implemented across multiple scripts to wrap git subprocess invocations rather than a lifecycle concept.
