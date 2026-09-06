---
package: rjm
path: .claude/skills/skillforge/assets/templates/script-template.py
type: skill
bytes: 8733
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/script-template.py, sha256: 50af05ade0055f329c89815a126c5ff43f3dd21ff959c8ce8d674a32b660e9a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/assets/templates/script-template.py

## Purpose — required, verbatim
> "{{SCRIPT_NAME}}.py - {{BRIEF_DESCRIPTION}}" — .claude/skills/skillforge/assets/templates/script-template.py:3

## Design intent — required
Provides a production-ready, standardized Python starter template for scripts generated as part of SkillForge skills. It establishes uniform agentic coding practices across skills by implementing structured dataclass output (`Result` with success, message, data, errors, warnings, and ISO timestamp serialization), atomic file persistence for state caching (`load_state` and `save_state` with `.tmp` write and `.bak` corruption recovery), modular processing pipelines, self-verification functions (`verify_result`), and robust CLI argument handling supporting `--json`, `--verbose`, `--output`, and `--no-verify` flags.

## Phase — required
none

## Inputs — required
- Input file path (`input` positional CLI argument)
- Command-line flags: `--output` (`-o`), `--verbose` (`-v`), `--json`, `--no-verify`
- Optional state file at `~/.cache/{{SKILL_NAME}}/<project>.json`

## Outputs — required
- Structured text or JSON output written to stdout
- Optional output file specified via `--output`
- Persisted state JSON file saved in `~/.cache/{{SKILL_NAME}}/`

## Invokes — required
none

## Invoked by — required
- reference script-patterns-catalog.md — .claude/skills/skillforge/references/script-patterns-catalog.md:831
- reference phase3-generation-deep-dive.md — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:37
- reference changelog.md — .claude/skills/skillforge/references/changelog.md:31
- script init_skill.py — .claude/skills/skillforge/scripts/init_skill.py:120

## Concepts named — required, verbatim
- `Result` — .claude/skills/skillforge/assets/templates/script-template.py:40 — defined here
- `STATE MANAGEMENT` — .claude/skills/skillforge/assets/templates/script-template.py:74 — defined here
- `atomic save` — .claude/skills/skillforge/assets/templates/script-template.py:136 — defined here
- `Self-verification` — .claude/skills/skillforge/assets/templates/script-template.py:196 — defined here

## Structure
- RESULT TYPES — .claude/skills/skillforge/assets/templates/script-template.py:36
- STATE MANAGEMENT (remove if not needed) — .claude/skills/skillforge/assets/templates/script-template.py:74
- CORE LOGIC — .claude/skills/skillforge/assets/templates/script-template.py:143
- CLI INTERFACE — .claude/skills/skillforge/assets/templates/script-template.py:221

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/assets/templates/script-template.py`, Python 3, 323 lines
- documented invocation:
  "python {{SCRIPT_NAME}}.py input.json" — .claude/skills/skillforge/assets/templates/script-template.py:16
  "python {{SCRIPT_NAME}}.py input.json --verbose --output result.json" — .claude/skills/skillforge/assets/templates/script-template.py:17
- **executed:** yes
- actual command run, abridged stdout, actual exit code:
  - `python3 sources/rjm/.claude/skills/skillforge/assets/templates/script-template.py --help` -> exit code 0
    stdout: `usage: script-template.py [-h] [--output OUTPUT] [--verbose] [--json] [--no-verify] input ...`
  - `python3 sources/rjm/.claude/skills/skillforge/assets/templates/script-template.py package.json` -> exit code 0
    stdout: `Success: Processing complete`
  - `python3 sources/rjm/.claude/skills/skillforge/assets/templates/script-template.py package.json --json` -> exit code 0
    stdout: `{\n  "success": true,\n  "message": "Processing complete",\n  "data": {\n    "processed": true\n  }, ...\n}`
  - `python3 sources/rjm/.claude/skills/skillforge/assets/templates/script-template.py nonexistent.json` -> exit code 1
    stdout: `Failed: Input file not found: nonexistent.json\n  Error: File not found: nonexistent.json`
- documented exit codes vs. actual exit paths:
  - Documented:
    "0  - Success" — .claude/skills/skillforge/assets/templates/script-template.py:20
    "1  - General failure" — .claude/skills/skillforge/assets/templates/script-template.py:21
    "2  - Invalid arguments" — .claude/skills/skillforge/assets/templates/script-template.py:22
    "3  - File not found" — .claude/skills/skillforge/assets/templates/script-template.py:23
    "10 - Validation failure" — .claude/skills/skillforge/assets/templates/script-template.py:24
    "11 - Verification failure" — .claude/skills/skillforge/assets/templates/script-template.py:25
  - Actual exit paths:
    "sys.exit(11)" — .claude/skills/skillforge/assets/templates/script-template.py:291
    "sys.exit(0 if result.success else 1)" — .claude/skills/skillforge/assets/templates/script-template.py:318
    Exit code 2 is standard behavior generated by `argparse` when required arguments are missing or invalid.
    Exit codes 3 and 10 are unhandled in code; missing files yield exit code 1 via line 318.
- for validators/gates: can exit 11 on verification failure; default dummy process exits 0 on existing input files.
- does output match documentation: Yes, execution output formats match documented specifications, with discrepancy on exit codes 3 and 10.

## Defects — required
- `exit-code-mismatch`: Docstring documents exit code 3 for "File not found" and 10 for "Validation failure" (.claude/skills/skillforge/assets/templates/script-template.py:23,24), but missing files exit with code 1 at line 318 (`sys.exit(0 if result.success else 1)`) and exit code 10 is never returned in code.

## Observations
- Demonstrates robust state recovery in `load_state()` by renaming corrupted JSON files to `.json.bak` and returning a clean default state dictionary (.claude/skills/skillforge/assets/templates/script-template.py:113-119).
- Employs atomic write operations via temporary files (`.json.tmp` renamed to target path) in `save_state()` (.claude/skills/skillforge/assets/templates/script-template.py:137-140).

## Context cost
8733 bytes (approx. 2183 tokens).
