---
package: rjm
path: scripts/maintenance/repair_packed_refs.py
type: script
bytes: 7125
unit: inv-rjm-252
in_scope_via: docs/troubleshooting-packed-refs.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/repair_packed_refs.py, sha256: c0e763bf8c2cc05cf4c726dc8efc6fc169cbc3330fbc39cae78bb5aceb3b6e14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/repair_packed_refs.py

## Purpose — required, verbatim
> "Repair blank-line corruption in git packed-refs files." — scripts/maintenance/repair_packed_refs.py:2

## Design intent — required
External language server plugins (specifically OmniSharp / C# LSP session initialization observed in issue #2903) can inject blank lines into `.git/packed-refs`. Because git's internal reference parser rejects any blank line in `packed-refs`, this corruption disables git commands across the entire repository. `repair_packed_refs.py` safely eliminates blank lines while strictly preserving all legitimate packed-ref records, creating a collision-avoiding backup (`packed-refs.before-repair`), performing an atomic fsynced write to a temporary file, and verifying repository ref integrity using `git for-each-ref` before committing the change (reverting from backup on any verification error).

## Phase — required
cross-phase

## Inputs — required
- CLI argument `--path` for target worktree root: `parser.add_argument` — scripts/maintenance/repair_packed_refs.py:138
- Worktree root location via `.git` marker search: `find_worktree_root` — scripts/maintenance/repair_packed_refs.py:35
- Common git directory resolution supporting normal and linked worktrees: `resolve_common_git_dir` — scripts/maintenance/repair_packed_refs.py:47
- Raw byte content of `packed-refs` file: `packed_refs_path.read_bytes()` — scripts/maintenance/repair_packed_refs.py:114
- Ref validation via git subprocess: `["git", "for-each-ref", "--format=%(refname)"]` — scripts/maintenance/repair_packed_refs.py:84

## Outputs — required
- Repaired `packed-refs` file in common git directory via atomic file replacement: `os.replace(temporary_path, packed_refs_path)` — scripts/maintenance/repair_packed_refs.py:216
- Status message on repair completion: "Repaired git packed-refs: " — scripts/maintenance/repair_packed_refs.py:160
- Error message on repair failure: "ERROR: packed-refs repair failed: " — scripts/maintenance/repair_packed_refs.py:155
- Process exit codes: 0 on clean or repaired state, 1 on exception

## Invokes — required
none

## Invoked by — required
- doc docs/troubleshooting-packed-refs.md — docs/troubleshooting-packed-refs.md:16
- file lefthook.yml — lefthook.yml:46

## Concepts named — required, verbatim
- `packed-refs` — scripts/maintenance/repair_packed_refs.py:2 — used here
- `Issue #2903` — scripts/maintenance/repair_packed_refs.py:4 — used here
- `RepairResult` — scripts/maintenance/repair_packed_refs.py:26 — defined here
- `find_worktree_root` — scripts/maintenance/repair_packed_refs.py:35 — defined here
- `resolve_common_git_dir` — scripts/maintenance/repair_packed_refs.py:47 — defined here
- `normalize_packed_refs` — scripts/maintenance/repair_packed_refs.py:62 — defined here
- `verify_git_refs` — scripts/maintenance/repair_packed_refs.py:76 — defined here
- `repair_packed_refs` — scripts/maintenance/repair_packed_refs.py:101 — defined here
- `build_parser` — scripts/maintenance/repair_packed_refs.py:135 — defined here
- `main` — scripts/maintenance/repair_packed_refs.py:147 — defined here
- `_resolve_git_dir` — scripts/maintenance/repair_packed_refs.py:167 — defined here
- `_backup_packed_refs` — scripts/maintenance/repair_packed_refs.py:182 — defined here
- `_write_repaired_packed_refs` — scripts/maintenance/repair_packed_refs.py:199 — defined here

## Structure
- Module docstring citing blank-line corruption problem and safety strategy (scripts/maintenance/repair_packed_refs.py:1-8)
- Imports and timeout configuration (scripts/maintenance/repair_packed_refs.py:10-22)
- `RepairResult` outcome dataclass (scripts/maintenance/repair_packed_refs.py:25-33)
- Worktree and common git directory locators `find_worktree_root` and `resolve_common_git_dir` (scripts/maintenance/repair_packed_refs.py:35-60)
- `normalize_packed_refs` line stripping logic (scripts/maintenance/repair_packed_refs.py:62-73)
- Post-repair validator `verify_git_refs` using isolated git environment (scripts/maintenance/repair_packed_refs.py:76-99)
- Primary repair entry function `repair_packed_refs` with rollback guarantee (scripts/maintenance/repair_packed_refs.py:101-133)
- Argument parsing `build_parser` and command entry point `main` (scripts/maintenance/repair_packed_refs.py:135-165)
- Internal filesystem utilities `_resolve_git_dir`, `_backup_packed_refs`, `_write_repaired_packed_refs` (scripts/maintenance/repair_packed_refs.py:167-220)
- Execution entry block (scripts/maintenance/repair_packed_refs.py:222-224)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/repair_packed_refs.py`, language: Python, lines: 224
- documented invocation:
  `uv run --frozen python scripts/maintenance/repair_packed_refs.py` — docs/troubleshooting-packed-refs.md:33
- executed: yes
- actual command run: `python3 scripts/maintenance/repair_packed_refs.py`
- abridged stdout: (empty)
- actual exit code: 0
- documented exit codes:
  none
- actual exit paths in code:
  - `return 1` — scripts/maintenance/repair_packed_refs.py:156
  - `return 0` — scripts/maintenance/repair_packed_refs.py:164
  - `sys.exit(main())` — scripts/maintenance/repair_packed_refs.py:223
- for validators/gates: can exit 1 if repair or verification raises; exits 0 on a clean repository.
- does output match documentation: yes, exits 0 with no stdout when the packed-refs file is clean.

## Defects — required
none

## Observations
- Environment isolation during verification: `verify_git_refs` explicitly strips `GIT_DIR`, `GIT_WORK_TREE`, `GIT_COMMON_DIR`, and `GIT_INDEX_FILE` from the environment before running `git for-each-ref`, ensuring linked worktrees are verified in isolation without inherited parent shell settings.
- Safe crash-resistant writes: `_write_repaired_packed_refs` uses `tempfile.NamedTemporaryFile` in the same directory, flushes, syncs to physical storage via `os.fsync`, copies original file permissions using `shutil.copymode`, and atomically replaces the destination via `os.replace`.

## Context cost
7125 bytes (~1800 tokens); standalone script with no internal rjm dependencies.
