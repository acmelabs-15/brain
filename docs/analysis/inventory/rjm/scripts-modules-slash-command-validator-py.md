---
package: rjm
path: scripts/modules/slash_command_validator.py
type: script
bytes: 2500
unit: inv-rjm-254
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/modules/slash_command_validator.py, sha256: b2263f8d242bd1a006e15dc1725c0c36f2c7cb7e03811acdb2b400ee50a5b957}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/modules/slash_command_validator.py

## Purpose — required, verbatim
> "Module for slash command validation (ADR-006: logic in modules, not workflows)." — scripts/modules/slash_command_validator.py:1

## Design intent — required
Implements the ADR-006 architectural policy ("thin workflows, testable modules") by encapsulating batch slash command validation in a dedicated Python module rather than inlined CI workflow steps. It discovers all command definition files in `.claude/commands/`, skips non-command catalog files (`README.md`, `INDEX.md`, `CATALOG.md`, `CLAUDE.md`), and invokes `validate_slash_command` from the slashcommandcreator skill with `skip_lint=True` so that quality gates enforce frontmatter schema compliance without triggering redundant repository-wide markdown lint passes.

## Phase — required
cross-phase

## Inputs — required
- Markdown command definition files in `.claude/commands/`: "Runs validation on each .md file in .claude/commands/." — scripts/modules/slash_command_validator.py:21

## Outputs — required
- Validation progress and failure reports printed to stdout (scripts/modules/slash_command_validator.py:48-50, 75-78, 81)
- Integer exit code: "0 if all pass, 1 if any fail." — scripts/modules/slash_command_validator.py:26

## Invokes — required
- script validate_slash_command — scripts/modules/slash_command_validator.py:56

## Invoked by — required
- tests/test_slash_command_validator.py:8 — tests/test_slash_command_validator.py:8

## Concepts named — required, verbatim
- `ADR-006` — scripts/modules/slash_command_validator.py:1 — used here
- `_VALIDATOR_DIR` — scripts/modules/slash_command_validator.py:9 — defined here
- `invoke_slash_command_validation` — scripts/modules/slash_command_validator.py:18 — defined here
- `catalog_files` — scripts/modules/slash_command_validator.py:33 — defined here
- `validate_slash_command` — scripts/modules/slash_command_validator.py:56 — used here

## Structure
- Module docstring citing ADR-006 — scripts/modules/slash_command_validator.py:1
- Imports and validator path resolution — scripts/modules/slash_command_validator.py:3
- Validation execution function — scripts/modules/slash_command_validator.py:18
- Command file discovery and catalog exclusion — scripts/modules/slash_command_validator.py:28
- Dynamic validator import and execution loop — scripts/modules/slash_command_validator.py:52
- Verdict formatting and exit return — scripts/modules/slash_command_validator.py:74

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/modules/slash_command_validator.py`
- **language:** Python (python3)
- **lines:** 83
- **documented invocation:**
  - `python3 -c "import sys; sys.path.insert(0, 'scripts'); from modules.slash_command_validator import invoke_slash_command_validation; sys.exit(invoke_slash_command_validation())"`
- **executed:** yes
- **actual command run:** `python3 -c "import sys; sys.path.insert(0, 'scripts'); from modules.slash_command_validator import invoke_slash_command_validation; sys.exit(invoke_slash_command_validation())"`
- **abridged stdout:**
```
Found 25 slash command file(s) to validate (excluding catalog files)

Validating: .claude/commands/push-pr.md

Validating: .claude/commands/validate-pr-description.md

Validating: .claude/commands/context-hub-setup.md
...
[PASS] All slash commands passed quality gates
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 if all pass, 1 if any fail." — scripts/modules/slash_command_validator.py:26
  - Actual exit paths:
    - `return 0` — scripts/modules/slash_command_validator.py:31
    - `return 0` — scripts/modules/slash_command_validator.py:45
    - `return 1` — scripts/modules/slash_command_validator.py:79
    - `return 0` — scripts/modules/slash_command_validator.py:82
- **for validators/gates:**
  - Can exit non-zero: yes, returns 1 if `blocking_count > 0` on any command file.
  - Verified on repository default branch: returns 0 with all 25 slash command files passing validation.
- **does the output match what the documentation claims:** yes, validates all command files and reports PASS/FAIL summary.

## Defects — required
none

## Observations
- Dynamically injects `.claude/skills/slashcommandcreator/scripts` into `sys.path` to import `validate_slash_command`.
- Passes `skip_lint=True` to avoid triggering global markdownlint on all repository files.

## Context cost
2500 bytes, 83 lines, ~600 tokens.
