---
package: rjm
path: scripts/github_core/validation.py
type: script
bytes: 9654
unit: inv-rjm-244
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/validation.py

## Purpose — required, verbatim
> "Input validation: GitHub name validation, path traversal prevention." — scripts/github_core/validation.py:1

## Design intent — required
Provides centralized, defensive input validation utilities across GitHub-interacting scripts and workflow automation modules. It prevents command injection (CWE-78) by restricting GitHub owner and repository names to valid alphanumeric and punctuation character sets, preventing directory alias injections like `.` and `..`. It prevents path traversal vulnerabilities (CWE-22) when verifying file paths and `--body-file` arguments across repository roots, transient temp roots, and linked git worktrees. Additionally, it identifies formatting defects such as unescaped literal `\n` in inline Markdown bodies that would collapse multi-line comments into unbroken single paragraphs on GitHub.

## Phase — required
cross-phase

## Inputs — required
- GitHub owner and repository identifier strings (`name: str`, `name_type: str`).
- File paths (`path: str`, `allowed_base: str | None`, `body_file: str`).
- Inline comment/issue Markdown body text (`body: str | None`).
- Filesystem paths resolved via `pathlib.Path.resolve()`, `Path.exists()`, and `Path.is_dir()`.
- System temporary directory environment variables (`TMPDIR`) and candidate directories (`tempfile.gettempdir()`, `/tmp`, `/private/tmp`).
- Git repository state via `git rev-parse --git-dir` and `resolve_repo_root()` from `scripts.github_core.repo`.

## Outputs — required
- Boolean validation flags (`True` or `False`) from `is_github_name_valid` and `is_safe_file_path`.
- Operator-facing error description strings or `None` from `escaped_newline_body_error` and `inline_body_error`.
- Process termination with exit code 2 via `error_and_exit` when `assert_valid_body_file` encounters missing files or path traversal attempts.

## Invokes — required
- script repo — scripts/github_core/validation.py:72
- command git — scripts/github_core/validation.py:140
- script api — scripts/github_core/validation.py:176

## Invoked by — required
- script validation — scripts/github_core/api.py:54
- script validation — scripts/github_core/__init__.py:63
- script validation — scripts/issue_triage.py:54

## Concepts named — required, verbatim
- `_OWNER_PATTERN` — scripts/github_core/validation.py:10 — defined here
- `_REPO_PATTERN` — scripts/github_core/validation.py:13 — defined here
- `_DIRECTORY_ALIASES` — scripts/github_core/validation.py:19 — defined here
- `_TRAVERSAL_PATTERN` — scripts/github_core/validation.py:21 — defined here
- `is_github_name_valid` — scripts/github_core/validation.py:24 — defined here
- `CWE-78` — scripts/github_core/validation.py:27 — used here
- `is_safe_file_path` — scripts/github_core/validation.py:51 — defined here
- `CWE-22` — scripts/github_core/validation.py:54 — used here
- `REPO_ROOT_NOT_A_REPO` — scripts/github_core/validation.py:72 — used here
- `resolve_repo_root` — scripts/github_core/validation.py:72 — used here
- `_candidate_temp_roots` — scripts/github_core/validation.py:95 — defined here
- `_candidate_git_dir_roots` — scripts/github_core/validation.py:125 — defined here
- `assert_valid_body_file` — scripts/github_core/validation.py:161 — defined here
- `error_and_exit` — scripts/github_core/validation.py:176 — used here
- `escaped_newline_body_error` — scripts/github_core/validation.py:200 — defined here
- `inline_body_error` — scripts/github_core/validation.py:245 — defined here

## Structure
none (python module; functions: is_github_name_valid, is_safe_file_path, _candidate_temp_roots, _candidate_git_dir_roots, assert_valid_body_file, escaped_newline_body_error, inline_body_error)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/validation.py`, language: Python 3, lines: 265
- documented invocation: none (library module without CLI entrypoint; imported by dependent automation scripts)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/validation.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.validation import is_github_name_valid, is_safe_file_path; print('valid:', is_github_name_valid('octocat', 'owner'), is_safe_file_path('.'))"`
  abridged stdout: `valid: True True`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI docstring exit codes) vs. actual exit paths in code:
  - exit 2: `error_and_exit(f"Body file not found: {body_file}", 2)` at `scripts/github_core/validation.py:179`
  - exit 2: `error_and_exit(f"Body file path traversal not allowed: {body_file}", 2)` at `scripts/github_core/validation.py:183`
  - exit 2: `error_and_exit(f"Body file path traversal not allowed: {body_file}", 2)` at `scripts/github_core/validation.py:197`
  - standalone execution: returns 0 on clean module import and execution
- for validators/gates:
  - can it exit non-zero? yes, `assert_valid_body_file` invokes `error_and_exit(..., 2)` when a specified body file does not exist or traverses outside permitted root boundaries.
  - does it fail on the source repo's own default branch? no, standalone module execution and path validation against the repository root succeed with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Resilient boundary validation: `assert_valid_body_file` allows safe scratch files across repository roots, user temp directories (`TMPDIR`, `/tmp`, `/private/tmp`), and linked git worktree paths (`.git/worktrees/...`).
- Refuses to guess: `is_safe_file_path` returns `False` when git cannot answer whether a repository exists and no fallback base is supplied, prioritizing explicit denial over false assurance.
- Markdown safety: `escaped_newline_body_error` specifically identifies when a shell script passed literal `\n` without actual newlines, guarding against malformed single-line GitHub PR descriptions or comments.
- Context cost: 9,654 bytes, approximately 2,414 tokens.
