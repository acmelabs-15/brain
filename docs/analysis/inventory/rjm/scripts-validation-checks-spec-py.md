---
package: rjm
path: scripts/validation/checks_spec.py
type: script
bytes: 18745
unit: inv-rjm-293
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_spec.py, sha256: bed5c9c7576b044b78beced69a17d00c1294f53b15b5253669813c66a0120c86}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_spec.py

## Purpose — required, verbatim
> "Spec, citation, and catalog gates for the pre-PR runner." — scripts/validation/checks_spec.py:2

## Design intent — required
Groups and modularizes Python-based specification, citation freshness, catalog consistency, and contradiction validation gates for the pre-PR runner, extracted from the monolithic `scripts/validation/pre_pr.py` (issue #2223). Without this module, pre-PR execution logic would either remain tightly coupled inside a single multi-thousand-line runner script or allow invalid PRs to break spec traceability, catalog drift, and documentation citations. The module wraps individual underlying validation scripts (such as `check_build_gates.py`, `check_spec_id_uniqueness.py`, `traceability.py`, `check_vendor_portability.py`, `check_skill_md_portability.py`, `check_rule_activation_coverage.py`, `validate_skill_shells.py`, `check_skill_skip_clauses.py`, `check_skill_memory_references.py`, `validate_sync_registry.py`, `validate_agent_catalog.py`, `check_canonical_citations.py`, `check_orchestrator_citations.py`, `spec_contradiction.py`, and `check_model_pins.py`), providing consistent subprocess execution, stdout/stderr formatting, output truncation, missing script skipping (`MissingScriptSkip`), and uniform boolean success/failure outcomes.

## Phase — required
none

## Inputs — required
- `repo_root` path parameter passed to each validation function representing the target repository root — scripts/validation/checks_spec.py:30
- Subprocess invocations of sibling Python scripts under `scripts/validation/` and `.agents/specs/`
- Environment variable `STRICT_CANONICAL_CHECK`: Controls whether canonical mirror citations produce soft warnings or hard failures — scripts/validation/checks_spec.py:309
- Git branch base ref resolved via `_resolve_branch_base_ref` — scripts/validation/checks_spec.py:131

## Outputs — required
- Standard output emitting validator log messages, truncated subprocess outputs, and sampled model pin reports — scripts/validation/checks_spec.py:48-50
- Standard error emitting error logs when validator scripts fail closed or are missing — scripts/validation/checks_spec.py:291-296
- Boolean return values (`True` for pass/warning, `False` for failure) — scripts/validation/checks_spec.py:50
- Exceptions: raises `MissingScriptSkip` when underlying validator scripts are missing from the repository — scripts/validation/checks_spec.py:40-42

## Invokes — required
- script checks_common — scripts/validation/checks_spec.py:23
- script check_build_gates.py — scripts/validation/checks_spec.py:38
- script check_spec_id_uniqueness.py — scripts/validation/checks_spec.py:60
- script traceability.py — scripts/validation/checks_spec.py:77
- script check_vendor_portability.py — scripts/validation/checks_spec.py:100
- script check_skill_md_portability.py — scripts/validation/checks_spec.py:125
- script check_rule_activation_coverage.py — scripts/validation/checks_spec.py:154
- script validate_skill_shells.py — scripts/validation/checks_spec.py:183
- script check_skill_skip_clauses.py — scripts/validation/checks_spec.py:207
- script check_skill_memory_references.py — scripts/validation/checks_spec.py:237
- script validate_sync_registry.py — scripts/validation/checks_spec.py:262
- script validate_agent_catalog.py — scripts/validation/checks_spec.py:289
- script check_canonical_citations.py — scripts/validation/checks_spec.py:316
- script check_orchestrator_citations.py — scripts/validation/checks_spec.py:346
- script spec_contradiction.py — scripts/validation/checks_spec.py:374
- script check_model_pins.py — scripts/validation/checks_spec.py:443

## Invoked by — required
- script checks_spec — scripts/validation/pre_pr_sequence.py:76
- script checks_spec — scripts/validation/pre_pr.py:114

## Concepts named — required, verbatim
- `validate_build_gates` — scripts/validation/checks_spec.py:30 — defined here
- `validate_spec_id_uniqueness` — scripts/validation/checks_spec.py:53 — defined here
- `validate_traceability` — scripts/validation/checks_spec.py:75 — defined here
- `validate_vendor_portability` — scripts/validation/checks_spec.py:92 — defined here
- `validate_skill_md_portability` — scripts/validation/checks_spec.py:115 — defined here
- `validate_rule_activation_coverage` — scripts/validation/checks_spec.py:142 — defined here
- `validate_skill_shells` — scripts/validation/checks_spec.py:171 — defined here
- `validate_skill_skip_clauses` — scripts/validation/checks_spec.py:198 — defined here
- `validate_skill_memory_references` — scripts/validation/checks_spec.py:222 — defined here
- `validate_sync_registry` — scripts/validation/checks_spec.py:253 — defined here
- `validate_agent_catalog` — scripts/validation/checks_spec.py:277 — defined here
- `validate_canonical_citations` — scripts/validation/checks_spec.py:306 — defined here
- `validate_orchestrator_citations` — scripts/validation/checks_spec.py:337 — defined here
- `validate_spec_contradiction` — scripts/validation/checks_spec.py:361 — defined here
- `_MODEL_PIN_BACKLOG_PREFIX` — scripts/validation/checks_spec.py:400 — defined here
- `_MODEL_PIN_BACKLOG_SAMPLE` — scripts/validation/checks_spec.py:401 — defined here
- `_print_model_pin_report` — scripts/validation/checks_spec.py:404 — defined here
- `validate_model_pins` — scripts/validation/checks_spec.py:432 — defined here
- `MissingScriptSkip` — scripts/validation/checks_spec.py:24 — used here
- `_resolve_branch_base_ref` — scripts/validation/checks_spec.py:25 — used here
- `_run_subprocess` — scripts/validation/checks_spec.py:26 — used here
- `STRICT_CANONICAL_CHECK` — scripts/validation/checks_spec.py:309 — used here

## Structure
- Shebang and module docstring — scripts/validation/checks_spec.py:1-12
- Imports and script directory path resolution — scripts/validation/checks_spec.py:14-27
- validate_build_gates function — scripts/validation/checks_spec.py:30-50
- validate_spec_id_uniqueness function — scripts/validation/checks_spec.py:53-72
- validate_traceability function — scripts/validation/checks_spec.py:75-89
- validate_vendor_portability function — scripts/validation/checks_spec.py:92-112
- validate_skill_md_portability function — scripts/validation/checks_spec.py:115-139
- validate_rule_activation_coverage function — scripts/validation/checks_spec.py:142-169
- validate_skill_shells function — scripts/validation/checks_spec.py:171-195
- validate_skill_skip_clauses function — scripts/validation/checks_spec.py:198-219
- validate_skill_memory_references function — scripts/validation/checks_spec.py:222-250
- validate_sync_registry function — scripts/validation/checks_spec.py:253-274
- validate_agent_catalog function — scripts/validation/checks_spec.py:277-303
- validate_canonical_citations function — scripts/validation/checks_spec.py:306-334
- validate_orchestrator_citations function — scripts/validation/checks_spec.py:337-358
- validate_spec_contradiction function — scripts/validation/checks_spec.py:361-397
- Model pin backlog formatting constants and helpers — scripts/validation/checks_spec.py:400-429
- validate_model_pins function — scripts/validation/checks_spec.py:432-452

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_spec.py`, language: Python 3, lines: 453
- documented invocation:
  - "Extracted from ``scripts/validation/pre_pr.py`` (issue #2223)." — scripts/validation/checks_spec.py:4
- executed: yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_spec.py`
- abridged stdout:
```
ModuleNotFoundError: No module named 'scripts'
```
- actual exit code: 1 (without PYTHONPATH); exit code 0 when run with `PYTHONPATH=. python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_spec.py` (silent library module execution)
- documented exit codes vs. actual exit paths in code:
  - Documented exit codes: none explicitly documented in module docstring; functions return `bool` (`True` or `False`) or raise `MissingScriptSkip`
  - Actual exit paths in code: no `sys.exit` calls present in module
- for validators/gates:
  - Can individual validation functions return `False` or fail? Yes: each function tests subprocess exit codes (`exit_code == 0`) and returns `False` on non-zero exits (e.g. scripts/validation/checks_spec.py:50, 72, 89, 112, 139, 167, 195, 219, 250, 274, 303, 334, 358, 452).
  - Does it fail on the source repo's own default branch? On the default branch, executing the gate functions via python (e.g. `validate_spec_id_uniqueness(Path('.'))`) succeeds and returns `True`.
- does the output match what the documentation claims? yes; functions wrap child validators and return boolean status as documented in function docstrings

## Defects — required
- `script-bug`: The script includes a shebang `#!/usr/bin/env python3` (line 1), but lacks repo root on `sys.path` (it only appends `_SCRIPT_DIR = Path(__file__).resolve().parent`, line 19), causing direct execution to fail with `ModuleNotFoundError: No module named 'scripts'` via `checks_common` -> `subprocess_runner` -> `scripts.cli_exec`.
- `exit-code-mismatch`: Despite having a shebang `#!/usr/bin/env python3` (line 1), the file contains no `if __name__ == "__main__":` entry point or CLI argument parsing; when run with `PYTHONPATH=.`, it exits 0 without running any checks.

## Observations
- Provides robust output throttling: validation functions limit echoed stdout/stderr to 40 or 80 lines (e.g., lines 48, 70, 87, 110, 137, 165, 193, 217, 248, 272, 301) to prevent noisy gate failures from flooding console logs.
- Features grandfathered debt handling: `_print_model_pin_report` (line 404) samples the first 10 grandfathered backlog entries (`_MODEL_PIN_BACKLOG_SAMPLE = 10`, line 401) before printing violations, preventing over 100 lines of existing backlog from obscuring new drift.
- Supports both soft-warning and strict modes: `validate_canonical_citations` inspects `STRICT_CANONICAL_CHECK` (line 309), defaulting to a non-blocking soft warning unless explicitly upgraded by CI.

## Context cost
18,745 bytes (~4,700 tokens). Loads `checks_common.py` (19,425 bytes), `subprocess_runner.py` (3,412 bytes), and subprocess child validator scripts when invoked.
