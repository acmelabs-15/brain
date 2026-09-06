---
unit: inv-rjm-222
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-222

## Files assigned
- [x] `scripts/eval/_report_writer.py`
- [x] `scripts/eval/_run_persistence.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md` (6543 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--run-persistence-py.md` (6361 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-222.md` (1760 bytes)

## Scripts executed
- `scripts/eval/_report_writer.py`, `python3 sources/rjm/scripts/eval/_report_writer.py`, exit code 0
- `scripts/eval/_run_persistence.py`, `python3 sources/rjm/scripts/eval/_run_persistence.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both `_report_writer.py` and `_run_persistence.py` are internal library modules for `scripts/eval/eval-agent-vs-baseline.py`, belonging to the agent-vs-baseline empirical evaluation harness defined by DESIGN-004 and ADR-058.
- Both modules use write-temp-then-rename atomic file operations (`tempfile.mkstemp` followed by `os.fsync` and `os.replace`) to guard against partially written or corrupted artifact files in the event of unexpected interruptions.
- `_run_persistence.py` encapsulates the storage invariant for `runs.jsonl`, enforcing idempotency via `(fixture_id, variant, run_index)` keys, separating fresh-run mode from `--resume` mode, and retrying errored runs in place.
- `_report_writer.py` formats evaluation metrics into paired human-readable markdown (`REPORT.md`) and machine-readable JSON (`report.json`), formatting statistical deltas as percentage points (`pp`) in Markdown while keeping unrounded floats in JSON.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,025 tokens (44,099 bytes across 2 files). Approximate tokens of output written: ~3,666 tokens (14,664 bytes across 3 files).
