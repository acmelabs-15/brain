---
unit: inv-rjm-253
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-253

## Files assigned
- [x] `scripts/maintenance/worktree_report.py`
- [x] `scripts/mcp_cli/__init__.py`
- [x] `scripts/mcp_cli/wrapper.py`
- [x] `scripts/measure_context_retrieval_metrics.py`
- [x] `scripts/metrics_writer.py`
- [x] `scripts/metrics/__init__.py`
- [x] `scripts/metrics/check_vendored_install.py`
- [x] `scripts/metrics/emit_verdict_mismatch.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-maintenance-worktree-report-py.md` — 6356 bytes
- `docs/analysis/inventory/rjm/scripts-mcp-cli---init---py.md` — 3009 bytes
- `docs/analysis/inventory/rjm/scripts-mcp-cli-wrapper-py.md` — 4194 bytes
- `docs/analysis/inventory/rjm/scripts-measure-context-retrieval-metrics-py.md` — 6170 bytes
- `docs/analysis/inventory/rjm/scripts-metrics-writer-py.md` — 5131 bytes
- `docs/analysis/inventory/rjm/scripts-metrics---init---py.md` — 2157 bytes
- `docs/analysis/inventory/rjm/scripts-metrics-check-vendored-install-py.md` — 5524 bytes
- `docs/analysis/inventory/rjm/scripts-metrics-emit-verdict-mismatch-py.md` — 5061 bytes
- `docs/analysis/inventory/rjm/_units/inv-rjm-253.md` — 4805 bytes

## Scripts executed
- `scripts/maintenance/worktree_report.py`: `python3 sources/rjm/scripts/maintenance/worktree_report.py` (exit code: 0)
- `scripts/mcp_cli/__init__.py`: `python3 sources/rjm/scripts/mcp_cli/__init__.py` (exit code: 1)
- `scripts/mcp_cli/__init__.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/mcp_cli/__init__.py` (exit code: 0)
- `scripts/mcp_cli/wrapper.py`: `python3 sources/rjm/scripts/mcp_cli/wrapper.py` (exit code: 0)
- `scripts/measure_context_retrieval_metrics.py`: `python3 sources/rjm/scripts/measure_context_retrieval_metrics.py --help` (exit code: 0)
- `scripts/measure_context_retrieval_metrics.py`: `python3 sources/rjm/scripts/measure_context_retrieval_metrics.py` (exit code: 0)
- `scripts/measure_context_retrieval_metrics.py`: `python3 sources/rjm/scripts/measure_context_retrieval_metrics.py --format json` (exit code: 0)
- `scripts/measure_context_retrieval_metrics.py`: `python3 sources/rjm/scripts/measure_context_retrieval_metrics.py --sessions-dir /tmp` (exit code: 1)
- `scripts/metrics_writer.py`: `python3 sources/rjm/scripts/metrics_writer.py` (exit code: 2)
- `scripts/metrics_writer.py`: `python3 sources/rjm/scripts/metrics_writer.py test_tally.md "test entry"` (exit code: 0)
- `scripts/metrics_writer.py`: `python3 sources/rjm/scripts/metrics_writer.py ../outside.md "test entry"` (exit code: 1)
- `scripts/metrics/__init__.py`: `python3 sources/rjm/scripts/metrics/__init__.py` (exit code: 0)
- `scripts/metrics/check_vendored_install.py`: `python3 sources/rjm/scripts/metrics/check_vendored_install.py` (exit code: 1)
- `scripts/metrics/emit_verdict_mismatch.py`: `python3 sources/rjm/scripts/metrics/emit_verdict_mismatch.py --help` (exit code: 0)
- `scripts/metrics/emit_verdict_mismatch.py`: `python3 sources/rjm/scripts/metrics/emit_verdict_mismatch.py --commit abc1234 --local PASS --ci pass` (exit code: 0)
- `scripts/metrics/emit_verdict_mismatch.py`: `python3 sources/rjm/scripts/metrics/emit_verdict_mismatch.py` (exit code: 2)
- `scripts/metrics/emit_verdict_mismatch.py`: `python3 sources/rjm/scripts/metrics/emit_verdict_mismatch.py --commit abc1234 --local PASS --ci FAIL` (exit code: 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/metrics/check_vendored_install.py` and `scripts/metrics/emit_verdict_mismatch.py` are part of the REQ-008-09 kill-criteria subsystem documented in `scripts/metrics/kill_criteria.py` (unit `inv-rjm-254`). They directly invoke `emit_event` from `scripts.metrics.kill_criteria` to append K3 and K4 telemetry records to `.agents/metrics/drift-events.jsonl`.
- `scripts/metrics_writer.py` is invoked during Step 0 and Step 0.5 of `/spec` (unit `inv-rjm-228` / `spec-generator`), providing hardened append operations against CWE-59 and CWE-367.
- `scripts/maintenance/worktree_report.py` is imported by `scripts/maintenance/gc_worktrees.py` and its internal modules (`_gc_apply.py`, `_gc_parse.py`, `_gc_reasons.py`, `_gc_stale.py`) to provide stable `KEEP_*` string constants and formatted report generation.

## Blocked or uncertain
none

## Time and size
Approx. 12,000 tokens of source read (37,430 bytes source code across 8 files plus referenced modules); approx. 8,500 tokens of output written.
