---
package: rjm
path: scripts/validate_skill_installation.py
type: script
bytes: 6165
unit: inv-rjm-270
in_scope_via: docs/installation.md
aliases: []
memo_inputs:
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_skill_installation.py

## Purpose — required, verbatim
> "Validate Claude skill installation across supported platforms." — scripts/validate_skill_installation.py:2

## Design intent — required
Verifies that Claude skills within `.claude/skills/` comply with required structure and metadata standards prior to installation or release. Validates that every skill directory contains a valid `SKILL.md` file with parseable YAML frontmatter containing required `name` and `description` fields, and asserts that the declared frontmatter `name` matches the directory name. Also provides an optional `--check-global` capability to verify installed skills in `~/.claude/skills`, printing marketplace plugin installation instructions if no global skills are found. Implemented per ADR-042 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- CLI options parsed by argparse (`--source`, `--check-global`, `--verbose`):
  - `"--source"` — scripts/validate_skill_installation.py:170
  - `"--check-global"` — scripts/validate_skill_installation.py:175
  - `"--verbose"` — scripts/validate_skill_installation.py:180
- Local skill files: `"SKILL.md"` — scripts/validate_skill_installation.py:64 under source directory `skills_dir = source_dir / ".claude" / "skills"` (scripts/validate_skill_installation.py:91)
- Global installation directory: `"claude"` — scripts/validate_skill_installation.py:38 at `Path.home() / ".claude" / "skills"` (scripts/validate_skill_installation.py:38)

## Outputs — required
- Logging output emitted to stdout/stderr:
  - `"Validating %d skills in %s"` — scripts/validate_skill_installation.py:104
  - `"Result: PASSED (%d skills validated)"` — scripts/validate_skill_installation.py:121
  - `"Result: FAILED (%d errors in %d skills)"` — scripts/validate_skill_installation.py:117
  - `"Skills directory not found: %s"` — scripts/validate_skill_installation.py:93
  - `"No skill directories found in %s"` — scripts/validate_skill_installation.py:101
  - Global check logging and marketplace installation instructions — scripts/validate_skill_installation.py:148-153
- Process exit codes: 0 (all skills valid or installed), 1 (validation errors found), 2 (configuration error / missing source directory) — scripts/validate_skill_installation.py:13-15, 94, 102, 118, 122, 161, 163, 196

## Invokes — required
none

## Invoked by — required
- doc installation.md — docs/installation.md:128

## Concepts named — required, verbatim
- `ADR-042` — scripts/validate_skill_installation.py:17 — used here
- `ADR-035` — scripts/validate_skill_installation.py:18 — used here
- `REQUIRED_FRONTMATTER_FIELDS` — scripts/validate_skill_installation.py:34 — defined here
- `OPTIONAL_FRONTMATTER_FIELDS` — scripts/validate_skill_installation.py:35 — defined here
- `GLOBAL_SKILL_PATHS` — scripts/validate_skill_installation.py:37 — defined here
- `parse_frontmatter` — scripts/validate_skill_installation.py:42 — defined here
- `validate_skill_dir` — scripts/validate_skill_installation.py:59 — defined here
- `validate_source_skills` — scripts/validate_skill_installation.py:89 — defined here
- `check_global_installation` — scripts/validate_skill_installation.py:125 — defined here
- `main` — scripts/validate_skill_installation.py:166 — defined here

## Structure
- Module docstring detailing purpose, usage commands, exit codes, and ADR references — scripts/validate_skill_installation.py:1-20
- Imports and logger configuration — scripts/validate_skill_installation.py:22-32
- Field constants and global path definitions (`REQUIRED_FRONTMATTER_FIELDS`, `OPTIONAL_FRONTMATTER_FIELDS`, `GLOBAL_SKILL_PATHS`) — scripts/validate_skill_installation.py:34-39
- `parse_frontmatter`: extracts YAML metadata from `SKILL.md` using `frontmatter.load` — scripts/validate_skill_installation.py:42-57
- `validate_skill_dir`: validates single directory presence, frontmatter fields, and name matching — scripts/validate_skill_installation.py:59-87
- `validate_source_skills`: scans `.claude/skills` directory and checks all child skill folders — scripts/validate_skill_installation.py:89-123
- `check_global_installation`: checks installed skills in global platforms (`~/.claude/skills`) — scripts/validate_skill_installation.py:125-164
- `main`: argument parsing, invoking source and global validations, aggregating return codes — scripts/validate_skill_installation.py:166-197
- Script execution guard `sys.exit(main())` — scripts/validate_skill_installation.py:199-200

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_skill_installation.py`
- **language:** Python (python3)
- **lines:** 201
- **documented invocation:**
  - `"uv run python scripts/validate_skill_installation.py" — scripts/validate_skill_installation.py:8`
  - `"uv run python scripts/validate_skill_installation.py --check-global" — scripts/validate_skill_installation.py:9`
  - `"uv run python scripts/validate_skill_installation.py --verbose" — scripts/validate_skill_installation.py:10`
- **executed:** yes
- **actual command run:** `uv run python scripts/validate_skill_installation.py`
- **abridged stdout:**
```
Validating 95 skills in /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills

Result: PASSED (95 skills validated)
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - `"0: All skills valid (or installed correctly with --check-global)" — scripts/validate_skill_installation.py:13`
    - `"1: Validation errors found" — scripts/validate_skill_installation.py:14`
    - `"2: Configuration error (missing source directory)" — scripts/validate_skill_installation.py:15`
  - Actual code paths:
    - `return 2` — scripts/validate_skill_installation.py:94 (when skills directory not found)
    - `return 2` — scripts/validate_skill_installation.py:102 (when no skill directories found)
    - `return 1` — scripts/validate_skill_installation.py:118 (when validation errors found in source skills)
    - `return 0` — scripts/validate_skill_installation.py:122 (when all source skills pass)
    - `return 0` — scripts/validate_skill_installation.py:154 (when no global skill installations found)
    - `return 1` — scripts/validate_skill_installation.py:161 (when global installation errors detected)
    - `return 0` — scripts/validate_skill_installation.py:163 (when global skills pass)
    - `return result` — scripts/validate_skill_installation.py:196
    - `sys.exit(main())` — scripts/validate_skill_installation.py:200
  - Result: Documented exit codes (0, 1, 2) match all actual exit paths in code.
- **for validators/gates:**
  - Can it exit non-zero: Yes, exits 1 on missing SKILL.md, invalid frontmatter YAML, missing required fields ('name', 'description'), or directory name mismatch; exits 2 if source skills directory does not exist or contains no skill directories.
  - Does it fail on the source repo's own default branch: No, passes with exit code 0 validating all 95 skills in `.claude/skills/`.
- **does the output match what the documentation claims:** Yes, outputs `Result: PASSED (95 skills validated)` and returns exit code 0.

## Defects — required
- `doc-drift` · scripts/validate_skill_installation.py:2 · Module docstring states the script validates Claude skill installation "across supported platforms" in the plural, but `GLOBAL_SKILL_PATHS` at line 37 only defines a single platform (`"claude": Path.home() / ".claude" / "skills"`).

## Observations
- Relies on external third-party dependencies `python-frontmatter` (`import frontmatter`) and `PyYAML` (`import yaml`) (scripts/validate_skill_installation.py:28-29), requiring execution via `uv run python` inside the project virtual environment rather than standalone system `python3`.
- Provides helpful user guidance when global skills are absent, directing users to install via Claude Code plugin commands (`/plugin marketplace add rjmurillo/ai-agents` then `/plugin install project-toolkit@ai-agents`) (scripts/validate_skill_installation.py:150-153).

## Context cost
6165 bytes, 201 lines, ~1600 tokens (plus third-party dependencies `python-frontmatter` and `PyYAML`).
