---
package: rjm
path: scripts/validation/check_python3_entrypoints.py
type: script
bytes: 10038
unit: inv-rjm-282
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_python3_entrypoints.py, sha256: 3c912c65a5f3222d8997fcf46364951669a7be2c7b1b2131e014b30899c34cb6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_python3_entrypoints.py

## Purpose — required, verbatim
> "Detect bare-python3 documentation pointing to scripts that import third-party deps." — scripts/validation/check_python3_entrypoints.py:2

## Design intent — required
Prevents contributor environment failures and documentation drift by detecting documentation that instructs running scripts with bare `python3` when those scripts rely on third-party dependencies. On clean developer systems or CI environments, a bare python3 interpreter only has access to standard library modules; executing scripts that require external libraries (such as `PyYAML`, `anthropic`, or `jsonschema`) without `uv run --frozen python` fails with `ModuleNotFoundError`. By parsing documentation files for `python3 scripts/` invocations and statically inspecting the AST of referenced scripts (recursively resolving local imports to find any direct or transitive third-party dependencies), this validator flags incorrect execution instructions before documentation changes are merged.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--docs [FILE ...]`: Documentation files to scan (default: `CONTRIBUTING.md`, `.github/copilot-instructions.md`, `README.md`, `.agents/prototypes/agents/implementer.compressed.md`, `.claude/agents/retrospective.md`, `.github/agents/retrospective.agent.md`, `src/claude/retrospective.md`, `src/copilot-cli/agents/retrospective.agent.md`, `src/vs-code-agents/retrospective.agent.md`, `templates/agents/retrospective.shared.md`) — scripts/validation/check_python3_entrypoints.py:54-65, 270-276
  - `--repo-root DIR`: Repository root directory path (default: `.`) — scripts/validation/check_python3_entrypoints.py:277-282
- Documentation file contents read via `doc_path.read_text(encoding="utf-8", errors="replace")` — scripts/validation/check_python3_entrypoints.py:252
- Script source files identified via `_BARE_PY3_PATTERN` (`r"(?<!\w)python3\s+(scripts/[^\s`\"']+\.py)"`) — scripts/validation/check_python3_entrypoints.py:29
- Python AST nodes parsed via `ast.parse` to inspect import statements (`ast.Import`, `ast.ImportFrom`) — scripts/validation/check_python3_entrypoints.py:76, 201, 206

## Outputs — required
- Process exit code (0 for no mismatches, 1 for mismatches detected, 2 for configuration or file access error) — scripts/validation/check_python3_entrypoints.py:14-16, 292, 296, 311
- Output list from `check_docs(doc_paths, repo_root)` returning tuples of `(doc_path, lineno, rel, bad)` — scripts/validation/check_python3_entrypoints.py:261
- Console messages printed to `sys.stdout` and `sys.stderr`:
  - "OK: no bare-python3 invocations of dependency-importing scripts found" — scripts/validation/check_python3_entrypoints.py:295
  - "ERROR: cannot read documentation file: {exc}" — scripts/validation/check_python3_entrypoints.py:291
  - "ERROR: {len(violations)} bare-python3 invocation(s) " — scripts/validation/check_python3_entrypoints.py:299

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `bare-python3` — scripts/validation/check_python3_entrypoints.py:2 — defined here
- `third-party deps` — scripts/validation/check_python3_entrypoints.py:2 — used here
- `ADR-035` — scripts/validation/check_python3_entrypoints.py:13 — used here
- `_BARE_PY3_PATTERN` — scripts/validation/check_python3_entrypoints.py:29 — defined here
- `_THIRD_PARTY_IMPORTS` — scripts/validation/check_python3_entrypoints.py:34 — defined here
- `_DEFAULT_DOCS` — scripts/validation/check_python3_entrypoints.py:54 — defined here
- `check_docs` — scripts/validation/check_python3_entrypoints.py:233 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_python3_entrypoints.py`, language: Python, lines: 316
- documented invocation: "Check docs for bare-python3 invocations of dependency-heavy scripts" — scripts/validation/check_python3_entrypoints.py:268
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/validation/check_python3_entrypoints.py --help`
    stdout: `usage: check_python3_entrypoints.py [-h] [--docs [FILE ...]] [--repo-root DIR]`
    actual exit code: 0
  - Command: `python3 scripts/validation/check_python3_entrypoints.py --repo-root .`
    stdout: `OK: no bare-python3 invocations of dependency-importing scripts found`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0: No mismatches found" — scripts/validation/check_python3_entrypoints.py:14
    - "1: One or more mismatches detected" — scripts/validation/check_python3_entrypoints.py:15
    - "2: Configuration or file access error" — scripts/validation/check_python3_entrypoints.py:16
  - Actual exit paths in code:
    - `return 2` — scripts/validation/check_python3_entrypoints.py:292
    - `return 0` — scripts/validation/check_python3_entrypoints.py:296
    - `return 1` — scripts/validation/check_python3_entrypoints.py:311
    - `sys.exit(main())` — scripts/validation/check_python3_entrypoints.py:315
- for validators/gates: can it exit non-zero?
  Yes, exits 1 when bare-python3 invocations of scripts importing third-party modules are found (line 311) and exits 2 on OSError when reading documentation files (line 292).
  Does it fail on the source repo's own default branch?
  No, exits 0 on the default branch (prints "OK: no bare-python3 invocations of dependency-importing scripts found").
- does the output match what the documentation claims?
  Yes, scans docs for bare-python3 patterns and evaluates AST dependencies matching documented exit codes.

## Defects — required
- `orphan` · scripts/validation/check_python3_entrypoints.py:1 · Not invoked by any workflow command, git hook, or CI validation sequence in scope (tested only by `tests/test_check_python3_entrypoints.py` and mutation harness).

## Observations
Implements recursive AST traversal of local modules (both absolute and package-relative imports) to detect transitive third-party dependencies. Pre-defines 14 top-level importable third-party package names derived from `pyproject.toml` dependencies in `_THIRD_PARTY_IMPORTS`. Scans 10 default documentation and agent template files across multiple harness targets.

## Context cost
10038 bytes, 316 lines (~2510 tokens). Pure standard library (`argparse`, `ast`, `re`, `sys`, `pathlib`).
