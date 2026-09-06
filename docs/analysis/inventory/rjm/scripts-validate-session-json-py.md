---
package: rjm
path: scripts/validate_session_json.py
type: script
bytes: 70298
unit: inv-rjm-269
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_session_json.py

## Purpose — required, verbatim
> "Validate a session log against the committed JSON Schema and protocol rules." — scripts/validate_session_json.py:2

## Design intent — required
Automates governance, schema validation, and semantic protocol enforcement for session logs across the repository. A session log is the primary record of an agent's execution, capturing branch identity, starting/ending commits, checklist compliance, and QA bindings. The script separates shape validation (delegated to `.agents/schemas/session-log.schema.json` via `jsonschema`) from protocol meaning (verifying non-empty evidence, detecting contradiction tokens in completion claims, checking branch/commit reachability, and verifying QA report bindings). Without this script, agent sessions could record malformed or contradictory logs, fabricate compliance, or reference orphaned commits and reports, breaking downstream tooling such as episode extraction, retrospective generation, pre-commit gates, and CI validation.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments:
  - `session_path` — scripts/validate_session_json.py:1526: Path to the session log JSON file
  - `--pre-commit` — scripts/validate_session_json.py:1531: Suppress verbose output when called from pre-commit hook
  - `--existing-log` — scripts/validate_session_json.py:1536: Skip protocol-compliance and evidence-agreement checks; validate schema and shape only
  - `--creation-mode` — scripts/validate_session_json.py:1545: Validate freshly created log without protocol-compliance checks
  - `--scope-from-git` — scripts/validate_session_json.py:1556: Derive `--existing-log` status from git merge base with `origin/main`
  - `--session-log-identity` — scripts/validate_session_json.py:1565: Repository-relative logical session path for QA binding
  - `--validation-head` — scripts/validate_session_json.py:1572: Commit SHA to validate investigation-only scope through
  - `--json-output` — scripts/validate_session_json.py:1579: Path to write machine-readable JSON summary
- Schema definition:
  - `.agents/schemas/session-log.schema.json` — scripts/validate_session_json.py:6
- Session log file parsed via `json.loads` — scripts/validate_session_json.py:1401
- QA report files located under configured QA artifact root (`.agents/qa/`) — scripts/validate_session_json.py:946-958
- Git repository state queried via `subprocess.run`:
  - `rev-parse` — scripts/validate_session_json.py:912: Git revision verification
  - Scope detection via `session_log_is_new` — scripts/validate_session_json.py:1643
  - Commit ancestry and reachability via `commit_reachability_problem` — scripts/validate_session_json.py:687

## Outputs — required
- Process exit code:
  - `0` on validation success — scripts/validate_session_json.py:22, 1683
  - `1` on validation failure, invalid CLI path, parse error, or invalid session identity — scripts/validate_session_json.py:23, 1628, 1638, 1656, 1683, 1687
  - `2` on unexpected/fatal error — scripts/validate_session_json.py:24, 1690
- Formatted human-readable stdout/stderr:
  - `=== Session Validation ===` header and file path — scripts/validate_session_json.py:1437-1438
  - `[PASS] Session log is valid` — scripts/validate_session_json.py:1442
  - `[FAIL] Validation errors:` listing each error — scripts/validate_session_json.py:1450-1452
  - `[WARN] Warnings:` listing non-fatal warnings — scripts/validate_session_json.py:1456-1458
  - Compact pre-commit error message `Session validation FAILED:` — scripts/validate_session_json.py:1445
- Machine-readable JSON summary emitted when `--json-output PATH` is provided — scripts/validate_session_json.py:1591-1612, 1681

## Invokes — required
- script paths — scripts/validate_session_json.py:52
- script qa_report — scripts/validate_session_json.py:53
- script scripts.utils.path_validation — scripts/validate_session_json.py:59
- script scripts.validation.models — scripts/validate_session_json.py:60
- script scripts.validation.session_scope — scripts/validate_session_json.py:61
- file .agents/schemas/session-log.schema.json — scripts/validate_session_json.py:6
- script test_docs_only_eligibility.py — scripts/validate_session_json.py:168
- script test_investigation_eligibility.py — scripts/validate_session_json.py:170

## Invoked by — required
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:7833
- script scripts/validation/session_scope.py — scripts/validation/session_scope.py:4
- script scripts/validation/checks_tooling.py — scripts/validation/checks_tooling.py:109
- doc scripts/README.md — scripts/README.md:40
- doc scripts/AGENTS.md — scripts/AGENTS.md:240
- doc CONTRIBUTING.md — CONTRIBUTING.md:703
- doc README.md — README.md:251
- doc docs/getting-started.md — docs/getting-started.md:166
- doc docs/autonomous-issue-development.md — docs/autonomous-issue-development.md:437
- skill src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md — src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md:28
- skill src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md — src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md:101
- skill src/copilot-cli/skills/ai-agents-validation-and-qa/SKILL.md — src/copilot-cli/skills/ai-agents-validation-and-qa/SKILL.md:187

## Concepts named — required, verbatim
- `.agents/schemas/session-log.schema.json` — scripts/validate_session_json.py:6 — used here
- `ADR-042` — scripts/validate_session_json.py:19 — used here
- `ADR-035` — scripts/validate_session_json.py:26 — used here
- `ValidationResult` — scripts/validate_session_json.py:60 — used here
- `BRANCH_PATTERN` — scripts/validate_session_json.py:101 — defined here
- `COMMIT_SHA_PATTERN` — scripts/validate_session_json.py:104 — defined here
- `SESSION_START_REQUIRED_ITEMS` — scripts/validate_session_json.py:134 — defined here
- `serenaActivated` — scripts/validate_session_json.py:136 — used here
- `serenaInstructions` — scripts/validate_session_json.py:137 — used here
- `handoffRead` — scripts/validate_session_json.py:138 — used here
- `sessionLogCreated` — scripts/validate_session_json.py:139 — used here
- `skillScriptsListed` — scripts/validate_session_json.py:140 — used here
- `usageMandatoryRead` — scripts/validate_session_json.py:141 — used here
- `constraintsRead` — scripts/validate_session_json.py:142 — used here
- `memoriesLoaded` — scripts/validate_session_json.py:143 — used here
- `branchVerified` — scripts/validate_session_json.py:144 — used here
- `notOnMain` — scripts/validate_session_json.py:145 — used here
- `SESSION_END_REQUIRED_ITEMS` — scripts/validate_session_json.py:150 — defined here
- `checklistComplete` — scripts/validate_session_json.py:152 — used here
- `handoffPreserved` — scripts/validate_session_json.py:153 — used here
- `serenaMemoryUpdated` — scripts/validate_session_json.py:154 — used here
- `markdownLintRun` — scripts/validate_session_json.py:155 — used here
- `qaValidation` — scripts/validate_session_json.py:156 — used here
- `changesCommitted` — scripts/validate_session_json.py:157 — used here
- `validationPassed` — scripts/validate_session_json.py:158 — used here
- `_QA_SKIP_CHECKERS` — scripts/validate_session_json.py:167 — defined here
- `_QA_SKIP_EVIDENCE` — scripts/validate_session_json.py:174 — defined here
- `CONTRADICTION_PATTERNS` — scripts/validate_session_json.py:177 — defined here
- `_SCOPE_QUALIFIED_TOKENS` — scripts/validate_session_json.py:189 — defined here
- `_LEGACY_HANDOFF_FIELD` — scripts/validate_session_json.py:254 — defined here
- `handoffNotUpdated` — scripts/validate_session_json.py:254 — used here
- `count_must_failures` — scripts/validate_session_json.py:324 — defined here
- `validate_session_section` — scripts/validate_session_json.py:337 — defined here
- `validate_evidence_agrees_with_session` — scripts/validate_session_json.py:621 — defined here
- `validate_must_item` — scripts/validate_session_json.py:780 — defined here
- `validate_checklist_section` — scripts/validate_session_json.py:838 — defined here
- `validate_session_start` — scripts/validate_session_json.py:876 — defined here
- `validate_session_end` — scripts/validate_session_json.py:886 — defined here
- `validate_qa_report_evidence` — scripts/validate_session_json.py:927 — defined here
- `ADR-102` — scripts/validate_session_json.py:968 — used here
- `ADR-096` — scripts/validate_session_json.py:978 — used here
- `validate_protocol_compliance` — scripts/validate_session_json.py:999 — defined here
- `validate_against_schema` — scripts/validate_session_json.py:1044 — defined here
- `validate_session_log` — scripts/validate_session_json.py:1116 — defined here
- `validate_qa_skip_scope` — scripts/validate_session_json.py:1269 — defined here
- `validate_filename_number` — scripts/validate_session_json.py:1330 — defined here
- `report_results` — scripts/validate_session_json.py:1422 — defined here
- `build_summary` — scripts/validate_session_json.py:1591 — defined here
- `main` — scripts/validate_session_json.py:1614 — defined here

## Structure
none (standalone Python script with modular validation functions: `_check_date_time`, `get_case_insensitive`, `has_case_insensitive`, `count_must_failures`, `validate_session_section`, `_token_in_parentheses`, `_is_scope_qualified`, `_is_numeric_test_count`, `_has_contradiction`, `_same_commit`, `_evidence_of`, `_flatten_checklist`, `_contradicted_branches`, `validate_evidence_agrees_with_session`, `_validate_required_item_level`, `validate_must_item`, `validate_checklist_section`, `validate_session_start`, `validate_session_end`, `_resolve_full_commit`, `validate_qa_report_evidence`, `validate_protocol_compliance`, `_load_schema`, `_describe`, `validate_against_schema`, `validate_session_log`, `_qa_skip_claim`, `_scope_payload`, `validate_qa_skip_scope`, `filename_session_number`, `validate_filename_number`, `load_session_file`, `report_results`, `_repo_relative`, `_session_roots`, `_validate_session_path`, `_session_identity`, `_session_identity_override`, `parse_args`, `build_summary`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate_session_json.py`, language: Python 3, lines: 1695
- documented invocation:
  - "uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json" — scripts/AGENTS.md:264
  - "uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json --pre-commit" — scripts/AGENTS.md:267
  - "uv run python scripts/validate_session_json.py .agents/sessions/2025-12-17-session-01.json" — scripts/README.md:48
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Command: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json`
    stdout: (empty)
    stderr: `ERROR: Session file not found: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/sessions/2025-12-18-session-24.json`
    exit code: 1
  - Command: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json`
    stdout:
    ```
    === Session Validation ===
    File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/sessions/2025-12-18-session-24-component-agents-docs.json

    [FAIL] Validation errors:
      - Schema: (root): 'schemaVersion' is a required property
      - Incomplete MUST: sessionStart.usageMandatoryRead
      - Incomplete MUST: sessionStart.notOnMain
      ...
    ```
    exit code: 1
  - Command: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json --existing-log`
    stdout:
    ```
    === Session Validation ===
    File: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/sessions/2025-12-18-session-24-component-agents-docs.json

    [PASS] Session log is valid

    [WARN] Warnings:
      - Branch '`feat/ai-agent-workflow`' doesn't follow conventional naming
    ```
    exit code: 0
  - Command: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json --existing-log --pre-commit`
    stdout: (empty)
    exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "0  - Success: Session log is valid" — scripts/validate_session_json.py:22
    - "1  - Error: Session log validation failed (invalid JSON, missing fields, or schema violations)" — scripts/validate_session_json.py:23
    - "2  - Error: Unexpected error" — scripts/validate_session_json.py:24
  - Actual exit paths:
    - `return 1` on invalid CLI session path — scripts/validate_session_json.py:1628
    - `return 1` on session file I/O or JSON syntax error — scripts/validate_session_json.py:1638
    - `return 1` on invalid session identity override — scripts/validate_session_json.py:1656
    - `return 0 if result.is_valid else 1` on validation outcome — scripts/validate_session_json.py:1683
    - `return 1` on keyboard interrupt — scripts/validate_session_json.py:1687
    - `return 2` on fatal unexpected exception — scripts/validate_session_json.py:1690
    - `sys.exit(main())` process exit — scripts/validate_session_json.py:1694
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Yes, it exits non-zero (exit code 1) on invalid JSON, schema violations, incomplete MUST items, contradictory evidence, or missing files. On the source repo's default branch, running on older session logs without `--existing-log` fails with exit code 1 because older logs lack newer schema properties or cite squash-merged commits unreachable from HEAD; running with `--existing-log` passes with exit code 0.
- does the output match what the documentation claims? one line:
  - Partially: output messages match `[PASS]` and `[FAIL]` format, but documented invocations cite nonexistent session file paths and claim missing files produce warnings rather than exit code 1 errors.

## Defects — required
- missing-path · scripts/README.md:48 · Documented invocation example references `.agents/sessions/2025-12-17-session-01.json`, which does not exist as named on disk (the committed file is named `2025-12-17-session-01-mcp-config-research.json`).
- missing-path · scripts/AGENTS.md:264 · Documented invocation example references `.agents/sessions/2025-12-18-session-24.json`, which does not exist as named on disk (the committed file is named `2025-12-18-session-24-component-agents-docs.json`).
- doc-drift · scripts/AGENTS.md:258 · Documentation states that the `endingCommit reachable` check is level `SHOULD` with "Warning, not an error", but `scripts/validate_session_json.py:701-705` appends to `result.errors` (causing validation failure and exit code 1).
- doc-drift · scripts/AGENTS.md:277 · Error handling table asserts that `validate_session_json.py` responds to "Session not found" with "Warning, continue", whereas `scripts/validate_session_json.py:1637-1638` prints an error to stderr and exits with code 1.
- doc-drift · src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md:101 · Documentation states the `_QA_SKIP_CHECKERS` dispatch table is located at "lines 166-169", whereas it is defined at `scripts/validate_session_json.py:167-173`.

## Observations
- Demonstrates rigorous defense against subtle validation evasion: closes the demotion bypass (issue #3747) where authors could demote a MUST item to SHOULD to silence incomplete checks; validates timestamp offsets against UTC+14 physical host limits; rejects contradictory evidence tokens (like "deferred" or "pending") unless separated by clause boundaries after affirmative completions; and exempts pytest numeric counts ("21 skipped") from false positives.
- Implements two-layer validation architecture: JSON Schema (`session-log.schema.json`) owns structural shape and types, while Python logic owns semantic meaning and protocol contracts.
- Provides differentiated validation modes: `--existing-log` for validating historical committed records without demanding retroactive checklist execution, and `--creation-mode` for initializing fresh session logs before execution occurs.

## Context cost
- File size: 70,298 bytes (1,695 lines, ~17,575 tokens).
- Loaded dependencies: `.agents/schemas/session-log.schema.json` (10,334 bytes), `.claude/lib/paths.py` (9,455 bytes), `.claude/lib/qa_report.py` (10,723 bytes), `scripts/utils/path_validation.py` (4,486 bytes), `scripts/validation/models.py` (907 bytes), `scripts/validation/session_scope.py` (14,205 bytes). Total loaded context: ~120,408 bytes (~30,100 tokens).
