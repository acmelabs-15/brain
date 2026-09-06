---
unit: inv-rjm-197
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-197

## Files assigned
- [x] sources/rjm/scripts/audit_orphaned_branches.py
- [x] sources/rjm/scripts/bootstrap-vm.sh
- [x] sources/rjm/scripts/bulk_cancel_guard.py
- [x] sources/rjm/scripts/check_skill_exists.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-audit-orphaned-branches-py.md (6863 bytes)
- docs/analysis/inventory/rjm/scripts-bootstrap-vm-sh.md (8220 bytes)
- docs/analysis/inventory/rjm/scripts-bulk-cancel-guard-py.md (10787 bytes)
- docs/analysis/inventory/rjm/scripts-check-skill-exists-py.md (7277 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-197.md

## Scripts executed
- `sources/rjm/scripts/audit_orphaned_branches.py`: `python3 scripts/audit_orphaned_branches.py`, exit code 1 (orphans detected across 27 remote branches)
- `sources/rjm/scripts/bootstrap-vm.sh`: `bash -n sources/rjm/scripts/bootstrap-vm.sh`, exit code 0 (syntax verification; full execution skipped because script targets Ubuntu Linux with `apt-get` and mutates global system/user environment)
- `sources/rjm/scripts/bulk_cancel_guard.py`: `uv run python scripts/bulk_cancel_guard.py --runs-file /tmp/test_empty.json --recovery-event synchronize`, exit code 0; `uv run python scripts/bulk_cancel_guard.py --runs-file /tmp/blocked.json`, exit code 1; `uv run python scripts/bulk_cancel_guard.py --runs-file foo.json --repository foo/bar`, exit code 2
- `sources/rjm/scripts/check_skill_exists.py`: `python3 scripts/check_skill_exists.py --list-available`, exit code 0; `python3 scripts/check_skill_exists.py --operation pr --action context`, exit code 0 ("true"); `python3 scripts/check_skill_exists.py --operation pr --action PRContext`, exit code 1 ("false", case sensitivity defect vs AGENTS.md:224); `python3 scripts/check_skill_exists.py --operation pr --action missing`, exit code 1 ("false")

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/audit_orphaned_branches.py` is invoked/mirrored by `scripts/maintenance/detect_orphan_commits.py` (which mirrors its exit code convention: 0 no orphans, 1 orphans detected, 2 runtime error).
- `scripts/bootstrap-vm.sh` references `scripts/maintenance/install_merge_drivers.py` at line 218, but that file does not exist in the repository (missing-path defect).
- `scripts/bulk_cancel_guard.py` depends on multiple modules in `scripts/github_core/` (`runs_file.py`, `pull_request_targets.py`, `workflow_runs.py`, `recovery_manifest.py`) which were factored out of it to keep the file under 500 lines.
- `scripts/check_skill_exists.py` scopes skill discovery exclusively to `.claude/skills/github/scripts/<operation>` and enforces path containment using `scripts.utils.path_validation.validate_safe_path`.

## Blocked or uncertain
none

## Time and size
Source read: 44,431 bytes across 4 files (approx. 11,100 tokens).
Output written: 33,147 bytes across 4 inventory cards and 1 unit report (approx. 8,300 tokens).
