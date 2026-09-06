---
package: rjm
path: scripts/validation/checks_tooling.py
type: script
bytes: 22482
unit: inv-rjm-293
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_tooling.py

## Purpose — required, verbatim
> "External-tool validations for the pre-PR runner (extracted from" — scripts/validation/checks_tooling.py:8

## Design intent — required
Provides a centralized integration layer for external linters, formatters, and external-tool validation gates within the pre-PR pipeline (extracted from `pre_pr.py`, issue #2223). The module coordinates heterogeneous external tools (including Node.js `markdownlint-cli2`, GitHub Actions `actionlint`, Python `yamllint`, and `pytest`) alongside specialized child validation scripts (`validate_session_json.py`, `build/scripts/validate_path_normalization.py`, `build/scripts/validate_planning_artifacts.py`, `build/scripts/detect_agent_drift.py`, `check_copilot_version_pin.py`, `check_ci_dependency_pins.py`, and `instruction_budget.py`). Without this module, external tool invocations would lack critical guardrails against command-line length limits (e.g. Windows `cmd.exe` 8,191-character limits handled via batching and `_windows_command_length`), branch-scoping filters (`_filtered_targets` ensuring only modified files are linted to prevent blocking on pre-existing debt), non-fatal warning calibrations (e.g. yamllint and shellcheck severity floor adjustments), and safe environment degradations (`MissingScriptSkip` or tool-missing warnings when tools like `actionlint` or `npx` are absent in local or downstream environments).

## Phase — required
none

## Inputs — required
- `repo_root` path parameter representing the repository root — scripts/validation/checks_tooling.py:60
- Git branch changed files discovered via `git diff` against base ref
- Environment variables: `SKIP_AUTOFIX` (scripts/validation/checks_tooling.py:188) and `SHELLCHECK_OPTS` (scripts/validation/checks_tooling.py:397)
- External tool: `npx` — scripts/validation/checks_tooling.py:175
- External tool: `actionlint` — scripts/validation/checks_tooling.py:370
- External tool: `yamllint` — scripts/validation/checks_tooling.py:423
- External tool: `pytest` — scripts/validation/checks_tooling.py:593

## Outputs — required
- Formatted console messages reporting tool progress, lint counts, warnings, and errors — scripts/validation/checks_tooling.py:129
- Standard error emitting tool failure diagnostics — scripts/validation/checks_tooling.py:282
- Boolean return values (`True` for pass/warning, `False` for failure) — scripts/validation/checks_tooling.py:116
- Exceptions: raises `MissingScriptSkip` when underlying validator scripts are absent — scripts/validation/checks_tooling.py:55; raises `ValueError` if a markdownlint argument batch exceeds Windows command limits — scripts/validation/checks_tooling.py:262

## Invokes — required
- function _filtered_targets — scripts/validation/checks_tooling.py:31
- script checks_common — scripts/validation/checks_tooling.py:32
- function _is_vendored — scripts/validation/checks_tooling.py:37
- function _workflow_yaml_targets — scripts/validation/checks_tooling.py:38
- function new_session_logs — scripts/validation/checks_tooling.py:40
- script validate_session_json.py — scripts/validation/checks_tooling.py:139
- script validate_path_normalization.py — scripts/validation/checks_tooling.py:470
- script validate_planning_artifacts.py — scripts/validation/checks_tooling.py:477
- script detect_agent_drift.py — scripts/validation/checks_tooling.py:492
- script check_copilot_version_pin — scripts/validation/checks_tooling.py:514
- script check_ci_dependency_pins — scripts/validation/checks_tooling.py:534
- script instruction_budget — scripts/validation/checks_tooling.py:555
- script test_always_on_corpus_claims.py — scripts/validation/checks_tooling.py:583

## Invoked by — required
- script checks_tooling — scripts/validation/pre_pr_sequence.py:93
- script checks_tooling — scripts/validation/pre_pr.py:127

## Concepts named — required, verbatim
- `MARKDOWNLINT_CLI2_PACKAGE` — scripts/validation/checks_tooling.py:42 — defined here
- `MARKDOWNLINT_TARGET_BATCH_LIMIT` — scripts/validation/checks_tooling.py:43 — defined here
- `MARKDOWNLINT_COMMAND_LENGTH_LIMIT` — scripts/validation/checks_tooling.py:46 — defined here
- `_LINTED_COUNT_PATTERN` — scripts/validation/checks_tooling.py:49 — defined here
- `_require_script` — scripts/validation/checks_tooling.py:52 — defined here
- `_find_latest_session_log` — scripts/validation/checks_tooling.py:60 — defined here
- `_prepr_session_command` — scripts/validation/checks_tooling.py:76 — defined here
- `_changed_session_paths` — scripts/validation/checks_tooling.py:90 — defined here
- `validate_session_end` — scripts/validation/checks_tooling.py:106 — defined here
- `validate_markdown_lint` — scripts/validation/checks_tooling.py:168 — defined here
- `_markdown_lint_command` — scripts/validation/checks_tooling.py:217 — defined here
- `_windows_command_length` — scripts/validation/checks_tooling.py:228 — defined here
- `_markdown_lint_target_batches` — scripts/validation/checks_tooling.py:234 — defined here
- `_report_markdown_lint_failure` — scripts/validation/checks_tooling.py:274 — defined here
- `_linted_file_count` — scripts/validation/checks_tooling.py:288 — defined here
- `_report_selection` — scripts/validation/checks_tooling.py:294 — defined here
- `_print_capped` — scripts/validation/checks_tooling.py:324 — defined here
- `_markdown_lint_targets` — scripts/validation/checks_tooling.py:333 — defined here
- `_yaml_style_targets` — scripts/validation/checks_tooling.py:343 — defined here
- `validate_workflow_yaml` — scripts/validation/checks_tooling.py:355 — defined here
- `validate_yaml_style` — scripts/validation/checks_tooling.py:417 — defined here
- `_run_python_validator` — scripts/validation/checks_tooling.py:452 — defined here
- `validate_path_normalization` — scripts/validation/checks_tooling.py:467 — defined here
- `validate_planning_artifacts` — scripts/validation/checks_tooling.py:474 — defined here
- `validate_agent_drift` — scripts/validation/checks_tooling.py:481 — defined here
- `validate_copilot_version_pin` — scripts/validation/checks_tooling.py:508 — defined here
- `validate_ci_dependency_pins` — scripts/validation/checks_tooling.py:524 — defined here
- `validate_instruction_budget` — scripts/validation/checks_tooling.py:540 — defined here
- `validate_always_on_corpus_claims` — scripts/validation/checks_tooling.py:570 — defined here
- `_filtered_targets` — scripts/validation/checks_tooling.py:31 — used here
- `MissingScriptSkip` — scripts/validation/checks_tooling.py:33 — used here
- `_resolve_branch_base_ref` — scripts/validation/checks_tooling.py:34 — used here
- `_run_subprocess` — scripts/validation/checks_tooling.py:35 — used here
- `_is_vendored` — scripts/validation/checks_tooling.py:37 — used here
- `_workflow_yaml_targets` — scripts/validation/checks_tooling.py:38 — used here
- `new_session_logs` — scripts/validation/checks_tooling.py:40 — used here

## Structure
- Shebang, taste-lint suppression, and module docstring — scripts/validation/checks_tooling.py:1-12
- Imports, path resolution, and batch constants — scripts/validation/checks_tooling.py:14-50
- _require_script helper — scripts/validation/checks_tooling.py:52-58
- Session log discovery and command builders — scripts/validation/checks_tooling.py:60-104
- validate_session_end function — scripts/validation/checks_tooling.py:106-166
- validate_markdown_lint and batching infrastructure — scripts/validation/checks_tooling.py:168-322
- Output capping helper and target filtering — scripts/validation/checks_tooling.py:324-353
- validate_workflow_yaml function — scripts/validation/checks_tooling.py:355-415
- validate_yaml_style function — scripts/validation/checks_tooling.py:417-450
- _run_python_validator generic wrapper — scripts/validation/checks_tooling.py:452-465
- validate_path_normalization and validate_planning_artifacts — scripts/validation/checks_tooling.py:467-479
- validate_agent_drift function — scripts/validation/checks_tooling.py:481-506
- Pinned dependency and version validators — scripts/validation/checks_tooling.py:508-538
- validate_instruction_budget function — scripts/validation/checks_tooling.py:540-568
- validate_always_on_corpus_claims function — scripts/validation/checks_tooling.py:570-605

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_tooling.py`, language: Python 3, lines: 605
- documented invocation:
  - "External-tool validations for the pre-PR runner (extracted from" — scripts/validation/checks_tooling.py:8
- executed: yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_tooling.py`
- abridged stdout: empty (no output produced)
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented exit codes: none explicitly documented in module docstring; validation functions return `bool` (`True` or `False`) or raise `MissingScriptSkip`
  - Actual exit paths in code: no `sys.exit` calls present in module
- for validators/gates:
  - Can individual validation functions return `False` or fail? Yes: each validation function returns `False` when tools or subprocesses fail (e.g. scripts/validation/checks_tooling.py:165, 178, 203, 409, 464, 506, 568, 604).
  - Does it fail on the source repo's own default branch? On the default branch, running gates (e.g. `_markdown_lint_targets(Path('.'))` and `_workflow_yaml_targets(Path('.'))`) cleanly resolves base refs and reports 0 changed targets.
- does the output match what the documentation claims? yes; functions wrap external tools and child scripts, returning boolean status as documented in docstrings

## Defects — required
- `doc-drift`: In lines 8-10, the module docstring claims the module covers "Pester" ("session-log, Pester, markdownlint..."), but Pester validation was removed and expunged as part of ADR-042 PowerShell expungement, leaving no Pester validation function in this module.
- `other`: Contains an explicit file-size taste-lint suppression header (`# taste-lint: ignore file-size` — scripts/validation/checks_tooling.py:2) because its 605 lines exceed the project's 500-line limit, with lines 4-7 noting that "The real fix is splitting by area (issue #3073 scope), which is out of scope for adding a single gate."
- `exit-code-mismatch`: The script includes a shebang `#!/usr/bin/env python3` (line 1), but provides no CLI argument parser or `if __name__ == "__main__":` entry point, so direct invocation performs no validations and exits 0.

## Observations
- Sophisticated Windows command-line limit handling: `_markdown_lint_target_batches` (line 234) calculates rendered command length via `_windows_command_length` (line 228) and splits markdown targets into batches below `MARKDOWNLINT_COMMAND_LENGTH_LIMIT = 7500` (line 46) and `MARKDOWNLINT_TARGET_BATCH_LIMIT = 100` (line 43) to avoid `cmd.exe` 8,191-character limits.
- Differentiates between "clean" and "not linted": `_report_selection` (line 294) reads markdownlint file counts and warns when 0 files were selected due to `.markdownlint-cli2.yaml` ignore rules, clarifying that a pass means "not linted" rather than "clean".
- Advisory warning calibration: `validate_yaml_style` (line 417) treats yamllint findings as non-blocking warnings (always returns `True`, line 446), and `validate_workflow_yaml` sets `SHELLCHECK_OPTS="--severity=warning"` (lines 398-401) to prevent low-severity shellcheck hints from failing workflow validation.

## Context cost
22,482 bytes (~5,600 tokens). Loads `checks_changed_paths.py`, `checks_common.py`, `checks_dash.py`, `checks_workflow_targets.py`, and `session_scope.py`.
