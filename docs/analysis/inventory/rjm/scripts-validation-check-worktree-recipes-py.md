---
package: rjm
path: scripts/validation/check_worktree_recipes.py
type: script
bytes: 12103
unit: inv-rjm-290
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_worktree_recipes.py

## Purpose — required, verbatim
> "Fail when a tracked prescription tells a reader to create a worktree in a bad place." — scripts/validation/check_worktree_recipes.py:2

## Design intent — required
Enforces the repository's binding constraint (`.claude/rules/universal.md MUST NOT 6`) that git worktrees must always be created at external destinations (such as siblings of the checkout or `~/worktrees/`), never inside the repository clone and never under temporary directories (`/tmp`, `/var/tmp`, etc.). Creating worktrees in temp directories risks unrecoverable loss of unpushed commits when temp filesystems are reclaimed or run out of disk space (e.g. incident #5111 where six worktrees filled a 16GB tmpfs to 4.0K free, failing agent writes with ENOSPC). Creating worktrees inside the clone triggers severe directory-walking performance degradation across repository tooling (e.g. incident where 59 nested worktrees inflated test duration from 0.49s to 422s). The validator scans tracked text files via `git ls-files -z` across prescriptive roots (`.agents/`, `.claude/`, `.github/`, `docs/`, `scripts/`, `src/`, `templates/`), parsing `git worktree add` commands while skipping historical records, retrospectives, shell expansions, non-path tokens, home paths, and lines carrying `HISTORICAL_MARKER`. Without this gate, instructions and agent templates would continually reintroduce unsafe worktree placement patterns.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--repo-root` (default: repository root two levels above script directory `Path(__file__).resolve().parents[2]` — scripts/validation/check_worktree_recipes.py:310)
- Git repository tracking:
  - Invokes `git ls-files -z` via `tracked_files(repo_root)` (scripts/validation/check_worktree_recipes.py:248)
- File filtering:
  - Scans tracked files with prefixes in `SCANNED_PREFIXES` (scripts/validation/check_worktree_recipes.py:84)
  - Excludes directories in `EXCLUDED_PREFIXES` (scripts/validation/check_worktree_recipes.py:94)
  - Filters for file extensions in `SCANNED_SUFFIXES` (scripts/validation/check_worktree_recipes.py:104)
- Text and command parsing:
  - Scans lines matching `_WORKTREE_ADD` (`r"\bgit\s+worktree\s+add\b(?P<rest>.*)"` — scripts/validation/check_worktree_recipes.py:110)
  - Ignores lines containing `HISTORICAL_MARKER` (`"worktree-recipe-historical"` — scripts/validation/check_worktree_recipes.py:108)

## Outputs — required
- Formatted stdout reports:
  - Clean summary: `worktree-recipes: {len(violations)} violation(s) in {examined} examined files` (scripts/validation/check_worktree_recipes.py:298)
  - Violation line rendering: `  {violation.render()}` format `{path}:{line_number}: worktree destination {destination!r} {reason}` (scripts/validation/check_worktree_recipes.py:141, 294)
  - Rule violation header: `worktree-recipes: {len(violations)} violation(s) against {RULE_CITATION}` (scripts/validation/check_worktree_recipes.py:296)
  - Remediation hint: `  Point the recipe at a sibling of the checkout, for example ../wt-<slug>` (scripts/validation/check_worktree_recipes.py:297)
- Stderr messages:
  - Non-git repository error: `error: not a git repository: {repo_root}` (scripts/validation/check_worktree_recipes.py:317)
  - Gate execution error: `[FAIL] worktree recipes: {exc}` (scripts/validation/check_worktree_recipes.py:290)
- Process exit codes (ADR-035):
  - `0`: Every resolvable recipe names an external destination (scripts/validation/check_worktree_recipes.py:68, 320)
  - `1`: At least one recipe names a temp-root or in-checkout destination (scripts/validation/check_worktree_recipes.py:69, 320)
  - `2`: Configuration or runtime error (scripts/validation/check_worktree_recipes.py:70, 318)
- Function return values:
  - `validate_worktree_recipes(repo_root: Path) -> bool`: returns `True` when 0 violations, `False` on violations or errors (scripts/validation/check_worktree_recipes.py:279, 291, 299)

## Invokes — required
none

## Invoked by — required
- script validate_worktree_recipes — scripts/validation/pre_pr_sequence.py:58

## Concepts named — required, verbatim
- `MUST NOT 6` — scripts/validation/check_worktree_recipes.py:4 — used here
- `check_push_lock_paths.py` — scripts/validation/check_worktree_recipes.py:53 — used here
- `ADR-035` — scripts/validation/check_worktree_recipes.py:67 — used here
- `RULE_CITATION` — scripts/validation/check_worktree_recipes.py:82 — defined here
- `SCANNED_PREFIXES` — scripts/validation/check_worktree_recipes.py:84 — defined here
- `EXCLUDED_PREFIXES` — scripts/validation/check_worktree_recipes.py:94 — defined here
- `SCANNED_SUFFIXES` — scripts/validation/check_worktree_recipes.py:104 — defined here
- `HISTORICAL_MARKER` — scripts/validation/check_worktree_recipes.py:108 — defined here
- `_WORKTREE_ADD` — scripts/validation/check_worktree_recipes.py:110 — defined here
- `_VALUE_FLAGS` — scripts/validation/check_worktree_recipes.py:113 — defined here
- `_EXPANSION` — scripts/validation/check_worktree_recipes.py:116 — defined here
- `_PATH_SHAPED` — scripts/validation/check_worktree_recipes.py:118 — defined here
- `_TEMP_PREFIXES` — scripts/validation/check_worktree_recipes.py:120 — defined here
- `_TEMP_EXACT` — scripts/validation/check_worktree_recipes.py:121 — defined here
- `REASON_TEMP` — scripts/validation/check_worktree_recipes.py:123 — defined here
- `REASON_IN_CHECKOUT` — scripts/validation/check_worktree_recipes.py:124 — defined here
- `Violation` — scripts/validation/check_worktree_recipes.py:130 — defined here
- `extract_destination` — scripts/validation/check_worktree_recipes.py:146 — defined here
- `classify` — scripts/validation/check_worktree_recipes.py:168 — defined here
- `scan_text` — scripts/validation/check_worktree_recipes.py:206 — defined here
- `is_scanned` — scripts/validation/check_worktree_recipes.py:232 — defined here
- `tracked_files` — scripts/validation/check_worktree_recipes.py:241 — defined here
- `check_repository` — scripts/validation/check_worktree_recipes.py:262 — defined here
- `validate_worktree_recipes` — scripts/validation/check_worktree_recipes.py:279 — defined here
- `check_tmp_worktrees.py` — scripts/validation/check_worktree_recipes.py:283 — used here
- `main` — scripts/validation/check_worktree_recipes.py:302 — defined here

## Structure
- "class Violation:" — scripts/validation/check_worktree_recipes.py:130
- "def extract_destination(rest: str) -> str | None:" — scripts/validation/check_worktree_recipes.py:146
- "def classify(destination: str) -> str | None:" — scripts/validation/check_worktree_recipes.py:168
- "def scan_text(path: str, text: str) -> list[Violation]:" — scripts/validation/check_worktree_recipes.py:206
- "def is_scanned(path: str) -> bool:" — scripts/validation/check_worktree_recipes.py:232
- "def tracked_files(repo_root: Path) -> list[str]:" — scripts/validation/check_worktree_recipes.py:241
- "def check_repository(repo_root: Path) -> tuple[list[Violation], int]:" — scripts/validation/check_worktree_recipes.py:262
- "def validate_worktree_recipes(repo_root: Path) -> bool:" — scripts/validation/check_worktree_recipes.py:279
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_worktree_recipes.py:302
- "raise SystemExit(main())" — scripts/validation/check_worktree_recipes.py:324

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_worktree_recipes.py`, language: Python 3, lines: 325
- documented invocation:
  - "python3" — scripts/validation/check_worktree_recipes.py:1
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/check_worktree_recipes.py --repo-root sources/rjm`, abridged stdout: `worktree-recipes: 0 violation(s) in 3161 examined files`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - every resolvable recipe names an external destination (prints the counts)" — scripts/validation/check_worktree_recipes.py:68
    - "1 - at least one recipe names a temp-root or in-checkout destination" — scripts/validation/check_worktree_recipes.py:69
    - "2 - configuration or runtime error" — scripts/validation/check_worktree_recipes.py:70
  - actual exit paths:
    - exit code 0: `return 0 if validate_worktree_recipes(repo_root) else 1` at line 320 when `validate_worktree_recipes` returns `True`
    - exit code 1: `return 0 if validate_worktree_recipes(repo_root) else 1` at line 320 when `validate_worktree_recipes` returns `False` (violations found or handled error)
    - exit code 2: `return 2` at line 318 when `(repo_root / ".git").exists()` is `False`
    - process exit via `raise SystemExit(main())` at line 324
- for validators/gates: can it exit non-zero? yes — returns 1 on bad worktree prescriptions or execution failures, and returns 2 when run outside a git repository. Does it fail on the source repo's own default branch? no — reports 0 violations across 3,161 examined files and exits 0.
- does the output match what the documentation claims? yes — prints count of violations and examined files, exiting 0 on clean scan.

## Defects — required
- `exit-code-mismatch` — `scripts/validation/check_worktree_recipes.py:70` — Module docstring documents exit code 2 as "configuration or runtime error", but runtime exceptions (`OSError`, `RuntimeError`) in `check_repository()` are caught in `validate_worktree_recipes()` (lines 289-291) which returns `False`, causing `main()` to return exit code 1 instead of 2.

## Observations
- Null-delimited index scanning: executes `git ls-files -z` to safely handle special characters and newlines in filenames while limiting the audit strictly to git-tracked files.
- Path resolution and false-positive suppression: skips dynamic shell expansions (`$`, `` ` ``), skips home directories (`~`), and skips non-path tokens without `/` or leading `.`, but performs segment traversal depth counting (`.` and `..`) to accurately verify whether relative destinations climb out of the checkout.
- Historical documentation carve-out: explicitly excludes retrospective directories (`EXCLUDED_PREFIXES`) and supports an inline opt-out marker (`HISTORICAL_MARKER`) to allow documentation of prohibited recipes when discussing past incidents.

## Context cost
12103 bytes in source file, with no external library dependencies. Approximately 3025 tokens.
