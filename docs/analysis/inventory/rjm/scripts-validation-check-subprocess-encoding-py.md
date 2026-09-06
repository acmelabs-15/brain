---
package: rjm
path: scripts/validation/check_subprocess_encoding.py
type: script
bytes: 71105
unit: inv-rjm-288
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_subprocess_encoding.py

## Purpose — required, verbatim
> "Require ``errors=\"replace\"`` for UTF-8 subprocess text capture." — scripts/validation/check_subprocess_encoding.py:4

## Design intent — required
Subprocess execution on Windows and heterogeneous operating environments can emit non-UTF-8 byte sequences during process execution. In Python, calling `subprocess` text-mode capturing functions with `encoding="utf-8"` but omitting `errors="replace"` (or relying on Python's default strict error handling) triggers an immediate `UnicodeDecodeError` that terminates the Python process during stream decoding before the caller can inspect stdout/stderr, report exit codes, or format diagnostic failure messages (issue #4261). `scripts/validation/check_subprocess_encoding.py` solves this by providing a comprehensive, flow-sensitive AST static analysis gate that scans all tracked Python scripts under `scripts/`. It tracks module aliases (`import subprocess as sp`), imported function aliases (`from subprocess import run`), and stream aliases (`PIPE`) across statement sequences, branches, loops, exception handlers, context managers, and nested scopes. It enforces that every text-capturing subprocess invocation that pins UTF-8 explicitly specifies `errors="replace"`, while remaining fail-closed when unknown keyword splats (`**kwargs`) are used. Without this gate, subtle subprocess encoding defects would evade code review, causing shift-left validation and agent workflows to crash abruptly on Windows hosts and non-UTF-8 environments.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `main(argv)`:
  - Optional `repo_root` positional argument (default: `Path(__file__).resolve().parents[2]` — scripts/validation/check_subprocess_encoding.py:1784)
- Git command output:
  - `git -C <repo_root> ls-files -z scripts/*.py scripts/**/*.py` executed in `_collect_sources` to locate tracked Python scripts (scripts/validation/check_subprocess_encoding.py:1680-1689)
- On-disk Python source files:
  - Tracked Python files read via `path.read_text(encoding="utf-8")` during AST scanning in `_scan_all` (scripts/validation/check_subprocess_encoding.py:1726)
- Process environment:
  - Filtered execution environment via `_clean_git_env()` stripping any ambient `GIT_*` environment variables (scripts/validation/check_subprocess_encoding.py:1649-1651, 1695)

## Outputs — required
- Standard output:
  - "Scanned {scanned_files} tracked Python file(s) under scripts/;" — scripts/validation/check_subprocess_encoding.py:1752
  - "0 subprocess encoding violations." — scripts/validation/check_subprocess_encoding.py:1753
- Standard error:
  - "[FAIL] {count} subprocess call(s) in {scanned_files} tracked file(s)" — scripts/validation/check_subprocess_encoding.py:1758
  - "  {rel}:{lineno}" — scripts/validation/check_subprocess_encoding.py:1764
  - "Fix: add errors" — scripts/validation/check_subprocess_encoding.py:1766
  - "Reason: a child process on Windows can emit bytes invalid for UTF-8." — scripts/validation/check_subprocess_encoding.py:1770
  - "the decode raises before the caller can report" — scripts/validation/check_subprocess_encoding.py:1774
  - "the real failure." — scripts/validation/check_subprocess_encoding.py:1775
  - "[FAIL] Invalid repository root: {repo_root}" — scripts/validation/check_subprocess_encoding.py:1786
  - "[FAIL] Subprocess encoding scan did not run: {exc}" — scripts/validation/check_subprocess_encoding.py:1791
- ADR-035 process exit codes:
  - 0: clean scan (no violations detected) — scripts/validation/check_subprocess_encoding.py:13, 1789
  - 1: violations found — scripts/validation/check_subprocess_encoding.py:13, 1789
  - 2: configuration error or scan execution failure — scripts/validation/check_subprocess_encoding.py:13, 1787, 1792

## Invokes — required
none

## Invoked by — required
- script check_subprocess_encoding — scripts/validation/pre_pr.py:79
- script check_subprocess_encoding — scripts/validation/pre_pr_sequence.py:54
- script check_subprocess_encoding — scripts/ci/subprocess_encoding_count_ratchet.py:37
- config check_subprocess_encoding.py — lefthook.yml:257
- script check_subprocess_encoding.py — scripts/validation/check_adr_links.py:205
- script check_subprocess_encoding.py — scripts/validation/check_adr_links.py:764

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_subprocess_encoding.py:2 — used here
- `file-size` — scripts/validation/check_subprocess_encoding.py:2 — used here
- `complexity` — scripts/validation/check_subprocess_encoding.py:3 — used here
- `errors="replace"` — scripts/validation/check_subprocess_encoding.py:4 — used here
- `issue #4261` — scripts/validation/check_subprocess_encoding.py:9 — used here
- `subprocess.run` — scripts/validation/check_subprocess_encoding.py:12 — used here
- `ADR-035` — scripts/validation/check_subprocess_encoding.py:13 — used here
- `_TEXT_CAPTURING_CALLS` — scripts/validation/check_subprocess_encoding.py:27 — defined here
- `_UNCONDITIONAL_DECODE_CALLS` — scripts/validation/check_subprocess_encoding.py:30 — defined here
- `_ALL_SUBPROCESS_CALLS` — scripts/validation/check_subprocess_encoding.py:34 — defined here
- `_Binding` — scripts/validation/check_subprocess_encoding.py:36 — defined here
- `_BindingState` — scripts/validation/check_subprocess_encoding.py:37 — defined here
- `_CONTEXTLIB_MODULE` — scripts/validation/check_subprocess_encoding.py:43 — defined here
- `_CONTEXTLIB_NULLCONTEXT` — scripts/validation/check_subprocess_encoding.py:44 — defined here
- `_keyword_value` — scripts/validation/check_subprocess_encoding.py:47 — defined here
- `_is_true_literal` — scripts/validation/check_subprocess_encoding.py:55 — defined here
- `_is_utf8_literal` — scripts/validation/check_subprocess_encoding.py:61 — defined here
- `_is_subprocess_pipe` — scripts/validation/check_subprocess_encoding.py:70 — defined here
- `_subprocess_call_names` — scripts/validation/check_subprocess_encoding.py:86 — defined here
- `_target_names` — scripts/validation/check_subprocess_encoding.py:107 — defined here
- `_target_value_pairs` — scripts/validation/check_subprocess_encoding.py:118 — defined here
- `_assignment_pairs` — scripts/validation/check_subprocess_encoding.py:176 — defined here
- `_resolve_value_binding` — scripts/validation/check_subprocess_encoding.py:190 — defined here
- `_is_flagged` — scripts/validation/check_subprocess_encoding.py:235 — defined here
- `_SubprocessCallVisitor` — scripts/validation/check_subprocess_encoding.py:286 — defined here
- `_SUPPRESSION_COMMENT` — scripts/validation/check_subprocess_encoding.py:1642 — defined here
- `ScanError` — scripts/validation/check_subprocess_encoding.py:1645 — defined here
- `_clean_git_env` — scripts/validation/check_subprocess_encoding.py:1649 — defined here
- `find_violations` — scripts/validation/check_subprocess_encoding.py:1654 — defined here
- `_collect_sources` — scripts/validation/check_subprocess_encoding.py:1677 — defined here
- `_scan_all` — scripts/validation/check_subprocess_encoding.py:1711 — defined here
- `find_all_violations` — scripts/validation/check_subprocess_encoding.py:1735 — defined here
- `validate_subprocess_encoding` — scripts/validation/check_subprocess_encoding.py:1743 — defined here
- `main` — scripts/validation/check_subprocess_encoding.py:1781 — defined here

## Structure
- "def _keyword_value(call: ast.Call, name: str) -> ast.expr | None:" — scripts/validation/check_subprocess_encoding.py:47
- "def _is_true_literal(node: ast.expr | None) -> bool:" — scripts/validation/check_subprocess_encoding.py:55
- "def _is_utf8_literal(node: ast.expr | None) -> bool:" — scripts/validation/check_subprocess_encoding.py:61
- "def _is_subprocess_pipe(" — scripts/validation/check_subprocess_encoding.py:70
- "def _subprocess_call_names(" — scripts/validation/check_subprocess_encoding.py:86
- "def _target_names(target: ast.expr) -> set[str]:" — scripts/validation/check_subprocess_encoding.py:107
- "def _target_value_pairs(" — scripts/validation/check_subprocess_encoding.py:118
- "def _assignment_pairs(node: ast.AST) -> list[tuple[str, ast.expr | None]]:" — scripts/validation/check_subprocess_encoding.py:176
- "def _resolve_value_binding(" — scripts/validation/check_subprocess_encoding.py:190
- "def _is_flagged(" — scripts/validation/check_subprocess_encoding.py:235
- "class _SubprocessCallVisitor(ast.NodeVisitor):" — scripts/validation/check_subprocess_encoding.py:286
- "class ScanError(RuntimeError):" — scripts/validation/check_subprocess_encoding.py:1645
- "def _clean_git_env() -> dict[str, str]:" — scripts/validation/check_subprocess_encoding.py:1649
- "def find_violations(source: str, filename: str = \"<string>\") -> list[int]:" — scripts/validation/check_subprocess_encoding.py:1654
- "def _collect_sources(repo_root: Path) -> list[Path]:" — scripts/validation/check_subprocess_encoding.py:1677
- "def _scan_all(" — scripts/validation/check_subprocess_encoding.py:1711
- "def find_all_violations(" — scripts/validation/check_subprocess_encoding.py:1735
- "def validate_subprocess_encoding(repo_root: Path) -> bool:" — scripts/validation/check_subprocess_encoding.py:1743
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_subprocess_encoding.py:1781

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `scripts/validation/check_subprocess_encoding.py`, Python (python3), 1797 lines
- documented invocation (verbatim, path:line):
  - "run: uv run --frozen python scripts/validation/check_subprocess_encoding.py" — lefthook.yml:257
  - "Canonical pattern:" — scripts/validation/check_subprocess_encoding.py:11
  - "from check_subprocess_encoding import validate_subprocess_encoding" — scripts/validation/pre_pr.py:79
  - "mandatory convention ``scripts/validation/check_subprocess_encoding.py``" — scripts/validation/check_adr_links.py:205
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - command: `python3 sources/rjm/scripts/validation/check_subprocess_encoding.py`
  - stdout: `[OK] Scanned 469 tracked Python file(s) under scripts/; 0 subprocess encoding violations.`
  - **actual exit code:** `0`
- documented exit codes (verbatim) vs. actual exit paths in code:
  - documented: "Exits follow ADR-035: 0 clean, 1 violations, 2 configuration error." — scripts/validation/check_subprocess_encoding.py:13
  - actual exit paths:
    - line 1787: `return 2` (invalid repository root: `if not repo_root.is_dir():`)
    - line 1789: `return 0 if validate_subprocess_encoding(repo_root) else 1` (0 clean, 1 violations)
    - line 1792: `return 2` (`except ScanError as exc:`)
    - line 1796: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - can it exit non-zero: yes, returns exit code 1 if violations are found (`validate_subprocess_encoding` returns False at line 1789), and returns exit code 2 on configuration or git invocation error (`return 2` at lines 1787 and 1792).
  - does it fail on the source repo's own default branch: no, exits 0 with 0 violations across 469 tracked Python scripts.
- does the output match what the documentation claims?
  - Yes, emits `[OK]` status with scanned file counts and clean violation report matching ADR-035 exit code 0.

## Defects — required
none

## Observations
- Flow-sensitive static AST analysis: implements `_SubprocessCallVisitor(ast.NodeVisitor)` with statement and scope order binding propagation, tracking aliases across branches, loops (handling `break` and `continue` states), exception handlers, context managers (including `contextlib.nullcontext`), pattern matching (`ast.Match`), walrus expressions (`ast.NamedExpr`), and comprehensions.
- Fail-closed keyword argument handling: when a subprocess call uses `**kwargs` splats, the checker flags it conservatively unless explicit replacement error handling or explicit non-UTF-8 encoding can be proven statically (lines 9, 252, 258, 271, 281-283).
- Granular suppression mechanism: supports line-level bypass via `# subprocess-encoding: strict-ok` (lines 1642, 1657, 1672) for cases where strict decoding failure is intentional and must propagate rather than being masked.
- Git environment cleanliness: `_clean_git_env()` explicitly strips all environment variables starting with `GIT_` before running `git ls-files` to prevent parent repository or worktree environment bleed (line 1649-1651).
- Lint pragma governance: annotated with `# taste-lint: ignore file-size` and `# taste-lint: ignore complexity` (lines 2-3) to document that the single unified visitor model and explicit state joins intentionally prioritize analyzer cohesion over line-count fragmentation.

## Context cost
71105 bytes for `scripts/validation/check_subprocess_encoding.py`. Loads Python standard library modules only (`ast`, `codecs`, `os`, `stat`, `subprocess`, `sys`, `pathlib`). Approximate tokens: ~17,700.
