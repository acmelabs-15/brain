---
package: rjm
path: scripts/validation/portability_git.py
type: script
bytes: 15589
unit: inv-rjm-299
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/portability_git.py, sha256: 514b5c5a3541e4888e0b15440c04ec529e190db1a04714049ece5887b20c92b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/portability_git.py

## Purpose — required, verbatim
> "The committed half of a portability baseline, read straight out of git." — scripts/validation/portability_git.py:1

## Design intent — required
Isolates and inspects committed portability baseline artifacts directly from Git repository history, enforcing a strict discipline that absence is only concluded from a command that answered. Without this module, transient Git errors, case-insensitivity collisions, or deleted branch pointers could be misread by downstream baseline checkers as permission to proceed without an established baseline floor (ratchet bypass), effectively disarming change-control portability gates.

## Phase — required
rjm:test

## Inputs — required
- Subprocess Git plumbing commands executed via `run_git` (scripts/validation/portability_git.py:112, 120, 154, 285, 297, 324, 345):
  - `git log -1 --format=%H HEAD -- <rel>`
  - `git show-ref --head`
  - `git ls-tree -z --full-tree <treeish>`
  - `git for-each-ref --format=%(objectname) --count=1`
  - `git cat-file --batch-check=%(objecttype) --batch-all-objects`
  - `git rev-parse --show-toplevel`
  - `git rev-parse --verify --quiet HEAD`
- Filesystem paths passed as `Path` objects (`repo_root`, `path`, `rel`) at scripts/validation/portability_git.py:88, 131, 203, 238, 313
- Host environment filtered by `isolated_git_env()` to strip all `GIT_*` environment variables at scripts/validation/portability_git.py:48-50, 72

## Outputs — required
- Git object hashes:
  - HEAD blob object ID `(oid, problem)` returned by `tracked_blob` (scripts/validation/portability_git.py:238, 267) and `committed_blob` (scripts/validation/portability_git.py:313, 355)
- Directory tree listings:
  - List of `TreeEntry` records returned by `tree_entries` (scripts/validation/portability_git.py:130, 170)
- Commit history presence verdicts:
  - Boolean presence tuple returned by `was_recorded` (scripts/validation/portability_git.py:87, 118, 126)
- Structured error diagnostic strings describing probe refusal reasons at scripts/validation/portability_git.py:45, 114, 158, 172, 195, 227, 260, 262, 289, 291, 301, 305, 328, 343, 347, 352

## Invokes — required
none

## Invoked by — required
- script portability_git — scripts/validation/portability_floor.py:22
- script portability_git — scripts/validation/portability_common.py:19
- script portability_git — scripts/validation/portability_baseline.py:38
- script portability_git — scripts/validation/agent_skill_discriminator_baseline.py:31

## Concepts named — required, verbatim
- `portability_floor` — scripts/validation/portability_git.py:3 — used here
- `TreeEntry` — scripts/validation/portability_git.py:22 — defined here
- `REGULAR_FILE_MODES` — scripts/validation/portability_git.py:25 — defined here
- `GIT_TIMEOUT_SECONDS` — scripts/validation/portability_git.py:34 — defined here
- `GIT_TIMEOUT_RETURN_CODE` — scripts/validation/portability_git.py:35 — defined here
- `git_timeout_problem` — scripts/validation/portability_git.py:38 — defined here
- `isolated_git_env` — scripts/validation/portability_git.py:48 — defined here
- `isolated_git_command` — scripts/validation/portability_git.py:53 — defined here
- `run_git` — scripts/validation/portability_git.py:58 — defined here
- `was_recorded` — scripts/validation/portability_git.py:87 — defined here
- `tree_entries` — scripts/validation/portability_git.py:130 — defined here
- `tracked_blob` — scripts/validation/portability_git.py:238 — defined here
- `committed_blob` — scripts/validation/portability_git.py:313 — defined here

## Structure
- Module docstring on baseline git plumbing discipline (scripts/validation/portability_git.py:1-14)
- Type definitions and constants (`TreeEntry`, `REGULAR_FILE_MODES`, `GIT_TIMEOUT_SECONDS`, `GIT_TIMEOUT_RETURN_CODE`) (scripts/validation/portability_git.py:22-35)
- git_timeout_problem(proc, action) timeout description (scripts/validation/portability_git.py:38-45)
- isolated_git_env() host environment sanitization (scripts/validation/portability_git.py:48-50)
- isolated_git_command(repo_root, *args) command constructor (scripts/validation/portability_git.py:53-55)
- run_git(repo_root, *args) subprocess runner (scripts/validation/portability_git.py:58-84)
- was_recorded(repo_root, path) commit history checker (scripts/validation/portability_git.py:87-127)
- tree_entries(repo_root, treeish, *, may_be_empty=False) committed directory lister (scripts/validation/portability_git.py:130-176)
- _descend(entries, component) path component resolver (scripts/validation/portability_git.py:179-200)
- _committed_directory(repo_root, parts) directory tree walker (scripts/validation/portability_git.py:202-235)
- tracked_blob(repo_root, rel) HEAD blob resolver (scripts/validation/portability_git.py:238-267)
- _no_commits_or_refuse(repo_root) ref and object database validator (scripts/validation/portability_git.py:270-310)
- committed_blob(repo_root, path) public baseline locator entry point (scripts/validation/portability_git.py:313-355)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/portability_git.py`, Python 3, 356 lines
- **documented invocation:**
  > "The committed half of a portability baseline, read straight out of git." — scripts/validation/portability_git.py:1
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/validation/portability_git.py`
- **actual exit code:** 0
- **abridged stdout:** `(empty)`
- **documented exit codes:** `none` (library module without CLI entry point or `sys.exit` calls) vs. actual exit paths: `none` (defines classes and functions; execution without arguments exits 0 upon clean import)
- **validators/gates:** can it exit non-zero: as an imported module, its functions return tuples of `(result, problem_description)` instead of calling `sys.exit`; direct CLI execution exits 0. Does it fail on source repo's default branch: no (exits 0 with no stdout/stderr).
- **output match:** yes, defines Git plumbing helpers cleanly without runtime errors.

## Defects — required
none

## Observations
- Enforces strict tamper-resistance by running Git with `--no-replace-objects` (scripts/validation/portability_git.py:55, 61), preventing local replacement refs under `.git/refs/replace/` from substituting baselines.
- Cleanses the execution environment of any `GIT_*` environment variables (scripts/validation/portability_git.py:50) to ensure predictable subprocess behavior.
- Mitigates filesystem case-folding vulnerabilities on case-insensitive filesystems (macOS APFS / Windows NTFS) by collecting all case-folded matches and resolving component-by-component (scripts/validation/portability_git.py:187-199).
- Rejects empty subtree listings because Git never stores empty tree objects (scripts/validation/portability_git.py:143, 172-175).
- Strictly rejects symlinks (`REGULAR_FILE_MODES = ("100644", "100755")` at scripts/validation/portability_git.py:25, 261-266) to prevent symlink target paths from being parsed as JSON baselines.

## Context cost
15589 bytes (~3900 tokens). Loads Python stdlib only (`os`, `subprocess`, `pathlib`).
