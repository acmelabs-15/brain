---
package: rjm
path: scripts/validate_pr_review_config.py
type: script
bytes: 15084
unit: inv-rjm-268
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_pr_review_config.py, sha256: 6ecb12ec366c7eabe944f9e19f33e45d830ff1783fd7e899fcc516bae7dbeb79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_pr_review_config.py

## Purpose — required, verbatim
> "Validate pr-review-config.yaml against expected schema." — scripts/validate_pr_review_config.py:2

## Design intent — required
Enforces schema validation and structural invariants for `.claude/commands/pr-review-config.yaml`, the centralized configuration driving PR review automation and completion gates. Validates top-level sections (scripts, check failure actions, error recovery, completion criteria, failure handling, worktree constraints, related memories, thread resolution, invocation limits, output constraints), platform script variants (`claude_code` vs `copilot`), completion criteria DSL requirements (`pass_when` vs `pass_when_python`), and numeric bounds for token/PR limits. Without this validator, configuration typos, missing handlers, or invalid criteria syntax would cause runtime failures or silent gate bypasses during autonomous PR review execution.

## Phase — required
cross-phase

## Inputs — required
- Optional CLI argument `config_path`: "Path to config file (default: .claude/commands/pr-review-config.yaml)" — scripts/validate_pr_review_config.py:371
- YAML configuration file at `config_path` (default `.claude/commands/pr-review-config.yaml`).

## Outputs — required
- Terminal stdout message: `OK: {config_path} is valid` (scripts/validate_pr_review_config.py:412)
- Terminal stderr messages on schema errors or missing files (scripts/validate_pr_review_config.py:379, 383, 388, 397, 401, 407)
- Process exit code: 0 on success, 1 on schema violation, 2 on missing file or parse failure (scripts/validate_pr_review_config.py:8-10, 380, 384, 391, 398, 402, 410, 413)

## Invokes — required
- script path_validation — scripts/validate_pr_review_config.py:26

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pr-review-config.yaml` — scripts/validate_pr_review_config.py:2 — used here
- `ADR-035` — scripts/validate_pr_review_config.py:12 — used here
- `REQUIRED_TOP_LEVEL_KEYS` — scripts/validate_pr_review_config.py:34 — defined here
- `INVOCATION_LIMIT_FIELDS` — scripts/validate_pr_review_config.py:47 — defined here
- `OUTPUT_CONSTRAINT_FIELDS` — scripts/validate_pr_review_config.py:54 — defined here
- `REQUIRED_SCRIPT_KEYS` — scripts/validate_pr_review_config.py:61 — defined here
- `CLAUDE_CODE_ONLY_KEYS` — scripts/validate_pr_review_config.py:77 — defined here
- `REQUIRED_SCRIPT_SECTIONS` — scripts/validate_pr_review_config.py:82 — defined here
- `COMPLETION_CRITERIA_REQUIRED_FIELDS` — scripts/validate_pr_review_config.py:88 — defined here
- `COMPLETION_CRITERIA_PASS_FIELDS` — scripts/validate_pr_review_config.py:89 — defined here
- `ERROR_RECOVERY_FIELDS` — scripts/validate_pr_review_config.py:90 — defined here
- `CHECK_FAILURE_FIELDS` — scripts/validate_pr_review_config.py:91 — defined here
- `FAILURE_HANDLING_FIELDS` — scripts/validate_pr_review_config.py:92 — defined here
- `RELATED_MEMORY_FIELDS` — scripts/validate_pr_review_config.py:93 — defined here
- `validate_config` — scripts/validate_pr_review_config.py:96 — defined here
- `_validate_invocation_limits` — scripts/validate_pr_review_config.py:262 — defined here
- `_validate_output_constraints` — scripts/validate_pr_review_config.py:300 — defined here
- `main` — scripts/validate_pr_review_config.py:363 — defined here

## Structure
- Shebang and module docstring with exit code specifications (scripts/validate_pr_review_config.py:1-13)
- Imports, path setup, safe path validation import, and PyYAML import fallback (scripts/validate_pr_review_config.py:15-32)
- Schema constants defining required top-level keys, script keys, completion criteria, and limits (scripts/validate_pr_review_config.py:34-93)
- `validate_config`: comprehensive configuration validator checking sections, script existence, completion criteria DSL, and constraints (scripts/validate_pr_review_config.py:96-260)
- `_validate_invocation_limits`: type and range checks on PR caps and retries (scripts/validate_pr_review_config.py:262-298)
- `_validate_output_constraints`: token limit bounds, summary format enum, and required column validation (scripts/validate_pr_review_config.py:300-361)
- `main`: CLI parser with CWE-22 path validation, YAML parsing, execution, and error output (scripts/validate_pr_review_config.py:363-414)
- Entry point invocation (scripts/validate_pr_review_config.py:416-417)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_pr_review_config.py`
- **language:** Python (python3)
- **lines:** 418
- **documented invocation:**
  - `python3 scripts/validate_pr_review_config.py [config_path]` (inferred from CLI argument parser at scripts/validate_pr_review_config.py:366-373)
- **executed:** yes
- **actual command run:** `.venv/bin/python3 scripts/validate_pr_review_config.py`
- **abridged stdout:** `OK: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/commands/pr-review-config.yaml is valid`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: Config is valid" — scripts/validate_pr_review_config.py:8
    - "1  - Error: Schema violations detected" — scripts/validate_pr_review_config.py:9
    - "2  - Error: Config file not found or parse failure" — scripts/validate_pr_review_config.py:10
  - Actual code paths:
    - `return 0` — scripts/validate_pr_review_config.py:413
    - `return 1` — scripts/validate_pr_review_config.py:410
    - `return 2` — scripts/validate_pr_review_config.py:380
    - `return 2` — scripts/validate_pr_review_config.py:384
    - `return 2` — scripts/validate_pr_review_config.py:391
    - `return 2` — scripts/validate_pr_review_config.py:398
    - `return 2` — scripts/validate_pr_review_config.py:402
    - `sys.exit(main())` — scripts/validate_pr_review_config.py:417
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 on schema violation; exits 2 on path traversal, missing file, missing PyYAML, YAML parse failure, or root non-mapping.
  - Default branch behavior: Passes with exit code 0 when run against the repository's default configuration `.claude/commands/pr-review-config.yaml`.
- **does the output match what the documentation claims:** yes; confirms `.claude/commands/pr-review-config.yaml` is valid with exit code 0.

## Defects — required
- orphan · scripts/validate_pr_review_config.py:1 · Script is not invoked by any active lifecycle command, hook, CI workflow, or documentation in scope (referenced only in comment within `run_completion_gate.py:1201` and tests).

## Observations
- Rigorously validates completion criteria DSL: enforces that exactly one of `pass_when` or `pass_when_python` is present, rejecting ambiguous dual definitions (lines 166-170) or empty string / null values (lines 154-165, 198-206).
- Enforces platform-specific script declarations: requires `add_thread_reply_resolve` and `wait_for_settled_zero` specifically in the `claude_code` scripts section, but allows `copilot` section to omit them (lines 72-80, 115-121).
- Uses `validate_safe_path` (line 377) to enforce CWE-22 boundaries before attempting to open the target config file.

## Context cost
15084 bytes, 418 lines, ~3600 tokens (plus imported `scripts.utils.path_validation` 4486 bytes).
