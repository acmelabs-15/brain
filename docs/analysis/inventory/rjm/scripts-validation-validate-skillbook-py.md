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
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/validate_skillbook.py

## Purpose — required, verbatim
> "Validate the skillbook registry files against their JSON schemas." — scripts/validation/validate_skillbook.py:2

## Design intent — required
Validates `.agents/skillbook/` JSON files (`policies.json`, `tensions.json`, `workflows.json`) against their corresponding JSON Schemas (`policy.schema.json`, `tension.schema.json`, `workflow.schema.json`) using an embedded minimal draft-07 validator. Enforces semantic referential integrity constraints that JSON Schema cannot represent: verifying derived evidence count weights (`confirms`, `contradicts`, `application_count`), checking cross-reference pointers against known policy IDs (`contradicts_policies`, `related_policies`, `supersedes`), validating tension policy pairs, and ensuring context resolutions select from the paired policies. Defends against path traversal vulnerabilities (CWE-22) in schema `$ref` resolution.

## Phase — required
none

## Inputs — required
- CLI arguments `--skillbook-dir` (line 342) and `--schema-dir` (line 348) — scripts/validation/validate_skillbook.py:342-348
- Skillbook registry files mapped in `FILE_SCHEMA_MAP` — scripts/validation/validate_skillbook.py:50-54

## Outputs — required
- Standard output: validation summary or error list — scripts/validation/validate_skillbook.py:376-380
- Standard error: error message on configuration failure — scripts/validation/validate_skillbook.py:358-373
- Exit codes: 0 (valid), 1 (validation failure), 2 (configuration error) — scripts/validation/validate_skillbook.py:24-26

## Invokes — required
- script evidence_weight — scripts/validation/validate_skillbook.py:43

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/validate_skillbook.py:23 — used here
- `FILE_SCHEMA_MAP` — scripts/validation/validate_skillbook.py:50 — defined here
- `SchemaChecker` — scripts/validation/validate_skillbook.py:71 — defined here
- `validate_against_schema` — scripts/validation/validate_skillbook.py:214 — defined here
- `check_policy_integrity` — scripts/validation/validate_skillbook.py:228 — defined here
- `_check_derived_counts` — scripts/validation/validate_skillbook.py:239 — defined here
- `_check_policy_refs` — scripts/validation/validate_skillbook.py:269 — defined here
- `check_tension_integrity` — scripts/validation/validate_skillbook.py:284 — defined here
- `validate_skillbook` — scripts/validation/validate_skillbook.py:312 — defined here
- `main` — scripts/validation/validate_skillbook.py:336 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_skillbook.py`, language: Python, lines: 386
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/validation/validate_skillbook.py --skillbook-dir sources/rjm/.agents/skillbook --schema-dir sources/rjm/.agents/schemas`
  Abridged stdout: `Skillbook validation passed: policies, tensions, workflows all valid.`
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0  - Success: all files valid" — scripts/validation/validate_skillbook.py:24
  > "1  - Logic error: a file failed schema or integrity validation" — scripts/validation/validate_skillbook.py:25
  > "2  - Config error: a skillbook or schema file is missing or unparseable" — scripts/validation/validate_skillbook.py:26
  Actual exit paths in code:
  `return EXIT_OK` (0) at line 381 (exits 0 via `sys.exit(main())` at line 385)
  `return EXIT_LOGIC` (1) at line 379 (exits 1 via `sys.exit(main())` at line 385)
  `return EXIT_CONFIG` (2) at lines 359, 362, 368, 373 (exits 2 via `sys.exit(main())` at line 385)
- for validators/gates: can it exit non-zero? yes (returns 1 on schema or referential integrity failure, 2 on config error). does it fail on the source repo's own default branch? no (clean exit 0).
- does the output match what the documentation claims? yes (exits 0 with pass confirmation when all registry files are valid).

## Defects — required
- orphan · scripts/validation/validate_skillbook.py:16 · Not invoked by any in-scope lifecycle script or command (invoked only by CI workflow .github/workflows/skillbook-validation.yml).

## Observations
Includes a small custom draft-07 JSON Schema evaluator that guards against path traversal (CWE-22) when loading external `$ref` files.

## Context cost
15489 bytes (~3872 tokens). Imports `scripts/skillbook.py` (5207 bytes), totaling ~20696 bytes (~5174 tokens).
