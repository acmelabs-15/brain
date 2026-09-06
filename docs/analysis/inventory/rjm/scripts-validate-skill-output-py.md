---
package: rjm
path: scripts/validate_skill_output.py
type: script
bytes: 14130
unit: inv-rjm-270
in_scope_via: .agents/architecture/ADR-056-skill-output-format-standardization.md
aliases: []
memo_inputs:
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_skill_output.py

## Purpose — required, verbatim
> "Validate skill script output against the standard envelope schema (ADR-056, ADR-103)." — scripts/validate_skill_output.py:1

## Design intent — required
Enforces standardized JSON envelope output formatting for skill scripts across the agent architecture according to ADR-056 and ADR-103. Validates that skill responses contain the required top-level keys (`Success`, `Data`, `Metadata`, `Error`), asserts that metadata contains non-empty string `Script` and `Timestamp` values, validates that `Error.Type` belongs to `VALID_ERROR_TYPES` (8 standardized error categories), ensures `Error.Code` is a strict integer (rejecting boolean values), and enforces CWE-22 path traversal protections on input files. Prevents silent contract drift and unhandled errors between skill script execution and downstream agent orchestrators.

## Phase — required
cross-phase

## Inputs — required
- CLI option: `"--input-file"` — scripts/validate_skill_output.py:321
- Standard input JSON payload (`sys.stdin.read()`) when `args.input_file == "-"` — scripts/validate_skill_output.py:328-329
- Local filesystem JSON file when `--input-file` specifies a path, guarded by `_validate_file_path` — scripts/validate_skill_output.py:332-333

## Outputs — required
- Validation verdict and diagnostic messages emitted to stdout:
  - `"[PASS] Skill output conforms to ADR-056/ADR-103 envelope schema"` — scripts/validate_skill_output.py:355
  - `"[FAIL] Skill output validation failed:"` — scripts/validate_skill_output.py:350
  - `"[FAIL] Empty input -- no JSON to validate"` — scripts/validate_skill_output.py:336
  - `"Missing required field: Success"` — scripts/validate_skill_output.py:88
  - `"Missing required field: Data"` — scripts/validate_skill_output.py:308
  - `"Missing required field: Metadata"` — scripts/validate_skill_output.py:156
  - `"Missing required field: Error"` — scripts/validate_skill_output.py:247
  - `"[FAIL] Path traversal attempt detected. Input file must be within the repository."` — scripts/validate_skill_output.py:62
- Process exit codes: 0 (valid output conforming to schema), 1 (validation errors, empty input, invalid JSON, or path traversal) — scripts/validate_skill_output.py:4-5, 63, 67, 79, 337, 344, 353, 356

## Invokes — required
none

## Invoked by — required
- doc ADR-056-skill-output-format-standardization.md — .agents/architecture/ADR-056-skill-output-format-standardization.md:89
- doc ADR-103-skill-output-python-contract-correction.md — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:75
- script output.py — scripts/github_core/output.py:24

## Concepts named — required, verbatim
- `ADR-056` — scripts/validate_skill_output.py:1 — used here
- `ADR-103` — scripts/validate_skill_output.py:1 — used here
- `envelope schema` — scripts/validate_skill_output.py:1 — used here
- `VALID_ERROR_TYPES` — scripts/validate_skill_output.py:23 — defined here
- `_resolve_allowed_dir` — scripts/validate_skill_output.py:37 — defined here
- `_validate_file_path` — scripts/validate_skill_output.py:42 — defined here
- `_validate_success_field` — scripts/validate_skill_output.py:84 — defined here
- `_validate_metadata_string_field` — scripts/validate_skill_output.py:96 — defined here
- `_validate_metadata_version_field` — scripts/validate_skill_output.py:125 — defined here
- `_validate_metadata_field` — scripts/validate_skill_output.py:144 — defined here
- `_validate_error_type` — scripts/validate_skill_output.py:170 — defined here
- `_validate_error_message_and_code` — scripts/validate_skill_output.py:195 — defined here
- `_validate_error_field` — scripts/validate_skill_output.py:226 — defined here
- `validate_envelope` — scripts/validate_skill_output.py:264 — defined here
- `main` — scripts/validate_skill_output.py:315 — defined here

## Structure
- Module docstring with envelope specification references, exit codes, and usage — scripts/validate_skill_output.py:1-13
- Imports and `VALID_ERROR_TYPES` constant set — scripts/validate_skill_output.py:15-34
- Path traversal and security protection functions: `_resolve_allowed_dir` and `_validate_file_path` — scripts/validate_skill_output.py:37-81
- Field validator functions: `_validate_success_field`, `_validate_metadata_string_field`, `_validate_metadata_version_field`, `_validate_metadata_field` — scripts/validate_skill_output.py:84-167
- Error envelope validator functions: `_validate_error_type`, `_validate_error_message_and_code`, `_validate_error_field` — scripts/validate_skill_output.py:170-261
- Sergeant validation coordinator function: `validate_envelope` — scripts/validate_skill_output.py:264-313
- Entry point `main`: argument parsing, input handling, JSON parsing, validation execution, and exit code return — scripts/validate_skill_output.py:315-358
- Script entry point guard `sys.exit(main())` — scripts/validate_skill_output.py:360-361

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_skill_output.py`
- **language:** Python (python3)
- **lines:** 361
- **documented invocation:**
  - `"python3 scripts/validate_skill_output.py < output.json" — scripts/validate_skill_output.py:11`
  - `"python3 scripts/validate_skill_output.py --input-file output.json" — scripts/validate_skill_output.py:12`
- **executed:** yes
- **actual command run:** `echo '{"Success": true, "Data": {"result": "ok"}, "Metadata": {"Script": "test.py", "Timestamp": "2026-09-06T00:00:00Z"}, "Error": null}' | python3 scripts/validate_skill_output.py`
- **abridged stdout:**
```
[PASS] Skill output conforms to ADR-056/ADR-103 envelope schema
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - `"Returns exit code 0 for valid," — scripts/validate_skill_output.py:4`
    - `"1 for invalid output." — scripts/validate_skill_output.py:5`
  - Actual code paths:
    - `sys.exit(1)` — scripts/validate_skill_output.py:63 (path traversal attempt)
    - `sys.exit(1)` — scripts/validate_skill_output.py:67 (file not found)
    - `sys.exit(1)` — scripts/validate_skill_output.py:79 (symlink traversal bypass)
    - `return 1` — scripts/validate_skill_output.py:337 (empty input)
    - `return 1` — scripts/validate_skill_output.py:344 (JSON decode error)
    - `return 1` — scripts/validate_skill_output.py:353 (envelope validation failure)
    - `return 0` — scripts/validate_skill_output.py:356 (validation success)
    - `sys.exit(main())` — scripts/validate_skill_output.py:360
  - Result: Documented exit codes (0 for valid, 1 for invalid) match all actual exit paths in code.
- **for validators/gates:**
  - Can it exit non-zero: Yes, exits 1 on empty input, malformed JSON, schema validation errors, missing files, or path traversal attempts.
  - Does it fail on the source repo's own default branch: No, correctly returns 0 for conforming output and exits 1 when given invalid envelopes (such as scenario JSON files in tests/evals).
- **does the output match what the documentation claims:** Yes, prints `[PASS] Skill output conforms to ADR-056/ADR-103 envelope schema` and exits 0 on valid envelopes, and `[FAIL] ...` with exit 1 on errors.

## Defects — required
- `doc-drift` · scripts/validate_skill_output.py:4 · Docstring asserts it "validates it against the skill-output.schema.json schema", but the script does not load or parse the schema file via jsonschema; rather, it implements dedicated procedural validation logic in Python functions.

## Observations
- Implements comprehensive defense-in-depth against CWE-22 path traversal (`_validate_file_path`) for `--input-file`, checking both resolved canonical paths and symlink targets against the repository root (scripts/validate_skill_output.py:42-81).
- Specifically guards against subtle Python type subtleties: verifies that `Error.Code` is not a boolean (`isinstance(code, bool)`), since `bool` is a subclass of `int` in Python but distinct in JSON Schema (scripts/validate_skill_output.py:220).
- Modularized into dedicated per-field helper functions to adhere to repository taste-lint cyclomatic complexity limits (max 10 branches per function) (scripts/validate_skill_output.py:269-272).

## Context cost
14130 bytes, 361 lines, ~3600 tokens. Isolated script using Python standard library only.
