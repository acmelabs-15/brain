---
package: rjm
path: scripts/validation/check_test_tree_writes.py
type: script
bytes: 10853
unit: inv-rjm-289
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_test_tree_writes.py

## Purpose — required, verbatim
> "Gate: detect test files that write to the repository working tree." — scripts/validation/check_test_tree_writes.py:2

## Design intent — required
Prevents automated test suites from littering the git working tree by statically scanning Python test files (`test_*.py` and `*_test.py`) for file-write operations rooted at repository-root path variables (`_PROJECT_ROOT`, `REPO_ROOT`, `PROJECT_ROOT`, `ROOT`, `_REPO_ROOT`). Writing directly to the project root creates untracked clutter that pollutes `git status`, distorts static scanner metrics, and risks accidental staging during `git add`. The gate inspects Python AST call nodes (`Path.write_text`, `open`, `shutil.copy`, `mkdir`, etc.) and ensures that any write operation directs its output through a temp directory fixture (`tmp_path`, `tempfile`, `TemporaryDirectory`) or a sanctioned gitignored scratch root (`.pytest_tmp`).

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `argparse`:
  - `--repo-root` (default: current directory `Path(".")` — scripts/validation/check_test_tree_writes.py:274)
- Repository discovery:
  - Subprocess command `git ls-files --cached --others --exclude-standard *.py` under `repo_root` to discover candidate test files (scripts/validation/check_test_tree_writes.py:208)
- Test files:
  - Tracked and untracked files matching `test_*.py` or `*_test.py` (scripts/validation/check_test_tree_writes.py:219)
  - Source text parsed into AST nodes via `ast.parse(source, filename=str(path))` (scripts/validation/check_test_tree_writes.py:196)

## Outputs — required
- Console stdout messages:
  - Pass message: `check_test_tree_writes: OK (no working-tree writes detected)` (scripts/validation/check_test_tree_writes.py:286)
- Console stderr messages:
  - Repository error: `error: {repo_root} does not look like a git repository` (scripts/validation/check_test_tree_writes.py:281)
  - CLI failure notice: `check_test_tree_writes: FAIL ({len(findings)} suspect write(s))` (scripts/validation/check_test_tree_writes.py:290)
  - Diagnostic finding details: `  {rel}:{lineno}: {desc}` (scripts/validation/check_test_tree_writes.py:295)
  - Runner failure notice: `[FAIL] {len(findings)} test file(s) write to the repository working tree instead of tmp_path (issue #3772):` (scripts/validation/check_test_tree_writes.py:250)
- Process exit codes (ADR-035):
  - `0`: Success (no suspect writes found — scripts/validation/check_test_tree_writes.py:30, 287)
  - `1`: Logic error (one or more suspect writes found — scripts/validation/check_test_tree_writes.py:31, 296)
  - `2`: Config error (invalid repository root — scripts/validation/check_test_tree_writes.py:32, 282)

## Invokes — required
none

## Invoked by — required
- script check_test_tree_writes — scripts/validation/pre_pr_sequence.py:55
- script check_test_tree_writes — scripts/validation/pre_pr.py:80

## Concepts named — required, verbatim
- `tmp_path` — scripts/validation/check_test_tree_writes.py:5 — used here
- `.pytest_tmp` — scripts/validation/check_test_tree_writes.py:23 — used here
- `ADR-035` — scripts/validation/check_test_tree_writes.py:29 — used here
- `_SKIP_DIRS` — scripts/validation/check_test_tree_writes.py:42 — defined here
- `_ROOT_BINDINGS` — scripts/validation/check_test_tree_writes.py:47 — defined here
- `_SANCTIONED_SUFFIXES` — scripts/validation/check_test_tree_writes.py:50 — defined here
- `_WRITE_METHODS` — scripts/validation/check_test_tree_writes.py:53 — defined here
- `_SHUTIL_WRITE_FUNCS` — scripts/validation/check_test_tree_writes.py:62 — defined here
- `_TEMP_NAMES` — scripts/validation/check_test_tree_writes.py:73 — defined here
- `_WriteDetector` — scripts/validation/check_test_tree_writes.py:78 — defined here
- `_names_in` — scripts/validation/check_test_tree_writes.py:89 — defined here
- `_is_sanctioned` — scripts/validation/check_test_tree_writes.py:94 — defined here
- `_is_temp_routed` — scripts/validation/check_test_tree_writes.py:100 — defined here
- `_is_root_rooted` — scripts/validation/check_test_tree_writes.py:105 — defined here
- `visit_Call` — scripts/validation/check_test_tree_writes.py:114 — defined here
- `_check_call` — scripts/validation/check_test_tree_writes.py:118 — defined here
- `_check_method_write` — scripts/validation/check_test_tree_writes.py:133 — defined here
- `_check_open_write` — scripts/validation/check_test_tree_writes.py:145 — defined here
- `_extract_open_mode` — scripts/validation/check_test_tree_writes.py:159 — defined here
- `_check_shutil_write` — scripts/validation/check_test_tree_writes.py:168 — defined here
- `_scan_file` — scripts/validation/check_test_tree_writes.py:188 — defined here
- `_tracked_test_files` — scripts/validation/check_test_tree_writes.py:205 — defined here
- `check_test_tree_writes` — scripts/validation/check_test_tree_writes.py:231 — defined here
- `validate_test_tree_writes` — scripts/validation/check_test_tree_writes.py:240 — defined here
- `main` — scripts/validation/check_test_tree_writes.py:265 — defined here

## Structure
- "class _WriteDetector(ast.NodeVisitor):" — scripts/validation/check_test_tree_writes.py:78
- "def _names_in(node: ast.expr) -> set[str]:" — scripts/validation/check_test_tree_writes.py:89
- "def _is_sanctioned(node: ast.expr) -> bool:" — scripts/validation/check_test_tree_writes.py:94
- "def _is_temp_routed(node: ast.expr) -> bool:" — scripts/validation/check_test_tree_writes.py:100
- "def _is_root_rooted(self, node: ast.expr) -> bool:" — scripts/validation/check_test_tree_writes.py:105
- "def visit_Call(self, node: ast.Call) -> None:" — scripts/validation/check_test_tree_writes.py:114
- "def _check_call(self, node: ast.Call) -> None:" — scripts/validation/check_test_tree_writes.py:118
- "def _check_method_write(self, node: ast.Call, callee: ast.Attribute) -> None:" — scripts/validation/check_test_tree_writes.py:133
- "def _check_open_write(self, node: ast.Call) -> None:" — scripts/validation/check_test_tree_writes.py:145
- "def _extract_open_mode(node: ast.Call) -> str:" — scripts/validation/check_test_tree_writes.py:159
- "def _check_shutil_write(self, node: ast.Call, callee: ast.Attribute) -> None:" — scripts/validation/check_test_tree_writes.py:168
- "def _scan_file(path: Path) -> list[tuple[int, str]]:" — scripts/validation/check_test_tree_writes.py:188
- "def _tracked_test_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_test_tree_writes.py:205
- "def check_test_tree_writes(repo_root: Path) -> list[tuple[Path, int, str]]:" — scripts/validation/check_test_tree_writes.py:231
- "def validate_test_tree_writes(repo_root: Path) -> bool:" — scripts/validation/check_test_tree_writes.py:240
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_test_tree_writes.py:265
- "sys.exit(main())" — scripts/validation/check_test_tree_writes.py:300

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_test_tree_writes.py`, language: Python 3, lines: 301
- documented invocation:
  - "python3" — scripts/validation/check_test_tree_writes.py:1
  - "--repo-root" — scripts/validation/check_test_tree_writes.py:272
- **executed:** yes
- actual command run: `python3 scripts/validation/check_test_tree_writes.py --repo-root .` (in `sources/rjm`), abridged stdout: `check_test_tree_writes: OK (no working-tree writes detected)`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success (no suspect writes found)" — scripts/validation/check_test_tree_writes.py:30
    - "1 - Logic error (one or more suspect writes found)" — scripts/validation/check_test_tree_writes.py:31
    - "2 - Config error (invalid repository root)" — scripts/validation/check_test_tree_writes.py:32
  - actual exit paths:
    - exit code 0: `return 0` at line 287 when `findings` is empty
    - exit code 1: `return 1` at line 296 when `findings` is non-empty
    - exit code 2: `return 2` at line 282 when `.git` is absent
    - process exit via `sys.exit(main())` at line 300
- for validators/gates: can it exit non-zero? yes (returns 1 on suspect writes, 2 on invalid repository root). Does it fail on the source repo's own default branch? no (exits 0 with 0 suspect writes detected).
- does the output match what the documentation claims? yes (outputs confirmation message and exits 0).

## Defects — required
- `other` — `scripts/validation/check_test_tree_writes.py:42` — `_SKIP_DIRS` constant is defined at module scope but never referenced or used anywhere in the script because `_tracked_test_files` relies on `git ls-files` flags rather than a manual directory filter.

## Observations
- AST-level heuristic analysis: target checks explicitly look for variable bindings associated with project root references (`_ROOT_BINDINGS`) combined with mutating filesystem operations.
- Whitelist protection: explicitly exempts tests using standard temporary fixture names (`_TEMP_NAMES`) or the sanctioned `.pytest_tmp` directory to prevent false positives.
- Integration interface: exposes both a boolean validator function (`validate_test_tree_writes`) for test runner pipelines (`pre_pr_sequence.py`) and a detailed tuple-based finder API (`check_test_tree_writes`).

## Context cost
10853 bytes, approximately 2713 tokens.
