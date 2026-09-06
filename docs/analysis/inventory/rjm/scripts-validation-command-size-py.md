---
package: rjm
path: scripts/validation/command_size.py
type: script
bytes: 5979
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/command_size.py

## Purpose — required, verbatim
> "Validate .claude/commands/*.md files do not exceed the 200-line ceiling." — scripts/validation/command_size.py:2

## Design intent — required
Enforces a 200-line size ceiling on Claude slash commands (`.claude/commands/*.md`), preventing commands from becoming unwieldy monolithic prompt scripts and encouraging decomposition into reusable skills. As prescribed by the `slashcommandcreator` skill and issue #4016, commands exceeding 200 lines must be refactored into skills or explicitly declare `size-exception: true` in YAML frontmatter accompanied by a substantive rationale HTML comment in the first 30 lines. It implements early warnings for commands exceeding 150 lines, integrates with Lefthook for pre-commit git hook validation (`--changed-files`), and supports CI mode (`--ci`) following ADR-035 exit code conventions. Without it, slash command files would grow without bound, polluting context windows and degrading agent instruction following.

## Phase — required
rjm:test

## Inputs — required
- CLI options: `--path` (path to a command file or directory, default `.claude/commands`, line 146), `--ci` (CI mode flag or `$CI` env var, line 151), `--changed-files` (list of files to validate, line 157).
- Command files on disk: `.claude/commands/*.md` read via `Path.read_text(encoding="utf-8")` (lines 82, 137).

## Outputs — required
- Console status messages: `[ OK ]`, `[WARN]`, `[FAIL]` per command file, and summary statistics (`Summary: N files, N failures, N warnings`) on `stdout` (lines 173-186).
- Exit code: 0 on success/warning or non-CI failure; 1 on failure when in CI mode (`--ci` or `$CI=true/1`, lines 188-190, 194).
- Dataclass result objects: `CommandSizeResult` (lines 71-76, 79).

## Invokes — required
none

## Invoked by — required
- config command_size.py — lefthook.yml:209

## Concepts named — required, verbatim
- `COMMAND_SIZE_LIMIT` — scripts/validation/command_size.py:29 — defined here
- `COMMAND_SIZE_WARNING` — scripts/validation/command_size.py:30 — defined here
- `RATIONALE_SEARCH_LINES` — scripts/validation/command_size.py:35 — defined here
- `RATIONALE_MIN_CHARS` — scripts/validation/command_size.py:36 — defined here
- `_parse_frontmatter` — scripts/validation/command_size.py:40 — defined here
- `has_size_exception` — scripts/validation/command_size.py:53 — defined here
- `has_exception_rationale` — scripts/validation/command_size.py:59 — defined here
- `CommandSizeResult` — scripts/validation/command_size.py:71 — defined here
- `check_command_size` — scripts/validation/command_size.py:79 — defined here
- `get_command_files` — scripts/validation/command_size.py:116 — defined here
- `main` — scripts/validation/command_size.py:140 — defined here
- `slashcommandcreator` — scripts/validation/command_size.py:4 — used here
- `size-exception` — scripts/validation/command_size.py:7 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/command_size.py`, language: Python, lines: 195
- documented invocation: "> \"Validate .claude/commands/*.md files do not exceed the 200-line ceiling.\" — scripts/validation/command_size.py:2"
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/command_size.py --ci`, abridged stdout: `Checking 15 command file(s)...\n  [ OK ] .../CLAUDE.md (7 lines)\n  ...  [WARN] .../pr-autofix.md (1178 lines)\nSummary: 15 files, 0 failures, 7 warnings`, **actual exit code**: 0
- documented exit codes: "0 - Success: All command files within size limits" — scripts/validation/command_size.py:11 and "1 - Error: One or more files exceed limit (CI mode only)" — scripts/validation/command_size.py:12 vs. actual exit paths in code: `scripts/validation/command_size.py:189` (`return 1`), `scripts/validation/command_size.py:190` (`return 0`), `scripts/validation/command_size.py:194` (`sys.exit(main())`).
- for validators/gates: can it exit non-zero? yes (returns 1 when failures > 0 and args.ci is true at line 189). does it fail on the source repo's own default branch? no (exits 0 with 7 warnings and 0 failures on default branch; oversized files like `pr-autofix.md` carry valid size-exception frontmatter and rationale comments).
- does the output match what the documentation claims? yes (returns exit code 0 when all commands are within size limits or carry valid size-exception declarations).

## Defects — required
none

## Observations
- Enforces frontmatter plus HTML comment contract: `size-exception: true` alone is rejected if not accompanied by an HTML comment containing keyword `rationale` of at least 40 characters within the first 30 lines.
- Warning threshold is 150 lines, hard ceiling is 200 lines.
- In non-CI mode, failures do not cause a non-zero exit (lines 188-190: `if failures and args.ci: return 1; return 0`), allowing developers to run it advisory-only unless `--ci` is supplied or `$CI` is set.

## Context cost
File: 5,979 bytes (~1,495 tokens). Standalone script, standard library dependencies only.
