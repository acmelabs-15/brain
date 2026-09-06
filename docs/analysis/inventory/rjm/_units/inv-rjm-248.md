---
unit: inv-rjm-248
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-248

## Files assigned
- [x] `sources/rjm/scripts/invoke_pr_maintenance.py`
- [x] `sources/rjm/scripts/invoke_session_start_gate.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-invoke-pr-maintenance-py.md` (9723 bytes)
- `docs/analysis/inventory/rjm/scripts-invoke-session-start-gate-py.md` (10445 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-248.md` (2150 bytes)

## Scripts executed
- `scripts/invoke_pr_maintenance.py`: `python3 sources/rjm/scripts/invoke_pr_maintenance.py --help`, exit code: 0
- `scripts/invoke_pr_maintenance.py`: `python3 sources/rjm/scripts/invoke_pr_maintenance.py --owner test --repo test`, exit code: 2
- `scripts/invoke_session_start_gate.py`: `python3 sources/rjm/scripts/invoke_session_start_gate.py --help`, exit code: 0
- `scripts/invoke_session_start_gate.py`: `python3 sources/rjm/scripts/invoke_session_start_gate.py --check-only`, exit code: 0
- `scripts/invoke_session_start_gate.py`: `python3 scripts/invoke_session_start_gate.py` (in `sources/rjm`), exit code: 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/invoke_pr_maintenance.py` is an uninvoked root duplicate/ancestor of `.github/scripts/invoke_pr_maintenance.py` (unit `inv-rjm-183`). The GitHub Actions workflow `.github/workflows/pr-maintenance.yml:71` explicitly invokes `.github/scripts/invoke_pr_maintenance.py`.
- `scripts/invoke_session_start_gate.py` is an orphan pre-flight verification script not wired into active hooks or entry points. It was flagged as an orphan candidate in `.agents/audits/2026-07-02-safety-audit.md:82` and tested as a non-resolving decoy outside hook roots in `tests/hooks/test_adr_hook_claims.py:386`.
- Gate 4 of `scripts/invoke_session_start_gate.py` fails when run on the default branch `main` with exit code 2, verifying branch protection behavior.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,000 tokens (27,348 bytes across 2 source files). Approximate tokens of output written: ~5,200 tokens.
