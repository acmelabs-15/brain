---
unit: inv-rjm-202
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-202

## Files assigned
- [x] sources/rjm/scripts/ci/count_ratchet.py
- [x] sources/rjm/scripts/ci/detect_human_changes_requested.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-count-ratchet-py.md (14036 bytes)
- docs/analysis/inventory/rjm/scripts-ci-detect-human-changes-requested-py.md (7015 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-202.md

## Scripts executed
- `scripts/ci/count_ratchet.py`: `python3 sources/rjm/scripts/ci/count_ratchet.py`, exit code 0
- `scripts/ci/count_ratchet.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from pathlib import Path; from scripts.ci.count_ratchet import build_parser, read_baseline, chunk, git_environment; print('env keys:', len(git_environment())); print('baseline:', read_baseline(Path('sources/rjm/scripts/ci/taste_count_baseline.txt')))"`, exit code 0
- `scripts/ci/count_ratchet.py`: `uv run --directory sources/rjm pytest tests/ci/test_count_ratchet.py`, exit code 0
- `scripts/ci/count_ratchet.py`: `uv run --directory sources/rjm pytest tests/ci/test_count_ratchet_baseline_health.py tests/ci/test_count_ratchet_fork_failures.py tests/ci/test_count_ratchet_fork_point.py tests/ci/test_count_ratchet_git_environment.py tests/ci/test_count_ratchet_unmerged_index.py`, exit code 0
- `scripts/ci/detect_human_changes_requested.py`: `python3 sources/rjm/scripts/ci/detect_human_changes_requested.py`, exit code 2
- `scripts/ci/detect_human_changes_requested.py`: `TMP_OUT=$(mktemp); GITHUB_OUTPUT="$TMP_OUT" PR_NUMBER=999999 GITHUB_REPOSITORY=dummy/repo python3 sources/rjm/scripts/ci/detect_human_changes_requested.py`, exit code 0
- `scripts/ci/detect_human_changes_requested.py`: `uv run --directory sources/rjm pytest tests/ci/test_detect_human_changes_requested.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/count_ratchet.py` is the foundational shared engine for all repository-wide violation-count ratchets in `rjm` (`ruff_count_ratchet.py`, `taste_count_ratchet.py`, `type_ignore_count_ratchet.py`, and `subprocess_encoding_count_ratchet.py`). It encapsulates critical git mechanics: environment isolation to avoid linked-worktree contamination during pre-push hooks (issue #4914), index deduplication for multi-stage conflict states during merges (issue #4746), bounded slack tolerance (`MAX_BASELINE_SLACK = 6`) to accommodate concurrent merge queue cleanups without merge collisions or unearned failures (issue #4057), changed-file diagnostic prioritization under a 40-line display budget (issue #3902), and 3-way fork-point analysis to differentiate regressions from behind-base branches (issue #5065).
- `scripts/ci/detect_human_changes_requested.py` is an exemplar of ADR-006 (thin workflows, testable modules) and ADR-035 (standardized exit codes), replacing inline PowerShell script blocks in GitHub Actions workflows with a standalone, unit-tested Python script. It is invoked from `.github/workflows/pr-maintenance.yml:217`, which sits outside the manifest in-scope set, marking it an orphan with respect to the in-scope manifest graph.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,500 tokens (49,923 bytes across 2 assigned files).
Approximate tokens of output written: ~5,300 tokens (21,051 bytes across 2 inventory cards plus unit report).
