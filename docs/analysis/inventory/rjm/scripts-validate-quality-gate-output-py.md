---
package: rjm
path: scripts/validate_quality_gate_output.py
type: script
bytes: 4551
unit: inv-rjm-268
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_quality_gate_output.py, sha256: db9a15f636b9951529468e3f6573531aa337ebb2f1a6071184a6eb2341595fb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_quality_gate_output.py

## Purpose — required, verbatim
> "Validate PR quality gate output against JSON schema." — scripts/validate_quality_gate_output.py:2

## Design intent — required
Validates that output emitted by specialized review agents (security, qa, analyst, architect, devops, roadmap, reliability, observability, agent-safety, decision-rigor, code-quality) conforms to the standardized PR quality gate JSON schema specification. Checks required top-level fields (verdict, message, agent, timestamp, findings), allowable verdict values (`PASS`, `WARN`, `CRITICAL_FAIL`), finding structure (severity, category, description, optional CWE identifier pattern `CWE-\d+`), and non-empty strings. Without this script, malformed agent verdicts or unparseable finding payloads could corrupt automated PR review consensus and bypass quality gate decisions.

## Phase — required
cross-phase

## Inputs — required
- CLI positional argument `input_file`: "Path to JSON file containing quality gate output" — scripts/validate_quality_gate_output.py:116
- JSON file containing quality gate agent output.

## Outputs — required
- Terminal stdout message: `Valid: {data['agent']} agent output ({data['verdict']})` (scripts/validate_quality_gate_output.py:139)
- Terminal stderr messages on validation errors or missing file (scripts/validate_quality_gate_output.py:122, 129, 134)
- Process exit code: 0 on success, 1 on schema validation error or invalid JSON, 2 on missing file or configuration error (scripts/validate_quality_gate_output.py:8-10, 123, 130, 137, 140)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pr-quality-gate-output.schema.json` — scripts/validate_quality_gate_output.py:5 — used here
- `ADR-035` — scripts/validate_quality_gate_output.py:12 — used here
- `VALID_VERDICTS` — scripts/validate_quality_gate_output.py:27 — defined here
- `VALID_AGENTS` — scripts/validate_quality_gate_output.py:28 — defined here
- `VALID_SEVERITIES` — scripts/validate_quality_gate_output.py:43 — defined here
- `REQUIRED_FIELDS` — scripts/validate_quality_gate_output.py:44 — defined here
- `REQUIRED_FINDING_FIELDS` — scripts/validate_quality_gate_output.py:45 — defined here
- `validate_output` — scripts/validate_quality_gate_output.py:48 — defined here
- `main` — scripts/validate_quality_gate_output.py:108 — defined here

## Structure
- Shebang and module docstring specifying schema validation purpose and exit codes (scripts/validate_quality_gate_output.py:1-13)
- Imports and unused `_SCHEMA_PATH` constant (scripts/validate_quality_gate_output.py:15-25)
- Validation constants: `VALID_VERDICTS`, `VALID_AGENTS`, `VALID_SEVERITIES`, `REQUIRED_FIELDS`, `REQUIRED_FINDING_FIELDS` (scripts/validate_quality_gate_output.py:27-46)
- `validate_output`: manual dictionary validation of fields, types, enum values, and CWE regex patterns (scripts/validate_quality_gate_output.py:48-105)
- `main`: CLI parser, file loading, validation invocation, error reporting, and exit code handling (scripts/validate_quality_gate_output.py:108-140)
- Entry point invocation (scripts/validate_quality_gate_output.py:143-144)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_quality_gate_output.py`
- **language:** Python (python3)
- **lines:** 145
- **documented invocation:**
  - `python3 scripts/validate_quality_gate_output.py input_file` (inferred from argparse help at scripts/validate_quality_gate_output.py:110-117)
- **executed:** yes
- **actual command run:** `.venv/bin/python3 scripts/validate_quality_gate_output.py non_existent.json`
- **abridged stdout:** (empty output; stderr: `Error: File not found: non_existent.json`)
- **actual exit code:** 2
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: Output is valid" — scripts/validate_quality_gate_output.py:8
    - "1  - Error: Output validation failed" — scripts/validate_quality_gate_output.py:9
    - "2  - Error: Configuration or unexpected error" — scripts/validate_quality_gate_output.py:10
  - Actual code paths:
    - `return 0` — scripts/validate_quality_gate_output.py:140
    - `return 1` — scripts/validate_quality_gate_output.py:130
    - `return 1` — scripts/validate_quality_gate_output.py:137
    - `return 2` — scripts/validate_quality_gate_output.py:123
    - `sys.exit(main())` — scripts/validate_quality_gate_output.py:144
  - Result: Documented exit codes match actual code exit paths.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 on malformed JSON or validation errors (missing fields, invalid verdict/agent, bad CWE syntax); exits 2 if target file does not exist.
  - Default branch behavior: Verified against sample valid JSON payload producing `Valid: security agent output (PASS)` (exit 0) and against missing / schema JSON files producing exit 1 or exit 2.
- **does the output match what the documentation claims:** yes; validates JSON structures and reports agent verdict and field validation errors as claimed.

## Defects — required
- orphan · scripts/validate_quality_gate_output.py:1 · Script is not invoked by any active lifecycle command, hook, CI workflow, or documentation in scope.
- script-bug · scripts/validate_quality_gate_output.py:25 · Defines constant `_SCHEMA_PATH` pointing to `.agents/schemas/pr-quality-gate-output.schema.json`, but never reads or references `_SCHEMA_PATH` in the script; all schema validation is reimplemented by hand in `validate_output`.

## Observations
- Does not use `scripts.utils.path_validation.validate_safe_path`, unlike `validate_phase_gates.py` and `validate_pr_review_config.py`; accepts `Path(args.input_file)` directly without CWE-22 protection.
- Validates a fixed set of 11 agent identities: `security`, `qa`, `analyst`, `architect`, `devops`, `roadmap`, `reliability`, `observability`, `agent-safety`, `decision-rigor`, `code-quality`.
- Requires CWE numbers to match regex pattern `^CWE-\d+$` (e.g. `CWE-78`, `CWE-22`).

## Context cost
4551 bytes, 145 lines, ~1100 tokens.
