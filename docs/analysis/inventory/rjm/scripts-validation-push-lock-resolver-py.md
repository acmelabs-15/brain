---
package: rjm
path: scripts/validation/push_lock_resolver.py
type: script
bytes: 11495
unit: inv-rjm-301
in_scope_via: scripts/validation/check_push_lock_paths.py
aliases: []
memo_inputs:
  - {path: scripts/validation/push_lock_resolver.py, sha256: cbcf36abd98c9e7c96218617dea00872bc94ce3216d14c802558074a0d514503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/push_lock_resolver.py

## Purpose — required, verbatim
> "Resolve which lock files a block of shell text actually opens." — scripts/validation/push_lock_resolver.py:2

## Design intent — required
Provides AST-like shell statement tokenization and variable binding resolution to determine which filesystem lock paths `flock` operations actually acquire within documentation, recipe blocks, and script instructions. Extracted from `check_push_lock_paths.py` to isolate shell syntax analysis from Markdown corpus walking and CLI orchestration, this module answers precisely which paths are locked without needing knowledge of fences or files. Because shell recipes decouple `flock` calls from targets across statements and variables (e.g. `LOCK=/path ; flock "$LOCK"`, `exec 9>/path ; flock -n 9`, or multiline backslash continuations), raw line-by-line regex scanning resulted in false passes, false positives on commented-out assignments, and missed dynamic bindings. By tokenizing lines into ordered statements via `split_statements`, tracking variable assignments in source order (`_assignments`), resolving in-effect bindings by position (`_value_in_effect`), ignoring non-target assignments, and reporting unresolvable dynamic variables (`_unresolved_flock_variables`), the resolver ensures that push-locking recipes strictly comply with the canonical path pattern (`is_canonical`), preventing race conditions during concurrent git operations without falsely flagging documentation prose.

## Phase — required
rjm:ship

## Inputs — required
- Function parameters:
  - `path: str` (lock file path string validated in `is_canonical` — scripts/validation/push_lock_resolver.py:42)
  - `block: Sequence[str]` (lines of shell code from code fences or markdown blocks — scripts/validation/push_lock_resolver.py:47, 88, 149, 177, 211)
  - `start: int` (0-based starting line offset of the shell block within enclosing file — scripts/validation/push_lock_resolver.py:47, 88, 149, 177, 211)
  - `use: tuple[int, int]` (line and column coordinates of variable use — scripts/validation/push_lock_resolver.py:126)
  - `targets: Sequence[tuple[int, str]]` (resolved lock target pairs passed to `_non_canonical` — scripts/validation/push_lock_resolver.py:206)
- Sibling helpers from `scripts.validation.shell_text`:
  - `split_statements` — scripts/validation/push_lock_resolver.py:24 (breaks shell lines into statement tokens by delimiters)
  - `strip_hash_comments` — scripts/validation/push_lock_resolver.py:24 (removes shell hash comments)

## Outputs — required
- Function return values:
  - `is_canonical(path: str) -> bool`: returns boolean indicating whether path matches canonical lock path regex `^(?:\$HOME|\$\{HOME\})/src/scratch/locks/push-lock-[^/]*\.lock$` (scripts/validation/push_lock_resolver.py:33, 42-44)
  - `_statements(block, start) -> list[tuple[int, int, str]]`: list of `(line, column, text)` for each statement in block (scripts/validation/push_lock_resolver.py:47-62)
  - `_flock_argument(statement: str) -> tuple[int, str] | None`: `(column, token)` passed to `flock`, ignoring options and file descriptors (scripts/validation/push_lock_resolver.py:65-80)
  - `_is_path_like(token: str) -> bool`: boolean indicating whether token contains `/` or ends with `.lock` (scripts/validation/push_lock_resolver.py:83-85)
  - `_assignments(block, start) -> list[tuple[int, int, str, str]]`: list of `(line, column, variable, value)` in source order (scripts/validation/push_lock_resolver.py:88-120)
  - `_value_in_effect(assignments, variable, use) -> tuple[int, str] | None`: `(line, value)` assigned to variable prior to the use position (scripts/validation/push_lock_resolver.py:123-146)
  - `_candidate_tokens(block, start) -> list[tuple[int, int, str]]`: list of `(line, column, token)` that could name a lock file (scripts/validation/push_lock_resolver.py:149-174)
  - `_lock_targets(block, start) -> list[tuple[int, str]]`: list of `(line, lock_path)` for every lock actually opened by the block (scripts/validation/push_lock_resolver.py:177-203)
  - `_non_canonical(targets) -> list[tuple[int, str]]`: filtered list of targets violating canonical naming (scripts/validation/push_lock_resolver.py:206-208)
  - `_unresolved_flock_variables(block, start) -> list[tuple[int, str]]`: list of `(line, "")` for `flock "$VAR"` invocations that fail to resolve to a concrete path (scripts/validation/push_lock_resolver.py:211-251)
- Files written / side effects: none (pure in-memory functional parsing utility).

## Invokes — required
- script shell_text — scripts/validation/push_lock_resolver.py:24

## Invoked by — required
- script push_lock_resolver — scripts/validation/check_push_lock_paths.py:40

## Concepts named — required, verbatim
- `is_canonical` — scripts/validation/push_lock_resolver.py:42 — defined here
- `_statements` — scripts/validation/push_lock_resolver.py:47 — defined here
- `split_statements` — scripts/validation/push_lock_resolver.py:24 — used here
- `strip_hash_comments` — scripts/validation/push_lock_resolver.py:24 — used here
- `_FLOCK` — scripts/validation/push_lock_resolver.py:26 — defined here
- `_LOCK_PATH` — scripts/validation/push_lock_resolver.py:32 — defined here
- `_CANONICAL_PATH` — scripts/validation/push_lock_resolver.py:33 — defined here
- `_EXEC_REDIRECT` — scripts/validation/push_lock_resolver.py:35 — defined here
- `_ASSIGNMENT` — scripts/validation/push_lock_resolver.py:37 — defined here
- `_BARE_VARIABLE` — scripts/validation/push_lock_resolver.py:39 — defined here
- `_flock_argument` — scripts/validation/push_lock_resolver.py:65 — defined here
- `_is_path_like` — scripts/validation/push_lock_resolver.py:83 — defined here
- `_assignments` — scripts/validation/push_lock_resolver.py:88 — defined here
- `_value_in_effect` — scripts/validation/push_lock_resolver.py:123 — defined here
- `_candidate_tokens` — scripts/validation/push_lock_resolver.py:149 — defined here
- `_lock_targets` — scripts/validation/push_lock_resolver.py:177 — defined here
- `_non_canonical` — scripts/validation/push_lock_resolver.py:206 — defined here
- `_unresolved_flock_variables` — scripts/validation/push_lock_resolver.py:211 — defined here

## Structure
- `def is_canonical(path: str) -> bool:` — scripts/validation/push_lock_resolver.py:42
- `def _statements(block: Sequence[str], start: int) -> list[tuple[int, int, str]]:` — scripts/validation/push_lock_resolver.py:47
- `def _flock_argument(statement: str) -> tuple[int, str] | None:` — scripts/validation/push_lock_resolver.py:65
- `def _is_path_like(token: str) -> bool:` — scripts/validation/push_lock_resolver.py:83
- `def _assignments(block: Sequence[str], start: int) -> list[tuple[int, int, str, str]]:` — scripts/validation/push_lock_resolver.py:88
- `def _value_in_effect(` — scripts/validation/push_lock_resolver.py:123
- `def _candidate_tokens(block: Sequence[str], start: int) -> list[tuple[int, int, str]]:` — scripts/validation/push_lock_resolver.py:149
- `def _lock_targets(block: Sequence[str], start: int) -> list[tuple[int, str]]:` — scripts/validation/push_lock_resolver.py:177
- `def _non_canonical(targets: Sequence[tuple[int, str]]) -> list[tuple[int, str]]:` — scripts/validation/push_lock_resolver.py:206
- `def _unresolved_flock_variables(block: Sequence[str], start: int) -> list[tuple[int, str]]:` — scripts/validation/push_lock_resolver.py:211

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/push_lock_resolver.py`
- **language:** Python 3
- **lines:** 252
- **documented invocation:**
  - `#!/usr/bin/env python3` — scripts/validation/push_lock_resolver.py:1
- **executed:** yes
- **actual command run:** `uv run --directory sources/rjm python scripts/validation/push_lock_resolver.py`
- **abridged stdout:** ``
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths:**
  - documented: none (pure helper library module without CLI entrypoint)
  - actual exit paths: defines functions and regular expressions; when executed directly as script, completes top-level module initialization and exits 0
- **for validators/gates:**
  - Can it exit non-zero: no directly (library module); used by `check_push_lock_paths.py` which exits non-zero on non-canonical lock paths or unresolved lock variables
  - Verified on repository default branch: executes cleanly and exits 0
- **does the output match what the documentation claims:** yes (provides functional shell parsing and lock resolution)

## Defects — required
none

## Observations
- Order-sensitive variable resolution: Resolves variable bindings live at the specific `(line, column)` coordinate of use rather than taking the final value of the block, preventing subsequent reassignments from spoofing or masking violations.
- Asymmetric comment handling: Strips hash comments when collecting variable assignments to avoid laundering invalid recipes through commented lines, while retaining comment tokens during candidate token scanning so historical schemes remain visible.
- Unresolved variable reporting: Reports `flock "$VAR"` invocations that cannot be traced to a known path binding as `(line, "")` violations, closing a vulnerability where dynamic variables bypassed static path checks (Issue #4366).

## Context cost
11495 bytes source file, 252 lines, plus 2977 bytes (`scripts/validation/shell_text.py`) = 14472 bytes total, ~3600 tokens.
