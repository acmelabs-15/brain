---
package: rjm
path: scripts/validation/portability_common.py
type: script
bytes: 18892
unit: inv-rjm-298
in_scope_via: scripts/validation/check_skill_portability.py
aliases: []
memo_inputs:
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/portability_common.py

## Purpose — required, verbatim
> "Shared baseline helpers for skill portability validators." — scripts/validation/portability_common.py:1

## Design intent — required
Consolidates common CLI option parsing, baseline deserialization, delta calculation, repository path resolution, and worktree coverage verification across the three skill portability ratchets (`check_skill_portability.py`, `check_skill_md_exec_portability.py`, and `check_skill_md_portability.py`). Before this module, baseline parsing and path resolution were copied across individual scripts, causing them to drift into common security vulnerabilities (such as resolving paths before vetting, which erased symlink evidence). `portability_common.py` eliminates this duplication by providing unified, tamper-resistant routines: strict JSON type validation for baselines (rejecting floats, booleans, and nulls), symlink-safe path resolution that avoids premature canonicalization, containment verification within the repository root (mitigating CWE-22 path traversal), and git-indexed coverage checking that detects incomplete checkouts, sparse clones, or untracked directories before allowing any baseline rewrite.

## Phase — required
none

## Inputs — required
- Arguments to module functions:
  - `path: Path` to baseline JSON file (scripts/validation/portability_common.py:24)
  - `current: dict[str, int]` mapping of violation/reference counts (scripts/validation/portability_common.py:46, 246)
  - `baseline: dict[str, int]` baseline mapping (scripts/validation/portability_common.py:47)
  - `regression_message: RegressionMessageFactory` formatting callback (scripts/validation/portability_common.py:48)
  - `description: str | None` and `default_baseline_name: str` CLI parameters (scripts/validation/portability_common.py:66)
  - `repo_root: Path | None` or `root: Path` (scripts/validation/portability_common.py:100, 131, 166, 202, 250, 278, 296, 337, 396, 434)
  - `start: Path` and `require_repo_marker: bool` (scripts/validation/portability_common.py:100)
  - `candidate: Path` (scripts/validation/portability_common.py:116)
  - `scan_dir: Path` (scripts/validation/portability_common.py:131)
  - `scanned_by_root: Mapping[str, int]` (scripts/validation/portability_common.py:337, 396, 435)
  - `comment: str`, `label: str`, and `allow_shrink: bool` (scripts/validation/portability_common.py:247-251)
- Git index and status inspected via `git diff-files`, `git ls-files`, and `git ls-files -u` (scripts/validation/portability_common.py:316, 324, 340)

## Outputs — required
- In-memory `dict[str, int]` baseline mapping from `load_baseline` (scripts/validation/portability_common.py:35, 42)
- Regression and improvement string lists `tuple[list[str], list[str]]` from `diff_against_baseline` (scripts/validation/portability_common.py:49, 62)
- Configured `argparse.ArgumentParser` from `build_portability_parser` (scripts/validation/portability_common.py:67-97)
- Resolved `Path` objects from `resolve_root`, `resolve_path_within_root`, `resolve_baseline_path`, and `resolve_checked_baseline` (scripts/validation/portability_common.py:100, 116, 165, 201)
- Boolean refusal verdicts from `refuse_symlinked_scan_root`, `_refuse_partial_worktree`, `refuse_uncovered_scan`, and `refuse_unsafe_baseline_write` (scripts/validation/portability_common.py:131, 337, 396, 433)
- Return code `int` (0 or 2) from `write_baseline` (scripts/validation/portability_common.py:252, 273, 275)
- Summary message printed to stdout on successful baseline write (scripts/validation/portability_common.py:274)
- Diagnostic error and refusal messages printed to stderr (scripts/validation/portability_common.py:151-161, 229-233, 287, 342-355, 359-392, 422-429)

## Invokes — required
- script portability_baseline — scripts/validation/portability_common.py:11
- script portability_git — scripts/validation/portability_common.py:19

## Invoked by — required
- script portability_common — scripts/validation/check_skill_portability.py:55
- script portability_common — scripts/validation/check_skill_md_portability.py:106
- script portability_common — scripts/validation/check_skill_md_exec_portability.py:32
- script portability_common — scripts/validation/check_agent_skill_discriminator.py:93

## Concepts named — required, verbatim
- `skill portability validators` — scripts/validation/portability_common.py:1 — used here
- `portability ratchet` — scripts/validation/portability_common.py:25 — used here
- `load_baseline` — scripts/validation/portability_common.py:24 — defined here
- `diff_against_baseline` — scripts/validation/portability_common.py:45 — defined here
- `build_portability_parser` — scripts/validation/portability_common.py:65 — defined here
- `--update-baseline` — scripts/validation/portability_common.py:83 — defined here
- `--allow-baseline-shrink` — scripts/validation/portability_common.py:88 — defined here
- `resolve_root` — scripts/validation/portability_common.py:100 — defined here
- `resolve_path_within_root` — scripts/validation/portability_common.py:116 — defined here
- `refuse_symlinked_scan_root` — scripts/validation/portability_common.py:131 — defined here
- `CWE-22` — scripts/validation/portability_common.py:159 — used here
- `resolve_baseline_path` — scripts/validation/portability_common.py:165 — defined here
- `resolve_checked_baseline` — scripts/validation/portability_common.py:201 — defined here
- `write_baseline` — scripts/validation/portability_common.py:244 — defined here
- `_git_lines` — scripts/validation/portability_common.py:278 — defined here
- `tracked_coverage_by_root` — scripts/validation/portability_common.py:295 — defined here
- `_refuse_partial_worktree` — scripts/validation/portability_common.py:337 — defined here
- `refuse_uncovered_scan` — scripts/validation/portability_common.py:396 — defined here
- `refuse_unsafe_baseline_write` — scripts/validation/portability_common.py:433 — defined here

## Structure
- `load_baseline` — scripts/validation/portability_common.py:24
- `diff_against_baseline` — scripts/validation/portability_common.py:45
- `build_portability_parser` — scripts/validation/portability_common.py:65
- `resolve_root` — scripts/validation/portability_common.py:100
- `resolve_path_within_root` — scripts/validation/portability_common.py:116
- `refuse_symlinked_scan_root` — scripts/validation/portability_common.py:131
- `resolve_baseline_path` — scripts/validation/portability_common.py:165
- `resolve_checked_baseline` — scripts/validation/portability_common.py:201
- `write_baseline` — scripts/validation/portability_common.py:244
- `_git_lines` — scripts/validation/portability_common.py:278
- `tracked_coverage_by_root` — scripts/validation/portability_common.py:295
- `_refuse_partial_worktree` — scripts/validation/portability_common.py:337
- `refuse_uncovered_scan` — scripts/validation/portability_common.py:396
- `refuse_unsafe_baseline_write` — scripts/validation/portability_common.py:433

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/portability_common.py`, language: Python, lines: 453
- documented invocation:
  - "The portability ratchets that delegate here" — scripts/validation/portability_common.py:172
- executed: yes
- actual command run:
  `python3 -m scripts.validation.portability_common`
  abridged stdout: `""` (no output; library module)
  actual exit code: 0
- documented exit codes vs actual exit paths:
  Module defines utility functions without a CLI `main()` entrypoint or direct `sys.exit()` calls. `write_baseline` returns exit code `0` on successful write (scripts/validation/portability_common.py:275) or `2` when the underlying write is refused by `write_baseline_json` (scripts/validation/portability_common.py:273).
- for validators/gates: can it exit non-zero? `write_baseline` returns 2 when baseline write is refused. Does it fail on the source repo's own default branch? No; 21 unit tests in `test_portability_common.py` pass cleanly.
- does output match what documentation claims? Yes; exports unified baseline management, parsing, and coverage verification functions.

## Defects — required
none

## Observations
Provides the shared infrastructure for all skill portability ratchets in the repository. It avoids several subtle security pitfalls: `resolve_baseline_path` explicitly avoids normalizing paths with `.resolve()` because doing so would eliminate symlink evidence before downstream refusal checks can evaluate it (lines 190-198); `tracked_coverage_by_root` inspects git index state and explicitly ignores intent-to-add files (`git add -N`, lines 316-320) so empty tracked files cannot fake presence; and `refuse_uncovered_scan` checks scan coverage per individual root rather than summing across roots (lines 405-408), preventing an empty root from being hidden by non-empty sibling roots.

## Context cost
File size: 18892 bytes, 453 lines, ~4200 tokens. When loaded with imported dependencies `scripts/validation/portability_baseline.py` (20208 bytes) and `scripts/validation/portability_git.py` (15589 bytes), total is ~54689 bytes (~12500 tokens).
