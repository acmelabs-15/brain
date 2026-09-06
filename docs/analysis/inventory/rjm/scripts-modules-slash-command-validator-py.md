---
package: rjm
path: scripts/modules/slash_command_validator.py
type: script
bytes: 2500
unit: inv-rjm-254
in_scope_via: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py
aliases: []
memo_inputs:
  - {path: scripts/modules/slash_command_validator.py, sha256: b2263f8d242bd1a006e15dc1725c0c36f2c7cb7e03811acdb2b400ee50a5b957}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/modules/slash_command_validator.py

## Purpose — required, verbatim
> "Module for slash command validation (ADR-006: logic in modules, not workflows)." — scripts/modules/slash_command_validator.py:1

## Design intent — required
Extracts slash-command frontmatter validation logic out of CI workflow YAML into a reusable Python module in accordance with ADR-006. Inspects all `.claude/commands/*.md` files, filters out catalog/index files, and executes `validate_slash_command` from the `slashcommandcreator` skill with markdownlint disabled to avoid whole-repository linting overhead on single-file checks.

## Phase — required
rjm:test

## Inputs — required
- Commands directory: `commands_dir = Path(".claude/commands")` — scripts/modules/slash_command_validator.py:28
- Excluded catalog files set: `catalog_files = {"README.md", "INDEX.md", "CATALOG.md", "CLAUDE.md"}` — scripts/modules/slash_command_validator.py:33

## Outputs — required
- Validation report message: "[PASS] All slash commands passed quality gates" — scripts/modules/slash_command_validator.py:81
- Process exit codes: "0 if all pass, 1 if any fail." — scripts/modules/slash_command_validator.py:26

## Invokes — required
- script validate_slash_command — scripts/modules/slash_command_validator.py:56

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/modules/slash_command_validator.py:1 — used here
- `slash command validation` — scripts/modules/slash_command_validator.py:1 — defined here | used here
- `invoke_slash_command_validation` — scripts/modules/slash_command_validator.py:18 — defined here
- `commands_dir` — scripts/modules/slash_command_validator.py:28 — defined here
- `catalog_files` — scripts/modules/slash_command_validator.py:33 — defined here
- `validate_slash_command` — scripts/modules/slash_command_validator.py:56 — used here
- `failed_files` — scripts/modules/slash_command_validator.py:58 — defined here

## Structure
- Module docstring and ADR-006 declaration — scripts/modules/slash_command_validator.py:1
- Validator search path setup — scripts/modules/slash_command_validator.py:9
- invoke_slash_command_validation batch validator function — scripts/modules/slash_command_validator.py:18

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/modules/slash_command_validator.py`
- **language:** Python
- **lines:** 83
- **documented invocation:**
  `invoke_slash_command_validation` — scripts/modules/slash_command_validator.py:18
- **executed:** yes
- **actual command:** `python3 -c "import sys; sys.path.insert(0, '.'); from scripts.modules.slash_command_validator import invoke_slash_command_validation; sys.exit(invoke_slash_command_validation())"`
- **actual stdout:**
```text
Found 25 slash command file(s) to validate (excluding catalog files)

Validating: .claude/commands/push-pr.md
Validating: .claude/commands/validate-pr-description.md
Validating: .claude/commands/context-hub-setup.md
Validating: .claude/commands/ship.md
Validating: .claude/commands/retro.md
Validating: .claude/commands/checkpoint.md
Validating: .claude/commands/pr-autofix.md
Validating: .claude/commands/research.md
Validating: .claude/commands/build.md
Validating: .claude/commands/sync.md
Validating: .claude/commands/plan.md
Validating: .claude/commands/spec.md
Validating: .claude/commands/test.md
Validating: .claude/commands/pr-review.md
Validating: .claude/commands/forgetful/memory-search.md
Validating: .claude/commands/forgetful/memory-save.md
Validating: .claude/commands/forgetful/memory-list.md
Validating: .claude/commands/forgetful/memory-explore.md
Validating: .claude/commands/pr-quality/architect.md
Validating: .claude/commands/pr-quality/analyst.md
Validating: .claude/commands/pr-quality/qa.md
Validating: .claude/commands/pr-quality/roadmap.md
Validating: .claude/commands/pr-quality/all.md
Validating: .claude/commands/pr-quality/devops.md
Validating: .claude/commands/pr-quality/security.md

[PASS] All slash commands passed quality gates
```
- **actual exit code:** 0
- **documented exit codes vs actual:**
  - `0 if all pass, 1 if any fail.` — scripts/modules/slash_command_validator.py:26 vs `return 0` — scripts/modules/slash_command_validator.py:31, 45, 82 and `return 1` — scripts/modules/slash_command_validator.py:79
- **gate check:** Can exit non-zero (returns 1 if any slash command fails quality checks). On default branch, all 25 slash commands pass (returns 0).
- **output match:** Output matches the batch validation reporting behavior.

## Defects — required
- orphan — scripts/modules/slash_command_validator.py:1 — No in-scope file invokes this validation module; referenced only in out-of-scope workflow .github/workflows/slash-command-quality.yml and test suite.

## Observations
Explicitly disables per-file markdownlint via `skip_lint=True` (scripts/modules/slash_command_validator.py:67) to prevent invoking global repository linting on single-file command checks.

## Context cost
2500 bytes, 83 lines, plus `validate_slash_command.py` (7549 bytes). Total ~10049 bytes, ~2350 tokens.
