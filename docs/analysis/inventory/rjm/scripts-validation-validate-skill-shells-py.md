---
package: rjm
path: scripts/validation/validate_skill_shells.py
type: script
bytes: 7879
unit: inv-rjm-310
in_scope_via: scripts/validation/checks_spec.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/validate_skill_shells.py

## Purpose — required, verbatim
> "Detect skill \"shell\" directories: tracked content but no SKILL.md (issue #2677)." — scripts/validation/validate_skill_shells.py:2

## Design intent — required
Detects abandoned or pruned skill directories under `.claude/skills/` and `src/copilot-cli/skills/` that retain git-tracked content but lack a `SKILL.md` manifest. By checking git tracking status via `git ls-files` and filtering out untracked bytecode cache artifacts (`__pycache__`), it prevents phantom skill shells from corrupting catalog counts and portability audits in clean repository checkouts and CI environments without triggering false positives on local development cruft.

## Phase — required
none

## Inputs — required
- Command-line arguments: `--repo-root` (`Path`, optional, repository root directory) — scripts/validation/validate_skill_shells.py:162
- Git index queried via `git ls-files` subprocess — scripts/validation/validate_skill_shells.py:81-88
- Filesystem skill directories under `.claude/skills` and `src/copilot-cli/skills` — scripts/validation/validate_skill_shells.py:48-51

## Outputs — required
- Standard output: report of detected skill shells (`  [SHELL] <dir>`) or confirmation (`No skill shells found (every skill dir with tracked content has SKILL.md).`) — scripts/validation/validate_skill_shells.py:191, 196
- Standard error: error message if repository root or git binary cannot be resolved — scripts/validation/validate_skill_shells.py:176, 184, 187
- Exit codes: 0 (clean), 1 (shells detected), 2 (configuration error) — scripts/validation/validate_skill_shells.py:34-36

## Invokes — required
- command git — scripts/validation/validate_skill_shells.py:82

## Invoked by — required
- script checks_spec.py — scripts/validation/checks_spec.py:183

## Concepts named — required, verbatim
- `skill shell` — scripts/validation/validate_skill_shells.py:9 — defined here
- `SKILL.md` — scripts/validation/validate_skill_shells.py:5 — used here
- `ADR-035` — scripts/validation/validate_skill_shells.py:33 — used here
- `SKILLS_ROOTS` — scripts/validation/validate_skill_shells.py:48 — defined here
- `SKILL_MANIFEST` — scripts/validation/validate_skill_shells.py:54 — defined here
- `PYCACHE_SEGMENT` — scripts/validation/validate_skill_shells.py:58 — defined here
- `_resolve_repo_root` — scripts/validation/validate_skill_shells.py:61 — defined here
- `_tracked_files` — scripts/validation/validate_skill_shells.py:74 — defined here
- `_is_pycache` — scripts/validation/validate_skill_shells.py:93 — defined here
- `_has_skill_manifest` — scripts/validation/validate_skill_shells.py:98 — defined here
- `_iter_skill_dirs` — scripts/validation/validate_skill_shells.py:109 — defined here
- `find_skill_shells` — scripts/validation/validate_skill_shells.py:136 — defined here
- `build_parser` — scripts/validation/validate_skill_shells.py:157 — defined here
- `main` — scripts/validation/validate_skill_shells.py:170 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_skill_shells.py`, language: Python, lines: 207
- documented invocation:
  "scripts/validation/validate_skill_shells.py" — scripts/validation/checks_spec.py:174
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/validation/validate_skill_shells.py --repo-root sources/rjm`
  Abridged stdout: `No skill shells found (every skill dir with tracked content has SKILL.md).`
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - skills root found and no shells found" — scripts/validation/validate_skill_shells.py:34
  > "1 - one or more skill shells found" — scripts/validation/validate_skill_shells.py:35
  > "2 - configuration error (repo root not found / git unavailable)" — scripts/validation/validate_skill_shells.py:36
  Actual exit paths in code:
  `return 0` at line 192 (exits 0 via `sys.exit(main())` at line 206)
  `return 1` at line 202 (exits 1 via `sys.exit(main())` at line 206)
  `return 2` at lines 179, 185, 188 (exits 2 via `sys.exit(main())` at line 206)
- for validators/gates: can it exit non-zero? yes (returns 1 when skill shells are found, 2 on config/git error). does it fail on the source repo's own default branch? no (clean exit 0).
- does the output match what the documentation claims? yes (exits 0 with clean confirmation when no shells exist).

## Defects — required
none

## Observations
Uses `git ls-files -z` to handle whitespace in paths cleanly and separates clean clones from local development artifact cruft (`__pycache__`).

## Context cost
7879 bytes (~1970 tokens). Subprocess invokes `git` CLI.
