---
package: rjm
path: scripts/validation/skill_frontmatter.py
type: script
bytes: 21328
unit: inv-rjm-304
in_scope_via: scripts/validation/check_model_pins.py
aliases: []
memo_inputs:
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/skill_frontmatter.py

## Purpose — required, verbatim
> "Validate Claude Code skill YAML frontmatter against schema requirements." — scripts/validation/skill_frontmatter.py:3

## Design intent — required
Validates YAML frontmatter formatting and schema compliance for all `SKILL.md` skill definitions across `.claude/skills` and `src/copilot-cli/skills`. It ensures that every skill provides a valid name matching `^[a-z0-9-]{1,64}$`, a non-empty description under 1024 characters without forbidden XML tags, valid pinned Claude model identifiers (e.g. `claude-opus-4-6`, `claude-sonnet-4-6`, `claude-haiku-4-5`), and permissible tool declarations from both Claude Code (PascalCase) and Copilot CLI (lowercase). It also provides a shared parser (`parse_frontmatter`) used across other validation gates.

## Phase — required
none

## Inputs — required
- CLI options: `--path` (scan path override), `--ci` (fail on violation), `--staged-only` (staged files only), `--changed-files` (explicit file list) — scripts/validation/skill_frontmatter.py:554, 562, 568, 574
- Environment variable `SKILL_PATH` — scripts/validation/skill_frontmatter.py:555
- Environment variable `CI` — scripts/validation/skill_frontmatter.py:564
- Environment variable `STAGED_ONLY` — scripts/validation/skill_frontmatter.py:570
- Skill trees under `.claude/skills` and `src/copilot-cli/skills` — scripts/validation/skill_frontmatter.py:129
- Git cached diff index with `--diff-filter=ACMR` — scripts/validation/skill_frontmatter.py:385

## Outputs — required
- Standard output printing file checking progress and validation summary — scripts/validation/skill_frontmatter.py:504, 533, 536
- Structured `FrontmatterResult` containing flattened string dict and typed YAML mapping — scripts/validation/skill_frontmatter.py:136, 259, 260
- `FileValidationResult` records containing per-file validation verdicts and error lists — scripts/validation/skill_frontmatter.py:160, 534, 540
- Exit code 0 (success or non-CI mode) or exit code 1 (validation errors found with `--ci`) — scripts/validation/skill_frontmatter.py:630, 638

## Invokes — required
- script models — scripts/validation/skill_frontmatter.py:41

## Invoked by — required
- script skill_frontmatter — scripts/validation/check_model_pins.py:51

## Concepts named — required, verbatim
- `VALID_MODEL_ALIASES` — scripts/validation/skill_frontmatter.py:48 — defined here
- `DATED_SNAPSHOT_PATTERN` — scripts/validation/skill_frontmatter.py:66 — defined here
- `VALID_TOOLS` — scripts/validation/skill_frontmatter.py:77 — defined here
- `_XML_TAG_PATTERN` — scripts/validation/skill_frontmatter.py:116 — defined here
- `_SKILL_FILE_PATTERN` — scripts/validation/skill_frontmatter.py:117 — defined here
- `_SKILL_TREE_PREFIXES` — scripts/validation/skill_frontmatter.py:129 — defined here
- `STRING_ONLY_FIELDS` — scripts/validation/skill_frontmatter.py:132 — defined here
- `FrontmatterResult` — scripts/validation/skill_frontmatter.py:136 — defined here
- `FileValidationResult` — scripts/validation/skill_frontmatter.py:160 — defined here
- `parse_frontmatter` — scripts/validation/skill_frontmatter.py:173 — defined here
- `_NAME_PATTERN` — scripts/validation/skill_frontmatter.py:267 — defined here
- `validate_name` — scripts/validation/skill_frontmatter.py:270 — defined here
- `validate_description` — scripts/validation/skill_frontmatter.py:296 — defined here
- `validate_model` — scripts/validation/skill_frontmatter.py:313 — defined here
- `validate_allowed_tools` — scripts/validation/skill_frontmatter.py:334 — defined here
- `_normalize_skill_path` — scripts/validation/skill_frontmatter.py:365 — defined here
- `_is_skill_file_path` — scripts/validation/skill_frontmatter.py:376 — defined here
- `get_staged_skill_files` — scripts/validation/skill_frontmatter.py:381 — defined here
- `default_corpus_files` — scripts/validation/skill_frontmatter.py:407 — defined here
- `default_corpus_summary` — scripts/validation/skill_frontmatter.py:423 — defined here
- `get_skill_files` — scripts/validation/skill_frontmatter.py:438 — defined here
- `_relative_display` — scripts/validation/skill_frontmatter.py:485 — defined here
- `validate_skill_file` — scripts/validation/skill_frontmatter.py:500 — defined here
- `build_parser` — scripts/validation/skill_frontmatter.py:548 — defined here
- `main` — scripts/validation/skill_frontmatter.py:582 — defined here

## Structure
- Shebang, docstrings, and ADR-035 exit code table — scripts/validation/skill_frontmatter.py:1-23
- Imports and sys.path resolution — scripts/validation/skill_frontmatter.py:24-42
- Schema constants for models, tools, patterns, and string-only fields — scripts/validation/skill_frontmatter.py:43-134
- Validation result dataclasses — scripts/validation/skill_frontmatter.py:135-167
- Frontmatter parser and line tokenizer — scripts/validation/skill_frontmatter.py:169-261
- Field validator functions for name, description, model, and allowed-tools — scripts/validation/skill_frontmatter.py:263-359
- Skill file path normalization and discovery routines — scripts/validation/skill_frontmatter.py:361-480
- Single-file validator and display helper — scripts/validation/skill_frontmatter.py:482-543
- Argument parser, validation dispatcher, and CLI main — scripts/validation/skill_frontmatter.py:545-643

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/skill_frontmatter.py`, language: Python 3, lines: 643
- documented invocation:
  - "Runs on staged .claude/skills/*/SKILL.md files during pre-commit." — scripts/validation/skill_frontmatter.py:13
- executed: yes
- actual command run: `.venv/bin/python scripts/validation/skill_frontmatter.py`
- abridged stdout:
```
Validating skill frontmatter...
Scanning skill trees: .claude/skills, src/copilot-cli/skills
Found 203 SKILL.md file(s) to validate.
...
  Checking: src/copilot-cli/skills/push-pr/SKILL.md
    [FAIL] Frontmatter validation failed:
      - Unknown tools in allowed-tools: Bash(mkdir:-p .agents/scratch)
...
========================================
Validation Summary
========================================
  Total:  203
  Passed: 202
  Failed: 1

Fix SKILL.md frontmatter and retry commit.
See: .agents/analysis/claude-code-skill-frontmatter-2026.md

Validation failed, but not running in CI mode. Continuing...
```
- actual exit code: 0 without `--ci`; 1 with `--ci`
- documented exit codes vs. actual exit paths in code:
  - "0 - Success: All skill frontmatter is valid" — scripts/validation/skill_frontmatter.py:16
  - "1 - Error: Frontmatter validation failed (CI mode only)" — scripts/validation/skill_frontmatter.py:17
  - "2 - Config error (path not found)" — scripts/validation/skill_frontmatter.py:18
  - Actual exit paths:
    - line 599: `return 0` when `not files_to_check` (including when `--path` target does not exist)
    - line 630: `return 1` when `fail_count > 0` and `args.ci` is enabled
    - line 638: `return 0` when validation succeeds or failures occur in non-CI mode
    - line 642: `raise SystemExit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exits 1 on validation failure in CI mode)
  - Verified on repository default branch: fails 1 out of 203 skills on repository default branch (`src/copilot-cli/skills/push-pr/SKILL.md` contains unparsed tool argument `Bash(mkdir:-p .agents/scratch)`), exiting 0 in non-CI mode and 1 in CI mode
- does output match what the documentation claims: mostly yes, but exhibits defects in exit code 2 handling and hook caller claims

## Defects — required
- `exit-code-mismatch` · `scripts/validation/skill_frontmatter.py:18` · Docstring claims exit code 2 on "Config error (path not found)", but when `--path` does not exist `get_skill_files` prints a warning and returns an empty list, causing `main()` to return 0 at line 599 instead of 2.
- `doc-drift` · `scripts/validation/skill_frontmatter.py:13` · Docstring claims script "Runs on staged .claude/skills/*/SKILL.md files during pre-commit", but comments at lines 127-128 state "This script has no lefthook or workflow caller", confirmed by its absence from `.lefthook.yml`.
- `cross-file-contradiction` · `src/copilot-cli/skills/push-pr/SKILL.md:4` · In-scope skill `push-pr` declares `allowed-tools: Bash(mkdir:-p .agents/scratch)`, failing `VALID_TOOLS` validation because parameter syntax with spaces is not accepted by the validator.

## Observations
- Dual-tree validation covers both `.claude/skills` and `src/copilot-cli/skills` by default (added in issue #4015 per comments at lines 122-128).
- Validates model pinning for Claude 4.6 family (`claude-opus-4-6`, `claude-sonnet-4-6`) while preserving `claude-haiku-4-5` and backward compatibility for 4.0/3.7 (lines 48-68).
- Frontmatter parser yields both flattened string view (`frontmatter`) and typed mapping (`typed`) to prevent loss of nested YAML structures (lines 142-156, 259-260).

## Context cost
21328 bytes, 643 lines, ~5330 tokens.
