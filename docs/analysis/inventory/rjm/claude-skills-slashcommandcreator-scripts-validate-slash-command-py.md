---
package: rjm
path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py
type: script
bytes: 7549
unit: inv-rjm-167
in_scope_via: .claude/skills/slashcommandcreator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slashcommandcreator/scripts/validate_slash_command.py

## Purpose — required, verbatim
> "Validate slash command file for quality gates." — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:2

The docstring specifies the five validation areas:
"Validates slash command (.md) files for 5 categories:" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:4
"1. Frontmatter - Required YAML frontmatter with description" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:5
"2. Arguments - Consistency between argument-hint and $ARGUMENTS usage" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:6
"3. Security - allowed-tools required when bash execution (!) is used" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:7
"4. Length - Warning if >200 lines (suggest converting to skill)" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:8
"5. Lint - Markdown lint via markdownlint-cli2" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:9

## Design intent — required
Implements automated quality gate validation for slash command markdown definitions (.md) in Claude Code workspaces. Verifies structural integrity across five discrete dimensions: YAML frontmatter existence with trigger-verb description syntax, consistency between frontmatter `argument-hint` and command body `$ARGUMENTS` or positional placeholders (`$1`, `$2`, `$3`), security enforcement requiring `allowed-tools` when bash execution (`!`) is present and prohibiting un-scoped wildcard tool permissions, file length monitoring warning against commands over 200 lines (recommending conversion to full skills), and markdown syntax linting via `markdownlint-cli2`. Without this script, invalid frontmatter, missing argument hints, overly permissive security wildcards, or bloated prompt files could pass undetected into command execution paths.

## Phase — required
none

## Inputs — required
- CLI flag `--path` (required): "Path to slash command .md file" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:31
- CLI flag `--skip-lint` (optional): "Skip markdown lint validation" — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:36
- File system input: Content of target slash command markdown file read via `read_text(encoding="utf-8")` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:177

## Outputs — required
- Standard output: Validation diagnostics, linting messages, violation breakdown, and final verdict (`[PASS] Validation PASSED: {path}`, `[PASS] Validation PASSED with warnings: {path}`, or `[FAIL] Validation FAILED: {path}`) — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:139, 220, 228, 231
- Programmatic output: Return tuple `(violations, blocking_count, warning_count)` from `validate_slash_command` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:158

## Invokes — required
none

## Invoked by — required
- script .claude/skills/slashcommandcreator/scripts/new_slash_command.py — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:132
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:150
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:195
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:203
- doc .claude/skills/slashcommandcreator/SKILL.md — .claude/skills/slashcommandcreator/SKILL.md:265

## Concepts named — required, verbatim
- `slash command` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:2 — defined here | used here
- `quality gates` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:2 — used here
- `frontmatter` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:5 — used here
- `allowed-tools` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:7 — used here
- `markdownlint-cli2` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:9 — used here
- `ADR-035` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:11 — used here
- `BLOCKING` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:13 — defined here | used here
- `WARNING` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:64 — defined here | used here
- `argument-hint` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:67 — used here
- `$ARGUMENTS` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:77 — used here
- `mcp__*` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:122 — used here
- `build_parser` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:26 — defined here
- `_validate_frontmatter` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:41 — defined here
- `_validate_arguments` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:71 — defined here
- `_validate_security` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:90 — defined here
- `_validate_length` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:127 — defined here
- `_validate_lint` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:137 — defined here
- `validate_slash_command` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:158 — defined here
- `main` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:202 — defined here

## Structure
- Module docstring defining five validation categories and ADR-035 exit codes — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:2
- Argument parser configuration `build_parser` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:26
- Frontmatter parser and rule validator `_validate_frontmatter` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:41
- Argument usage and hint consistency validator `_validate_arguments` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:71
- Bash execution security validator `_validate_security` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:90
- File line length boundary checker `_validate_length` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:127
- Subprocess markdownlint invoker `_validate_lint` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:137
- Core orchestrating function `validate_slash_command` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:158
- Command-line entrypoint `main` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:202

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/slashcommandcreator/scripts/validate_slash_command.py`
- language: Python (python3)
- lines: 237
- documented invocation:
  - `python3 "$SCRIPTS_DIR/validate_slash_command.py" <skill-dir>` — .claude/skills/slashcommandcreator/SKILL.md:265
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/slashcommandcreator/scripts/validate_slash_command.py" --path [file]` — .claude/skills/slashcommandcreator/SKILL.md:150
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path sources/rjm/.claude/commands/plan.md --skip-lint`
- abridged stdout:
  ```text
  [FAIL] Validation FAILED: sources/rjm/.claude/commands/plan.md

  Violations (0 blocking, 1 warnings):
    - WARNING: Description should start with action verb or 'Use when...'

  [PASS] Validation PASSED with warnings: sources/rjm/.claude/commands/plan.md
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - Documented in header (.claude/skills/slashcommandcreator/scripts/validate_slash_command.py:11-14):
    - `0 - All validations passed` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:12
    - `1 - One or more BLOCKING violations found` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:13
  - Actual exit paths in code:
    - `return 0` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:229 (validation passed with warnings)
    - `return 0` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:232 (validation passed cleanly)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:218 (file not found)
    - `return 1` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:226 (one or more blocking violations)
    - `return 3` — .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:213 (markdownlint subprocess timeout after 120 seconds; undocumented in header)
    - `SystemExit(2)` via `argparse` when `--path` is missing or unrecognized arguments are provided
- for validators/gates: can exit non-zero (exits 1 on missing file, missing frontmatter, missing description, argument mismatch, missing allowed-tools when bash is used, unsafe wildcard, markdownlint errors; exits 3 on timeout). Tested on source repo's default branch: exits 0 with warnings on `sources/rjm/.claude/commands/plan.md`, `spec.md`, `build.md`, `test.md`, `ship.md`; exits 0 cleanly on `context-hub-setup.md`, `pr-review.md`, `research.md`; exits 1 on `CLAUDE.md` (missing YAML frontmatter block).
- does the output match what the documentation claims: mostly yes, but with a console output bug printing `[FAIL] Validation FAILED:` when only warnings exist, immediately followed by `[PASS] Validation PASSED with warnings:` and exit code 0. Furthermore, documented invocation in `SKILL.md:265` uses positional `<skill-dir>` which fails with exit code 2.

## Defects — required
- `doc-drift`: In .claude/skills/slashcommandcreator/SKILL.md:265, invocation is documented as `python3 "$SCRIPTS_DIR/validate_slash_command.py" <skill-dir>`, but the script requires `--path PATH` (a command `.md` file, not a directory) and exits with code 2 (`error: the following arguments are required: --path`).
- `internal-contradiction`: Invocation documentation in .claude/skills/slashcommandcreator/SKILL.md:150 correctly specifies `--path [file]`, which contradicts line 265 (`<skill-dir>`).
- `script-bug`: In .claude/skills/slashcommandcreator/scripts/validate_slash_command.py:220, the script unconditionally prints `[FAIL] Validation FAILED: {args.path}` whenever `violations` list is non-empty, even when there are zero blocking violations (`blocking_count == 0`), directly before printing `[PASS] Validation PASSED with warnings:` and returning 0 (lines 228-229).
- `exit-code-mismatch`: Line 213 returns code 3 on subprocess timeout (`SUBPROCESS_TIMEOUT_SECONDS = 120`), which is omitted from the docstring ADR-035 exit code table (lines 11-14).
- `doc-drift`: The description verb whitelist regex in line 59 (`r"^(Use when|Generate|Research|Invoke|Create|Analyze|Review|Search)"`) excludes standard operational action verbs such as "Execute", causing all core rjm lifecycle commands (`spec.md`, `build.md`, `test.md`, `ship.md`, `plan.md`) to trigger `WARNING: Description should start with action verb or 'Use when...'`.

## Observations
- Employs regex YAML parsing (`(?s)^---\s*\n(.*?)\n---`) in `_validate_frontmatter` intentionally to avoid a dependency on `PyYAML` (.claude/skills/slashcommandcreator/scripts/validate_slash_command.py:43-46).
- Distinguishes scoped wildcards (`mcp__*` and `Bash(scope:*)`) from unsafe wildcards in `allowed-tools` (.claude/skills/slashcommandcreator/scripts/validate_slash_command.py:117-124).
- External linter execution via `npx markdownlint-cli2` includes a 120-second subprocess timeout guard (.claude/skills/slashcommandcreator/scripts/validate_slash_command.py:23, 145, 209-213).

## Context cost
7549 bytes, 237 lines. Imports standard library modules (`argparse`, `re`, `subprocess`, `pathlib`) and spawns `npx markdownlint-cli2`. Approximately 1880 tokens.
