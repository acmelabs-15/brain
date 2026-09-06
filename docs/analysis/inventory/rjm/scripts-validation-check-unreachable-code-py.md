---
package: rjm
path: scripts/validation/check_unreachable_code.py
type: script
bytes: 6484
unit: inv-rjm-289
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_unreachable_code.py

## Purpose — required, verbatim
> "Blocking gate: no statement may follow a terminator in the same block." — scripts/validation/check_unreachable_code.py:2

## Design intent — required
Eliminates dead code and hidden logic defects by statically verifying that no executable statement appears after a control-flow terminator (`return`, `raise`, `continue`, `break`) within the same lexical statement block across all tracked Python files. Standard linters and unit test suites can allow dead statements after early returns or exceptions in conditionals or exception handlers to pass unnoticed (as occurred in issue #3874). This script inspects the AST of every tracked Python file, recursively checking statement blocks while isolating nested functions and classes, ensuring unreachable statements are detected at the pre-commit and pre-PR stages.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments:
  - Repository root directory argument `args[0]` (optional, default: `Path.cwd()` — scripts/validation/check_unreachable_code.py:173)
- Subprocess command:
  - Runs `git ls-files -z --cached *.py` in `repo_root` with sanitized environment to collect tracked Python files (scripts/validation/check_unreachable_code.py:49-64)
- Python source files:
  - Regular tracked `.py` files checked via `stat.S_ISREG` (scripts/validation/check_unreachable_code.py:123)
  - Parsed AST trees via `ast.parse` (scripts/validation/check_unreachable_code.py:126)

## Outputs — required
- Console stdout messages:
  - Pass confirmation: `check_unreachable_code: OK. Scanned {scanned_files} Python file(s); 0 unreachable statements.` (scripts/validation/check_unreachable_code.py:148)
- Console stderr messages:
  - Diagnostic failure line: `  unreachable: {path}:{lineno} in {func_name}()` (scripts/validation/check_unreachable_code.py:154)
  - Gate failure summary: `{len(findings)} unreachable statement(s) found in {scanned_files} Python file(s). Remove code after return/raise/continue/break.` (scripts/validation/check_unreachable_code.py:159)
  - Argument error: `error: expected at most one repository root` (scripts/validation/check_unreachable_code.py:171)
  - Scan failure: `error: unreachable-code scan did not run: {exc}` (scripts/validation/check_unreachable_code.py:177)
- Process exit codes (ADR-035):
  - `0`: Success (no unreachable statements found — scripts/validation/check_unreachable_code.py:15, 175)
  - `1`: Logic error (one or more unreachable statements found — scripts/validation/check_unreachable_code.py:16, 175)
  - `2`: Config error (invalid repository root or ScanError raised — scripts/validation/check_unreachable_code.py:17, 172, 178)

## Invokes — required
none

## Invoked by — required
- script check_unreachable_code — scripts/validation/pre_pr_sequence.py:57
- script check_unreachable_code — scripts/validation/pre_pr.py:81
- config lefthook.yml — lefthook.yml:524

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/check_unreachable_code.py:14 — used here
- `_TERMINATORS` — scripts/validation/check_unreachable_code.py:30 — defined here
- `ScanError` — scripts/validation/check_unreachable_code.py:33 — defined here
- `_clean_git_env` — scripts/validation/check_unreachable_code.py:37 — defined here
- `_tracked_python_files` — scripts/validation/check_unreachable_code.py:46 — defined here
- `_nested_statement_blocks` — scripts/validation/check_unreachable_code.py:77 — defined here
- `_find_in_block` — scripts/validation/check_unreachable_code.py:91 — defined here
- `_scan` — scripts/validation/check_unreachable_code.py:108 — defined here
- `find_unreachable_statements` — scripts/validation/check_unreachable_code.py:135 — defined here
- `validate_unreachable_code` — scripts/validation/check_unreachable_code.py:140 — defined here
- `main` — scripts/validation/check_unreachable_code.py:167 — defined here

## Structure
- "class ScanError(RuntimeError):" — scripts/validation/check_unreachable_code.py:33
- "def _clean_git_env() -> dict[str, str]:" — scripts/validation/check_unreachable_code.py:37
- "def _tracked_python_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_unreachable_code.py:46
- "def _nested_statement_blocks(statement: ast.stmt) -> Iterator[list[ast.stmt]]:" — scripts/validation/check_unreachable_code.py:77
- "def _find_in_block(" — scripts/validation/check_unreachable_code.py:91
- "def _scan(repo_root: Path) -> tuple[list[tuple[Path, str, int]], int]:" — scripts/validation/check_unreachable_code.py:108
- "def find_unreachable_statements(repo_root: Path) -> list[tuple[Path, str, int]]:" — scripts/validation/check_unreachable_code.py:135
- "def validate_unreachable_code(repo_root: Path) -> bool:" — scripts/validation/check_unreachable_code.py:140
- "def main(argv: Sequence[str] | None = None) -> int:" — scripts/validation/check_unreachable_code.py:167
- "raise SystemExit(main())" — scripts/validation/check_unreachable_code.py:182

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_unreachable_code.py`, language: Python 3, lines: 183
- documented invocation:
  - "python3" — scripts/validation/check_unreachable_code.py:1
  - "run: uv run --frozen python scripts/validation/check_unreachable_code.py ." — lefthook.yml:524
- **executed:** yes
- actual command run: `python3 scripts/validation/check_unreachable_code.py .` (in `sources/rjm`), abridged stdout: `check_unreachable_code: OK. Scanned 2198 Python file(s); 0 unreachable statements.`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success (no unreachable statements found)" — scripts/validation/check_unreachable_code.py:15
    - "1 - Logic error (one or more unreachable statements found)" — scripts/validation/check_unreachable_code.py:16
    - "2 - Config error (invalid repository root)" — scripts/validation/check_unreachable_code.py:17
  - actual exit paths:
    - exit code 0: `return 0 if validate_unreachable_code(repo_root) else 1` at line 175 when `validate_unreachable_code` returns True
    - exit code 1: `return 0 if validate_unreachable_code(repo_root) else 1` at line 175 when `validate_unreachable_code` returns False
    - exit code 2: `return 2` at line 172 when more than one repo root is supplied; `return 2` at line 178 when `ScanError` is caught
    - process exit via `raise SystemExit(main())` at line 182
- for validators/gates: can it exit non-zero? yes (returns 1 on unreachable statements, 2 on ScanError or invalid CLI arguments). Does it fail on the source repo's own default branch? no (exits 0 with 0 unreachable statements across 2198 files).
- does the output match what the documentation claims? yes (reports 0 unreachable statements across scanned files and exits 0).

## Defects — required
none

## Observations
- Cascade prevention: reports only the first unreachable statement in a sequence (`statements[index + 1]`), avoiding verbose cascading warnings for large multi-line dead blocks.
- Lexical boundary isolation: `_nested_statement_blocks` explicitly stops at `FunctionDef`, `AsyncFunctionDef`, and `ClassDef` boundaries so that statements within nested definitions are checked within their own local scopes rather than falsely treated as dead statements in parent functions.
- Clean git environment: `_clean_git_env` strips all `GIT_*` environment variables prior to running `git ls-files`, isolating discovery from parent worktree context.

## Context cost
6484 bytes, approximately 1621 tokens.
