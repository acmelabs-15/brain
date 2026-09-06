---
package: rjm
path: scripts/check_skill_exists.py
type: script
bytes: 5638
unit: inv-rjm-197
in_scope_via: scripts/AGENTS.md
aliases: []
memo_inputs:
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/check_skill_exists.py

## Purpose — required, verbatim
> "Check if a skill script exists for the specified operation and action." — scripts/check_skill_exists.py:2

## Design intent — required
Provides a fast, local filesystem check to verify whether an operational script exists for a requested GitHub operation (pr, issue, reactions, label, milestone) and action name before invoking agent workflow operations. Serves as a Phase 1.5 BLOCKING gate tool to prevent agent failures caused by attempting actions without supporting script implementations. Python port of `Check-SkillExists.ps1` per ADR-042.

## Phase — required
cross-phase

## Inputs — required
- Mutually exclusive CLI modes:
  - `--list-available`: "List all available skills instead of checking for a specific one" — scripts/check_skill_exists.py:110
  - `--operation`: "The operation type to check" — scripts/check_skill_exists.py:115
- Additional CLI options:
  - `--action`: "The action name to check for (uses substring matching)" — scripts/check_skill_exists.py:120
  - `--project-root`: "Project root directory (defaults to auto-detection)" — scripts/check_skill_exists.py:127
- Local filesystem directory hierarchy under `<project-root>/.claude/skills/github/scripts/<operation>/`

## Outputs — required
- Text emitted to stdout:
  - `"true"` (scripts/check_skill_exists.py:173) when a matching skill script is found
  - `"false"` (scripts/check_skill_exists.py:176) when no matching skill script exists
  - Formatted categorized list of scripts by operation when `--list-available` is invoked (scripts/check_skill_exists.py:55-58)
- Diagnostic error strings printed to stderr on invalid operations, missing parameters, or missing directory paths (scripts/check_skill_exists.py:82-83, 147, 155, 162)
- Process exit codes: 0 (skill found or list complete), 1 (skill not found or invalid arguments), 2 (fatal/unexpected error) (scripts/check_skill_exists.py:10-12, 158, 174, 177, 184)

## Invokes — required
- script path_validation — scripts/check_skill_exists.py:28

## Invoked by — required
- doc AGENTS.md — scripts/AGENTS.md:224
- doc check_skill_exists.py — scripts/README.md:166
- doc check_skill_exists.py — .agents/analysis/adr-045-inventory-audit.md:340

## Concepts named — required, verbatim
- `Phase 1.5 BLOCKING gate` — scripts/check_skill_exists.py:5 — used here
- `Check-SkillExists.ps1` — scripts/check_skill_exists.py:7 — used here
- `ADR-042` — scripts/check_skill_exists.py:7 — used here
- `ADR-035` — scripts/check_skill_exists.py:14 — used here
- `VALID_OPERATIONS` — scripts/check_skill_exists.py:31 — defined here
- `get_skill_base_path` — scripts/check_skill_exists.py:34 — defined here
- `list_available_skills` — scripts/check_skill_exists.py:46 — defined here
- `check_skill_exists` — scripts/check_skill_exists.py:60 — defined here
- `parse_args` — scripts/check_skill_exists.py:95 — defined here
- `main` — scripts/check_skill_exists.py:133 — defined here

## Structure
- Module docstring with gate context and exit codes (scripts/check_skill_exists.py:1-15)
- Standard library imports and project root setup (scripts/check_skill_exists.py:17-28)
- `VALID_OPERATIONS` constant set definition (scripts/check_skill_exists.py:31)
- `get_skill_base_path`: resolves `.claude/skills/github/scripts` (scripts/check_skill_exists.py:34-43)
- `list_available_skills`: discovers and prints scripts grouped by operation (scripts/check_skill_exists.py:46-58)
- `check_skill_exists`: glob matching on `*{action}*.py` (scripts/check_skill_exists.py:60-93)
- `parse_args`: CLI argument parser configuration (scripts/check_skill_exists.py:95-130)
- `main`: argument handling, path validation, execution, and error handling (scripts/check_skill_exists.py:133-185)
- Script entry point invocation (scripts/check_skill_exists.py:187-188)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/check_skill_exists.py`
- **language:** Python (python3)
- **lines:** 189
- **documented invocation:**
  - `python3 scripts/check_skill_exists.py --operation pr --action PRContext` — scripts/AGENTS.md:224
  - `python3 scripts/check_skill_exists.py --list-available` — scripts/AGENTS.md:227
- **executed:** yes
- **actual command run:** `python3 scripts/check_skill_exists.py --list-available`
- **abridged stdout:**
```
=== issue ===
  - check_existing_pr_for_issue
  - claim_issue
  - close_issue
  ...
=== pr ===
  - add_pr_review_thread_reply
  - audit_closing_claims
  ...
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: Skill found or list completed" — scripts/check_skill_exists.py:10
    - "1  - Error: Skill not found or invalid parameters" — scripts/check_skill_exists.py:11
    - "2  - Error: Unexpected error" — scripts/check_skill_exists.py:12
  - Actual code paths:
    - `return 0` — scripts/check_skill_exists.py:158
    - `return 0` — scripts/check_skill_exists.py:174
    - `return 1` — scripts/check_skill_exists.py:148
    - `return 1` — scripts/check_skill_exists.py:156
    - `return 1` — scripts/check_skill_exists.py:163
    - `return 1` — scripts/check_skill_exists.py:177
    - `return 1` — scripts/check_skill_exists.py:181
    - `return 2` — scripts/check_skill_exists.py:184
    - `sys.exit(main())` — scripts/check_skill_exists.py:188
  - Result: Documented exit codes match actual exit paths in code exactly.
- **for validators/gates:**
  - Can exit non-zero: Exits 1 when a requested skill does not exist or invalid parameters are provided; exits 2 on fatal errors.
  - Verified on repository: checking existing action `--operation pr --action context` exits 0 ("true"); checking non-existent action `--operation pr --action missing_action` exits 1 ("false").
- **does the output match what the documentation claims:** Partially; `--list-available` outputs the full skill inventory as claimed. However, the documented example in `scripts/AGENTS.md:224` (`--action PRContext`) outputs `false` (exit 1) rather than `true` (exit 0) due to case-sensitive glob matching against `get_pr_context.py`.

## Defects — required
- doc-drift · scripts/AGENTS.md:224 · The documented example `python3 scripts/check_skill_exists.py --operation pr --action PRContext` states it finds the skill (exit 0), but it actually returns `false` (exit 1) because `Path.glob(f"*{action}*.py")` at `scripts/check_skill_exists.py:91` is case-sensitive and the script file on disk is `get_pr_context.py`.

## Observations
- Scopes skill resolution strictly to `.claude/skills/github/scripts/<operation>` (scripts/check_skill_exists.py:43), so it validates GitHub-specific operational scripts rather than skills across the whole repository.
- Uses `validate_safe_path` from `scripts.utils.path_validation` (scripts/check_skill_exists.py:28, 167) to defensively prevent directory traversal attacks in `--operation`.

## Context cost
5638 bytes, 189 lines, ~1500 tokens (plus imported `scripts.utils.path_validation` 3102 bytes).
