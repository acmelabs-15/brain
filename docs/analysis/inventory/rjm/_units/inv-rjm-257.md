---
unit: inv-rjm-257
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-257

## Files assigned
- [x] `sources/rjm/scripts/README.md`
- [x] `sources/rjm/scripts/redact_secrets.py`
- [x] `sources/rjm/scripts/report_pr_supersession.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-readme-md.md` (13211 bytes)
- `docs/analysis/inventory/rjm/scripts-redact-secrets-py.md` (6697 bytes)
- `docs/analysis/inventory/rjm/scripts-report-pr-supersession-py.md` (7725 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-257.md` (3341 bytes)

## Scripts executed
- `sources/rjm/scripts/redact_secrets.py`: `echo "Bearer abc12345678" | python3 sources/rjm/scripts/redact_secrets.py`, exit code 0
- `sources/rjm/scripts/redact_secrets.py`: `python3 sources/rjm/scripts/redact_secrets.py arg1 arg2`, exit code 2
- `sources/rjm/scripts/redact_secrets.py`: `python3 sources/rjm/scripts/redact_secrets.py nonexistent_file.txt`, exit code 2
- `sources/rjm/scripts/report_pr_supersession.py`: `python3 sources/rjm/scripts/report_pr_supersession.py --help`, exit code 0
- `sources/rjm/scripts/report_pr_supersession.py`: `python3 sources/rjm/scripts/report_pr_supersession.py --invalid-arg`, exit code 2
- `sources/rjm/scripts/report_pr_supersession.py`: `python3 sources/rjm/scripts/report_pr_supersession.py --owner dummy --repo dummy`, exit code 3
- `sources/rjm/scripts/compute_health_status.py`: `python3 sources/rjm/scripts/compute_health_status.py --help`, exit code 0
- `sources/rjm/scripts/maintenance/gc_worktrees.py`: `python3 sources/rjm/scripts/maintenance/gc_worktrees.py --help`, exit code 0
- `sources/rjm/scripts/new_validated_pr.py`: `python3 sources/rjm/scripts/new_validated_pr.py --help`, exit code 0
- `sources/rjm/scripts/sync_mcp_config.py`: `python3 sources/rjm/scripts/sync_mcp_config.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/README.md` documents repository-wide scripting organization and placement principles (ADR-019), but exhibits significant documentation drift from the migration of PowerShell scripts (ADR-005) to Python (ADR-042). It includes references to non-existent session fixtures and Pester test scripts.
- `scripts/redact_secrets.py` serves as a vital security backstop invoked across `/spec` and `/checkpoint` commands (CWE-209/CWE-532). Its generic `hex-secret` pattern matches 40-character commit SHAs and 64-character content hashes, requiring `include_hex=False` when verifying fields meant to contain git commit hashes.
- `scripts/report_pr_supersession.py` is invoked by CI workflow `.github/workflows/pr-maintenance.yml` to report open PRs superseded by changes on `main`. It references `check_pr_live_state.py`, which is located in `src/copilot-cli/skills/github/scripts/pr/check_pr_live_state.py`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9362 tokens (37448 bytes)
Approximate tokens of output written: ~7400 tokens (29651 bytes)
