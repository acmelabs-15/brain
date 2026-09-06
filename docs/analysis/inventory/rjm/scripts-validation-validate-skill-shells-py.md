---
package: rjm
path: scripts/validation/validate_skill_shells.py
type: script
bytes: 7879
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_skill_shells.py

## Purpose — required, verbatim
> "Detect skill \"shell\" directories: tracked content but no SKILL.md (issue #2677)." — scripts/validation/validate_skill_shells.py:2

## Design intent — required
Prevents dead or pruned skill directories from lingering as "skill shells" in the catalog. A directory under `.claude/skills/` or `src/copilot-cli/skills/` becomes an invisible shell when `SKILL.md` is removed but subsidiary files remain, misleading routers and skewing skill counts. By filtering out untracked files and local `__pycache__` bytecode via `git ls-files`, the validator distinguishes committed repo debt from ephemeral local test cruft, failing closed if any tracked non-cache file exists without a corresponding tracked `SKILL.md`.

## Phase — required
rjm:test

## Inputs — required
- CLI argument `--repo-root` specifying repository root, defaulting to directory search walking up from the script (scripts/validation/validate_skill_shells.py:161-166).
- Git repository tracked files via subprocess invocation `git ls-files -z -- <rel_dir>` (scripts/validation/validate_skill_shells.py:81-88).
- Directory trees under `.claude/skills` and `src/copilot-cli/skills` (scripts/validation/validate_skill_shells.py:48-51).

## Outputs — required
- Standard output: List of detected shell directories prefixed with `  [SHELL] ` or confirmation `No skill shells found (every skill dir with tracked content has SKILL.md).` (scripts/validation/validate_skill_shells.py:191, 196).
- Standard error: Diagnostic error messages if repository root is not found or git execution fails (scripts/validation/validate_skill_shells.py:175-178, 184, 187).
- Exit codes: 0 on success, 1 on detected shells, 2 on configuration/git failure (scripts/validation/validate_skill_shells.py:33-36).

## Invokes — required
none

## Invoked by — required
- script validate_skill_shells — scripts/validation/checks_spec.py:171
- script validate_skill_shells — scripts/validation/checks_spec.py:183
- script validate_skill_shells — scripts/validation/pre_pr_sequence.py:85
- script validate_skill_shells — scripts/validation/pre_pr_sequence.py:307
- script validate_skill_shells — scripts/validation/pre_pr.py:121

## Concepts named — required, verbatim
- `skill shell` — scripts/validation/validate_skill_shells.py:9 — defined here
- `SKILL.md` — scripts/validation/validate_skill_shells.py:5 — used here
- `ADR-035` — scripts/validation/validate_skill_shells.py:33 — used here
- `SKILLS_ROOTS` — scripts/validation/validate_skill_shells.py:48 — defined here
- `SKILL_MANIFEST` — scripts/validation/validate_skill_shells.py:54 — defined here
- `PYCACHE_SEGMENT` — scripts/validation/validate_skill_shells.py:58 — defined here

## Structure
- `_resolve_repo_root` — scripts/validation/validate_skill_shells.py:61
- `_tracked_files` — scripts/validation/validate_skill_shells.py:74
- `_is_pycache` — scripts/validation/validate_skill_shells.py:93
- `_has_skill_manifest` — scripts/validation/validate_skill_shells.py:98
- `_iter_skill_dirs` — scripts/validation/validate_skill_shells.py:109
- `find_skill_shells` — scripts/validation/validate_skill_shells.py:136
- `build_parser` — scripts/validation/validate_skill_shells.py:157
- `main` — scripts/validation/validate_skill_shells.py:170

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_skill_shells.py`, language: Python 3, lines: 207
- documented invocation:
  - `"scripts/validation/validate_skill_shells.py"` — scripts/validation/checks_spec.py:183
- **executed:** yes
- actual command run: `python3 scripts/validation/validate_skill_shells.py`, abridged stdout: `No skill shells found (every skill dir with tracked content has SKILL.md).`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    `0 - skills root found and no shells found` — scripts/validation/validate_skill_shells.py:34
    `1 - one or more skill shells found` — scripts/validation/validate_skill_shells.py:35
    `2 - configuration error (repo root not found / git unavailable)` — scripts/validation/validate_skill_shells.py:36
  - actual exit paths:
    `return 2` — scripts/validation/validate_skill_shells.py:179
    `return 2` — scripts/validation/validate_skill_shells.py:185
    `return 2` — scripts/validation/validate_skill_shells.py:188
    `return 0` — scripts/validation/validate_skill_shells.py:192
    `return 1` — scripts/validation/validate_skill_shells.py:202
    `sys.exit(main())` — scripts/validation/validate_skill_shells.py:206
- for validators/gates: can exit non-zero (exits 1 on shells detected, 2 on config/git error); exits 0 on current repository default branch.
- does output match documentation: yes

## Defects — required
none

## Observations
Scans both canonical `.claude/skills` and mirrored `src/copilot-cli/skills` trees. By querying git tracking status via `git ls-files -z`, it avoids false positives caused by local developer build artifacts (`__pycache__`) while guaranteeing that clean checkouts will not fail.

## Context cost
7879 bytes (~1970 tokens). Standalone script using standard library modules only.
