---
package: rjm
path: .claude/skills/steering-matcher/get_applicable_steering.py
type: script
bytes: 5184
unit: inv-rjm-174
in_scope_via: .claude/skills/steering-matcher/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/steering-matcher/get_applicable_steering.py

## Purpose — required, verbatim
> "Match file paths against steering file glob patterns." — .claude/skills/steering-matcher/get_applicable_steering.py:2

## Design intent — required
Provides a standalone Python implementation for filtering and sorting steering files by matching a target set of file paths against frontmatter `applyTo` and `excludeFrom` glob patterns in `.agents/steering/*.md`. Without it, multi-agent systems and orchestrators would have to inject all steering files indiscriminately into agent contexts, causing substantial token bloat, or manually hand-curate steering paths.

## Phase — required
none

## Inputs — required
- Command-line arguments: `--files` (one or more file paths to analyze), `--steering-path` (directory containing steering markdown files, default: `.agents/steering`), `--json` (flag for JSON formatted output) — .claude/skills/steering-matcher/get_applicable_steering.py:142, 146, 149
- Markdown steering files in `--steering-path` matching `*.md` (excluding `README.md` and `SKILL.md`) parsed for YAML frontmatter with `applyTo: "<globs>"`, optional `excludeFrom: "<globs>"`, and optional `priority: <int>` (default 5) — .claude/skills/steering-matcher/get_applicable_steering.py:78-103

## Outputs — required
- Human-readable matched steering summary (`Matched: <Name> (Priority: <Priority>)`, `ApplyTo: ...`, `ExcludeFrom: ...`) or indented JSON array containing dictionaries with keys `Name`, `Path`, `ApplyTo`, `ExcludeFrom`, `Priority` sorted by `Priority` descending — .claude/skills/steering-matcher/get_applicable_steering.py:121-126, 155, 161-164
- Exit code: 0 on success — .claude/skills/steering-matcher/get_applicable_steering.py:8, 166

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/steering-matcher/get_applicable_steering.py:7 — used here
- `glob_to_regex` — .claude/skills/steering-matcher/get_applicable_steering.py:19 — defined here
- `file_matches_pattern` — .claude/skills/steering-matcher/get_applicable_steering.py:49 — defined here
- `get_applicable_steering` — .claude/skills/steering-matcher/get_applicable_steering.py:60 — defined here
- `applyTo` — .claude/skills/steering-matcher/get_applicable_steering.py:96 — used here
- `excludeFrom` — .claude/skills/steering-matcher/get_applicable_steering.py:99 — used here
- `priority` — .claude/skills/steering-matcher/get_applicable_steering.py:102 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/get_applicable_steering.py`, language: Python, lines: 171
- documented invocation: `python3 .claude/skills/steering-matcher/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"` — .claude/skills/steering-matcher/SKILL.md:17
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`, abridged stdout: `Matched: agent-prompts (Priority: 9)\n  ApplyTo: src/claude/**/*.md,.github/copilot-instructions.md\nMatched: documentation (Priority: 5)\n  ApplyTo: **/*.md\n  ExcludeFrom: src/claude/**/*.md,.agents/steering/**`, **actual exit code:** 0
- documented exit codes: "0 - Success: Steering match completed" — .claude/skills/steering-matcher/get_applicable_steering.py:8 vs actual exit paths in code: `return 0` at .claude/skills/steering-matcher/get_applicable_steering.py:166 via `sys.exit(main())` at .claude/skills/steering-matcher/get_applicable_steering.py:170
- for validators/gates: not a validator/gate (returns 0 on successful pattern matching; exits with code 2 via argparse when required arguments are missing)
- does the output match what the documentation claims: yes, output matches frontmatter pattern matching rules and priority sorting

## Defects — required
- orphan · .claude/skills/steering-matcher/get_applicable_steering.py:1 · redundant/misplaced script located at skill root instead of `scripts/`; unreferenced by `SKILL.md` which documents `scripts/get_applicable_steering.py`.
- other · .claude/skills/steering-matcher/get_applicable_steering.py:121 · schema naming inconsistency: produces PascalCase keys (`Name`, `Path`, `ApplyTo`, `ExcludeFrom`, `Priority`) whereas `scripts/get_applicable_steering.py` produces snake_case keys (`name`, `path`, `apply_to`, `exclude_from`, `priority`).

## Observations
- This file contains the functioning glob-to-regex implementation imported and verified by unit tests (`tests/skills/steering-matcher/test_get_applicable_steering.py:18`), unlike `scripts/get_applicable_steering.py` which contains broken regex substitutions.
- Frontmatter type is set to `type: script` per Phase 1V audit finding.

## Context cost
5184 bytes, approximately 1300 tokens.
