---
package: rjm
path: .claude/skills/skillforge/scripts/package_skill.py
type: script
bytes: 6012
unit: inv-rjm-163
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/package_skill.py, sha256: 15c5c247f958c4d329d4b440559b118ee80423c7a239dff7654ca753b0a324d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/package_skill.py

## Purpose — required, verbatim
> "package_skill.py - Creates a distributable .skill file" — .claude/skills/skillforge/scripts/package_skill.py:3

The docstring states:
"Validates a skill using quick_validate.py, then packages it into a .skill file (zip format) for distribution." — .claude/skills/skillforge/scripts/package_skill.py:5-6

## Design intent — required
Packages a validated skill directory into a distributable archive (`.skill` file, using standard zip format) while enforcing validation prerequisites and exclusion rules. Before archive creation, it invokes `quick_validate.py` to confirm that frontmatter and file structure adhere to Claude Code skill standards. It automatically excludes hidden files, Python bytecode cache directories (`__pycache__`), and patterns specified in `.skillignore`. Without it, users would package skills manually, risking distribution of malformed metadata, unvalidated files, or extraneous repository artifacts.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
- Positional CLI argument `skill_path`: Path to the skill folder — .claude/skills/skillforge/scripts/package_skill.py:9
- Optional positional CLI argument `output-directory`: Output directory for the generated `.skill` file (default: current working directory) — .claude/skills/skillforge/scripts/package_skill.py:9
- `.skillignore` file inside target skill directory (if present) — .claude/skills/skillforge/scripts/package_skill.py:34-36
- Skill directory contents including `SKILL.md` — .claude/skills/skillforge/scripts/package_skill.py:98-100

## Outputs — required
- Distributable zip archive `<skill_name>.skill` written to output directory — .claude/skills/skillforge/scripts/package_skill.py:122-127
- Standard output listing validation progress, files added to archive, and final status — .claude/skills/skillforge/scripts/package_skill.py:103-107, 140, 167
- Programmatic dataclass `PackageResult` with `success`, `message`, and `output_path` attributes — .claude/skills/skillforge/scripts/package_skill.py:25-29

## Invokes — required
- script quick_validate.py — .claude/skills/skillforge/scripts/package_skill.py:5

## Invoked by — required
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:284

## Concepts named — required, verbatim
- `.skill file` — .claude/skills/skillforge/scripts/package_skill.py:3 — defined here | used here
- `PackageResult` — .claude/skills/skillforge/scripts/package_skill.py:25 — defined here
- `.skillignore` — .claude/skills/skillforge/scripts/package_skill.py:33 — defined here | used here
- `CWE-22` — .claude/skills/skillforge/scripts/package_skill.py:84 — used here
- `Path traversal` — .claude/skills/skillforge/scripts/package_skill.py:88 — used here

## Structure
- Dataclass `PackageResult` — .claude/skills/skillforge/scripts/package_skill.py:25
- Helper `load_skillignore` — .claude/skills/skillforge/scripts/package_skill.py:32
- Helper `is_ignored` — .claude/skills/skillforge/scripts/package_skill.py:46
- Packaging logic `package_skill` — .claude/skills/skillforge/scripts/package_skill.py:71
- CLI entrypoint `main` — .claude/skills/skillforge/scripts/package_skill.py:148

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/package_skill.py`
- language: Python (python3)
- lines: 177
- documented invocation:
  - `python package_skill.py ~/.claude/skills/my-skill` — .claude/skills/skillforge/scripts/package_skill.py:12
  - `python package_skill.py ~/.claude/skills/my-skill ./dist` — .claude/skills/skillforge/scripts/package_skill.py:13
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/package_skill.py ~/.claude/skills/test-pack-test`
- abridged stdout:
  ```text
  📦 Packaging skill: /Users/peterkloss/.claude/skills/test-pack-test

  🔍 Validating skill...
  ✅ Skill is valid!

    Added: test-pack-test/SKILL.md

  ✅ Successfully packaged skill to: /Users/peterkloss/Dev/ACMElabs/brain-v2/test-pack-test.skill
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented in docstring: none explicitly defined in docstring.
  - Actual exit paths in code:
    - `sys.exit(0)` — .claude/skills/skillforge/scripts/package_skill.py:168 (successful packaging)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/package_skill.py:154 (missing CLI arguments)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/package_skill.py:172 (validation failure or error during packaging)
- for validators/gates: validates target skill before packaging by invoking `validate_skill()`; exits 1 if validation fails
- does the output match what the documentation claims: yes, validates and packages the skill directory into a `.skill` zip archive

## Defects — required
- `script-bug`: In .claude/skills/skillforge/scripts/package_skill.py:85-88, `skills_root` is hardcoded as `Path.home() / ".claude" / "skills"`. If a skill is located anywhere else (such as a development clone or repository directory), packaging is aborted with `"Path traversal detected: {skill_path}"`, preventing standalone use outside the user's home directory.
- `exit-code-mismatch`: Docstring does not document exit codes (exits 0 on success, 1 on failure).

## Observations
- Automatically preserves the top-level skill directory name in zip archive paths by computing `arcname = file_path.relative_to(skill_path.parent)` (.claude/skills/skillforge/scripts/package_skill.py:138).
- Excludes dotfiles and `__pycache__` directories automatically even when `.skillignore` is absent (.claude/skills/skillforge/scripts/package_skill.py:132-133).

## Context cost
6,012 bytes (approx. 1,500 tokens). When executed, dynamically imports `quick_validate.py` (12,925 bytes), resulting in a combined context cost of ~18.9 KB (~4,700 tokens).
