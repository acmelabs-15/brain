---
package: rjm
path: scripts/validation/validate_skillbook.py
type: script
bytes: 15489
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_skillbook.py, sha256: b414daf9f7283aa07ac84ac29d87b726bca25f0845a465a3df01d28667f22607}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_skillbook.py

## Purpose — required, verbatim
> "Validate the skillbook registry files against their JSON schemas." — scripts/validation/validate_skillbook.py:2

## Design intent — required
Guarantees schema compliance and semantic referential integrity for the skillbook policy registries (`policies.json`, `tensions.json`, `workflows.json`) stored under `.agents/skillbook/`. Rather than relying on external runtime dependencies, it bundles a custom draft-07 JSON Schema checker and layers critical integrity verifications on top: recomputing policy confirmation, contradiction, and application counts against raw evidence weights, verifying that all cross-policy references resolve to existing policy IDs, and ensuring tension resolutions pick one of the paired policies. In addition, it defends against directory traversal (CWE-22) in schema `$ref` resolution.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments `--skillbook-dir` (default: `.agents/skillbook`) and `--schema-dir` (default: `.agents/schemas`) (scripts/validation/validate_skillbook.py:342-352).
- Registry files `policies.json`, `tensions.json`, and `workflows.json` under the skillbook directory (scripts/validation/validate_skillbook.py:50-54).
- JSON schema files `policy.schema.json`, `tension.schema.json`, `workflow.schema.json`, and referenced `evidence-entry.schema.json` under the schema directory (scripts/validation/validate_skillbook.py:5-6, 50-54).

## Outputs — required
- Standard output: Validation report `Skillbook validation passed: policies, tensions, workflows all valid.` or formatted failure list `Skillbook validation FAILED with <N> error(s):` (scripts/validation/validate_skillbook.py:376, 380).
- Standard error: Formatted diagnostic messages on missing files, JSON syntax errors, path traversal, or OS errors (scripts/validation/validate_skillbook.py:358, 361, 367, 372).
- Exit codes: 0 on success, 1 on schema or referential integrity logic error, 2 on configuration or file error (scripts/validation/validate_skillbook.py:23-27).

## Invokes — required
- script evidence_weight — scripts/validation/validate_skillbook.py:43

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `draft-07` — scripts/validation/validate_skillbook.py:18 — used here
- `ADR-035` — scripts/validation/validate_skillbook.py:23 — used here
- `SchemaChecker` — scripts/validation/validate_skillbook.py:71 — defined here
- `evidence_weight` — scripts/validation/validate_skillbook.py:43 — used here
- `FILE_SCHEMA_MAP` — scripts/validation/validate_skillbook.py:50 — defined here
- `CWE-22` — scripts/validation/validate_skillbook.py:112 — used here

## Structure
- `SchemaChecker` — scripts/validation/validate_skillbook.py:71
- `validate_against_schema` — scripts/validation/validate_skillbook.py:214
- `check_policy_integrity` — scripts/validation/validate_skillbook.py:228
- `_check_derived_counts` — scripts/validation/validate_skillbook.py:239
- `_check_policy_refs` — scripts/validation/validate_skillbook.py:269
- `check_tension_integrity` — scripts/validation/validate_skillbook.py:284
- `validate_skillbook` — scripts/validation/validate_skillbook.py:312
- `main` — scripts/validation/validate_skillbook.py:336

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_skillbook.py`, language: Python 3, lines: 386
- documented invocation:
  - "This is invoked by .github/workflows/skillbook-validation.yml on every PR." — scripts/validation/validate_skillbook.py:16
- **executed:** yes
- actual command run: `python3 scripts/validation/validate_skillbook.py`, abridged stdout: `Skillbook validation passed: policies, tensions, workflows all valid.`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    `0  - Success: all files valid` — scripts/validation/validate_skillbook.py:24
    `1  - Logic error: a file failed schema or integrity validation` — scripts/validation/validate_skillbook.py:25
    `2  - Config error: a skillbook or schema file is missing or unparseable` — scripts/validation/validate_skillbook.py:26
  - actual exit paths:
    `return EXIT_CONFIG` — scripts/validation/validate_skillbook.py:359
    `return EXIT_CONFIG` — scripts/validation/validate_skillbook.py:362
    `return EXIT_CONFIG` — scripts/validation/validate_skillbook.py:368
    `return EXIT_CONFIG` — scripts/validation/validate_skillbook.py:373
    `return EXIT_LOGIC` — scripts/validation/validate_skillbook.py:379
    `return EXIT_OK` — scripts/validation/validate_skillbook.py:381
    `sys.exit(main())` — scripts/validation/validate_skillbook.py:385
- for validators/gates: can exit non-zero (exits 1 on validation error, 2 on config error); exits 0 on current repository default branch.
- does output match documentation: yes

## Defects — required
- orphan — scripts/validation/validate_skillbook.py:1 — not invoked by any in-scope lifecycle file (invoked only by out-of-scope .github/workflows/skillbook-validation.yml:16)

## Observations
Contains an independent, purpose-built draft-07 JSON Schema evaluator handling core keywords (`type`, `required`, `properties`, `additionalProperties`, `items`, `enum`, `const`, `pattern`, `minimum`, `maximum`, `minItems`, `minLength`, `$ref`). Hardens schema `$ref` loading against path traversal by enforcing that target paths resolve within the schema directory root.

## Context cost
15489 bytes (~3870 tokens). Imports `evidence_weight` from `scripts/skillbook.py` (22383 bytes), total reachable size ~37.8KB (~9.5k tokens).
