---
package: rjm
path: scripts/validation/check_skill_portability.py
type: script
bytes: 14136
unit: inv-rjm-287
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_portability.py

## Purpose — required, verbatim
> "Vendor-portability ratchet for skill scripts (issue #2050)." — scripts/validation/check_skill_portability.py:3

## Design intent — required
Prevents skill scripts under `.claude/skills/` from hard-coding upstream-only path prefixes (such as `.agents/`, `.claude/lib/`, `.claude/review-axes/`, and sibling `.claude/skills/`) that break or degrade silently in vendored plugin installations. Because dozens of existing skills historically referenced these paths, this gate acts as an incremental ratchet rather than a blocking barrier: existing references are grandfathered in `skill_portability_baseline.json`. The validator fails if a script exceeds its recorded baseline or if an unlisted script introduces references (regressions), and also exits non-zero if references drop (improvements), forcing engineers to update the baseline via `--update-baseline` so migrations are permanently locked in and slack cannot conceal new regressions.

## Phase — required
none

## Inputs — required
- `--repo-root`: Repository root path (default: resolved via `_resolve_root` from script location) — scripts/validation/check_skill_portability.py:263-264
- `--baseline`: Path to baseline JSON file (default: `skill_portability_baseline.json`) — scripts/validation/check_skill_portability.py:106, 260, 277
- `--update-baseline`: Flag to record current reference counts into baseline JSON — scripts/validation/check_skill_portability.py:343-357
- `--allow-baseline-shrink`: Flag permitting baseline count reduction during update — scripts/validation/check_skill_portability.py:356
- `--format` (`output_format`): Output format mode (`console` or `json`) — scripts/validation/check_skill_portability.py:287
- Skill scripts under `.claude/skills/` matching suffixes `.py`, `.sh`, `.ps1` (excluding `__pycache__`) — scripts/validation/check_skill_portability.py:100, 224-228
- Baseline reference counts loaded via `_load_baseline` — scripts/validation/check_skill_portability.py:360

## Outputs — required
- Console or JSON report detailing regressions, improvements, current total references, and baseline total references — scripts/validation/check_skill_portability.py:280-313
- Updated baseline file `scripts/validation/skill_portability_baseline.json` when run with `--update-baseline` — scripts/validation/check_skill_portability.py:344-357
- Exit codes: 0 (no drift against baseline), 1 (regressions or unratcheted improvements detected), 2 (configuration error, skills dir missing, baseline unreadable, or out-of-repo symlink) — scripts/validation/check_skill_portability.py:33-36, 322, 332, 335, 341, 363, 373, 374

## Invokes — required
- script portability_common — scripts/validation/check_skill_portability.py:55
- script shell_text — scripts/validation/check_skill_portability.py:71
- config skill_portability_baseline.json — scripts/validation/check_skill_portability.py:106

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Vendor-portability ratchet` — scripts/validation/check_skill_portability.py:3 — defined here
- `vendored plugin installs` — scripts/validation/check_skill_portability.py:7 — used here
- `/review` — scripts/validation/check_skill_portability.py:8 — used here
- `REQ-008-06` — scripts/validation/check_skill_portability.py:9 — used here
- `skill_portability_baseline.json` — scripts/validation/check_skill_portability.py:14 — used here
- `ADR-035` — scripts/validation/check_skill_portability.py:25 — used here
- `_PROJECT_ROOT` — scripts/validation/check_skill_portability.py:50 — defined here
- `_VALIDATION_PACKAGE_SENTINEL` — scripts/validation/check_skill_portability.py:51 — defined here
- `UPSTREAM_PATTERNS` — scripts/validation/check_skill_portability.py:77 — defined here
- `_SPLIT_CLAUDE_PATTERNS` — scripts/validation/check_skill_portability.py:89 — defined here
- `SCRIPT_SUFFIXES` — scripts/validation/check_skill_portability.py:100 — defined here
- `_FSTRING_TOKEN_TYPES` — scripts/validation/check_skill_portability.py:102 — defined here
- `_DEFAULT_BASELINE_NAME` — scripts/validation/check_skill_portability.py:106 — defined here
- `_PYTHON_DOCSTRING_NODES` — scripts/validation/check_skill_portability.py:109 — defined here
- `_PROSE_KWARGS` — scripts/validation/check_skill_portability.py:115 — defined here
- `_python_docstring_spans` — scripts/validation/check_skill_portability.py:118 — defined here
- `_python_prose_spans` — scripts/validation/check_skill_portability.py:141 — defined here
- `_span_contains` — scripts/validation/check_skill_portability.py:161 — defined here
- `_strip_hash_comments` — scripts/validation/check_skill_portability.py:172 — defined here
- `_is_skippable_string_token` — scripts/validation/check_skill_portability.py:177 — defined here
- `_repo_root` — scripts/validation/check_skill_portability.py:186 — defined here
- `_runtime_text` — scripts/validation/check_skill_portability.py:191 — defined here
- `count_upstream_refs` — scripts/validation/check_skill_portability.py:208 — defined here
- `scan_skill_scripts` — scripts/validation/check_skill_portability.py:216 — defined here
- `_script_regression_message` — scripts/validation/check_skill_portability.py:239 — defined here
- `diff_against_baseline` — scripts/validation/check_skill_portability.py:247 — defined here
- `build_parser` — scripts/validation/check_skill_portability.py:259 — defined here
- `_resolve_root` — scripts/validation/check_skill_portability.py:263 — defined here
- `_resolve_baseline_path` — scripts/validation/check_skill_portability.py:267 — defined here
- `_print_portability_results` — scripts/validation/check_skill_portability.py:280 — defined here
- `main` — scripts/validation/check_skill_portability.py:316 — defined here

## Structure
- Shebang, ruff pragma, and module docstring — scripts/validation/check_skill_portability.py:1-38
- Project root discovery and module imports — scripts/validation/check_skill_portability.py:40-72
- Regex patterns and suffix constants — scripts/validation/check_skill_portability.py:73-107
- Python AST docstring and prose span extractors — scripts/validation/check_skill_portability.py:109-170
- Comment stripping and token runtime text parser — scripts/validation/check_skill_portability.py:172-206
- Upstream reference counter and skill scripts scanner — scripts/validation/check_skill_portability.py:208-237
- Baseline diffing and regression messaging — scripts/validation/check_skill_portability.py:239-257
- Argument parser and path resolution helpers — scripts/validation/check_skill_portability.py:259-278
- Result printer (console and JSON) — scripts/validation/check_skill_portability.py:280-314
- Main CLI execution loop and ratchet evaluation — scripts/validation/check_skill_portability.py:316-379

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_portability.py`, language: Python 3, lines: 379
- documented invocation:
  - `python3 scripts/validation/check_skill_portability.py`
  - "Generated by check_skill_portability.py" — scripts/validation/check_skill_portability.py:350
- executed: yes
- actual command run: `python3 scripts/validation/check_skill_portability.py`
- abridged stdout:
```
No vendor-portability drift. 132 grandfathered refs across 78 scripts (baseline 132).
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - no drift (counts at or below baseline)` — scripts/validation/check_skill_portability.py:34
    - `1 - drift detected (a script exceeds its baseline or a new script offends)` — scripts/validation/check_skill_portability.py:35
    - `2 - configuration error (skills dir missing, baseline unreadable)` — scripts/validation/check_skill_portability.py:36
  - Actual exit paths:
    - Exit 2: `scripts/validation/check_skill_portability.py:322` (skills dir missing), `scripts/validation/check_skill_portability.py:332` (skills dir resolves outside repo), `scripts/validation/check_skill_portability.py:335` (baseline unresolvable), `scripts/validation/check_skill_portability.py:341` (skills dir unreadable), `scripts/validation/check_skill_portability.py:363` (baseline unreadable)
    - Exit 1: `scripts/validation/check_skill_portability.py:373` (regressions or improvements present)
    - Exit 0: `scripts/validation/check_skill_portability.py:374` (no regressions and no improvements; or from `write_baseline` at line 344)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: exits 1 on regressions or unratcheted improvements; exits 2 on configuration/filesystem errors.
  - Passes with exit code 0 on default branch.
- does the output match what the documentation claims?
  - Yes, outputs `No vendor-portability drift` message matching zero-drift state.

## Defects — required
- doc-drift · scripts/validation/check_skill_portability.py:34 documents exit code 0 for "counts at or below baseline", but lines 369-373 exit 1 when `improvements` are detected (counts below baseline) to force tightening the baseline via `--update-baseline` per issue #3730.
- orphan · scripts/validation/check_skill_portability.py:1 is not imported or executed by any in-scope manifest file; it is executed as a standalone CI step in `.github/workflows/validate-vendor-portability.yml:43` and referenced by `scripts/validation/checks_spec.py:120` and `scripts/validation/check_skill_md_portability.py:5`.

## Observations
- Parses Python AST and tokenizes scripts to exclude docstrings and argument parser prose strings (`help`, `description`, `epilog`, `metavar`, `usage`), ensuring user documentation does not trigger false positive portability alerts.
- Validates that `.claude/skills` does not resolve to an out-of-repo symlink (lines 325-332) to prevent scanning untracked files.
- Uses `diff_against_baseline` from `portability_common.py` which treats both regressions and unratcheted improvements as actionable events.

## Context cost
14136 bytes (~3534 tokens) for `scripts/validation/check_skill_portability.py` plus dependencies `scripts/validation/portability_common.py` (10842 bytes), `scripts/validation/shell_text.py` (3862 bytes), and `scripts/validation/skill_portability_baseline.json` (3566 bytes). Total context cost: 32406 bytes (~8101 tokens).
