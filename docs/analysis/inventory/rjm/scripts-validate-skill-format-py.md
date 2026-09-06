---
package: rjm
path: scripts/validate_skill_format.py
type: script
bytes: 5925
unit: inv-rjm-270
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/validate_skill_format.py, sha256: 4d8c399c6ce129fb80fef18d4e6a864284b5566ad91c4c6c3c22c8ccb8621508}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_skill_format.py

## Purpose — required, verbatim
> "Validate skill files follow atomic format and naming convention." — scripts/validate_skill_format.py:2

## Design intent — required
Enforces ADR-017 skill format constraints to ensure that every skill is maintained as a single, atomic file rather than bundled into multi-skill files. Detects and flags deprecated `skill-` filename prefixes (enforcing `{domain}-{description}` naming) and identifies bundled files containing multiple `## Skill-` headers. Serves as a pre-commit and CI verification tool, returning a non-zero exit code in strict CI mode to prevent bundled or improperly named skills from entering the repository.

## Phase — required
cross-phase

## Inputs — required
- CLI options parsed by argparse (`--path`, `--ci`, `--staged-only`, `--changed-files`) — scripts/validate_skill_format.py:89-94
- Git index staged files via `git diff --cached --name-only --diff-filter=ACMR` when `--staged-only` is active — scripts/validate_skill_format.py:30
- Target Markdown skill files on disk located in `.serena/memories` or user-specified `--path` directory — scripts/validate_skill_format.py:74-82

## Outputs — required
- Diagnostic progress and failure messages emitted to stdout:
  - `"Validating skill format (ADR-017: one skill per file)..."` — scripts/validate_skill_format.py:102
  - `"Result: PASSED - All skill files follow atomic format and naming convention"` — scripts/validate_skill_format.py:175
  - `"Result: FAILED"` — scripts/validate_skill_format.py:166
  - `"Result: WARNING (non-blocking for local development)"` — scripts/validate_skill_format.py:168
  - `"Result: FAILED (unreadable skill files cannot be validated)"` — scripts/validate_skill_format.py:172
  - Section alerts for bundled files, invalid prefixes, or unreadable files — scripts/validate_skill_format.py:135-162
- Process exit codes: 0 (success or non-CI warning), 1 (CI validation failure or unreadable file in CI mode) — scripts/validate_skill_format.py:10-12, 100, 167, 169, 173, 176

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-017` — scripts/validate_skill_format.py:4 — used here
- `atomic format` — scripts/validate_skill_format.py:2 — used here
- `naming convention` — scripts/validate_skill_format.py:2 — used here
- `bundled format` — scripts/validate_skill_format.py:6 — used here
- `ADR-035` — scripts/validate_skill_format.py:14 — used here
- `SKILL_HEADER_RE` — scripts/validate_skill_format.py:25 — defined here
- `get_staged_memory_files` — scripts/validate_skill_format.py:28 — defined here
- `get_files_to_check` — scripts/validate_skill_format.py:47 — defined here
- `main` — scripts/validate_skill_format.py:85 — defined here

## Structure
- Module docstring detailing ADR-017 rules, ADR-035 exit codes, and purpose — scripts/validate_skill_format.py:1-15
- Module imports and compiled regex `SKILL_HEADER_RE` — scripts/validate_skill_format.py:17-25
- `get_staged_memory_files`: inspects git cached diff for staged memory skill files — scripts/validate_skill_format.py:28-45
- `get_files_to_check`: resolves candidate files from changed list, staged files, or directory glob — scripts/validate_skill_format.py:47-83
- `main`: CLI parser setup, file reading, violation detection, and exit code handling — scripts/validate_skill_format.py:85-177
- Entry point execution guard `sys.exit(main())` — scripts/validate_skill_format.py:179-180

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_skill_format.py`
- **language:** Python (python3)
- **lines:** 181
- **documented invocation:**
  - `"uv run --frozen python scripts/validate_skill_format.py --staged-only --ci" — lefthook.yml:379`
  - `"Validate skill files follow atomic format" — scripts/validate_skill_format.py:87`
- **executed:** yes
- **actual command run:** `python3 scripts/validate_skill_format.py`
- **abridged stdout:**
```
Validating skill format (ADR-017: one skill per file)...

Result: PASSED - All skill files follow atomic format and naming convention
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - `"0  - Success: All skill files follow atomic format and naming convention" — scripts/validate_skill_format.py:10`
    - `"1  - Error: Bundled format or naming violations detected, OR a file existed" — scripts/validate_skill_format.py:11`
  - Actual code paths:
    - `return 0` — scripts/validate_skill_format.py:100 (when no files found to validate)
    - `return 1` — scripts/validate_skill_format.py:167 (when issues found and `--ci` is specified)
    - `return 0` — scripts/validate_skill_format.py:169 (when issues found and `--ci` is not specified)
    - `return 1` — scripts/validate_skill_format.py:173 (when unreadable files present and `--ci` is specified)
    - `return 0` — scripts/validate_skill_format.py:176 (when all files pass validation)
    - `sys.exit(main())` — scripts/validate_skill_format.py:180
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can it exit non-zero: Yes, exits 1 when run with `--ci` if bundled skills, prefix naming violations, or unreadable files are present.
  - Does it fail on the source repo's own default branch: No, passes with exit code 0 when executed against default paths.
- **does the output match what the documentation claims:** Yes, outputs `Result: PASSED - All skill files follow atomic format and naming convention` and exits 0 when no issues are found.

## Defects — required
- `script-bug` · scripts/validate_skill_format.py:41 · `get_staged_memory_files` (line 41) and `get_files_to_check` (line 57) hardcode path filtering against `.serena/memories/`, causing `--staged-only` and `--changed-files` flags to silently ignore skills outside that directory (such as `.claude/skills/`).
- `orphan` · scripts/validate_skill_format.py:1 · No in-scope file invokes or references this script (referenced only by out-of-scope hook configuration `lefthook.yml:379`, `tests/test_validate_skill_format.py`, and historical session logs).

## Observations
- Demonstrates ADR-035 non-blocking behavior for local development: when run without `--ci`, violations print warnings and return exit code 0 (scripts/validate_skill_format.py:168-169), while `--ci` converts warnings into a blocking exit code 1.
- Defensively handles file reading errors (`OSError`, `UnicodeDecodeError`) to prevent unreadable files from silently bypassing format validation in CI mode (scripts/validate_skill_format.py:111-116, 171-173).

## Context cost
5925 bytes, 181 lines, ~1500 tokens. Uses standard library only (`argparse`, `re`, `subprocess`, `sys`, `pathlib`).
