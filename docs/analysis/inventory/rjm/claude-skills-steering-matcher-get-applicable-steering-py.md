---
package: rjm
path: .claude/skills/steering-matcher/get_applicable_steering.py
type: skill
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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/steering-matcher/get_applicable_steering.py

## Purpose — required, verbatim
> "Match file paths against steering file glob patterns." — .claude/skills/steering-matcher/get_applicable_steering.py:2

## Design intent — required
A standalone CLI and Python utility function for matching target file paths against glob patterns defined in steering markdown frontmatter (`applyTo` and `excludeFrom`). It extracts priority metadata and returns matched steering guidance sorted by priority (descending), allowing orchestrators to inject only relevant context into agent prompts and reduce token consumption.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments: `--files` (required list of file paths to analyze), `--steering-path` (optional steering directory path, defaults to `.agents/steering`), `--json` (optional flag to format output as JSON) — .claude/skills/steering-matcher/get_applicable_steering.py:141-149
- Steering markdown files in the steering directory (`*.md` excluding `README.md` and `SKILL.md`) parsed for YAML frontmatter with `applyTo`, `excludeFrom`, and `priority` keys — .claude/skills/steering-matcher/get_applicable_steering.py:76-103

## Outputs — required
- When `--json`: JSON array to stdout containing objects with keys `Name`, `Path`, `ApplyTo`, `ExcludeFrom`, `Priority` — .claude/skills/steering-matcher/get_applicable_steering.py:120-126, 155
- When not `--json`: Human-readable formatted text to stdout listing matched steering names, priority, applyTo, and excludeFrom patterns (or "No applicable steering files found.") — .claude/skills/steering-matcher/get_applicable_steering.py:157-165
- Process exit code 0 — .claude/skills/steering-matcher/get_applicable_steering.py:166

## Invokes — required
none

## Invoked by — required
- skill steering-matcher — .claude/skills/steering-matcher/SKILL.md:17

## Concepts named — required, verbatim
- `steering file glob patterns` — .claude/skills/steering-matcher/get_applicable_steering.py:2 — used here
- `priority` — .claude/skills/steering-matcher/get_applicable_steering.py:5 — used here
- `ADR-035` — .claude/skills/steering-matcher/get_applicable_steering.py:7 — used here
- `globstar patterns` — .claude/skills/steering-matcher/get_applicable_steering.py:23 — used here
- `front_matter` — .claude/skills/steering-matcher/get_applicable_steering.py:94 — used here
- `applyTo` — .claude/skills/steering-matcher/get_applicable_steering.py:96 — used here
- `excludeFrom` — .claude/skills/steering-matcher/get_applicable_steering.py:99 — used here

## Structure
none (python script; functions: `glob_to_regex`, `file_matches_pattern`, `get_applicable_steering`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/get_applicable_steering.py`, language: Python 3, lines: 171
- documented invocation:
  - "get_applicable_steering.py" — .claude/skills/steering-matcher/SKILL.md:17
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering" --json`
- abridged stdout:
  ```json
  [
    {
      "Name": "agent-prompts",
      "Path": ".../.agents/steering/agent-prompts.md",
      "ApplyTo": "src/claude/**/*.md,.github/copilot-instructions.md",
      "ExcludeFrom": null,
      "Priority": 9
    },
    {
      "Name": "documentation",
      "Path": ".../.agents/steering/documentation.md",
      "ApplyTo": "**/*.md",
      "ExcludeFrom": "src/claude/**/*.md,.agents/steering/**",
      "Priority": 5
    }
  ]
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - "0 - Success: Steering match completed" — .claude/skills/steering-matcher/get_applicable_steering.py:8
  Actual code paths: `return 0` at line 166 and `sys.exit(main())` at line 170. Note that `argparse` exits with code 2 on missing or unrecognized arguments, but this is omitted from the ADR-035 docstring.
- for validators/gates: can it exit non-zero? Only via argparse on argument errors (exit code 2).
- does the output match what the documentation claims? Yes, correctly outputs matched steering files sorted by priority descending.

## Defects — required
- `exit-code-mismatch` · .claude/skills/steering-matcher/get_applicable_steering.py:7 — Docstring cites ADR-035 with only exit code 0, omitting argparse exit code 2 on missing required arguments (`--files`).
- `cross-file-contradiction` · .claude/skills/steering-matcher/get_applicable_steering.py:121-125 — Returns PascalCase keys (`Name`, `Path`, `ApplyTo`, `ExcludeFrom`, `Priority`), contradicting `scripts/get_applicable_steering.py:135-139` and `SKILL.md:54` which specify snake_case keys (`name`, `path`, `apply_to`, `exclude_from`, `priority`).

## Observations
- Custom regex conversion in `glob_to_regex` handles `**` globstar patterns manually with string replacement tokens, avoiding the `fnmatch.translate` bug present in `scripts/get_applicable_steering.py`.

## Context cost
5184 bytes, ~1300 tokens.
