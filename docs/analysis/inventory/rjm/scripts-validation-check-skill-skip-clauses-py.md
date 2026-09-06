---
package: rjm
path: scripts/validation/check_skill_skip_clauses.py
type: script
bytes: 8728
unit: inv-rjm-287
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_skip_clauses.py

## Purpose — required, verbatim
> "Validate SKIP clauses for multi-member skill families." — scripts/validation/check_skill_skip_clauses.py:2

## Design intent — required
Ensures that multi-member skill families declare unambiguous negative routing rules ("SKIP clauses") in their frontmatter descriptions so agent model dispatch does not trigger the wrong skill when descriptions overlap. Skills are grouped into families by the leading hyphen-separated token of their name (e.g. `docker-build` and `docker-test` form the `docker` family). For every family with two or more skills, each member must declare a negative condition ("Do NOT use ... use X instead" or "(use X)") directing agents to an appropriate sibling skill. The validator parses the skill frontmatter YAML, extracts target skill names from multiple supported SKIP clause formats, verifies that targets exist within the same family, and runs a breadth-first search to confirm the sibling routing graph is connected without isolated nodes.

## Phase — required
none

## Inputs — required
- `--repo-root`: Repository root path (default: grandparent of `scripts/validation`) — scripts/validation/check_skill_skip_clauses.py:230-234
- `--skills-dir`: Skills directory path (default: `.claude/skills` under repo root) — scripts/validation/check_skill_skip_clauses.py:236-240
- Skill files matching `*/SKILL.md` under the specified skills directory — scripts/validation/check_skill_skip_clauses.py:91-92

## Outputs — required
- Console output: formatted violation list (code, family, skill, message) and summary counts, or OK status with skill and family counts — scripts/validation/check_skill_skip_clauses.py:257-271
- Exit codes: 0 (all multi-member families route correctly to siblings), 1 (one or more SKIP-clause violations), 2 (configuration/IO error) — scripts/validation/check_skill_skip_clauses.py:4-8, 253, 264, 272
- Files produced: none

## Invokes — required
none

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:207

## Concepts named — required, verbatim
- `SKIP clauses` — scripts/validation/check_skill_skip_clauses.py:2 — defined here
- `multi-member skill families` — scripts/validation/check_skill_skip_clauses.py:2 — defined here
- `ADR-035` — scripts/validation/check_skill_skip_clauses.py:4 — used here
- `_FRONTMATTER_PATTERN` — scripts/validation/check_skill_skip_clauses.py:21 — defined here
- `_SKIP_CLAUSE_PATTERN` — scripts/validation/check_skill_skip_clauses.py:22 — defined here
- `_PAREN_USE_PATTERN` — scripts/validation/check_skill_skip_clauses.py:26 — defined here
- `_USE_INSTEAD_PATTERN` — scripts/validation/check_skill_skip_clauses.py:27 — defined here
- `_SEMICOLON_USE_PATTERN` — scripts/validation/check_skill_skip_clauses.py:31 — defined here
- `Skill` — scripts/validation/check_skill_skip_clauses.py:38 — defined here
- `Violation` — scripts/validation/check_skill_skip_clauses.py:46 — defined here
- `leading_token` — scripts/validation/check_skill_skip_clauses.py:53 — defined here
- `parse_skill_file` — scripts/validation/check_skill_skip_clauses.py:58 — defined here
- `load_skills` — scripts/validation/check_skill_skip_clauses.py:82 — defined here
- `group_families` — scripts/validation/check_skill_skip_clauses.py:96 — defined here
- `_skill_name_pattern` — scripts/validation/check_skill_skip_clauses.py:108 — defined here
- `_targets_in_text` — scripts/validation/check_skill_skip_clauses.py:114 — defined here
- `extract_skip_targets` — scripts/validation/check_skill_skip_clauses.py:122 — defined here
- `_connected_members` — scripts/validation/check_skill_skip_clauses.py:139 — defined here
- `validate_skills` — scripts/validation/check_skill_skip_clauses.py:158 — defined here
- `_resolve_repo_root` — scripts/validation/check_skill_skip_clauses.py:221 — defined here
- `build_parser` — scripts/validation/check_skill_skip_clauses.py:227 — defined here
- `main` — scripts/validation/check_skill_skip_clauses.py:244 — defined here

## Structure
- Shebang and module docstring — scripts/validation/check_skill_skip_clauses.py:1-9
- Imports and regular expression patterns — scripts/validation/check_skill_skip_clauses.py:10-35
- Skill and Violation dataclasses — scripts/validation/check_skill_skip_clauses.py:37-51
- Family token extractor and skill frontmatter parser — scripts/validation/check_skill_skip_clauses.py:53-80
- Directory skill loader and family grouper — scripts/validation/check_skill_skip_clauses.py:82-106
- Skip clause target extraction — scripts/validation/check_skill_skip_clauses.py:108-137
- Graph connectivity checker — scripts/validation/check_skill_skip_clauses.py:139-156
- Skill family validation engine — scripts/validation/check_skill_skip_clauses.py:158-219
- Argument parser and main CLI runner — scripts/validation/check_skill_skip_clauses.py:221-276

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_skip_clauses.py`, language: Python 3, lines: 276
- documented invocation:
  - `python3 scripts/validation/check_skill_skip_clauses.py`
  - "Exit codes follow ADR-035:" — scripts/validation/check_skill_skip_clauses.py:4
- executed: yes
- actual command run: `.venv/bin/python scripts/validation/check_skill_skip_clauses.py`
- abridged stdout:
```
Skill SKIP clauses OK: 95 skill(s), 7 multi-member family/families.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - every multi-member family member routes to a real sibling` — scripts/validation/check_skill_skip_clauses.py:5
    - `1 - one or more SKIP-clause violations found` — scripts/validation/check_skill_skip_clauses.py:6
    - `2 - configuration error` — scripts/validation/check_skill_skip_clauses.py:7
  - Actual exit paths:
    - Exit 2: `scripts/validation/check_skill_skip_clauses.py:253` (skills directory error or unreadable)
    - Exit 1: `scripts/validation/check_skill_skip_clauses.py:264` (violations detected)
    - Exit 0: `scripts/validation/check_skill_skip_clauses.py:271` (no violations found)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: exits 1 on malformed frontmatter, missing skip clause, invalid sibling targets, or disconnected routing graph; exits 2 on filesystem/directory errors.
  - Passes with exit code 0 on default branch when run with PyYAML installed.
- does the output match what the documentation claims?
  - Yes, outputs `Skill SKIP clauses OK` and summary of skill and family counts.

## Defects — required
- script-bug · scripts/validation/check_skill_skip_clauses.py:19 imports third-party `yaml` directly rather than using stdlib or repo-internal helpers like `yaml_utils.py`, failing with `ModuleNotFoundError: No module named 'yaml'` if executed using system `python3` without the virtual environment active.

## Observations
- Groups skills into families based strictly on the prefix before the first hyphen (`leading_token`), e.g. `docker-build` and `docker-test` belong to family `docker`.
- Applies graph traversal (`_connected_members`) on an undirected adjacency graph formed by SKIP clause sibling references to verify that the family routing topology is fully connected.
- Accepts several syntactic forms for skip clauses: parenthetical `(use <target>)`, `use <target> instead`, and `; use <target>`.
- Registered as pre-PR gate `Skill SKIP Clause Routing` in `scripts/validation/pre_pr_sequence.py:310` through wrapper `checks_spec.validate_skill_skip_clauses`.

## Context cost
8728 bytes (~2182 tokens) for `scripts/validation/check_skill_skip_clauses.py`. Isolated script with external dependency on PyYAML. Total context cost: 8728 bytes (~2182 tokens).
