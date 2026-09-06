---
package: rjm
path: scripts/validation/portability_baseline_write.py
type: script
bytes: 4695
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/portability_baseline_write.py, sha256: 6fdbc46571c4fccf993f37619487303343ea2b16ac3686423e452c90ca29ff12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/portability_baseline_write.py

## Purpose — required, verbatim
> "Serialized, atomic writes for portability baseline artifacts." — scripts/validation/portability_baseline_write.py:1

## Design intent — required
Provides a secure, atomic, serialized file writing mechanism for portability baseline artifacts using cross-platform advisory file locking (`fcntl.flock` on POSIX, `msvcrt.locking` on Windows) and directory file-descriptor-pinned atomic replacements (`os.open` with `O_NOFOLLOW | O_DIRECTORY`, `os.replace` via `dir_fd`). This prevents race conditions during concurrent test or CI baseline generation and guards against symlink swapping or directory traversal attacks targeting baseline files.

## Phase — required
cross-phase

## Inputs — required
- `lock_path`: `Path` for the advisory lock file (scripts/validation/portability_baseline_write.py:36)
- `repo_root`: `Path` of the repository root (scripts/validation/portability_baseline_write.py:81, 142)
- `baseline_path`: `Path` of the target baseline file to replace (scripts/validation/portability_baseline_write.py:82, 143)
- `text`: string payload to write (scripts/validation/portability_baseline_write.py:83, 144)

## Outputs — required
- Atomically written or updated baseline file on disk (scripts/validation/portability_baseline_write.py:119-124)
- Temporary lock file managed at `lock_path` (scripts/validation/portability_baseline_write.py:52-70)
- Raises `TimeoutError` if baseline lock is busy for >10 seconds (scripts/validation/portability_baseline_write.py:61)
- Raises `OSError` if platform lacks secure directory descriptor support or baseline leaves repository root (scripts/validation/portability_baseline_write.py:91, 148)

## Invokes — required
none

## Invoked by — required
- script portability_baseline_write — scripts/validation/portability_baseline.py:29

## Concepts named — required, verbatim
- `baseline_write_lock` — scripts/validation/portability_baseline_write.py:35 — defined here
- `_write_all` — scripts/validation/portability_baseline_write.py:73 — defined here
- `_replace_baseline_relative_to_parent` — scripts/validation/portability_baseline_write.py:80 — defined here
- `replace_baseline_atomically` — scripts/validation/portability_baseline_write.py:141 — defined here

## Structure
- Module docstring (scripts/validation/portability_baseline_write.py:1)
- Platform detection and lock implementation setup (`msvcrt` vs `fcntl`) (scripts/validation/portability_baseline_write.py:13-32)
- `baseline_write_lock`: serialized context manager with retry loop and timeout (scripts/validation/portability_baseline_write.py:34-71)
- `_write_all`: full payload writer loop (scripts/validation/portability_baseline_write.py:73-78)
- `_replace_baseline_relative_to_parent`: secure directory-fd traversal and atomic tempfile swap (scripts/validation/portability_baseline_write.py:80-139)
- `replace_baseline_atomically`: public entrypoint asserting POSIX support (scripts/validation/portability_baseline_write.py:141-152)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/portability_baseline_write.py`
- **language:** Python (python3)
- **lines:** 152
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/portability_baseline_write.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module executes cleanly without stdout)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual code paths: none (no direct `sys.exit` calls in module)
  - Result: module executes and imports cleanly.
- **for validators/gates:**
  - Can exit non-zero: No, functions raise exceptions on timeout or OS security constraints.
  - Verified on repository: tested under `tests/validation/test_portability_baseline_lock.py`.
- **does the output match what the documentation claims:** yes, provides atomic file writing functions.

## Defects — required
none

## Observations
- Enforces `_HAS_SECURE_DIR_FD` (requiring `os.name == "posix"`) to ensure directory-fd pinning (`dir_fd=parent_descriptor`) prevents symlink-swap race conditions during file replacement.
- Creates randomized temporary files using `secrets.token_hex(8)`.

## Context cost
4695 bytes, 152 lines, ~1100 tokens.
