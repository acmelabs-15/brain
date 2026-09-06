---
package: rjm
path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py
type: script
bytes: 5494
unit: inv-rjm-174
in_scope_via: .claude/skills/steering-matcher/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/steering-matcher/scripts/get_applicable_steering.py

## Purpose — required, verbatim
> "Match file paths against steering file glob patterns." — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:2

## Design intent — required
Python CLI script designed to serve as the execution engine for the `steering-matcher` skill, converting glob patterns from steering file frontmatter into compiled regexes using `fnmatch.translate` and matching them against input file paths. It returns a JSON array of matching steering file records with snake_case attributes (`name`, `path`, `apply_to`, `exclude_from`, `priority`) ordered by priority descending.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments: `--files` (required list of file paths to match), `--steering-path` (optional path to steering directory, default `.agents/steering`) — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:153-162
- Steering markdown files located in `--steering-path` matching `*.md` (excluding `README.md` and `SKILL.md`) parsed for YAML frontmatter — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:93-100

## Outputs — required
- JSON formatted array printed to stdout containing objects with keys `name`, `path`, `apply_to`, `exclude_from`, `priority` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:134-140, 169
- Process exit code 0 — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:170

## Invokes — required
none

## Invoked by — required
- skill steering-matcher — .claude/skills/steering-matcher/SKILL.md:46

## Concepts named — required, verbatim
- `steering file glob patterns` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:2 — used here
- `priority` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:5 — used here
- `ADR-035` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:7 — used here
- `globstar` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:24 — used here
- `applyTo` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:105 — used here
- `excludeFrom` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:111 — used here

## Structure
none (python script; functions: `_glob_to_regex`, `_file_matches_patterns`, `get_applicable_steering`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`, language: Python 3, lines: 175
- documented invocation:
  - "python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files <file1> [<file2> ...]" — .claude/skills/steering-matcher/SKILL.md:113
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`
- abridged stdout: `[]`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - "0 - Success" — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:8
  - "1 - Invalid parameters / logic error" — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:9
  Actual code exit paths: `return 0` at line 170 and `raise SystemExit(main())` at line 174. There is no code path in `main` or elsewhere that exits with 1 (argparse handles invalid parameters by exiting with code 2).
- for validators/gates: can it exit non-zero? Exits with code 2 when argument parsing fails via argparse.
- does the output match what the documentation claims? No. It returns `[]` because of regex replacement bugs in `_glob_to_regex` (raw string mismatch on null-byte placeholder and unhandled Python 3.12 `\z` regex suffix), whereas documentation expects matching steering files.

## Defects — required
- `script-bug` · .claude/skills/steering-matcher/scripts/get_applicable_steering.py:48 — Raw string `r"\x00GLOBSTAR_SLASH\x00"` in `regex.replace` fails to match the null-byte delimiter `"\x00GLOBSTAR_SLASH\x00"` inserted at line 32, and `removesuffix(r"\Z")` fails on Python 3.12 `\z` suffix, breaking globstar matching and returning `[]`.
- `exit-code-mismatch` · .claude/skills/steering-matcher/scripts/get_applicable_steering.py:9 — Docstring claims exit code 1 for invalid parameters/logic error, but no code path exits with 1 (main returns 0, and argparse exits 2 on argument error).

## Observations
- Sits alongside `.claude/skills/steering-matcher/get_applicable_steering.py` in the parent directory with slightly differing implementations: this script uses `fnmatch.translate` and produces snake_case keys, whereas the parent copy uses custom string regex building and PascalCase keys.

## Context cost
5494 bytes, ~1375 tokens.
