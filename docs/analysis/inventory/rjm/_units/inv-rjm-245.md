---
unit: inv-rjm-245
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-245

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/github_core/workflow_runs.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/github_core/worktree_identity.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/guard_diff.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/__init__.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/bootstrap.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/CLAUDE.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/guards.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/path_safety.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/hook_utilities/utilities.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-github-core-workflow-runs-py.md (7079 bytes)
- docs/analysis/inventory/rjm/scripts-github-core-worktree-identity-py.md (3967 bytes)
- docs/analysis/inventory/rjm/scripts-guard-diff-py.md (4378 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities---init---py.md (3868 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities-bootstrap-py.md (4248 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities-claude-md.md (2204 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities-guards-py.md (5059 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities-path-safety-py.md (3383 bytes)
- docs/analysis/inventory/rjm/scripts-hook-utilities-utilities-py.md (6594 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-245.md (unit report)

## Scripts executed
- scripts/github_core/workflow_runs.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/workflow_runs.py`, exit code 0
- scripts/github_core/worktree_identity.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/worktree_identity.py`, exit code 0
- scripts/guard_diff.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/guard_diff.py`, exit code 0
- scripts/hook_utilities/__init__.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/__init__.py`, exit code 0
- scripts/hook_utilities/bootstrap.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/bootstrap.py`, exit code 0
- scripts/hook_utilities/guards.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/guards.py`, exit code 0
- scripts/hook_utilities/path_safety.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/path_safety.py`, exit code 0
- scripts/hook_utilities/utilities.py, `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/hook_utilities/utilities.py`, exit code 0
- scripts/hook_utilities/CLAUDE.md, markdown memory artifact (not executable)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/hook_utilities/CLAUDE.md` is an EXACT byte replica (170 bytes, sha256 dbfec62ab652ff10) of canonical `scripts/CLAUDE.md` (EXACT group 5 in duplication ledger).
- `scripts/hook_utilities/` is canonical for shared Python utilities in `rjm`; mirrored to `.claude/lib/hook_utilities/` via `scripts/sync_plugin_lib.py` and `src/copilot-cli/lib/hook_utilities/` via `build/scripts/build_all.py`.
- `scripts/hook_utilities/bootstrap.py` carries an explicit architectural governance constraint (ADR-047, Issue #2898): hook scripts under `.claude/hooks/` must not import it and must retain inline bootstrap literals to satisfy regression grep-tests.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,060 tokens (48,251 bytes).
Approximate tokens of output written: ~10,195 tokens (40,780 bytes).
