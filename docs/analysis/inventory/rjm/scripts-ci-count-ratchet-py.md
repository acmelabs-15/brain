---
package: rjm
path: scripts/ci/count_ratchet.py
type: script
bytes: 47457
unit: inv-rjm-202
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/count_ratchet.py

## Purpose — required, verbatim
> "Shared machinery for whole-repo violation-count ratchets." — scripts/ci/count_ratchet.py:1

## Design intent — required
Provides reusable, battle-tested policy and execution machinery for repository-wide violation-count ratchets (such as `ruff_count_ratchet.py`, `taste_count_ratchet.py`, `type_ignore_count_ratchet.py`, and `subprocess_encoding_count_ratchet.py`). Without this shared module, each ratchet implementation would independently duplicate subtle git mechanics, leading to policy drift and severe failure modes documented across issues #2993, #3779, #3902, #4057, #4066, #4746, #4914, and #5065. It enforces that: (1) baseline allowances can only decrease, never increase; (2) violations are measured strictly against git-tracked index entries rather than directory scans (preventing untracked or cache file inflation) while deduplicating multi-stage unmerged index entries during merge conflicts; (3) git subprocesses execute in an isolated environment stripping foreign `GIT_*` variables (avoiding wrong-worktree contamination during pre-push hooks); (4) command lines are safely batched within budget limits; (5) bounded slack (up to 6) is permitted to accommodate concurrent merge queue cleanups without merge collisions or unearned failures; and (6) branch fork-point comparisons accurately distinguish whether a branch raised its baseline, lowered it behind a further-lowered base, or is simply unmerged behind base (waived only if backed by a merge-tree check).

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments parsed via `build_parser` (scripts/ci/count_ratchet.py:487):
  - `--repo-root` — scripts/ci/count_ratchet.py:491 (path to repository root, default cwd)
  - `--baseline` — scripts/ci/count_ratchet.py:497 (path to baseline count file)
  - `--update` — scripts/ci/count_ratchet.py:503 (flag to lower baseline to current count on improvement)
  - `--base-ref` — scripts/ci/count_ratchet.py:508 (git ref to compare against fork point)
- Baseline count file on disk read via `read_baseline` — scripts/ci/count_ratchet.py:377
- Git repository tracked files and index entries read via `tracked_files` — scripts/ci/count_ratchet.py:252
- Git commit tree references resolved via `baseline_at_ref` (scripts/ci/count_ratchet.py:472) and `baseline_absent_at_ref` (scripts/ci/count_ratchet.py:439)
- Ambient process environment filtered via `git_environment` — scripts/ci/count_ratchet.py:85
- Callable function `counter` — scripts/ci/count_ratchet.py:951 (returns current violation count or None)
- Optional callable function `lister` — scripts/ci/count_ratchet.py:954 (returns list of violation strings or None)

## Outputs — required
- Rewrites baseline count file on disk when invoked with `--update` on improvement: `args.baseline.write_text` (scripts/ci/count_ratchet.py:1018)
- Diagnostic messages to `sys.stderr` when count exceeds baseline (`REGRESSION` — scripts/ci/count_ratchet.py:996) or when slack exceeds maximum permitted bound (`STALE BASELINE` — scripts/ci/count_ratchet.py:1025)
- Informational messages to stdout on pass or baseline update (`OK` — scripts/ci/count_ratchet.py:1028, 1032)
- Warning notes on unmerged index entries: `note:` (scripts/ci/count_ratchet.py:245)
- Standardized exit codes (AGENTS.md contract):
  - 0 (`EXIT_OK` — scripts/ci/count_ratchet.py:74): count <= baseline, or `--update` lowered baseline
  - 1 (`EXIT_REGRESSION` — scripts/ci/count_ratchet.py:75): count > baseline, branch raised baseline, or unbacked stale baseline
  - 2 (`EXIT_CONFIG` — scripts/ci/count_ratchet.py:76): baseline missing or malformed, bad arguments, or fork-point lacks baseline
  - 3 (`EXIT_EXTERNAL` — scripts/ci/count_ratchet.py:77): linter invocation failure, unresolvable fork-point, or unreadable baseline at ref

## Invokes — required
none

## Invoked by — required
- script count_ratchet — scripts/ci/ruff_count_ratchet.py:38
- script count_ratchet — scripts/ci/type_ignore_count_ratchet.py:39
- script count_ratchet — scripts/ci/subprocess_encoding_count_ratchet.py:28
- script count_ratchet — scripts/validation/check_adr_lifecycle.py:123

## Concepts named — required, verbatim
- `count ratchet` — scripts/ci/count_ratchet.py:3 — defined here
- `baseline file` — scripts/ci/count_ratchet.py:3 — used here
- `ruff_count_ratchet.py` — scripts/ci/count_ratchet.py:10 — used here
- `taste_count_ratchet.py` — scripts/ci/count_ratchet.py:11 — used here
- `git_environment` — scripts/ci/count_ratchet.py:39 — defined here
- `EXIT_OK` — scripts/ci/count_ratchet.py:74 — defined here
- `EXIT_REGRESSION` — scripts/ci/count_ratchet.py:75 — defined here
- `EXIT_CONFIG` — scripts/ci/count_ratchet.py:76 — defined here
- `EXIT_EXTERNAL` — scripts/ci/count_ratchet.py:77 — defined here
- `ARGV_BUDGET_BYTES` — scripts/ci/count_ratchet.py:82 — defined here
- `MAX_NAMED_UNMERGED` — scripts/ci/count_ratchet.py:170 — defined here
- `deduplicate_index_entries` — scripts/ci/count_ratchet.py:179 — defined here
- `tracked_files` — scripts/ci/count_ratchet.py:252 — defined here
- `changed_files` — scripts/ci/count_ratchet.py:311 — defined here
- `chunk` — scripts/ci/count_ratchet.py:354 — defined here
- `read_baseline` — scripts/ci/count_ratchet.py:377 — defined here
- `MAX_BASELINE_SLACK` — scripts/ci/count_ratchet.py:385 — defined here
- `baseline_health` — scripts/ci/count_ratchet.py:407 — defined here
- `baseline_absent_at_ref` — scripts/ci/count_ratchet.py:439 — defined here
- `baseline_at_ref` — scripts/ci/count_ratchet.py:472 — defined here
- `build_parser` — scripts/ci/count_ratchet.py:487 — defined here
- `_BaseRefFacts` — scripts/ci/count_ratchet.py:520 — defined here
- `is_shallow_repository` — scripts/ci/count_ratchet.py:578 — defined here
- `BASELINE_RAISED` — scripts/ci/count_ratchet.py:592 — defined here
- `BASELINE_LOWERED` — scripts/ci/count_ratchet.py:593 — defined here
- `BASELINE_UNCHANGED` — scripts/ci/count_ratchet.py:594 — defined here
- `FORK_POINT_UNREADABLE` — scripts/ci/count_ratchet.py:596 — defined here
- `FORK_BASELINE_ABSENT` — scripts/ci/count_ratchet.py:597 — defined here
- `FORK_BASELINE_UNREADABLE` — scripts/ci/count_ratchet.py:598 — defined here
- `BaselineMove` — scripts/ci/count_ratchet.py:602 — defined here
- `BaselineMoveFailure` — scripts/ci/count_ratchet.py:610 — defined here
- `baseline_move` — scripts/ci/count_ratchet.py:631 — defined here
- `run` — scripts/ci/count_ratchet.py:947 — defined here

## Structure
- `EXIT_OK = 0`
- `EXIT_REGRESSION = 1`
- `EXIT_CONFIG = 2`
- `EXIT_EXTERNAL = 3`
- `ARGV_BUDGET_BYTES = 24000`
- `def git_environment() -> dict[str, str]`
- `def _git_run(repo_root: Path, argv: Sequence[str]) -> subprocess.CompletedProcess[str] | None`
- `def _git_rc(repo_root: Path, argv: Sequence[str]) -> int | None`
- `MAX_NAMED_UNMERGED = 5`
- `def deduplicate_index_entries(entries: Sequence[str]) -> tuple[list[str], list[str]]`
- `def _unmerged_note(paths: Sequence[str]) -> str`
- `def tracked_files(repo_root: Path, globs: Sequence[str], *, announce_unmerged: bool = True) -> list[str] | None`
- `def _diff_paths(repo_root: Path, spec: str, scope: str) -> frozenset[str]`
- `def changed_files(repo_root: Path, base_ref: str | None) -> frozenset[str]`
- `def chunk(paths: Sequence[str], budget: int = ARGV_BUDGET_BYTES) -> list[list[str]]`
- `def read_baseline(path: Path) -> int | None`
- `MAX_BASELINE_SLACK = 6`
- `def baseline_health(actual: int, baseline: int, max_slack: int = MAX_BASELINE_SLACK) -> str | None`
- `def _baseline_rel(repo_root: Path, baseline: Path) -> str`
- `def baseline_absent_at_ref(repo_root: Path, ref: str, baseline: Path) -> bool`
- `def baseline_at_ref(repo_root: Path, ref: str, baseline: Path) -> int | None`
- `def build_parser(description: str, default_baseline: Path) -> argparse.ArgumentParser`
- `class _BaseRefFacts`
- `def _above_base_message(facts: _BaseRefFacts) -> str`
- `def _fork_point(repo_root: Path, base_ref: str) -> str | None`
- `def is_shallow_repository(repo_root: Path) -> bool`
- `class BaselineMove`
- `class BaselineMoveFailure`
- `def baseline_move(repo_root: Path, base_ref: str, baseline: Path, recorded: int) -> BaselineMove | BaselineMoveFailure`
- `def _lowered_here_message(facts: _BaseRefFacts, *, at_fork: int) -> str`
- `def _fork_baseline_absent_message(facts: _BaseRefFacts, *, fork: str) -> str`
- `def _fork_baseline_unreadable_message(facts: _BaseRefFacts, *, fork: str) -> str`
- `def _unreadable_fork_message(facts: _BaseRefFacts, *, shallow: bool) -> str`
- `def _behind_base_message(facts: _BaseRefFacts) -> str`
- `def _behind_base_unbacked_message(facts: _BaseRefFacts) -> str`
- `def _verdict_for_fork_failure(failure: BaselineMoveFailure, facts: _BaseRefFacts, *, shallow: bool) -> int`
- `def _verdict_for_move(move: BaselineMove | BaselineMoveFailure, facts: _BaseRefFacts, *, shallow: bool, merge_tree_backed: bool) -> int | None`
- `def _base_ref_verdict(args: argparse.Namespace, *, label: str, baseline: int, count: int, merge_tree_backed: bool) -> int | None`
- `def run(args: argparse.Namespace, *, label: str, counter: Callable[[Path], int | None], scan_error: str, regression_advice: str, lister: Callable[[Path, frozenset[str]], list[str] | None] | None = None, merge_tree_backed: bool = False) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/count_ratchet.py`, Python 3, 1034 lines
- documented invocation:
  "python scripts/ci/<name>.py" — scripts/ci/count_ratchet.py:45
  Shared library module imported and invoked by concrete count ratchets (e.g. `scripts/ci/ruff_count_ratchet.py`, `scripts/ci/taste_count_ratchet.py`, `scripts/ci/type_ignore_count_ratchet.py`, `scripts/ci/subprocess_encoding_count_ratchet.py`).
- **executed:** yes
- actual command run:
  1. Direct module invocation: `python3 sources/rjm/scripts/ci/count_ratchet.py`
     abridged stdout: (empty)
     **actual exit code:** 0
  2. Python API execution: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from pathlib import Path; from scripts.ci.count_ratchet import build_parser, read_baseline, chunk, git_environment; print('env keys:', len(git_environment())); print('baseline:', read_baseline(Path('sources/rjm/scripts/ci/taste_count_baseline.txt')))"`
     abridged stdout: `env keys: 56\nbaseline: 575`
     **actual exit code:** 0
  3. Integration and unit tests:
     `uv run --directory sources/rjm pytest tests/ci/test_count_ratchet.py`
     abridged stdout: `28 passed in 6.82s`
     **actual exit code:** 0
     `uv run --directory sources/rjm pytest tests/ci/test_count_ratchet_baseline_health.py tests/ci/test_count_ratchet_fork_failures.py tests/ci/test_count_ratchet_fork_point.py tests/ci/test_count_ratchet_git_environment.py tests/ci/test_count_ratchet_unmerged_index.py`
     abridged stdout: `55 passed in 20.59s`
     **actual exit code:** 0
- documented exit codes:
  "0 - ok (count <= baseline, or --update records a decrease)" — scripts/ci/count_ratchet.py:52
  "1 - regression (count > baseline, or this branch moved the baseline above" — scripts/ci/count_ratchet.py:53
  "2 - config error (baseline missing or malformed, bad args, or the fork" — scripts/ci/count_ratchet.py:57
  "3 - external error (the underlying linter could not run, or a git read" — scripts/ci/count_ratchet.py:59
  Actual exit paths in code:
  - `scripts/ci/count_ratchet.py:74`: `EXIT_OK = 0` (returned at lines 1022, 1030, 1033)
  - `scripts/ci/count_ratchet.py:75`: `EXIT_REGRESSION = 1` (returned at lines 857, 860, 863, 1014, 1026)
  - `scripts/ci/count_ratchet.py:76`: `EXIT_CONFIG = 2` (returned at lines 837, 976)
  - `scripts/ci/count_ratchet.py:77`: `EXIT_EXTERNAL = 3` (returned at lines 840, 842, 932, 981)
- for validators/gates: can it exit non-zero? Yes, exits 1 on regression or unbacked stale baseline, 2 on configuration error, 3 on external/git failure. Does it fail on the source repo's own default branch? No, all 83 test cases in test suite pass.
- does the output match what the documentation claims? Yes, exit codes 0..3 and diagnostic messages match the docstring and AGENTS.md contract.

## Defects — required
none

## Observations
Exemplary systems engineering for Git CI gates:
1. `git_environment()` prevents foreign linked-worktree indices from polluting `git -C` operations in pre-push hooks by stripping `GIT_*` environment variables case-insensitively (issue #4914).
2. `deduplicate_index_entries()` eliminates duplicate index entries for conflicted files during ongoing merges, preventing phantom regression spikes (issue #4746).
3. `MAX_BASELINE_SLACK = 6` allows concurrent merge queue PR cleanups to lower violation baselines without creating git merge conflicts or spurious default branch build failures (issue #4057).
4. `changed_files()` prioritizes branch-touched files (committed and uncommitted diffs) so that the 40-line diagnostic cap surfaces newly introduced violations rather than truncating them behind hundreds of legacy violations (issue #3902).
5. `baseline_move()` employs 3-way fork-point comparison to distinguish between true local regressions, stale branches behind main, and unbacked ratchets (issue #5065).

## Context cost
47457 bytes (approximately 11864 tokens). Isolated stdlib-only implementation; loads no external dependencies or project modules.
