---
package: rjm
path: scripts/validation/validate_python_syntax.py
type: script
bytes: 7984
unit: inv-rjm-309
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_python_syntax.py, sha256: cae50f12ab4aab7b54cb7ec16cb66639fed56024af29643a96fc6a935c749c2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_python_syntax.py

## Purpose — required, verbatim
> "Blocking gate: every tracked Python file must parse at the support floor." — scripts/validation/validate_python_syntax.py:2

## Design intent — required
Ensures portability across diverse Python execution environments for Copilot CLI plugin hooks. While development and continuous integration run on Python 3.14, ambient hosts executing plugin hooks may run older versions (e.g. 3.10–3.13). If 3.14-only syntax (such as PEP 758 unparenthesized except tuples) is committed to main, the PreToolUse dispatcher encounters a SyntaxError upon import and fails closed, denying all tool calls. This script compiles all tracked Python files against the Python 3.10 floor using `ast.parse(source, feature_version=(3, 10))`.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments:
  - `repo_root` optional positional argument for repository root (default: repository root derived from file location) — scripts/validation/validate_python_syntax.py:179
- Files read:
  - Tracked Python files discovered via `git ls-files *.py` or directory walk fallback excluding `_SKIP_DIRS` — scripts/validation/validate_python_syntax.py:61
  - Working tree file contents or git index objects (`git show :<relative>`) for unstaged deleted files — scripts/validation/validate_python_syntax.py:105

## Outputs — required
- Standard error:
  - Failure list of files that failed to parse at the support floor with line numbers
  - Fix guidance explaining Python 3.10 floor compatibility
  - Configuration error message on invalid repository root
- Exit codes:
  - 0: Success (every file parses at the floor) — scripts/validation/validate_python_syntax.py:37, 183
  - 1: Logic error (one or more files failed to parse at the floor) — scripts/validation/validate_python_syntax.py:38, 183
  - 2: Config error (invalid repository root) — scripts/validation/validate_python_syntax.py:39, 182

## Invokes — required
- doc ADR-035 — scripts/validation/validate_python_syntax.py:36

## Invoked by — required
- script validate_python_syntax — scripts/validation/pre_pr.py:157
- script validate_python_syntax — scripts/validation/pre_pr_sequence.py:112
- config validate_python_syntax.py — .github/workflows/pytest.yml:322

## Concepts named — required, verbatim
- `support floor` — scripts/validation/validate_python_syntax.py:2 — defined here | used here
- `PEP 758` — scripts/validation/validate_python_syntax.py:6 — used here
- `SyntaxError` — scripts/validation/validate_python_syntax.py:7 — used here
- `PreToolUse` — scripts/validation/validate_python_syntax.py:9 — used here
- `ADR-035` — scripts/validation/validate_python_syntax.py:36 — used here
- `_SUPPORT_FLOOR` — scripts/validation/validate_python_syntax.py:56 — defined here
- `support_floor` — scripts/validation/validate_python_syntax.py:66 — defined here
- `_tracked_python_files` — scripts/validation/validate_python_syntax.py:78 — defined here
- `find_syntax_errors` — scripts/validation/validate_python_syntax.py:127 — defined here
- `validate_python_syntax` — scripts/validation/validate_python_syntax.py:147 — defined here

## Structure
- Root cause this prevents (issue #2655, regressed by PR #2640): — scripts/validation/validate_python_syntax.py:4
- Why no existing gate caught it: — scripts/validation/validate_python_syntax.py:12
- Exit codes (ADR-035): — scripts/validation/validate_python_syntax.py:36

## Scripts — required if type is script or the skill ships scripts
- path: scripts/validation/validate_python_syntax.py
- language: Python
- lines: 188
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/validation/validate_python_syntax.py`
- abridged stdout: none
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success (every file parses at the floor)" — scripts/validation/validate_python_syntax.py:37
    - "1 - Logic error (one or more files failed to parse at the floor)" — scripts/validation/validate_python_syntax.py:38
    - "2 - Config error (invalid repository root)" — scripts/validation/validate_python_syntax.py:39
  - actual exit paths:
    - scripts/validation/validate_python_syntax.py:182: `return 2` if not repo_root.is_dir()
    - scripts/validation/validate_python_syntax.py:183: `return 0 if validate_python_syntax(repo_root) else 1`
    - scripts/validation/validate_python_syntax.py:187: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on syntax failure at floor; exits 2 on invalid repo root)
  - does it fail on the source repo's own default branch: no (passes cleanly with exit 0)
- does the output match what the documentation claims: yes (silently exits 0 when all tracked files parse at the support floor)

## Defects — required
none

## Observations
- Worktree deletion defense: `_read_python_source` (lines 103-114) retrieves deleted worktree files directly from the git index (`git show :<relative>`), ensuring deletions cannot bypass syntax validation.
- Decoupled from dev environment: Separates hook execution portability floor `(3, 10)` from package `requires-python` (which was raised to 3.14 in issue #3008).

## Context cost
File size: 7,984 bytes (~2,000 tokens). Self-contained script with standard library dependencies only.
