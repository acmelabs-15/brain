---
package: rjm
path: .claude/skills/skillforge/scripts/validate-skill.py
type: script
bytes: 31236
unit: inv-rjm-165
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/validate-skill.py

## Purpose — required, verbatim
> "validate-skill.py - Structural validation for Claude Code skills" — .claude/skills/skillforge/scripts/validate-skill.py:3

The docstring states:
"Validates that a SKILL.md file meets the requirements defined in" — .claude/skills/skillforge/scripts/validate-skill.py:5
"SkillForge 4.1's quality standards." — .claude/skills/skillforge/scripts/validate-skill.py:6

## Design intent — required
Provides comprehensive structural validation and quality verification for Claude Code skills before packaging and distribution. It inspects skill directories and their `SKILL.md` documents against SkillForge 4.1 standards: verifying YAML frontmatter structure, allowed and required keys, naming conventions matching containing directories, description length and format, semver versions, tool permissions, and hook event configurations. It checks for required sections (Triggers, Process/Phases, Verification/Success Criteria, Anti-Patterns, H1 title, tables, Extension Points), mandates progressive-disclosure references for complex skills (>200 lines), and audits bundled Python scripts for shebangs, docstrings, argparse usage, explicit exit codes, error handling, and Result/ValidationResult patterns. Without this script, malformed frontmatter, broken directory structures, or substandard scripts would be deployed into the skill ecosystem, degrading agent reliability.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
- Positional CLI argument `<path-to-skill-directory>`: Path to target skill directory — .claude/skills/skillforge/scripts/validate-skill.py:9
- Primary skill file `SKILL.md` (or fallback `skill.md`) within the target directory — .claude/skills/skillforge/scripts/validate-skill.py:40
- Directory `references/` within target skill directory — .claude/skills/skillforge/scripts/validate-skill.py:599
- Directory `scripts/` and any `.py` script files within target skill directory — .claude/skills/skillforge/scripts/validate-skill.py:613, 642
- Optional import of `_constants.py` for shared property sets and regexes — .claude/skills/skillforge/scripts/validate-skill.py:165

## Outputs — required
- Standard output: Formatted validation report with check counts, error list, and warning list (`Skill Validation Report`) — .claude/skills/skillforge/scripts/validate-skill.py:789
- Process exit code: 0 if all checks pass (`len(self.errors) == 0`), 1 on validation error or invalid arguments (`sys.exit`) — .claude/skills/skillforge/scripts/validate-skill.py:825
- Programmatic return value: tuple `(passed: bool, report: str)` returned by `validate` — .claude/skills/skillforge/scripts/validate-skill.py:766

## Invokes — required
- script _constants — .claude/skills/skillforge/scripts/validate-skill.py:165
- file SKILL.md — .claude/skills/skillforge/scripts/validate-skill.py:40

## Invoked by — required
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:226
- doc docs/SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:324
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:6841
- reference .claude/skills/skillforge/references/script-integration-framework.md — .claude/skills/skillforge/references/script-integration-framework.md:319

## Concepts named — required, verbatim
- `Claude Code` — .claude/skills/skillforge/scripts/validate-skill.py:3 — used here
- `SkillForge` — .claude/skills/skillforge/scripts/validate-skill.py:6 — used here
- `SkillValidator` — .claude/skills/skillforge/scripts/validate-skill.py:20 — defined here
- `CWE-22` — .claude/skills/skillforge/scripts/validate-skill.py:24 — used here
- `Path traversal detected` — .claude/skills/skillforge/scripts/validate-skill.py:28 — defined here
- `_find_skill_md` — .claude/skills/skillforge/scripts/validate-skill.py:38 — defined here
- `load_skill` — .claude/skills/skillforge/scripts/validate-skill.py:46 — defined here
- `parse_frontmatter` — .claude/skills/skillforge/scripts/validate-skill.py:59 — defined here
- `_parse_frontmatter_fallback` — .claude/skills/skillforge/scripts/validate-skill.py:91 — defined here
- `check` — .claude/skills/skillforge/scripts/validate-skill.py:142 — defined here
- `validate_frontmatter` — .claude/skills/skillforge/scripts/validate-skill.py:161 — defined here
- `hyphen-case` — .claude/skills/skillforge/scripts/validate-skill.py:222 — defined here | used here
- `matches_directory` — .claude/skills/skillforge/scripts/validate-skill.py:235 — defined here
- `validate_allowed_tools` — .claude/skills/skillforge/scripts/validate-skill.py:323 — defined here
- `validate_hooks` — .claude/skills/skillforge/scripts/validate-skill.py:364 — defined here
- `PreToolUse` — .claude/skills/skillforge/scripts/validate-skill.py:384 — used here
- `PostToolUse` — .claude/skills/skillforge/scripts/validate-skill.py:384 — used here
- `Stop` — .claude/skills/skillforge/scripts/validate-skill.py:384 — used here
- `validate_triggers` — .claude/skills/skillforge/scripts/validate-skill.py:463 — defined here
- `CWE-94` — .claude/skills/skillforge/scripts/validate-skill.py:490 — used here
- `validate_process` — .claude/skills/skillforge/scripts/validate-skill.py:505 — defined here
- `validate_verification` — .claude/skills/skillforge/scripts/validate-skill.py:527 — defined here
- `validate_anti_patterns` — .claude/skills/skillforge/scripts/validate-skill.py:550 — defined here
- `validate_structure` — .claude/skills/skillforge/scripts/validate-skill.py:565 — defined here
- `validate_references_directory` — .claude/skills/skillforge/scripts/validate-skill.py:597 — defined here
- `validate_scripts_directory` — .claude/skills/skillforge/scripts/validate-skill.py:611 — defined here
- `_validate_script` — .claude/skills/skillforge/scripts/validate-skill.py:649 — defined here
- `_validate_script_documentation` — .claude/skills/skillforge/scripts/validate-skill.py:724 — defined here
- `validate` — .claude/skills/skillforge/scripts/validate-skill.py:766 — defined here
- `_format_report` — .claude/skills/skillforge/scripts/validate-skill.py:785 — defined here
- `main` — .claude/skills/skillforge/scripts/validate-skill.py:813 — defined here

## Structure
- Script docstring and usage — .claude/skills/skillforge/scripts/validate-skill.py:2
- Validator class definition `SkillValidator` — .claude/skills/skillforge/scripts/validate-skill.py:20
- Skill file locator `_find_skill_md` — .claude/skills/skillforge/scripts/validate-skill.py:38
- File loader `load_skill` — .claude/skills/skillforge/scripts/validate-skill.py:46
- Frontmatter parser `parse_frontmatter` — .claude/skills/skillforge/scripts/validate-skill.py:59
- Frontmatter fallback parser `_parse_frontmatter_fallback` — .claude/skills/skillforge/scripts/validate-skill.py:91
- Result recorder `check` — .claude/skills/skillforge/scripts/validate-skill.py:142
- Frontmatter validator `validate_frontmatter` — .claude/skills/skillforge/scripts/validate-skill.py:161
- Allowed tools validator `validate_allowed_tools` — .claude/skills/skillforge/scripts/validate-skill.py:323
- Hooks validator `validate_hooks` — .claude/skills/skillforge/scripts/validate-skill.py:364
- Triggers section validator `validate_triggers` — .claude/skills/skillforge/scripts/validate-skill.py:463
- Process section validator `validate_process` — .claude/skills/skillforge/scripts/validate-skill.py:505
- Verification section validator `validate_verification` — .claude/skills/skillforge/scripts/validate-skill.py:527
- Anti-patterns section validator `validate_anti_patterns` — .claude/skills/skillforge/scripts/validate-skill.py:550
- Document structure validator `validate_structure` — .claude/skills/skillforge/scripts/validate-skill.py:565
- References directory validator `validate_references_directory` — .claude/skills/skillforge/scripts/validate-skill.py:597
- Scripts directory validator `validate_scripts_directory` — .claude/skills/skillforge/scripts/validate-skill.py:611
- Script auditor `_validate_script` — .claude/skills/skillforge/scripts/validate-skill.py:649
- Script documentation validator `_validate_script_documentation` — .claude/skills/skillforge/scripts/validate-skill.py:724
- Orchestration method `validate` — .claude/skills/skillforge/scripts/validate-skill.py:766
- Report formatter `_format_report` — .claude/skills/skillforge/scripts/validate-skill.py:785
- CLI entrypoint `main` — .claude/skills/skillforge/scripts/validate-skill.py:813

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/validate-skill.py`
- language: Python (python3)
- lines: 830
- documented invocation:
  - `python validate-skill.py <path-to-skill-directory>` — .claude/skills/skillforge/scripts/validate-skill.py:9
  - `python validate-skill.py ~/.claude/skills/my-skill/` — .claude/skills/skillforge/scripts/validate-skill.py:10
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py sources/rjm/.claude/skills/skillforge`
- abridged stdout:
  ```text
  ============================================================
  Skill Validation Report: skillforge
  ============================================================

  File: sources/rjm/.claude/skills/skillforge/SKILL.md
  Checks: 69/79 passed

  ===========================ERRORS===========================
    ✗ user-invocable must be a boolean (got str)

  ==========================WARNINGS==========================
    ⚠ Unknown tool(s): ['']. Known tools: ['AskUserQuestion', 'Bash', 'Edit', 'Glob', 'Grep', 'NotebookEdit', 'Read', 'Task', 'TodoWrite', 'WebFetch', 'WebSearch', 'Write']. This may be intentional for custom tools.
    ⚠ Script init_skill.py should have error handling
    ⚠ Script frontmatter.py should have shebang and docstring
    ⚠ Script frontmatter.py should use explicit exit codes
    ⚠ Script frontmatter.py should have error handling
    ⚠ Script frontmatter.py should use Result/ValidationResult pattern
    ⚠ Script skill_modularity_audit.py should use explicit exit codes
    ⚠ Script check_docs_safety.py should use explicit exit codes
    ⚠ Script check_docs_safety.py should use Result/ValidationResult pattern

  ============================================================
  ```
- actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented in docstring: none explicitly documented in docstring (only usage lines given).
  - Actual exit paths in code:
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/validate-skill.py:818 (missing CLI arguments)
    - `sys.exit(0 if passed else 1)` — .claude/skills/skillforge/scripts/validate-skill.py:825 (0 on pass, 1 on fail)
    - Unhandled exception: `raise ValueError(f"Path traversal detected: {skill_path}")` — .claude/skills/skillforge/scripts/validate-skill.py:28 (uncaught in `main()`, exits 1 on unhandled exception)
- for validators/gates: can exit non-zero (exits 1 on validation error, missing arguments, or path traversal). Fails on source repo's default branch for `sources/rjm/.claude/skills/skillforge` with exit code 1 because the fallback YAML parser parses `user-invocable: true` as a string rather than a boolean when PyYAML is unavailable.
- does the output match what the documentation claims: partial (executes structural and script checks as claimed, but fails validation on the repository's own skills in standard Python environments lacking PyYAML).

## Defects — required
- `script-bug`: In `.claude/skills/skillforge/scripts/validate-skill.py:91-140`, `_parse_frontmatter_fallback` stores scalar values as raw strings without converting YAML booleans (`true`/`false`) to `bool` or parsing YAML list items (`- item`), causing `validate_frontmatter` at line 312 to fail with `user-invocable must be a boolean (got str)` and line 332 to evaluate `allowed-tools` as `['']`.
- `script-bug`: In `.claude/skills/skillforge/scripts/validate-skill.py:28`, `SkillValidator.__init__` raises `ValueError` on path traversal, but `main()` at line 821 does not catch this exception, resulting in an unhandled traceback instead of a structured error message when called with paths outside cwd.
- `doc-drift`: In `.claude/skills/skillforge/scripts/validate-skill.py:10`, usage example `python validate-skill.py ~/.claude/skills/my-skill/` triggers the CWE-22 check and crashes unless the current working directory is an ancestor of `~/.claude/skills/my-skill/`.
- `exit-code-mismatch`: Docstring lines 8-11 does not document exit codes (0 for pass, 1 for fail or error).

## Observations
- Implements CWE-22 path-traversal prevention at initialization (`cwd_real` containment check, lines 25-28) and CWE-94 command-injection mitigation on trigger phrases (lines 490-504) to block shell metacharacters.
- Contains comprehensive checks for Claude Code specific frontmatter features, including `context: fork`, agent types (`Explore`, `Plan`, `general-purpose`), `allowed-tools`, and hook configurations (`PreToolUse`, `PostToolUse`, `Stop`).
- Implements progressive-disclosure enforcement: warns when complex skills (>200 lines) lack a `references/` directory (lines 603-608).
- Checks consistency between skill `name` in frontmatter and the containing directory name (lines 230-238, citing agentskills.io specification and issue #4812).

## Context cost
31,236 bytes (approx. 7,800 tokens). May import `_constants.py` (3,038 bytes, ~750 tokens), giving a total combined cost of ~34.3 KB (~8,550 tokens).
