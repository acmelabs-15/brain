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
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/steering-matcher/scripts/get_applicable_steering.py

## Purpose — required, verbatim
> "Match file paths against steering file glob patterns." — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:2

## Design intent — required
Intended as the canonical CLI script for the steering-matcher skill (located under `scripts/` per standard skill layout conventions) to discover and rank steering rules by matching target files against `applyTo` and `excludeFrom` glob patterns. Without it, the skill would lack an executable script adhering to the standard directory layout documented in its `SKILL.md`.

## Phase — required
none

## Inputs — required
- Command-line arguments: `--files` (one or more file paths, required), `--steering-path` (path to steering directory, default: `.agents/steering`) — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:153-163
- Markdown steering files in `steering_path` matching `*.md` (excluding `README.md` and `SKILL.md`) parsed for frontmatter `applyTo`, `excludeFrom`, `priority` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:93-116

## Outputs — required
- stdout: JSON formatted list of dictionaries containing `name`, `path`, `apply_to`, `exclude_from`, `priority` sorted by `priority` descending — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:134-140, 169
- Exit code: 0 on success — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:8, 170

## Invokes — required
none

## Invoked by — required
- skill steering-matcher — .claude/skills/steering-matcher/SKILL.md:46

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:7 — used here
- `_glob_to_regex` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:21 — defined here
- `_file_matches_patterns` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:56 — defined here
- `get_applicable_steering` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:67 — defined here
- `applyTo` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:105 — used here
- `excludeFrom` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:111 — used here
- `priority` — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:115 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`, language: Python, lines: 175
- documented invocation: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py \` — .claude/skills/steering-matcher/SKILL.md:50
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`, abridged stdout: `[]`, **actual exit code:** 0
- documented exit codes: "0 - Success" — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:8 and "1 - Invalid parameters / logic error" — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:9 vs actual exit paths in code: `return 0` at .claude/skills/steering-matcher/scripts/get_applicable_steering.py:170 via `raise SystemExit(main())` at .claude/skills/steering-matcher/scripts/get_applicable_steering.py:174
- for validators/gates: not a validator/gate (returns 0 on success; invalid arguments cause argparse to exit with code 2)
- does the output match what the documentation claims: no, returns empty list `[]` instead of matched steering files due to broken regex conversion bug

## Defects — required
- script-bug · .claude/skills/steering-matcher/scripts/get_applicable_steering.py:48 · `_glob_to_regex` fails to restore globstar placeholder: `pattern.replace("**/", "\x00GLOBSTAR_SLASH\x00")` is translated by `fnmatch.translate` and subsequently `regex.replace(r"\x00GLOBSTAR_SLASH\x00", "(?:.+/|)")` fails because raw string does not match literal null byte, leaving broken regexes that return `[]`.
- exit-code-mismatch · .claude/skills/steering-matcher/scripts/get_applicable_steering.py:9 · docstring documents exit code 1 for invalid parameters / logic error, but code never raises exit code 1 (argparse exits with code 2).

## Observations
- The repository contains two implementations of `get_applicable_steering.py`: the root version works and is tested by `tests/skills/steering-matcher/test_get_applicable_steering.py`, while this version under `scripts/` contains a broken regex translation using `fnmatch.translate` and has no unit tests.
- Outputs snake_case dictionary keys (`name`, `path`, `apply_to`, `exclude_from`, `priority`), unlike the PascalCase keys in the root script.

## Context cost
5494 bytes, approximately 1375 tokens.
