---
package: rjm
path: scripts/validate_workflows.py
type: script
bytes: 27795
unit: inv-rjm-271
in_scope_via: docs/WORKFLOW-VALIDATION.md
aliases: []
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_workflows.py

## Purpose — required, verbatim
> "Validate GitHub Actions workflows locally before pushing." — scripts/validate_workflows.py:3

## Design intent — required
Enforces syntactic correctness, structural validity, supply-chain security hardening, and orchestration size constraints across GitHub Actions workflow and action definition files (`.github/workflows/*.yml`, `.github/actions/*/action.yml`) before changes are pushed to remote branches. It prevents broken CI pipelines and command-injection vulnerabilities by implementing a multi-tiered validation pipeline: strict YAML syntax verification via a custom `_StrictLoader` that disallows duplicate mapping keys (preventing silent duplicate-key overwrites where GitHub would reject the workflow at dispatch time); verification of required fields (`name`, `on`, `jobs`) and runnable targets (`runs-on` or `uses`); enforcement of ADR-006 supply-chain defense requiring full 40-character hex SHA pinning for third-party actions and reusable workflows; detection of expression injection risks where unsanitized GitHub context expressions (`${{ ... }}`) are interpolated directly into shell `run:` blocks rather than passed via step environment variables; detection of silent string truncation caused by unquoted `#` comment markers in scalar values; and enforcement of ADR-006's thin-orchestration size guideline warning when workflow files exceed 100 non-comment code lines.

## Phase — required
none

## Inputs — required
- Positional CLI argument `files`: Specific workflow or action files to validate (default: all) — scripts/validate_workflows.py:598
- CLI flag `--changed`: Restricts validation to workflow and action files modified or untracked in the git working tree — scripts/validate_workflows.py:601
- CLI flag `--act`: Executes workflow validation using external tool `act` if installed — scripts/validate_workflows.py:603
- Workflow directory files: `workflows` directory (`*.yml` and `*.yaml`) — scripts/validate_workflows.py:72
- Composite action files: `actions` directory (`*/action.yml`) — scripts/validate_workflows.py:73
- Git working tree status via subprocess calls in `get_changed_workflows` — scripts/validate_workflows.py:513

## Outputs — required
- Standard output reporting validation progress, file validation status, warnings (`⚠️  Warnings:`), and errors (`❌ Errors:`) — scripts/validate_workflows.py:477, 581-591
- Standard error reporting missing dependency warnings (PyYAML) or file read failures — scripts/validate_workflows.py:34, 455, 632
- Exit code 0: All validations passed — scripts/validate_workflows.py:19, 647
- Exit code 1: Validation errors found — scripts/validate_workflows.py:20, 647
- Exit code 2: Script error (missing dependencies like PyYAML) — scripts/validate_workflows.py:21, 35

## Invokes — required
none

## Invoked by — required
- doc WORKFLOW-VALIDATION.md — docs/WORKFLOW-VALIDATION.md:10
- script README.md — scripts/README.md:132

## Concepts named — required, verbatim
- `ADR-006` — scripts/validate_workflows.py:9 — used here
- `act` — scripts/validate_workflows.py:16 — used here
- `_StrictLoader` — scripts/validate_workflows.py:38 — defined here
- `_no_duplicate_keys` — scripts/validate_workflows.py:42 — defined here
- `WorkflowValidator` — scripts/validate_workflows.py:67 — defined here
- `validate_yaml_syntax` — scripts/validate_workflows.py:77 — defined here
- `validate_workflow_structure` — scripts/validate_workflows.py:101 — defined here
- `_validate_jobs_are_runnable` — scripts/validate_workflows.py:120 — defined here
- `validate_action_pinning` — scripts/validate_workflows.py:140 — defined here
- `_check_pinned` — scripts/validate_workflows.py:166 — defined here
- `validate_workflow_size` — scripts/validate_workflows.py:202 — defined here
- `validate_concurrency` — scripts/validate_workflows.py:216 — defined here
- `validate_permissions` — scripts/validate_workflows.py:226 — defined here
- `_SAFE_EXPRESSION_HEADS` — scripts/validate_workflows.py:278 — defined here
- `_DERIVED_EXPRESSION_PREFIXES` — scripts/validate_workflows.py:323 — defined here
- `_CONTEXT_REFERENCE` — scripts/validate_workflows.py:338 — defined here
- `_classify_expression` — scripts/validate_workflows.py:343 — defined here
- `validate_expression_injection` — scripts/validate_workflows.py:371 — defined here
- `_check_job_expressions` — scripts/validate_workflows.py:394 — defined here
- `_UNQUOTED_HASH_SCALAR` — scripts/validate_workflows.py:441 — defined here
- `validate_name_truncation` — scripts/validate_workflows.py:445 — defined here
- `validate_file` — scripts/validate_workflows.py:470 — defined here
- `get_changed_workflows` — scripts/validate_workflows.py:513 — defined here
- `run_act` — scripts/validate_workflows.py:559 — defined here
- `print_results` — scripts/validate_workflows.py:578 — defined here
- `main` — scripts/validate_workflows.py:594 — defined here

## Structure
- Shebang and module docstring — scripts/validate_workflows.py:1-22
- Dependency imports and PyYAML availability guard — scripts/validate_workflows.py:24-36
- Strict YAML loader and duplicate mapping key rejector — scripts/validate_workflows.py:38-65
- WorkflowValidator class definition and initialization — scripts/validate_workflows.py:67-76
- YAML syntax validation — scripts/validate_workflows.py:77-100
- Workflow structure and runnable job validation — scripts/validate_workflows.py:101-139
- Action and reusable workflow SHA pinning validation — scripts/validate_workflows.py:140-201
- Workflow size validation for ADR-006 thin orchestration — scripts/validate_workflows.py:202-215
- Concurrency group validation — scripts/validate_workflows.py:216-225
- Top-level and job-level permissions validation — scripts/validate_workflows.py:226-245
- GitHub expression injection detection and taint tracking — scripts/validate_workflows.py:247-436
- Unquoted comment marker truncation detection — scripts/validate_workflows.py:437-469
- Single workflow file validation orchestrator — scripts/validate_workflows.py:470-512
- Git working tree changed workflows discovery — scripts/validate_workflows.py:513-558
- External act runner execution — scripts/validate_workflows.py:559-577
- Validation results printer — scripts/validate_workflows.py:578-592
- CLI argument parsing and main execution entry point — scripts/validate_workflows.py:594-652

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate_workflows.py`, language: Python 3, lines: 652
- documented invocation:
  - "uv run python scripts/validate_workflows.py" — scripts/validate_workflows.py:13
- executed: yes
- actual command run: `uv run python scripts/validate_workflows.py`
- abridged stdout:
```
Validating: .github/workflows/validate-vendor-portability.yml
Validating: .github/workflows/rjmurillo-bot.yml
...
⚠️  Warnings:
  /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/workflows/pytest.yml: Workflow has 500 lines of code (ADR-006 recommends ≤100 for thin orchestration)
...
✅ All validations passed
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0: All validations passed" — scripts/validate_workflows.py:19
  - "1: Validation errors found" — scripts/validate_workflows.py:20
  - "2: Script error (missing dependencies, etc.)" — scripts/validate_workflows.py:21
  - Actual exit paths:
    - line 35: `sys.exit(2)` when `import yaml` raises `ImportError`
    - line 615: `return 0` in `main()` when `--changed` finds no changed files
    - line 626: `return 0` in `main()` when no workflow files are located
    - line 647: `return 0 if all_valid else 1` in `main()` based on validation results
    - line 651: `sys.exit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exits 1 on validation errors or 2 on missing dependencies)
  - Verified on repository default branch: passes with exit code 0 (reporting 14 warnings for workflows exceeding 100 lines)
- does output match what the documentation claims: yes, validates all workflow files and composite actions, reporting syntax, pinning, permissions, and size warnings as documented

## Defects — required
none

## Observations
- Implements a sophisticated expression injection analyzer with an allowlist of safe GitHub-generated heads (`_SAFE_EXPRESSION_HEADS`) and single-hop taint propagation for step outputs published to `$GITHUB_OUTPUT`.
- Implements raw-text inspection before YAML loading (`_UNQUOTED_HASH_SCALAR`) to catch unquoted `#` in `name:` or `description:`, which YAML parses as comments and silently truncates.
- Uses `_StrictLoader` subclassing `yaml.SafeLoader` to catch duplicate mapping keys in YAML files, preventing subtle workflow bugs where duplicate `jobs:` sections silently overwrite each other.

## Context cost
27795 bytes, 652 lines, ~6950 tokens.
