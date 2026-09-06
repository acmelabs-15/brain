---
unit: inv-rjm-301
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-301

## Files assigned
- [x] `sources/rjm/scripts/validation/pre_pr_sequence.py` — read in full
- [x] `sources/rjm/scripts/validation/pre_pr.py` — read in full
- [x] `sources/rjm/scripts/validation/push_lock_resolver.py` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md` (14545 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-pre-pr-py.md` (11488 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-push-lock-resolver-py.md` (9746 bytes)

## Scripts executed
- `scripts/validation/pre_pr_sequence.py`: `uv run --directory sources/rjm python scripts/validation/pre_pr_sequence.py`, exit code: 0
- `scripts/validation/pre_pr.py`: `uv run --directory sources/rjm python scripts/validation/pre_pr.py --quick`, exit code: 1 (54 passed, 2 failed due to missing local lefthook hook installation in isolated tree, 4 skipped)
- `scripts/validation/pre_pr.py`: `uv run --directory sources/rjm python scripts/validation/pre_pr.py --help`, exit code: 0
- `scripts/validation/pre_pr.py`: `uv run --directory sources/rjm python scripts/validation/pre_pr.py --markdown-lint-only README.md`, exit code: 0
- `scripts/validation/push_lock_resolver.py`: `uv run --directory sources/rjm python scripts/validation/push_lock_resolver.py`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `pre_pr_sequence.py` coordinates roughly 50 individual validation gates whose implementations are spread across `scripts/validation/` and tests under `tests/validation/`. The separation of sequence data (`_SEQUENCE`) from the runner (`pre_pr.py`) was instituted under Issues #3073 and #4285 to keep file sizes within repository lint boundaries.
- `pre_pr.py` contains a documented doc-drift defect: its top-level docstring enumerates a 12-stage validation sequence that predates the expansion into 50+ validations in `pre_pr_sequence.py`.
- `push_lock_resolver.py` was separated from `check_push_lock_paths.py` (which runs as one of the gates in `pre_pr_sequence.py`) to isolate shell tokenization and variable binding semantics from Markdown file discovery and reporting.

## Blocked or uncertain
none

## Time and size
Source read: ~48,268 bytes (~12,000 tokens).
Output written: ~35,779 bytes (~9,000 tokens) across 3 inventory cards, plus unit report.
