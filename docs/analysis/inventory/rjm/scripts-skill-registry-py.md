---
package: rjm
path: scripts/skill_registry.py
type: script
bytes: 13095
unit: inv-rjm-261
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/skill_registry.py

## Purpose — required, verbatim
> "Generate a skill registry with metadata for all skills in .claude/skills/." — scripts/skill_registry.py:2

## Design intent — required
Scans all skill directories under `.claude/skills/`, extracts YAML frontmatter from `SKILL.md` files, assigns functional taxonomy categories (such as `security`, `memory`, `analysis`, `documentation`, `workflow`, `process`, `infrastructure`, and `implementation`), counts non-ignored files and tests/scripts subdirectories, and queries git log history for last-modified timestamps. Produces structured output (JSON or Markdown) and detects underutilized or stale skills (unmodified past `--stale-days`, default 30) for session integration, preventing skill accumulation and obsolete tooling drift.

## Phase — required
rjm:cross-phase

## Inputs — required
- Command-line arguments:
  - `--format`: choice of `json` or `markdown` (default: `json`).
  - `--skills-dir`: path to skills directory (defaults to `.claude/skills/` under project root).
  - `--project-root`: project root path (auto-detected via parent directory of script).
  - `--stale-days`: non-negative integer threshold for staleness in days (default: 30).
  - `--show-stale`: boolean flag to filter output to skills not modified within `--stale-days`.
  - `--session-message`: boolean flag to output a session-ready notification string for underutilized skills.
- Files read: `.claude/skills/*/SKILL.md` frontmatter blocks, directory filesystem trees via `rglob("*")`.
- Subprocess execution: `git log -1 --format=%aI -- <path>` executed per skill directory.

## Outputs — required
- Standard output: JSON structure containing generation timestamp and list of `SkillMetadata` objects, or Markdown document with tabular breakdown and category counts; or notification message string if `--session-message` is requested and stale skills exist.
- Standard error: path validation errors (exit code 2), missing skills directory errors (exit code 2), or notification when no skills exceed staleness threshold.

## Invokes — required
- script validate_safe_path — scripts/skill_registry.py:33

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/skill_registry.py:12 — used here
- `validate_safe_path` — scripts/skill_registry.py:33 — used here
- `SkillMetadata` — scripts/skill_registry.py:37 — defined here
- `parse_frontmatter` — scripts/skill_registry.py:51 — defined here
- `get_last_modified_date` — scripts/skill_registry.py:84 — defined here
- `categorize_skill` — scripts/skill_registry.py:119 — defined here
- `scan_skill` — scripts/skill_registry.py:182 — defined here
- `build_registry` — scripts/skill_registry.py:219 — defined here
- `format_json` — scripts/skill_registry.py:241 — defined here
- `format_markdown` — scripts/skill_registry.py:257 — defined here
- `format_session_message` — scripts/skill_registry.py:294 — defined here
- `parse_args` — scripts/skill_registry.py:318 — defined here
- `filter_stale` — scripts/skill_registry.py:374 — defined here
- `main` — scripts/skill_registry.py:391 — defined here

## Structure
- SkillMetadata — scripts/skill_registry.py:37
- parse_frontmatter — scripts/skill_registry.py:51
- get_last_modified_date — scripts/skill_registry.py:84
- categorize_skill — scripts/skill_registry.py:119
- scan_skill — scripts/skill_registry.py:182
- build_registry — scripts/skill_registry.py:219
- format_json — scripts/skill_registry.py:241
- format_markdown — scripts/skill_registry.py:257
- format_session_message — scripts/skill_registry.py:294
- parse_args — scripts/skill_registry.py:318
- filter_stale — scripts/skill_registry.py:374
- main — scripts/skill_registry.py:391

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/skill_registry.py`
- language: Python
- lines: 453
- documented invocation:
  - "Generate a skill registry with metadata for all skills in .claude/skills/." — scripts/skill_registry.py:2
  - "Output format (default: json)" — scripts/skill_registry.py:335
  - "Only show skills not modified in --stale-days" — scripts/skill_registry.py:364
- **executed:** yes
- actual command run: `uv run python ./scripts/skill_registry.py --format markdown`
- abridged stdout:
  ```markdown
  # Skill Registry

  Generated: 2026-09-06
  Total skills: 95

  | Name | Category | Last Modified | Model | Tests | Files |
  |------|----------|---------------|-------|-------|-------|
  | adr-generator | analysis | 2026-08-25 | - | N | 6 |
  | adr-review | security | 2026-08-25 | - | N | 9 |
  | agent-harness-reference | process | 2026-09-01 | - | Y | 4 |
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - Documented:
    - "0  - Success: Registry generated" — scripts/skill_registry.py:8
    - "1  - Error: Logic or validation error" — scripts/skill_registry.py:9
    - "2  - Error: Configuration or path error" — scripts/skill_registry.py:10
  - Actual exit paths:
    - `0`: scripts/skill_registry.py:426 (`return 0`), scripts/skill_registry.py:441 (`return 0`)
    - `1`: scripts/skill_registry.py:445 (`return 1`)
    - `2`: scripts/skill_registry.py:410 (`return 2`), scripts/skill_registry.py:417 (`return 2`), scripts/skill_registry.py:448 (`return 2`)
- for validators/gates:
  - Utility script rather than blocking gate; can exit 2 on path security validation failure or filesystem errors, and exit 1 on keyboard interrupt.
  - Does it fail on default branch? No, exits 0 and discovers all 95 skills across categories.
- does the output match what the documentation claims?
  - Yes, outputs JSON or Markdown registry table with accurate counts and metadata.

## Defects — required
- orphan — scripts/skill_registry.py:1 — utility is not invoked by any in-scope command, agent, or skill workflow (covered only by tests/test_skill_registry.py).
- doc-drift — scripts/skill_registry.py:9 — docstring documents exit code `1` as `"1  - Error: Logic or validation error"`, but validation errors from `validate_safe_path` exit with code 2 (line 410), while exit code 1 only catches `KeyboardInterrupt` (line 445).

## Observations
- Implements safe path validation via `validate_safe_path` to prevent path traversal outside repository root when custom `--skills-dir` is passed (scripts/skill_registry.py:407-410).
- Uses `git log -1 --format=%aI` with a 10-second timeout per skill to detect modification recency; falls back gracefully to `"unknown"` if git command fails or timeout expires (scripts/skill_registry.py:94-116).

## Context cost
File size: 13,095 bytes (453 lines). Imports `scripts/utils/path_validation.py`. Context cost ~3,274 tokens.
