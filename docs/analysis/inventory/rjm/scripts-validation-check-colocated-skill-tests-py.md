---
package: rjm
path: scripts/validation/check_colocated_skill_tests.py
type: script
bytes: 5762
unit: inv-rjm-277
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_colocated_skill_tests.py, sha256: 49ed724b3e8cedbd9917a596e3dd3fdec039097bbdc3ce64c4c058834b9225f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_colocated_skill_tests.py

## Purpose — required, verbatim
> "Block newly added test files inside customer-shipped skill directories." — scripts/validation/check_colocated_skill_tests.py:2

## Design intent — required
Prevents customer-shipped plugin skill directories (`.claude/skills/`, `src/copilot-cli/skills/`, `src/claude/skills/`) from bundling internal skill tests (issue #4838). When test files (`test_*.py` or `*_test.py`) are placed inside skill directories (such as `<skill>/tests/`), packaging workflows bundle those test files into customer plugin installations, causing them to execute in consumer CI environments where they should never run. By scanning git staged additions or branch diffs relative to a base ref (while maintaining backward compatibility by allowing pre-existing legacy test files on the base ref), this validation gate ensures all new skill tests are placed under the root `tests/skills/<name>/` tree.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `paths` (positional arguments, optional explicit list of paths to check — scripts/validation/check_colocated_skill_tests.py:152)
  - `--staged-only` (flag: check only staged additions — scripts/validation/check_colocated_skill_tests.py:136)
  - `--base` (base ref for branch-diff mode, default: `origin/main` — scripts/validation/check_colocated_skill_tests.py:142)
  - `--repo-root` (repository root directory, default: `Path.cwd()` — scripts/validation/check_colocated_skill_tests.py:148)
- Git repository inspection:
  - Staged file additions via `git diff --cached --name-only --diff-filter=A -z` (scripts/validation/check_colocated_skill_tests.py:104)
  - Branch file additions via `git diff --name-only --diff-filter=A -z {base}...HEAD` (scripts/validation/check_colocated_skill_tests.py:119)
  - Tracked legacy file paths via `git ls-tree -r --name-only {ref}` (scripts/validation/check_colocated_skill_tests.py:65)

## Outputs — required
- Stdout error reporting:
  - Error banner: `ERROR: New test files in customer-shipped skill directories.` (scripts/validation/check_colocated_skill_tests.py:172)
  - Recommendation: `Move them to tests/skills/<skill_name>/ instead.` (scripts/validation/check_colocated_skill_tests.py:173)
  - Offending paths: `  {v}` (scripts/validation/check_colocated_skill_tests.py:176)
  - Legacy guidance: `See issue #4838. Existing legacy tests are tolerated until migrated.` (scripts/validation/check_colocated_skill_tests.py:178)
- Process exit codes:
  - `0`: no violations detected, or all detected test files are pre-existing on the legacy ref (scripts/validation/check_colocated_skill_tests.py:10, 182)
  - `1`: newly added colocated test file detected (scripts/validation/check_colocated_skill_tests.py:11, 180)

## Invokes — required
- doc issue #4838 — scripts/validation/check_colocated_skill_tests.py:13

## Invoked by — required
- script check_colocated_skill_tests — scripts/validation/checks_plugin.py:426
- config check_colocated_skill_tests — lefthook.yml:204
- script check_colocated_skill_tests.py — tests/validation/test_check_colocated_skill_tests.py:1

## Concepts named — required, verbatim
- `issue #4838` — scripts/validation/check_colocated_skill_tests.py:13 — used here
- `SHIPPED_SKILL_ROOTS` — scripts/validation/check_colocated_skill_tests.py:23 — defined here
- `is_colocated_skill_test` — scripts/validation/check_colocated_skill_tests.py:30 — defined here
- `existing_on_ref` — scripts/validation/check_colocated_skill_tests.py:57 — defined here
- `check_paths` — scripts/validation/check_colocated_skill_tests.py:77 — defined here
- `staged_additions` — scripts/validation/check_colocated_skill_tests.py:101 — defined here
- `branch_additions` — scripts/validation/check_colocated_skill_tests.py:116 — defined here
- `main` — scripts/validation/check_colocated_skill_tests.py:131 — defined here

## Structure
- `is_colocated_skill_test` — scripts/validation/check_colocated_skill_tests.py:30
- `existing_on_ref` — scripts/validation/check_colocated_skill_tests.py:57
- `check_paths` — scripts/validation/check_colocated_skill_tests.py:77
- `staged_additions` — scripts/validation/check_colocated_skill_tests.py:101
- `branch_additions` — scripts/validation/check_colocated_skill_tests.py:116
- `main` — scripts/validation/check_colocated_skill_tests.py:131

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_colocated_skill_tests.py`, language: Python, lines: 187
- documented invocation:
  "Exit codes:" — scripts/validation/check_colocated_skill_tests.py:9
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/check_colocated_skill_tests.py --repo-root sources/rjm`
  abridged stdout: (clean exit, no stdout/stderr)
  actual exit code: `0`
  With explicit violating test path: `python3 sources/rjm/scripts/validation/check_colocated_skill_tests.py --repo-root sources/rjm .claude/skills/foo/tests/test_bar.py`
  abridged stdout:
  `ERROR: New test files in customer-shipped skill directories.`
  `Move them to tests/skills/<skill_name>/ instead.`
  `  .claude/skills/foo/tests/test_bar.py`
  `See issue #4838. Existing legacy tests are tolerated until migrated.`
  actual exit code: `1`
- documented exit codes vs actual exit paths:
  - "0 - No violations (or only legacy files)" — scripts/validation/check_colocated_skill_tests.py:10
  - "1 - Newly added colocated test file detected" — scripts/validation/check_colocated_skill_tests.py:11
  Actual exit paths in code:
  - `return 1` — scripts/validation/check_colocated_skill_tests.py:180
  - `return 0` — scripts/validation/check_colocated_skill_tests.py:182
- for validators/gates:
  - Can it exit non-zero: yes (exit 1 when newly added colocated skill test files are detected).
  - Does it fail on source repo's default branch: no, exits 0 cleanly.
- Does output match documentation: yes.

## Defects — required
none

## Observations
- Flexible invocation modes: Supports git pre-commit staged mode (`--staged-only`), branch-diff CI mode (`--base`), and explicit paths argument, enabling execution across git hooks, GitHub Actions, and unit test suites.
- Legacy grandfathering: Avoids blocking development while existing colocated test suites are progressively relocated to `tests/skills/<name>/`.

## Context cost
5762 bytes. Standard library only (`argparse`, `pathlib`, `subprocess`). Approximately 1500 tokens.
