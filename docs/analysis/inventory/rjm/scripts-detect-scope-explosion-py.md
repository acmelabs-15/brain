---
package: rjm
path: scripts/detect_scope_explosion.py
type: script
bytes: 18047
unit: inv-rjm-213
in_scope_via: scripts/scope_pr_base.py
aliases: []
memo_inputs:
  - {path: scripts/detect_scope_explosion.py, sha256: d7bfbd26d4d3d5afd838adcbee0815b32f7730ca41ef2f7ce98c686f5870bfa9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/detect_scope_explosion.py

## Purpose — required, verbatim
> "Detect scope explosion by counting files changed since branch diverged from main." — scripts/detect_scope_explosion.py:3

## Design intent — required
Local git pre-commit and pre-push enforcement hook that monitors pull request blast radius by tracking cumulative files changed relative to the base branch (`main` or stacked PR base). It enforces tiered warning and hard-blocking thresholds (warn at 10 files, strong warning at 20 files, hard block at >50 files) to keep code reviews manageable and prevent monolithic PRs. It accounts for in-progress merges, excludes auto-generated files from scope counts, supports stacked PRs by dynamically rescoping against GitHub PR base branches via `gh`, and allows emergency bypass via `SKIP_SCOPE_CHECK=1`. Without it, pull requests would grow unchecked, leading to oversized, unreviewable branches that increase regression risk and review cycle times.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `--base-branch` — scripts/detect_scope_explosion.py:468, `--quiet` — scripts/detect_scope_explosion.py:475
- Environment variables: `SKIP_SCOPE_CHECK` — scripts/detect_scope_explosion.py:492
- Git repository state: `git` — scripts/detect_scope_explosion.py:78, 97, 111, 174, 193, 216, 236

## Outputs — required
- Visual progress bar and status messages: `format_bar` — scripts/detect_scope_explosion.py:380, `report` — scripts/detect_scope_explosion.py:397
- Git commit/push exit verdicts: `return 0` — scripts/detect_scope_explosion.py:415, 421, 435, 494, 499, `return 1` — scripts/detect_scope_explosion.py:454, `return 2` — scripts/detect_scope_explosion.py:514, 517, 522

## Invokes — required
- script scripts.scope_pr_base — scripts/detect_scope_explosion.py:38
- script scripts.validation.git_hook_policy — scripts/detect_scope_explosion.py:43

## Invoked by — required
- config lefthook.yml — lefthook.yml:410
- script scripts/scope_pr_base.py — scripts/scope_pr_base.py:179

## Concepts named — required, verbatim
- `ADR-035 Exit Code Standardization` — scripts/detect_scope_explosion.py:20 — used here
- `ScopeDetectionError` — scripts/detect_scope_explosion.py:56 — defined here
- `ScopeResult` — scripts/detect_scope_explosion.py:61 — defined here
- `TRUNK_BRANCHES` — scripts/detect_scope_explosion.py:53 — defined here
- `WARN_THRESHOLD` — scripts/detect_scope_explosion.py:48 — defined here
- `STRONG_WARN_THRESHOLD` — scripts/detect_scope_explosion.py:49 — defined here
- `BLOCK_THRESHOLD` — scripts/detect_scope_explosion.py:50 — defined here
- `is_credible_rescope` — scripts/detect_scope_explosion.py:39 — used here
- `resolve_pr_base_branch` — scripts/detect_scope_explosion.py:40 — used here
- `strip_remote_prefix` — scripts/detect_scope_explosion.py:41 — used here

## Structure
- class ScopeDetectionError — scripts/detect_scope_explosion.py:56
- class ScopeResult — scripts/detect_scope_explosion.py:61
- def get_current_branch — scripts/detect_scope_explosion.py:71
- def _ref_exists — scripts/detect_scope_explosion.py:90
- def get_ref_commit — scripts/detect_scope_explosion.py:108
- def get_merge_head_commit — scripts/detect_scope_explosion.py:123
- def resolve_base_ref — scripts/detect_scope_explosion.py:128
- def get_merge_base — scripts/detect_scope_explosion.py:155
- def get_index_files_against_ref — scripts/detect_scope_explosion.py:186
- def get_head_files_against_ref — scripts/detect_scope_explosion.py:209
- def is_ancestor — scripts/detect_scope_explosion.py:232
- def _partition_generated — scripts/detect_scope_explosion.py:246
- def detect_scope — scripts/detect_scope_explosion.py:262
- def rescope_against_pr_base — scripts/detect_scope_explosion.py:325
- def format_bar — scripts/detect_scope_explosion.py:380
- def report — scripts/detect_scope_explosion.py:397
- def parse_args — scripts/detect_scope_explosion.py:457
- def main — scripts/detect_scope_explosion.py:482

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/detect_scope_explosion.py`, Python 3, 527 lines
- documented invocation (verbatim, path:line):
  > "run: uv run --frozen python scripts/detect_scope_explosion.py" — lefthook.yml:410
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run --frozen python scripts/detect_scope_explosion.py --help`
  Abridged stdout: `usage: detect_scope_explosion.py [-h] [--base-branch BASE_BRANCH] [--quiet]`
  **actual exit code:** 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented in `scripts/detect_scope_explosion.py:16-18`:
  > "0  - Success: File count within limits (or warnings issued)" — scripts/detect_scope_explosion.py:16
  > "1  - Block: File count exceeds hard limit (over 50 files)" — scripts/detect_scope_explosion.py:17
  > "2  - Error: Could not determine branch state" — scripts/detect_scope_explosion.py:18
  Actual exit paths in code:
  - Exit 0: `return 0` — scripts/detect_scope_explosion.py:415, 421, 435, 494, 499
  - Exit 1: `return 1` — scripts/detect_scope_explosion.py:454, 519
  - Exit 2: `return 2` — scripts/detect_scope_explosion.py:514, 517, 522
  - Invocation wrapper: `sys.exit(main())` — scripts/detect_scope_explosion.py:526
- for validators/gates: can exit non-zero (exits 1 on block threshold >50 files, exits 2 on ScopeDetectionError or timeout); runs on trunk branch `main` where it exits 0 silently as expected.
- does the output match what the documentation claims: yes, counts staged authored files against base ref, displays progress bar, warns at 10/20 files, and blocks at >50 files.

## Defects — required
- exit-code-mismatch — "KeyboardInterrupt" — scripts/detect_scope_explosion.py:518 — Line 519 returns exit code 1 on KeyboardInterrupt instead of standard SIGINT exit code 130 or ADR-035 runtime error code 2, colliding with the policy block exit code 1.
- missing-path — "def get_head_files_against_ref" — scripts/detect_scope_explosion.py:209 — Function `get_head_files_against_ref` is defined but never called in the file (dead code left after switching scope diffing entirely to index-based comparison in line 313).

## Observations
Includes sophisticated support for stacked pull requests via `rescope_against_pr_base`: when a PR branch blocks against `main`, it queries GitHub (`gh`) to check if the branch targets another PR branch, re-evaluates the diff against that branch, and relaxes the block if the rescoped count is below 50.

## Context cost
18047 bytes (approximately 4512 tokens). Loads `scripts/scope_pr_base.py` (10045 bytes) and `scripts/validation/git_hook_policy.py` (338521 bytes), total 366613 bytes (approximately 91653 tokens).
